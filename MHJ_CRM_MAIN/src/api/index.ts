import axios, { type AxiosRequestConfig } from 'axios'
import { triggerSessionExpired } from '@/store/sessionSignal'

/**
 * Normalisasi URL dasar API dari environment variable (.env).
 * Mendukung VITE_API_BASE_URL maupun VITE_APP_API_URL.
 * Menghilangkan trailing slash dan memastikan prefix /api selalu ada.
 */
function resolveBaseUrl(): string {
  const envUrl =
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_APP_API_URL ||
    'https://mhjcrmapi.siapsoft.com/api'

  let url = envUrl.trim().replace(/\/+$/, '')
  if (!url.endsWith('/api')) {
    url = `${url}/api`
  }
  return url
}

export const BASE_API_URL = resolveBaseUrl()

/** Saat VITE_APP_DEVELOPMENT=true, endpoint otomatis memakai prefix /dev. */
const isDevelopment = import.meta.env.VITE_APP_DEVELOPMENT === 'true'

/** Menambahkan leading slash dan prefix dev bila diperlukan. */
function resolveEndpoint(endpoint: string): string {
  const clean = endpoint.replace(/^\/+/, '')
  return isDevelopment ? `/dev/${clean}` : `/${clean}`
}

/**
 * Axios instance terpusat untuk semua request API ke backend Laravel.
 * - Request interceptor: otomatis menyematkan header Authorization: Bearer <token>.
 * - Response interceptor: menangani error token expired (status 401 & 599 khas backend ini).
 */
const client = axios.create({
  baseURL: BASE_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

/**
 * Status sesi: `true` setelah ada response sukses pertama kali.
 * Dipakai untuk membedakan "token stale sejak boot" (user tutup tab tanpa logout
 * lalu buka lagi besoknya — langsung redirect ke login) vs "token expired saat
 * user sedang pakai aplikasi" (tampilkan modal "Sesi Telah Berakhir").
 */
let sessionActive = false

function clearSessionStorage() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('menuuser')
  localStorage.removeItem('raw_user_menus')
}

function redirectToLogin() {
  if (window.location.pathname.includes('/auth/login')) return
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '')
  window.location.replace(`${baseUrl}/auth/login`)
}

// Request Interceptor: Menempelkan Bearer token otomatis jika ada
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response Interceptor: Menangani error token expired (401 atau 599 khas backend ini)
client.interceptors.response.use(
  (response) => {
    // Response sukses pertama menandai sesi aktif — mulai sekarang, 401
    // berikutnya artinya token benar-benar baru saja expired saat dipakai,
    // bukan sekadar stale sejak page load.
    sessionActive = true
    return response
  },
  (error) => {
    const status = error.response?.status
    const message = error.response?.data?.message
    const url = error.config?.url || ''

    // Abaikan jika error berasal dari endpoint login itu sendiri (kredensial salah)
    const isLoginEndpoint = url.includes('/login')

    if (!isLoginEndpoint) {
      if (
        status === 401 ||
        status === 599 ||
        message === 'token_expired' ||
        message === 'token_invalid' ||
        message === 'token_absent'
      ) {
        clearSessionStorage()

        if (!window.location.pathname.includes('/auth/login')) {
          if (sessionActive) {
            // Sesi tadinya aktif → user sedang pakai aplikasi, kasih modal.
            triggerSessionExpired()
          } else {
            // Token sudah stale sejak page load (user tutup tab lama, buka
            // lagi, token sudah expired) → langsung ke login, jangan tampilkan
            // modal "token habis" yang menyesatkan.
            redirectToLogin()
          }
        }
      } else if (status === 403) {
        import('@/services/permissionWatcher').then((m) => {
          m.syncPermissionsAndEvict()
        })
      }
    }
    return Promise.reject(error)
  }
)

/**
 * API wrapper terpusat. Token tidak perlu ditulis ulang di store/komponen.
 * Setiap helper mengembalikan response Axios penuh, sehingga pembacaan
 * isi tetap lewat response.data.
 */
export const api = {
  get<T = unknown>(endpoint: string, config?: AxiosRequestConfig) {
    return client.get<T>(resolveEndpoint(endpoint), config)
  },

  /** GET dengan query params, mis. getbydata('company/fetchcompanybyid', { id }). */
  getbydata<T = unknown>(endpoint: string, params?: object, config?: AxiosRequestConfig) {
    return client.get<T>(resolveEndpoint(endpoint), {
      ...config,
      params: { ...(config?.params as object | undefined), ...params },
    })
  },

  post<T = unknown>(endpoint: string, payload?: unknown, config?: AxiosRequestConfig) {
    return client.post<T>(resolveEndpoint(endpoint), payload, config)
  },

  /**
   * POST dengan body `FormData` (upload file). Instance axios ini punya default
   * header `Content-Type: application/json`, dan axios akan mengubah FormData
   * menjadi `JSON.stringify()` kalau Content-Type masih application/json (lihat
   * transformRequest di axios) — field File di dalamnya jadi `{}` dan gagal
   * terkirim. Header di-override ke `undefined` di sini supaya axios membiarkan
   * FormData apa adanya dan browser yang menentukan boundary multipart.
   */
  postForm<T = unknown>(endpoint: string, formData: FormData, config?: AxiosRequestConfig) {
    return client.post<T>(resolveEndpoint(endpoint), formData, {
      ...config,
      headers: { ...config?.headers, 'Content-Type': undefined },
    })
  },

  patch<T = unknown>(endpoint: string, payload?: unknown, config?: AxiosRequestConfig) {
    return client.patch<T>(resolveEndpoint(endpoint), payload, config)
  },

  delete<T = unknown>(endpoint: string, config?: AxiosRequestConfig) {
    return client.delete<T>(resolveEndpoint(endpoint), config)
  },
}

export default api
