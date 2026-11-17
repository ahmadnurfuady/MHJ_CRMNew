import { defineStore } from 'pinia'
import { api } from '@/services/api'
import { getUserErrorMessage } from '@/utils/errorParser'
import {
  isFirebaseMessagingConfigured,
  isFirebaseMessagingSupported,
  listenForegroundMessages,
  requestFcmToken,
  revokeFcmToken,
  restoreFcmToken,
  showSystemNotification,
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

export interface NotificationEntry {
  id: string
  type: string
  title: string
  body: string
  receivedAt: number
  read: boolean
  url?: string
}

interface BackendNotification {
  id: string | number
  type?: string | null
  message?: string | null
  is_read?: string | number | boolean | null
  updated_at?: string | null
  url?: string | null
}

interface UnreadCountResponse {
  count?: string | number | null
}

interface NotificationState {
  items: NotificationEntry[]
  unreadCount: number
  loading: boolean
  hasLoadedNotifications: boolean
  initialized: boolean
  pushStatus: PushStatus
  backendRegistered: boolean
  pushError: string | null
  fetchError: string | null
  fcmToken: string | null
}

const TOKEN_ENDPOINT = import.meta.env.VITE_FCM_TOKEN_ENDPOINT || '/fcm/device-token'
const MESSAGE_PATTERN = /^\[([^\]]+)\]\s*(.*)$/s

let stopForegroundListener: (() => void) | null = null
let refreshPromise: Promise<void> | null = null
let lifecycleVersion = 0

let pollTimer: ReturnType<typeof setInterval> | null = null

// Penyegaran normal dipicu push FCM (listenForegroundMessages / service worker)
// dan saat tab kembali aktif. Interval di bawah HANYA jaring pengaman: ia
// bekerja ketika push FCM tidak bisa sampai (belum diizinkan, tidak didukung,
// error, atau token gagal didaftarkan ke backend). Saat FCM aktif, tick-nya
// langsung keluar tanpa memanggil endpoint apa pun.
const FALLBACK_POLL_INTERVAL_MS = 60_000

// Dedup: id notifikasi yang sudah dimunculkan halaman agar tidak kembar
// antar-penyegaran. Background (tab tertutup) ditangani service worker Firebase
// secara terpisah, jadi tidak saling tumpang-tindih dengan jalur foreground ini.
const shownIds = new Set<string>()
let shownPrimed = false

/**
 * Munculkan notifikasi OS untuk notifikasi BARU yang belum dibaca & belum pernah
 * ditampilkan. Saat load pertama, backlog lama hanya ditandai "sudah dilihat"
 * supaya layar tidak dibanjiri notif lama. `tag = id` disamakan dengan service
 * worker agar tidak kembar bila kedua jalur kebetulan tampil.
 */
function presentNewNotifications(items: NotificationEntry[]) {
  if (!shownPrimed) {
    items.forEach((item) => shownIds.add(item.id))
    shownPrimed = true
    return
  }

  const fresh = items.filter((item) => !item.read && !shownIds.has(item.id))
  fresh.forEach((item) => shownIds.add(item.id))
  fresh
    .slice()
    .reverse()
    .forEach((item) => void showSystemNotification(item.title, item.body, item.id))
}

function parseReceivedAt(value?: string | null): number {
  if (!value) return 0

  const normalized = value
    .trim()
    .replace(' ', 'T')
    .replace(/\.(\d{3})\d+$/, '.$1')
  const timestamp = Date.parse(normalized)
  return Number.isFinite(timestamp) ? timestamp : 0
}

function normalizeNotification(item: BackendNotification): NotificationEntry {
  const message = typeof item.message === 'string' ? item.message : ''
  const match = message.match(MESSAGE_PATTERN)

  return {
    id: String(item.id),
    type: typeof item.type === 'string' && item.type.trim() ? item.type : 'System',
    title: match?.[1]?.trim() || 'Notifikasi',
    body: match ? match[2] : message,
    receivedAt: parseReceivedAt(item.updated_at),
    read: Number(item.is_read) === 1,
    ...(typeof item.url === 'string' && item.url.trim() ? { url: item.url.trim() } : {}),
  }
}

