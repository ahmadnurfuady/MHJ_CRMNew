export interface MenuPermissions {
  tambah: boolean
  koreksi: boolean
  hapus: boolean
  export: boolean
}

export type PermissionAction = keyof MenuPermissions

/** Item mentah dari tabel dbFlMenuWebcrm via GET /api/menuweb atau POST /api/berkas/getflmenu */
export interface FlMenuRawItem {
  username?: string
  USERID?: string
  id?: string
  L1?: string
  parendId?: string
  Parent?: string
  name?: string
  CAPTION?: string
  akses?: number | boolean
  HASACCESS?: number | boolean
  tambah: number | boolean
  hapus: number | boolean
  koreksi: number | boolean
  export: number | boolean
  L0?: string
  icon?: string
  ICON?: string
  pathfile?: string
  ACCESS?: string
  FLAGKRM?: string | null
  Status?: string
  ImageIndex?: number
  L1lama?: string
  ACCESSlama?: string
  TreeLevel?: number
  NamaCaption?: string
  namaparent?: string
  captionmenu?: string
  pathfiledefault?: string
  captiondefault?: string
}

export interface MenuItem {
  id?: string
  headTitle?: string
  title?: string
  icon?: string
  type?: string
  badgeType?: string
  badge?: string
  active?: boolean
  menu?: boolean
  isPinned?: boolean | undefined
  path?: string
  children?: MenuItem[]
  bookmark?: boolean
  iconForDisplay?: string
  permissions?: MenuPermissions
}
