import type { FlMenuRawItem, PermissionAction } from '@/types/menu'

export type { PermissionAction }

export const RAW_MENU_STORAGE_KEY = 'raw_user_menus'

function readRawMenus(): FlMenuRawItem[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(RAW_MENU_STORAGE_KEY) || '')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function normalize(path: string): string {
  const trimmed = path.trim().replace(/\/+$/, '')
  return trimmed || '/'
}

/**
 * Mencari menu yang paling spesifik untuk sebuah rute. Pencocokan memakai prefix
 * terpanjang, bukan `includes`, agar menu induk seperti `/penjualan` tidak menang
 * atas `/penjualan/rumah-sakit` hanya karena urutannya lebih awal.
 */
function findMenuForPath(path: string): FlMenuRawItem | null {
  const target = normalize(path)

  let best: FlMenuRawItem | null = null
  let bestLength = -1

  for (const menu of readRawMenus()) {
    if (!menu.pathfile) continue

    const candidate = normalize(menu.pathfile)
    const matches = target === candidate || target.startsWith(`${candidate}/`)

    if (matches && candidate.length > bestLength) {
      best = menu
      bestLength = candidate.length
    }
  }

  return best
}

/**
 * Memeriksa hak akses aksi CRUD pengguna pada menu yang sedang aktif.
 * Mengembalikan false jika menu tidak ditemukan, sehingga tombol disembunyikan
 * secara default ketika hak akses belum dimuat.
 */
export function can(action: PermissionAction, routePath?: string): boolean {
  const menu = findMenuForPath(routePath || window.location.pathname)
  if (!menu) return false
  return Boolean(Number(menu[action]))
}

/** Mengembalikan seluruh izin CRUD untuk sebuah rute sekaligus. */
export function permissionsFor(routePath?: string) {
  const menu = findMenuForPath(routePath || window.location.pathname)
  return {
    tambah: Boolean(Number(menu?.tambah)),
    koreksi: Boolean(Number(menu?.koreksi)),
    hapus: Boolean(Number(menu?.hapus)),
    export: Boolean(Number(menu?.export)),
  }
}
