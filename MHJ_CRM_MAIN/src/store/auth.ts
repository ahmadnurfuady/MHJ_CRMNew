import { defineStore } from 'pinia'
import { api } from '@/services/api'

// ── Tipe data sesuai kontrak API backend ──────────────────────────────────────
export interface AuthUser {
  id: number
  name: string
  email: string
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

// ── Store Pinia ───────────────────────────────────────────────────────────────
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || null,
    menuuser: JSON.parse(localStorage.getItem('menuuser') || '[]'),
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    /**
     * Login ke backend via POST /api/login.
     * Field `email` bisa berisi email ataupun username (backend otomatis mendeteksi).
     */
    async login(credentials: { email: string; password: string }) {
      this.loading = true
      this.error = null
      try {
        const response = await api.post('/login', credentials)
        const data = response.data

        if ((data.success || data.token) && data.token) {
          this.token = data.token
          this.user = data.user || null
          localStorage.setItem('token', data.token)
          if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user))
          }

          // Ambil hak akses menu user dari backend
          await this.validateAndFetchMenu()

          return { success: true, message: data.message || data.msg || 'Login Berhasil' }
        }

        return { success: false, message: 'Respon server tidak valid' }
      } catch (err: any) {
        let errorMsg = 'Login gagal. Periksa koneksi ke server.'
        const resData = err.response?.data

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
     * Validasi sesi pengguna aktif & ambil daftar hak akses menu dinamis.
     * Endpoint: POST /api/user/validate
     */
    async validateAndFetchMenu() {
      try {
        const response = await api.post('/user/validate')
        if (response.data?.menuuser) {
          this.menuuser = response.data.menuuser
          localStorage.setItem('menuuser', JSON.stringify(response.data.menuuser))
        }
        // Backend bisa mengirimkan token yang di-refresh
        if (response.data?.token) {
          this.token = response.data.token
          localStorage.setItem('token', response.data.token)
        }
        if (response.data?.user) {
          this.user = response.data.user
          localStorage.setItem('user', JSON.stringify(response.data.user))
        }
      } catch (e) {
        console.warn('Gagal memuat menu dinamis pengguna:', e)
      }
    },

    /**
     * Logout: panggil endpoint backend lalu bersihkan seluruh state & localStorage.
     * Endpoint: GET /api/logout
     */
    async logout() {
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
        localStorage.removeItem('user')
        localStorage.removeItem('menuuser')
      }
    }
  }
})
