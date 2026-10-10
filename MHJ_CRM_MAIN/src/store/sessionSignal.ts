import { ref } from 'vue'

/**
 * Sinyal sesi berakhir — diset dari Axios interceptor (di luar context Vue)
 * dan dibaca oleh SessionExpiredModal yang ter-mount di App.vue.
 * Menggunakan module-level ref agar bisa diimpor langsung tanpa Pinia.
 */
export const sessionExpired = ref(false)

export function triggerSessionExpired() {
  sessionExpired.value = true
}
