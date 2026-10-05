import axios, { type AxiosRequestConfig } from 'axios'

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
        localStorage.removeItem('raw_user_menus')

        const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '')
        const loginPath = `${baseUrl}/auth/login`
        if (!window.location.pathname.includes('/auth/login')) {
          window.location.href = loginPath
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
  get(endpoint: string, config?: AxiosRequestConfig) {
    return client.get(resolveEndpoint(endpoint), config)
  },

  /** GET dengan query params, mis. getbydata('company/fetchcompanybyid', { id }). */
  getbydata(endpoint: string, params?: object, config?: AxiosRequestConfig) {
    return client.get(resolveEndpoint(endpoint), {
      ...config,
      params: { ...(config?.params as object | undefined), ...params },
    })
  },

  post(endpoint: string, payload?: unknown, config?: AxiosRequestConfig) {
    return client.post(resolveEndpoint(endpoint), payload, config)
  },

  patch(endpoint: string, payload?: unknown, config?: AxiosRequestConfig) {
    return client.patch(resolveEndpoint(endpoint), payload, config)
  },

  delete(endpoint: string, config?: AxiosRequestConfig) {
    return client.delete(resolveEndpoint(endpoint), config)
  },
}

export default api
