import { defineStore } from 'pinia'
import { api } from '@/services/api'
import { useMenu } from '@/store/menu'
import { stopPermissionWatcher } from '@/services/permissionWatcher'
import { useNotificationStore } from '@/store/notification'
import { isAxiosError } from 'axios'

// ── Tipe data sesuai kontrak API backend ──────────────────────────────────────
export interface AuthUser {
  id: string | number
  name: string
  email: string
  role?: string
  branch_id?: string
  branch_name?: string
  division_id?: string
  division_name?: string
  phone_number?: string
  firstname?: string
  lastname?: string
  no_handphone?: string
  created_at?: string
  updated_at?: string
}

export interface MenuUserItem {
  ID: number
  USERID: string
  MENUID: string
  MENUNAME: string
  HASACCESS: number
}

interface AuthState {
  user: AuthUser | null
  token: string | null
  menuuser: MenuUserItem[]
  loading: boolean
  error: string | null
}

export interface ResetPasswordPayload {
  email: string
  otp: string
  password: string
  password_confirmation: string
}

export interface AuthActionResult {
  success: boolean
  message: string
}

interface AuthResponseData {
  token?: string
  access_token?: string
  accessToken?: string
  jwt?: string
  refresh_token?: string
  token_type?: string
  expires_in?: number
  status?: string
  user?: AuthUser
  success?: boolean
  message?: string | string[]
  msg?: string | string[]
  error?: string
}

function normalizeAuthResponse(payload: unknown): AuthResponseData {
  let value = payload

  if (typeof value === 'string') {
    try {
      value = JSON.parse(value)
    } catch {
      return {}
    }
  }

  if (!value || typeof value !== 'object') return {}

  const root = value as Record<string, unknown>
  const nested = root.data ?? root.result
  if (
    !root.access_token &&
    !root.accessToken &&
    !root.token &&
    !root.jwt &&
    nested &&
    typeof nested === 'object'
  ) {
    return normalizeAuthResponse(nested)
  }

  return root as unknown as AuthResponseData
}

function resolveAccessToken(data: AuthResponseData): string | null {
  const candidate = data.access_token ?? data.accessToken ?? data.token ?? data.jwt
  return typeof candidate === 'string' && candidate.trim() ? candidate.trim() : null
}

function extractErrorMessage(err: unknown, fallback: string): string {
  const response = isAxiosError<AuthResponseData>(err) ? err.response : undefined
  if (!response) {
    return 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda lalu coba lagi.'
  }
  if (response.status === 429) {
    return 'Terlalu banyak permintaan. Silakan tunggu sebentar lalu coba lagi.'
  }
  if (response.status === 404) {
    return 'Fitur lupa password belum tersedia di server. Silakan hubungi administrator.'
  }
  // Hanya pesan dari controller kita (success: false) yang ditampilkan; pesan bawaan
  // Laravel seperti "Server Error" atau "The route ... could not be found" tidak ramah pengguna.
  if (response.data?.success === false) {
    const message = response.data.message
    if (Array.isArray(message)) return message.join(', ')
    if (typeof message === 'string' && message) return message
  }
  return fallback
}

function safeParse<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || '') ?? fallback
  } catch {
    return fallback
  }
}

