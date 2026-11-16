import { initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import {
  deleteToken,
  getMessaging,
  getToken,
  isSupported,
  onMessage,
  type Messaging,
  type MessagePayload,
} from 'firebase/messaging'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY?.trim()
const PERMISSION_PROMPT_TIMEOUT = 12_000

let app: FirebaseApp | null = null
let messagingInstance: Messaging | null = null

export function isFirebaseMessagingConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.projectId &&
      firebaseConfig.messagingSenderId &&
      firebaseConfig.appId,
  )
}

export async function isFirebaseMessagingSupported(): Promise<boolean> {
  if (typeof window === 'undefined') return false
  return isSupported().catch(() => false)
}

async function getMessagingInstance(): Promise<Messaging | null> {
  if (!isFirebaseMessagingConfigured()) return null
  if (!(await isFirebaseMessagingSupported())) return null

  if (!app) {
    app = initializeApp(firebaseConfig)
  }
  if (!messagingInstance) {
    messagingInstance = getMessaging(app)
  }
  return messagingInstance
}

function encodeServiceWorkerConfig(): string {
  const bytes = new TextEncoder().encode(JSON.stringify(firebaseConfig))
  let binary = ''
  bytes.forEach((byte) => (binary += String.fromCharCode(byte)))
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function registerMessagingServiceWorker(): Promise<ServiceWorkerRegistration> {
  // Config Firebase dikirim via query string agar SW punya config yang sama
  // dengan .env, termasuk saat SW di-restart (push dalam keadaan tab tertutup).
  const serviceWorkerUrl = new URL(
    `${import.meta.env.BASE_URL}firebase-messaging-sw.js`,
    window.location.origin,
  )
  serviceWorkerUrl.searchParams.set('config', encodeServiceWorkerConfig())

  const registration = await navigator.serviceWorker.register(serviceWorkerUrl.href, {
    scope: import.meta.env.BASE_URL,
  })
  await registration.update().catch(() => undefined)
  return registration
}

/**
 * Beberapa browser berbasis Chromium dapat menahan quiet permission prompt tanpa
 * menyelesaikan promise. Timeout mencegah tombol UI terus berstatus loading.
 */
function requestNotificationPermission(): Promise<NotificationPermission> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => {
      reject(new Error(
        'Popup izin tidak muncul. Aktifkan "Sites can ask to send notifications" pada pengaturan browser.',
      ))
    }, PERMISSION_PROMPT_TIMEOUT)

    Notification.requestPermission()
      .then((permission) => {
        window.clearTimeout(timer)
        resolve(permission)
      })
      .catch((error) => {
        window.clearTimeout(timer)
        reject(error)
      })
  })
}

/** Meminta izin browser dan menghasilkan registration token untuk backend FCM. */
export async function requestFcmToken(): Promise<string | null> {
  if (
    typeof window === 'undefined' ||
    typeof Notification === 'undefined' ||
    !isFirebaseMessagingConfigured()
  ) {
    return null
  }
  if (!window.isSecureContext) {
    throw new Error('Push notification memerlukan HTTPS atau localhost yang dianggap aman oleh browser.')
  }

  // Browser mengharuskan prompt permission dipanggil langsung dari user gesture.
  // Jangan menaruh await lain sebelum baris ini karena konteks klik dapat hilang
  // dan Chrome tidak akan menampilkan prompt notifikasi.
  const permission =
    Notification.permission === 'granted'
      ? Notification.permission
      : await requestNotificationPermission()
  if (permission !== 'granted') return null

  const instance = await getMessagingInstance()
  if (!instance) return null

  const registration = await registerMessagingServiceWorker()
  const tokenOptions = VAPID_KEY
    ? { vapidKey: VAPID_KEY, serviceWorkerRegistration: registration }
    : { serviceWorkerRegistration: registration }
  const token = await getToken(instance, tokenOptions)
  if (import.meta.env.DEV && token) {
    // Bantu debug: salin token ini untuk "Send test message" di Firebase Console.
    console.info('[FCM] web registration token:', token)
  }
  return token || null
}

/** Mengambil token tanpa memunculkan prompt bila izin sebelumnya sudah diberikan. */
export async function restoreFcmToken(): Promise<string | null> {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return null
  return requestFcmToken()
}

/** Cabut token/subscription FCM agar registrasi berikutnya menghasilkan token baru. */
export async function revokeFcmToken(): Promise<boolean> {
  const instance = await getMessagingInstance()
  if (!instance) return false
  return deleteToken(instance)
}

/**
 * Tampilkan notifikasi tingkat SISTEM OPERASI (pojok layar laptop) dari halaman.
 * Dipakai sebagai FALLBACK saat ada tab terbuka: kalau push FCM belum/tidak
 * terkirim ke service worker, notifikasi tetap muncul. `tag` disamakan dengan
 * yang dipakai service worker (= id notifikasi), jadi bila keduanya kebetulan
 * menampilkan, OS menggabungkannya menjadi SATU (tidak kembar).
 *
 * Catatan: pada notifikasi web desktop, browser (Chrome) selalu menempel badge
 * kecil miliknya di sudut — itu branding browser, tidak bisa dihapus lewat web.
 */
export async function showSystemNotification(
  title: string,
  body?: string,
  tag?: string,
): Promise<boolean> {
  if (typeof window === 'undefined' || typeof Notification === 'undefined') return false
  if (Notification.permission !== 'granted') return false

  const icon = `${import.meta.env.BASE_URL}images/logo/logo-icon.png`
  const options: NotificationOptions = {
    body: body || undefined,
    icon,
    badge: icon,
    ...(tag ? { tag, renotify: true } : {}),
  }

  try {
    if ('serviceWorker' in navigator) {
      const registration =
        (await navigator.serviceWorker.getRegistration(import.meta.env.BASE_URL)) ||
        (await navigator.serviceWorker.getRegistration())
      if (registration) {
        await registration.showNotification(title, options)
        return true
      }
    }
  } catch {
    // Jatuh ke Notification API biasa di bawah.
  }

  try {
    new Notification(title, options)
    return true
  } catch {
    return false
  }
}

/**
 * Listener pesan FCM saat tab sedang aktif (foreground). FCM TIDAK otomatis
 * menampilkan notifikasi di foreground, jadi callback dipakai untuk menyegarkan
 * inbox lonceng; penampilan popup OS-nya dilakukan store via showSystemNotification.
 */
export async function listenForegroundMessages(
  callback: (payload: MessagePayload) => void,
): Promise<() => void> {
  const instance = await getMessagingInstance()
  if (!instance) return () => {}

  return onMessage(instance, callback)
}
