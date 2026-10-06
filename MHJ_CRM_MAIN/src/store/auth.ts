import { defineStore } from 'pinia'
import { api } from '@/services/api'
import { useMenu } from '@/store/menu'
import { stopPermissionWatcher } from '@/services/permissionWatcher'

// ── Tipe data sesuai kontrak API backend ──────────────────────────────────────
export interface AuthUser {
  id: number
  name: string
  email: string
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
        const response = await api.post('/login', credentials)
        const data = response.data

        if (data.token) {
          this.token = data.token
          this.user = data.user || null
          localStorage.setItem('token', data.token)
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
     * Memuat menu dinamis pengguna aktif.
     * Catatan: Endpoint lama POST /api/user/validate mencari tabel dbflmenuapp (mobile/APK)
     * yang tidak ada di database web. Untuk web, menu dimuat melalui GET /api/menuweb.
     */
    async validateAndFetchMenu() {
      await this.syncSidebarMenu()
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

        try {
          stopPermissionWatcher()
          useMenu().resetMenu()
        } catch (e) {
          console.warn('Gagal mengembalikan menu sidebar:', e)
        }
      }
    }
  }
})
