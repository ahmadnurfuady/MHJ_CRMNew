import { routes } from '@/router/routes'
import { canAny } from '@/utils/permission'
import type { PermissionAction } from '@/types/menu'

/**
 * Kandidat `pathfile` menu User di dbFlMenuWebcrm.
 * Rute daftar user punya alias, dan formulir tambah/edit mewarisi izin dari
 * halaman daftar karena backend tidak mendaftarkan menu terpisah untuk formulir.
 */
export const USER_MENU_PATHS = [routes.User.UserList, '/user/user-list', routes.CrmAdmin.Users]

/** Izin CRUD untuk seluruh modul User, apa pun alias rute yang sedang dibuka. */
export function canUser(action: PermissionAction): boolean {
  return canAny(action, USER_MENU_PATHS)
}
