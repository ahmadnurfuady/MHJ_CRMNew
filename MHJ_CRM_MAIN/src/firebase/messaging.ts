import { initializeApp, type FirebaseApp } from 'firebase/app'
import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
  type Messaging,
  type MessagePayload,
} from 'firebase/messaging'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY as string | undefined

let app: FirebaseApp | null = null
let messagingInstance: Messaging | null = null

function isConfigured(): boolean {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId)
}

async function getMessagingInstance(): Promise<Messaging | null> {
  if (!isConfigured()) return null
  if (typeof window === 'undefined') return null

  const supported = await isSupported().catch(() => false)
  if (!supported) return null

  if (!app) {
    app = initializeApp(firebaseConfig)
  }
  if (!messagingInstance) {
    messagingInstance = getMessaging(app)
  }
  return messagingInstance
}

/**
 * Minta izin notifikasi browser, daftarkan service worker FCM, lalu ambil device token.
 * Mengembalikan null bila config .env belum diisi, browser tidak didukung, atau izin ditolak.
 */
export async function requestFcmToken(): Promise<string | null> {
  const instance = await getMessagingInstance()
  if (!instance) return null

  if (typeof Notification === 'undefined') return null
  const permission = await Notification.requestPermission()
  if (permission !== 'granted') return null

  const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js')

  try {
    const token = await getToken(instance, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    })
    return token || null
  } catch (err) {
    console.warn('Gagal mengambil FCM token:', err)
    return null
  }
}

/** Mendaftarkan listener notifikasi FCM saat tab CRM sedang aktif (foreground). */
export async function listenForegroundMessages(
  callback: (payload: MessagePayload) => void
): Promise<() => void> {
  const instance = await getMessagingInstance()
  if (!instance) return () => {}

  return onMessage(instance, callback)
}
