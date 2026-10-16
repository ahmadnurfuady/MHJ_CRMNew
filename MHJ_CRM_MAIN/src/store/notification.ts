import { defineStore } from 'pinia'
import type { MessagePayload } from 'firebase/messaging'
import { api } from '@/services/api'
import { requestFcmToken, listenForegroundMessages } from '@/firebase/messaging'

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
}

const STORAGE_KEY = 'mhj-crm-push-notifications'
const MAX_ITEMS = 30

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

    /**
     * Minta izin notifikasi browser, ambil FCM token, daftarkan token ke backend,
     * lalu dengarkan notifikasi FCM yang masuk saat tab CRM aktif (foreground).
     * Dipanggil sekali setelah user login (lihat src/layout/Body.vue).
     */
    async init() {
      if (this.initialized) return
      this.initialized = true

      const token = await requestFcmToken().catch(() => null)
      this.fcmToken = token

      if (token) {
        // TODO backend: endpoint POST /fcm/token belum ada di API Laravel.
        // Perlu dibuat agar token tersimpan per user dan bisa dipakai untuk
        // mengirim push notification lewat Firebase Admin SDK dari server.
        api.post('/fcm/token', { token, device: 'web' }).catch(() => {
          // Diamkan selama endpoint backend belum tersedia.
        })
      }

      stopForegroundListener = await listenForegroundMessages((payload: MessagePayload) => {
        const notif = payload.notification
        this.addNotification({
          title: notif?.title || 'Notifikasi Baru',
          body: notif?.body || '',
          icon: notif?.icon,
          url: payload.data?.url,
        })
      })
    },

    /** Hentikan listener FCM, dipanggil saat logout. */
    stop() {
      stopForegroundListener?.()
      stopForegroundListener = null
      this.initialized = false
      this.fcmToken = null
    },
  },
})
