import axios from 'axios'

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

/**
 * Axios instance terpusat untuk semua request API ke backend Laravel.
 * - baseURL otomatis disesuaikan dari .env (default: https://mhjcrmapi.siapsoft.com/api).
 * - Request interceptor: otomatis menyematkan header Authorization: Bearer <token>.
 * - Response interceptor: menangani error token expired (status 401 & 599 khas backend ini).
 */
export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Request Interceptor: Menempelkan Bearer token otomatis jika ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response Interceptor: Menangani error token expired (401 atau 599 khas backend ini)
api.interceptors.response.use(
  (response) => response,
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
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('menuuser')

        // Hindari redirect loop jika sudah di halaman login
        if (!window.location.pathname.includes('/auth/login')) {
          window.location.href = '/riho/auth/login'
        }
      }
    }
    return Promise.reject(error)
  }
)

