import { defineStore } from 'pinia'
import type { MessagePayload } from 'firebase/messaging'
import { api } from '@/services/api'
import {
  isFirebaseMessagingConfigured,
  isFirebaseMessagingSupported,
  listenForegroundMessages,
  requestFcmToken,
  revokeFcmToken,
  restoreFcmToken,
} from '@/firebase/messaging'

export type PushStatus =
  | 'checking'
  | 'unconfigured'
  | 'unsupported'
  | 'prompt'
  | 'enabling'
  | 'enabled'
  | 'denied'
  | 'error'

export interface PushNotificationEntry {
  id: string
  title: string
  body: string
  icon?: string
  url?: string
  receivedAt: number
  read: boolean
}

interface NotificationState {
  items: PushNotificationEntry[]
  fcmToken: string | null
  initialized: boolean
  pushStatus: PushStatus
  backendRegistered: boolean
  pushError: string | null
}

const STORAGE_KEY = 'mhj-crm-push-notifications'
const MAX_ITEMS = 30
const TOKEN_ENDPOINT = import.meta.env.VITE_FCM_TOKEN_ENDPOINT || '/fcm/device-token'

let stopForegroundListener: (() => void) | null = null

function loadFromStorage(): PushNotificationEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function persist(items: PushNotificationEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Storage penuh / tidak tersedia (mode privat dsb), abaikan.
  }
}

export const useNotificationStore = defineStore('pushNotification', {
  state: (): NotificationState => ({
    items: loadFromStorage(),
    fcmToken: null,
    initialized: false,
    pushStatus: 'checking',
    backendRegistered: false,
    pushError: null,
  }),

  getters: {
    unreadCount: (state) => state.items.filter((item) => !item.read).length,
  },

  actions: {
    addNotification(payload: { title: string; body: string; icon?: string; url?: string }) {
      const entry: PushNotificationEntry = {
        ...payload,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        receivedAt: Date.now(),
        read: false,
      }
      this.items = [entry, ...this.items].slice(0, MAX_ITEMS)
      persist(this.items)
    },

    markRead(id: string) {
      const target = this.items.find((item) => item.id === id)
      if (target) target.read = true
      persist(this.items)
    },

    markAllRead() {
      this.items.forEach((item) => (item.read = true))
      persist(this.items)
    },

    removeNotification(id: string) {
      this.items = this.items.filter((item) => item.id !== id)
      persist(this.items)
    },

    async registerToken(token: string) {
      this.fcmToken = token
      this.pushStatus = 'enabled'
      this.pushError = null

      try {
        await api.post(TOKEN_ENDPOINT, { token, device: 'web' })
        this.backendRegistered = true
      } catch {
        this.backendRegistered = false
        this.pushError =
          `Browser sudah terhubung ke Firebase, tetapi endpoint backend ${TOKEN_ENDPOINT} belum tersedia.`
      }
    },

    /** Hapus token dari backend dan cabut subscription agar login berikutnya memakai token baru. */
    async unregisterToken() {
      if (!this.fcmToken) return

      let backendError: unknown = null

      try {
        await api.delete(TOKEN_ENDPOINT, {
          data: { token: this.fcmToken, device: 'web' },
        })
      } catch (error) {
        backendError = error
      }

      // Tetap cabut token lokal walaupun request backend gagal. Token yang masih
      // tersimpan di backend kemudian menjadi invalid dan tidak bisa menerima push.
      await revokeFcmToken()
      this.backendRegistered = false
      this.fcmToken = null

      if (backendError) throw backendError
    },

    /** Meminta izin melalui aksi pengguna, lalu mendaftarkan perangkat ke backend. */
    async enablePush() {
      if (this.pushStatus === 'enabling') return
      this.pushStatus = 'enabling'
      this.pushError = null

      try {
        const token = await requestFcmToken()
        if (!token) {
          this.pushStatus = Notification.permission === 'denied' ? 'denied' : 'error'
          this.pushError =
            Notification.permission === 'denied'
              ? 'Izin notifikasi diblokir. Aktifkan kembali melalui pengaturan browser.'
              : 'FCM tidak menghasilkan registration token.'
          return
        }
        await this.registerToken(token)
      } catch (error) {
        this.pushStatus = Notification.permission === 'denied' ? 'denied' : 'error'
        this.pushError = error instanceof Error ? error.message : 'Gagal mengaktifkan push notification.'
      }
    },

    /**
     * Menyiapkan listener. Prompt izin hanya ditampilkan dari tombol Aktifkan agar
     * tidak diblokir browser karena bukan hasil interaksi pengguna.
     */
    async init() {
      if (this.initialized) return
      this.initialized = true

      if (!isFirebaseMessagingConfigured()) {
        this.pushStatus = 'unconfigured'
        return
      }

      if (!(await isFirebaseMessagingSupported())) {
        this.pushStatus = 'unsupported'
        return
      }

      stopForegroundListener = await listenForegroundMessages((payload: MessagePayload) => {
        const notif = payload.notification
        this.addNotification({
          title: notif?.title || payload.data?.title || 'Notifikasi Baru',
          body: notif?.body || payload.data?.body || '',
          icon: notif?.icon || payload.data?.icon,
          url: payload.fcmOptions?.link || payload.data?.url,
        })
      })

      if (Notification.permission === 'denied') {
        this.pushStatus = 'denied'
        return
      }

      if (Notification.permission === 'default') {
        this.pushStatus = 'prompt'
        return
      }

      this.pushStatus = 'checking'
      try {
        const token = await restoreFcmToken()
        if (token) await this.registerToken(token)
        else this.pushStatus = 'error'
      } catch (error) {
        this.pushStatus = 'error'
        this.pushError = error instanceof Error ? error.message : 'Gagal memulihkan koneksi FCM.'
      }
    },

    /** Hentikan listener FCM, dipanggil saat logout. */
    stop() {
      stopForegroundListener?.()
      stopForegroundListener = null
      this.initialized = false
      this.fcmToken = null
      this.backendRegistered = false
    },
  },
})
