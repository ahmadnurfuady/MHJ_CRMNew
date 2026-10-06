import { api } from '@/services/api'
import { RAW_MENU_STORAGE_KEY, canAccessRoute } from '@/utils/permission'
import { transformFlMenuToTree } from '@/utils/menuBuilder'
import { useMenu } from '@/store/menu'
import router from '@/router'
import Swal from 'sweetalert2'
import type { FlMenuRawItem } from '@/types/menu'

let syncInterval: number | null = null
let isSyncing = false
let isEvicting = false

/**
 * Mengambil data menu terbaru dari /api/menuweb di latar belakang,
 * menyinkronkan struktur sidebar, dan jika halaman yang saat ini sedang dibuka
 * pengguna telah dicabut hak aksesnya (HASACCESS == 0), mengarahkan pengguna
 * secara mulus ke Dashboard (/crmAdmin) disertai notifikasi.
 */
export async function syncPermissionsAndEvict(): Promise<void> {
  const token = localStorage.getItem('token')
  if (!token || isSyncing || isEvicting) return

  // Abaikan saat berada di halaman login/otentikasi
  const currentPath = router.currentRoute.value.path
  if (
    currentPath.startsWith('/auth') ||
    currentPath.startsWith('/coming_soon') ||
    currentPath === '/crmAdmin' ||
    currentPath === '/'
  ) {
    return
  }

  isSyncing = true
  try {
    const response = await api.get<{ dbmenu2?: FlMenuRawItem[]; data?: FlMenuRawItem[] }>(
      '/menuweb',
      { timeout: 6000 }
    )
    const freshMenus = response.data?.dbmenu2 ?? response.data?.data ?? []
    if (!Array.isArray(freshMenus) || freshMenus.length === 0) return

    const prevRawStr = localStorage.getItem(RAW_MENU_STORAGE_KEY)
    const newRawStr = JSON.stringify(freshMenus)

    // Jika terjadi perubahan hak akses atau menu dari database
    if (prevRawStr !== newRawStr) {
      localStorage.setItem(RAW_MENU_STORAGE_KEY, newRawStr)
      try {
        const menuStore = useMenu()
        menuStore.menuState.menu = transformFlMenuToTree(freshMenus)
      } catch (err) {
        console.warn('Gagal memperbarui menu sidebar secara dinamis:', err)
      }
    }

    // Periksa apakah halaman yang sedang aktif saat ini masih boleh diakses
    if (!canAccessRoute(currentPath)) {
      isEvicting = true
      await Swal.fire({
        icon: 'warning',
        title: 'Hak Akses Berubah',
        text: 'Hak akses Anda untuk halaman ini telah diperbarui oleh Administrator. Anda akan dialihkan ke Dashboard.',
        confirmButtonColor: 'var(--theme-default)',
        timer: 3500,
        timerProgressBar: true,
      })
      isEvicting = false
      router.replace('/crmAdmin')
    }
  } catch (error) {
    // Silent fail agar pengalaman pengguna tidak terganggu jika server lambat
    console.debug('Background permission sync error:', error)
  } finally {
    isSyncing = false
  }
}

function onWindowFocus(): void {
  syncPermissionsAndEvict()
}

function onVisibilityChange(): void {
  if (document.visibilityState === 'visible') {
    syncPermissionsAndEvict()
  }
}

/**
 * Memulai pengawas hak akses:
 * 1. Pengecekan interval berkala (setiap 15 detik)
 * 2. Pengecekan saat tab/jendela kembali aktif (focus & visibilitychange)
 */
export function startPermissionWatcher(): void {
  stopPermissionWatcher()

  // 1. Polling berkala setiap 5 menit; perubahan hak akses tidak perlu real-time
  syncInterval = window.setInterval(() => {
    syncPermissionsAndEvict()
  }, 300000)

  // 2. Event listener window & tab
  window.addEventListener('focus', onWindowFocus)
  document.addEventListener('visibilitychange', onVisibilityChange)
}

/**
 * Menghentikan pengawas hak akses (misal saat logout).
 */
export function stopPermissionWatcher(): void {
  if (syncInterval !== null) {
    clearInterval(syncInterval)
    syncInterval = null
  }
  window.removeEventListener('focus', onWindowFocus)
  document.removeEventListener('visibilitychange', onVisibilityChange)
}
