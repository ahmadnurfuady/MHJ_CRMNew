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

/**
 * Memeriksa izin pada beberapa kandidat rute sekaligus, cukup satu yang mengizinkan.
 * Dipakai bila sebuah halaman dapat dijangkau lewat beberapa alias rute, atau bila
 * halaman anak (misal formulir tambah/edit) mewarisi izin dari halaman daftarnya.
 */
export function canAny(action: PermissionAction, routePaths: string[]): boolean {
  return routePaths.some((path) => can(action, path))
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

/**
 * Memeriksa apakah pengguna berhak mengakses halaman/rute tertentu.
 * - Mengembalikan false jika rute terikat ke menu yang memiliki HASACCESS == 0.
 * - Mengembalikan true jika rute diizinkan (HASACCESS == 1) atau merupakan rute publik/dashboard.
 */
export function canAccessRoute(path: string): boolean {
  const normalized = normalize(path)

  // Rute dasar dan otentikasi selalu diizinkan
  const PUBLIC_OR_ROOT = ['/', '/crmAdmin', '/dashboards/default', '/dashboards/dashboard_default']
  if (
    PUBLIC_OR_ROOT.includes(normalized) ||
    normalized.startsWith('/auth') ||
    normalized.startsWith('/coming_soon')
  ) {
    return true
  }

  const rawMenus = readRawMenus()
  // Jika menu belum dimuat dari backend sama sekali, izinkan sementara agar inisialisasi awal lancar
  if (rawMenus.length === 0) {
    return true
  }

  const menu = findMenuForPath(path)
  // Jika rute ini terikat dengan salah satu item menu dinamis dari backend:
  if (menu) {
    const accessVal = menu.HASACCESS ?? menu.akses
    if (accessVal !== undefined && accessVal !== null) {
      return Number(accessVal) === 1
    }
    return (
      Number(menu.tambah) === 1 ||
      Number(menu.koreksi) === 1 ||
      Number(menu.hapus) === 1 ||
      Number(menu.export) === 1
    )
  }

  // Jika rute internal bawaan template tidak tercatat dalam tabel menu dinamis: tetap izinkan
  return true
}

