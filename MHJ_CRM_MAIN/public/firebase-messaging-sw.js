/* global firebase, clients */

// Config publik Firebase dikirim aplikasi melalui query string saat SW didaftarkan.
// Dengan begitu nilai di .env dan service worker selalu sinkron setiap deployment.
const encodedConfig = new URL(self.location.href).searchParams.get('config')

if (encodedConfig) {
  const normalized = encodedConfig.replace(/-/g, '+').replace(/_/g, '/')
  const padding = '='.repeat((4 - (normalized.length % 4)) % 4)
  const firebaseConfig = JSON.parse(atob(normalized + padding))

  importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js')
  importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js')

  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging()

  // Data-only messages perlu ditampilkan manual. Notification messages sudah
  // ditampilkan otomatis oleh FCM sehingga tidak dibuat dua kali di sini.
  messaging.onBackgroundMessage((payload) => {
    if (payload.notification) return

    const data = payload.data || {}
    self.registration.showNotification(data.title || 'MHJ CRM', {
      body: data.body || '',
      icon: data.icon || '/favicon.ico',
      data: { url: data.url || '/' },
    })
  })
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  let targetUrl = new URL('/', self.location.origin)
  try {
    const notificationData = event.notification.data || {}
    const requestedPath =
      notificationData.url ||
      notificationData.FCM_MSG?.fcmOptions?.link ||
      notificationData.FCM_MSG?.data?.url ||
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
