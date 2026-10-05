import { api } from '@/services/api'
import type { FlMenuRawItem } from '@/types/menu'

/** Batas waktu lebih pendek dari default: sidebar punya menu statis sebagai cadangan. */
const MENU_TIMEOUT_MS = 6000

export const menuRoleService = {
  /**
   * GET /api/menuweb — menu pengguna yang sedang login.
   * Backend membaca email dari token JWT lalu menjalankan sp_webmenuusercrm.
   */
  async getWebMenu(): Promise<FlMenuRawItem[]> {
    const response = await api.get<{ dbmenu2?: FlMenuRawItem[]; data?: FlMenuRawItem[] }>(
      '/menuweb',
      { timeout: MENU_TIMEOUT_MS }
    )
    return response.data?.dbmenu2 ?? response.data?.data ?? []
  },

  /**
   * POST /api/berkas/getflmenu — menu & hak akses pengguna tertentu.
   * Backend mencocokkan `username` ke kolom `name` pada tabel users.
   */
  async getFlMenu(username: string): Promise<FlMenuRawItem[]> {
    const response = await api.post<{ data?: FlMenuRawItem[] }>(
      '/berkas/getflmenu',
      { username },
      { timeout: MENU_TIMEOUT_MS }
    )
    return response.data?.data ?? []
  },

  /** POST /api/berkas/saveedit — menyimpan matriks hak akses satu pengguna. */
  async savePermissions(rows: FlMenuRawItem[]): Promise<{ message?: string }> {
    const response = await api.post<{ message?: string }>('/berkas/saveedit', rows)
    return response.data
  },
}
