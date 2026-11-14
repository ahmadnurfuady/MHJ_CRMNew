/* global firebase, clients */

// Config publik Firebase dikirim aplikasi via query string saat SW didaftarkan,
// jadi nilai .env dan service worker selalu sinkron. Query string ini menjadi
// bagian dari scriptURL registrasi, sehingga tetap tersedia saat browser
// me-restart service worker (mis. ketika push datang dalam keadaan semua tab
// tertutup) — ini syarat agar notifikasi background tetap tampil tanpa PWA.
const encodedConfig = new URL(self.location.href).searchParams.get('config')

if (encodedConfig) {
  const normalized = encodedConfig.replace(/-/g, '+').replace(/_/g, '/')
  const padding = '='.repeat((4 - (normalized.length % 4)) % 4)

  let firebaseConfig = {}
  try {
    firebaseConfig = JSON.parse(atob(normalized + padding))
  } catch (error) {
    firebaseConfig = {}
  }

  importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js')
  importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js')

  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging()

  // Backend mengirim DATA-ONLY untuk web, jadi kita SELALU menampilkan notifikasi
  // sendiri di sini (jangan mengandalkan auto-display FCM — auto-display ditekan
  // begitu onBackgroundMessage terdaftar). Inilah yang membuat notifikasi tetap
  // muncul saat semua tab ditutup.
  messaging.onBackgroundMessage((payload) => {
    const data = payload.data || {}
    const n = payload.notification || {}
    const icon = data.icon || n.icon || '/images/logo/logo-icon.png'
    const title = data.title || n.title || 'MHJ CRM'
    const body = data.body || n.body || ''

    self.registration.showNotification(title, {
      body,
      icon,
      badge: icon,
      data: { url: data.url || '/' },
      ...(data.notification_id ? { tag: data.notification_id, renotify: true } : {}),
    })
  })
}

// Fetch handler minimal — SYARAT agar aplikasi memenuhi kriteria installable
// (PWA), supaya tombol "Install" muncul dan notifikasi tampil sebagai "MHJ CRM"
// (bukan "Google Chrome") setelah di-install. Tidak meng-intercept apa pun:
// request tetap berjalan normal ke network.
self.addEventListener('fetch', () => {})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  let targetUrl = new URL('/', self.location.origin)
  try {
    const d = event.notification.data || {}
    const requestedPath =
      d.url ||
      (d.FCM_MSG && d.FCM_MSG.fcmOptions && d.FCM_MSG.fcmOptions.link) ||
      (d.FCM_MSG && d.FCM_MSG.data && d.FCM_MSG.data.url) ||
      '/'
    const requestedUrl = new URL(requestedPath, self.location.origin)
    if (requestedUrl.origin === self.location.origin) targetUrl = requestedUrl
  } catch {
    // URL payload tidak valid: kembali ke halaman utama aplikasi.
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (new URL(client.url).origin === self.location.origin && 'focus' in client) {
          return client.navigate(targetUrl.href).then(() => client.focus())
        }
      }
      return clients.openWindow ? clients.openWindow(targetUrl.href) : undefined
    }),
  )
})