function compareNumericIdsDescending(left: string, right: string): number | null {
  if (!/^\d+$/.test(left) || !/^\d+$/.test(right)) return null

  const normalizedLeft = left.replace(/^0+(?=\d)/, '')
  const normalizedRight = right.replace(/^0+(?=\d)/, '')
  if (normalizedLeft.length !== normalizedRight.length) {
    return normalizedRight.length - normalizedLeft.length
  }
  return normalizedRight.localeCompare(normalizedLeft)
}

function sortNotifications(items: NotificationEntry[]): NotificationEntry[] {
  return items.sort((left, right) => {
    const numericComparison = compareNumericIdsDescending(left.id, right.id)
    return numericComparison ?? right.receivedAt - left.receivedAt
  })
}

function safeCount(value: unknown): number {
  const count = Number(value)
  return Number.isFinite(count) && count > 0 ? Math.floor(count) : 0
}

export const useNotificationStore = defineStore('pushNotification', {
  state: (): NotificationState => ({
    items: [],
    unreadCount: 0,
    loading: false,
    hasLoadedNotifications: false,
    initialized: false,
    pushStatus: 'checking',
    backendRegistered: false,
    pushError: null,
    fetchError: null,
    fcmToken: null,
  }),

  actions: {
    async fetchNotifications() {
      const requestVersion = lifecycleVersion
      this.loading = true

      try {
        const response = await api.get<BackendNotification[]>('/notifications')
        if (!Array.isArray(response.data)) {
          throw new Error('Respons daftar notifikasi tidak valid.')
        }
        if (requestVersion !== lifecycleVersion) return

        this.items = sortNotifications(response.data.map(normalizeNotification))
        presentNewNotifications(this.items)
        this.fetchError = null
      } catch (error) {
        if (requestVersion !== lifecycleVersion) return
        this.fetchError = getUserErrorMessage(error, 'Gagal memuat notifikasi.')
      } finally {
        if (requestVersion === lifecycleVersion) {
          this.loading = false
          this.hasLoadedNotifications = true
        }
      }
    },

    async fetchUnreadCount() {
      const requestVersion = lifecycleVersion

      try {
        const response = await api.get<UnreadCountResponse>('/notifications/unreadcount')
        if (requestVersion !== lifecycleVersion) return
        this.unreadCount = safeCount(response.data?.count)
      } catch {
        if (requestVersion !== lifecycleVersion) return
        this.unreadCount = this.items.filter((item) => !item.read).length
      }
    },

    async refreshNotifications() {
      if (refreshPromise) return refreshPromise

      const currentPromise = (async () => {
        await this.fetchNotifications()
        await this.fetchUnreadCount()
      })()
      refreshPromise = currentPromise

      try {
        await currentPromise
      } finally {
        if (refreshPromise === currentPromise) refreshPromise = null
      }
    },

    async markRead(id: string) {
      const target = this.items.find((item) => item.id === id)
      if (!target || target.read) return

      try {
        await api.patch(`/notifications/${encodeURIComponent(id)}/read`)
        target.read = true
        this.unreadCount = Math.max(0, this.unreadCount - 1)
        this.fetchError = null
      } catch (error) {
        this.fetchError = getUserErrorMessage(error, 'Gagal menandai notifikasi sebagai dibaca.')
        throw error
      }
    },

    async markAllRead() {
      if (this.unreadCount === 0) return

      try {
        await api.patch('/notifications/markallread')
        this.items.forEach((item) => (item.read = true))
        this.unreadCount = 0
        this.fetchError = null
      } catch (error) {
        this.fetchError = getUserErrorMessage(error, 'Gagal menandai semua notifikasi sebagai dibaca.')
        throw error
      }
    },

    async registerToken(token: string) {
      this.fcmToken = token
      this.pushStatus = 'enabled'
      this.pushError = null

      try {
        await api.post(TOKEN_ENDPOINT, { token, platform: 'web' })
        this.backendRegistered = true
      } catch (error) {
        this.backendRegistered = false
        this.pushError = getUserErrorMessage(
          error,
          'Browser terhubung ke Firebase, tetapi token gagal didaftarkan ke backend.',
        )
      }
    },

    /** Hapus token dari backend dan cabut subscription agar login berikutnya memakai token baru. */
    async unregisterToken(authToken?: string | null) {
      const token = this.fcmToken
      if (!token) return

      let backendError: unknown = null

      try {
        await api.delete(TOKEN_ENDPOINT, {
          data: { token },
          headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined,
        })
      } catch (error) {
        backendError = error
      }

      try {
        await revokeFcmToken()
      } finally {
        if (this.fcmToken === token) {
          this.backendRegistered = false
          this.fcmToken = null
        }
      }

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
        this.pushError = getUserErrorMessage(error, 'Gagal mengaktifkan notifikasi.')
      }
    },

    /** Siapkan inbox API dan listener. Permission push hanya diminta melalui enablePush(). */
    async init() {
      if (this.initialized) return
      this.initialized = true
      const initVersion = lifecycleVersion

      const handleFocus = () => void this.refreshNotifications()
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') void this.refreshNotifications()
      }
      window.addEventListener('focus', handleFocus)
      document.addEventListener('visibilitychange', handleVisibilityChange)

      // Jaring pengaman bila push FCM tidak aktif. Sengaja TIDAK dibatasi
      // visibilityState: justru saat user sedang di tab/aplikasi lain notifikasi
      // paling perlu muncul, dan browser sudah otomatis melambatkan timer di tab
      // yang tidak terlihat.
      if (pollTimer) clearInterval(pollTimer)
      pollTimer = setInterval(() => {
        const pushActive = this.pushStatus === 'enabled' && this.backendRegistered
        if (pushActive) return
        void this.refreshNotifications()
      }, FALLBACK_POLL_INTERVAL_MS)

      stopForegroundListener = () => {
        window.removeEventListener('focus', handleFocus)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        if (pollTimer) {
          clearInterval(pollTimer)
          pollTimer = null
        }
      }

      void this.refreshNotifications()

      if (!isFirebaseMessagingConfigured()) {
        this.pushStatus = 'unconfigured'
        return
      }

      const messagingSupported = await isFirebaseMessagingSupported()
      if (initVersion !== lifecycleVersion) return
      if (!messagingSupported) {
        this.pushStatus = 'unsupported'
        return
      }

      // Saat service worker menerima push FCM, ia mem-postMessage ke tab ini agar
      // isi lonceng langsung disegarkan. Notifikasi OS-nya sudah ditampilkan SW,
      // jadi di sini TIDAK ada showNotification (mencegah duplikasi).
      try {
        // Saat tab aktif & push FCM masuk, segarkan lonceng; popup OS-nya
        // dimunculkan oleh presentNewNotifications (jalur foreground).
        const stopFcmListener = await listenForegroundMessages(() => {
          void this.refreshNotifications()
        })
        if (initVersion !== lifecycleVersion) {
          stopFcmListener()
          return
        }
        const stopBrowserListeners = stopForegroundListener
        stopForegroundListener = () => {
          stopFcmListener()
          stopBrowserListeners?.()
        }
      } catch (error) {
        this.pushStatus = 'error'
        this.pushError = getUserErrorMessage(error, 'Gagal menyiapkan listener push notification.')
        return
      }

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
        if (initVersion !== lifecycleVersion) return
        if (token) await this.registerToken(token)
        else {
          this.pushStatus = 'error'
          this.pushError = 'FCM tidak menghasilkan registration token.'
        }
      } catch (error) {
        this.pushStatus = 'error'
        this.pushError = getUserErrorMessage(error, 'Gagal memulihkan koneksi notifikasi.')
      }
    },

    /** Hentikan seluruh listener dan kosongkan inbox agar sesi berikutnya tetap terisolasi. */
    stop() {
      lifecycleVersion += 1
      refreshPromise = null
      shownIds.clear()
      shownPrimed = false
      if (pollTimer) {
        clearInterval(pollTimer)
        pollTimer = null
      }
      stopForegroundListener?.()
      stopForegroundListener = null
      this.items = []
      this.unreadCount = 0
      this.loading = false
      this.hasLoadedNotifications = false
      this.initialized = false
      this.pushStatus = 'checking'
      this.fcmToken = null
      this.backendRegistered = false
      this.pushError = null
      this.fetchError = null
    },
  },
})