// ── Store Pinia ───────────────────────────────────────────────────────────────
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: safeParse<AuthUser | null>('user', null),
    token: localStorage.getItem('token') || null,
    menuuser: safeParse<MenuUserItem[]>('menuuser', []),
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    /**
     * Memuat ulang sidebar sesuai hak akses user aktif.
     * Backend mencocokkan `username` ke kolom `name` pada tabel users,
     * sehingga email hanya dipakai sebagai cadangan.
     */
    async syncSidebarMenu() {
      try {
        const username = this.user?.name || this.user?.email || undefined
        await useMenu().loadUserMenu(username)
      } catch (e) {
        console.warn('Gagal menyinkronkan menu sidebar:', e)
      }
    },

    /** Memulihkan sesi saat aplikasi dibuka ulang selama token masih tersimpan. */
    async initSession() {
      if (!this.token) return
      await this.syncSidebarMenu()
    },

    /**
     * Login ke backend via POST /api/login.
     * Field `email` bisa berisi email ataupun username (backend otomatis mendeteksi).
     */
    async login(credentials: { email: string; password: string }) {
      this.loading = true
      this.error = null
      try {
        const response = await api.post<AuthResponseData>('/login', credentials)
        const data = normalizeAuthResponse(response.data)
        const token = resolveAccessToken(data)

        if (token) {
          this.token = token
          this.user = data.user || null
          localStorage.setItem('token', token)
          if (data.refresh_token) {
            localStorage.setItem('refresh_token', data.refresh_token)
          }
          if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user))
          }
          // Header Authorization ditambahkan otomatis oleh wrapper API dari localStorage.

          // Ambil menu dinamis web dari backend secara non-blocking di background
          const fallbackUsername = this.user?.name || this.user?.email || credentials.email
          useMenu()
            .loadUserMenu(fallbackUsername)
            .catch((err) => {
              console.warn('Gagal memuat menu dinamis di background:', err)
            })

          return { success: true, message: data.message || data.msg || 'Login Berhasil' }
        }

        return {
          success: false,
          message: 'Login berhasil diterima server, tetapi token akses tidak ditemukan pada respons.',
        }
      } catch (err: unknown) {
        let errorMsg = 'Login gagal. Periksa koneksi ke server.'
        const resData = isAxiosError<AuthResponseData>(err) ? err.response?.data : undefined

        if (resData?.message) {
          errorMsg = Array.isArray(resData.message)
            ? resData.message.join(', ')
            : resData.message
        } else if (resData?.msg) {
          errorMsg = Array.isArray(resData.msg)
            ? resData.msg.join(', ')
            : resData.msg
        } else if (resData?.error) {
          errorMsg = resData.error
        }

        this.error = errorMsg
        return { success: false, message: errorMsg }
      } finally {
        this.loading = false
      }
    },

    /**
     * Memuat menu dinamis pengguna aktif.
     * Catatan: Endpoint lama POST /api/user/validate mencari tabel dbflmenuapp (mobile/APK)
     * yang tidak ada di database web. Untuk web, menu dimuat melalui GET /api/menuweb.
     */
    async validateAndFetchMenu() {
      await this.syncSidebarMenu()
    },

    /** POST /api/auth/forgot-password — kirim kode OTP 6 digit ke email. */
    async forgotPassword(email: string): Promise<AuthActionResult> {
      try {
        const { data } = await api.post<{ message?: string }>('/auth/forgot-password', { email })
        return { success: true, message: data?.message || 'Kode OTP telah dikirim ke email Anda.' }
      } catch (err) {
        return { success: false, message: extractErrorMessage(err, 'Gagal mengirim kode OTP. Silakan coba beberapa saat lagi.') }
      }
    },

    /** POST /api/auth/verify-otp — cek kode OTP tanpa menandainya terpakai. */
    async verifyOtp(email: string, otp: string): Promise<AuthActionResult> {
      try {
        const { data } = await api.post<{ message?: string }>('/auth/verify-otp', { email, otp })
        return { success: true, message: data?.message || 'Kode OTP valid.' }
      } catch (err) {
        return { success: false, message: extractErrorMessage(err, 'Gagal memverifikasi kode OTP. Silakan coba beberapa saat lagi.') }
      }
    },

    /** POST /api/auth/reset-password — simpan password baru, OTP ditandai terpakai. */
    async resetPassword(payload: ResetPasswordPayload): Promise<AuthActionResult> {
      try {
        const { data } = await api.post<{ message?: string }>('/auth/reset-password', payload)
        return { success: true, message: data?.message || 'Password berhasil diperbarui.' }
      } catch (err) {
        return { success: false, message: extractErrorMessage(err, 'Gagal menyimpan password baru. Silakan coba beberapa saat lagi.') }
      }
    },

    /**
     * Logout: panggil endpoint backend lalu bersihkan seluruh state & localStorage.
     * Endpoint: GET /api/logout
     */
    async logout() {
      const notificationStore = useNotificationStore()

      // Hapus asosiasi token sebelum Bearer token login dibersihkan.
      try {
        await notificationStore.unregisterToken()
      } catch (e) {
        // Kegagalan unregister FCM tidak boleh menghalangi proses logout utama.
        console.warn('Gagal menghapus FCM token dari backend:', e)
      }

      try {
        await api.get('/logout')
      } catch (e) {
        console.error('Logout error:', e)
      } finally {
        this.token = null
        this.user = null
        this.menuuser = []
        this.error = null
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('user')
        localStorage.removeItem('menuuser')

        try {
          stopPermissionWatcher()
          notificationStore.stop()
          useMenu().resetMenu()
        } catch (e) {
          console.warn('Gagal mengembalikan menu sidebar:', e)
        }
      }
    }
  }
})
