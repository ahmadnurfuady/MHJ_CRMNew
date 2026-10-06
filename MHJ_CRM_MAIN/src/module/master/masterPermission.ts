import { routes } from '@/router/routes'
import { canAny } from '@/utils/permission'
import type { PermissionAction } from '@/types/menu'

/** Izin CRUD untuk menu Master Jabatan (satu-satunya master data yang dapat diubah dari UI). */
export function canMasterJabatan(action: PermissionAction): boolean {
  return canAny(action, [routes.Master.Jabatan])
}
