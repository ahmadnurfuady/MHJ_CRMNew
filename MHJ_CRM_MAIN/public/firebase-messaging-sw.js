// Service worker Firebase Cloud Messaging.
// File ini di-serve apa adanya oleh Vite (folder /public), tidak diproses/di-build,
// sehingga environment variable (.env) tidak bisa dipakai di sini.
// Isi object di bawah dengan config Firebase Web App yang SAMA PERSIS dengan
// VITE_FIREBASE_* di file .env, lalu build & deploy ulang.
importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'ISI_API_KEY',
  authDomain: 'ISI_AUTH_DOMAIN',
  projectId: 'ISI_PROJECT_ID',
  storageBucket: 'ISI_STORAGE_BUCKET',
  messagingSenderId: 'ISI_MESSAGING_SENDER_ID',
  appId: 'ISI_APP_ID',
})

const messaging = firebase.messaging()

// Notifikasi yang masuk saat tab CRM tertutup/di-background.
messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {}
  self.registration.showNotification(notification.title || 'MHJ CRM', {
    body: notification.body || '',
    icon: notification.icon || '/favicon.ico',
    data: payload.data || {},
  })
})

// Fokuskan/alihkan tab CRM yang sudah terbuka saat notifikasi diklik.
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const targetUrl = (event.notification.data && event.notification.data.url) || '/'

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.navigate(targetUrl)
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl)
      }
    })
  )
})
