import type { FlMenuRawItem } from '@/types/menu'

/**
 * Template struktur menu MHJ CRM untuk halaman Peran & Hak Akses.
 * DISELARASKAN dengan struktur sebenarnya di tabel dbFlMenuWebcrm (kode L1,
 * parent, dan pathfile sama persis), supaya penggabungan dengan data backend
 * di RolesMatrix 1:1 dan tidak menghasilkan baris ganda / parent yang salah.
 *
 * Catatan:
 * - "Deals" (L1 04) sengaja TIDAK disertakan (menu dihapus).
 * - Peluang = "Projects" (L1 05, /crmAdmin/Projects/list). Tidak ada lagi sub
 *   "Detail Peluang" / "Daftar Peluang" — cukup satu menu Peluang.
 * - Caption mengikuti caption DB agar konsisten dengan yang ditampilkan matriks.
 */
const row = (
  L1: string,
  caption: string,
  pathfile: string,
  icon: string,
  parent = '',
): FlMenuRawItem => ({
  L0: parent === '' ? '0' : '1',
  L1,
  id: L1,
  Parent: parent,
  parendId: parent === '' ? '0' : parent,
  CAPTION: caption,
  name: caption,
  NamaCaption: parent === '' ? caption : `    ${caption}`,
  namaparent: '',
  ICON: icon,
  icon: icon.toLowerCase(),
  pathfile,
  pathfiledefault: '/crmAdmin',
  captiondefault: 'Dashboard',
  captionmenu: caption,
  TreeLevel: parent === '' ? 1 : 2,
  ACCESS: '0',
  HASACCESS: 1,
  akses: 1,
  tambah: 1,
  koreksi: 1,
  hapus: 1,
  export: 0,
  Status: '0',
  FLAGKRM: null,
  ImageIndex: -1,
})

export const DEFAULT_CRM_MENU_TEMPLATE: FlMenuRawItem[] = [
  row('01', 'Dashboard', '/crmAdmin', 'LayoutDashboard'),
  row('02', 'Contacts', '/crmAdmin/contacts', 'Users'),
  row('03', 'Hospital', '/crmAdmin/companies', 'Building2'),
  row('05', 'Projects', '/crmAdmin/Projects/list', 'Package'),
  row('06', 'Tasks', '/crmAdmin/task', 'CheckSquare'),
  row('07', 'Report', '/crmAdmin/Report', 'BarChart3'),
  row('08', 'Kalender', '/crmAdmin/calendar', 'Calendar'),
  row('09', 'User', '/crmAdmin/users', 'Users'),
  row('0901', 'User list', '/crmAdmin/users/list', 'Users', '09'),
  row('0902', 'Roles & Permission', '/crmAdmin/roles', 'Shield', '09'),
  row('10', 'Settings', '/crmAdmin/settings', 'Settings'),
  row('1001', 'Promo', '/crmAdmin/settings/promo', 'Tag', '10'),
  row('1002', 'Target', '/crmAdmin/settings/target', 'Target', '10'),
  row('11', 'Master', '/crmAdmin/master', 'Database'),
  row('1101', 'Jabatan', '/crmAdmin/master/jabatan', 'UserCheck', '11'),
  row('1102', 'Tipe Marketing', '/crmAdmin/master/tipemarketing', 'Tag', '11'),
  row('1103', 'Devisi', '/crmAdmin/master/devisi', 'Layers', '11'),
  row('1104', 'Cabang', '/crmAdmin/master/cabang', 'Map', '11'),
]
