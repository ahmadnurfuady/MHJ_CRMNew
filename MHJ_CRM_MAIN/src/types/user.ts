export interface User {
  name: string
  userProfile: string
  userEmail: string
  addresses: Address[]
}

export interface Info {
  id: number
  icon: string
  label: string
  value: string
}

export interface Address {
  id: number
  address: string
  pinCode: string
  contact: string
  tag?: string
  radioId?: string
}

export interface Users {
  id: number
  userName: string
  name: string
  userProfile: string
  designation: string
  bio: string
  email: string
  DOB: string
  contactNumber: string
  location: string
  post: number
  followers: number
  following: number
  role: string
  status: string
  creationDate: string
}

export interface Notification {
  id: number
  userProfile: string
  title: string
  description: string
  time?: string
  date: string
}

export interface Role {
  id: number
  role: string
  creationDate: string
  lastUpdateDate: string
  status: string
}

export interface Module {
  id: number
  name: string
  isChecked: boolean
  modulePermission: Permission[]
}

export interface Permission {
  id: number
  isChecked: boolean
  permissionId: number
  name: string
}

export interface Links {
  id: number
  icon: string
  url: string
  title?: string
}

/* ──────────────────────────────────────────────────────────────────────────
 * Modul User CRM — tabel dbo.userscrm, view dbo.v_userscrm_list,
 * stored procedure sp_users_crud.
 * ────────────────────────────────────────────────────────────────────────── */

/** Satu baris pengguna CRM. Kolom opsional karena view browse hanya mengirim sebagian. */
export interface UserCrmItem {
  id: number
  name?: string | null
  firstname?: string | null
  lastname?: string | null
  email?: string | null
  /** Backend browse mengembalikan `Telephone`, fetchusersbyid mengembalikan `no_handphone`. */
  no_handphone?: string | null
  Telephone?: string | null
  nik?: string | null
  primaryteam?: string | null
  secondaryteam?: string | null
  stafflevel?: string | null
  role?: string | null
  /**
   * Relasi many-to-many (tabel perantara users_cabang / users_devisi /
   * users_tipemarketing). `fetchusersbyid` mengirim array murni, sedangkan
   * endpoint browse bisa mengirim string tunggal atau JSON hasil agregasi,
   * jadi bentuk longgar ini dinormalkan lewat `toCodeArray()`.
   */
  KodeCabang?: string[] | string | null
  KodeDevisi?: string[] | string | null
  KodeTipeMarketing?: string[] | string | null
  idjabatan?: number | string | null
}

export type UserCrudChoice = 'i' | 'u' | 'd'

/** Payload sp_users_crud. Saat choice 'd' hanya id yang dipakai backend. */
export interface UserCrudPayload {
  choice: UserCrudChoice
  action?: UserCrudChoice
  id?: number | null
  name?: string
  firstname?: string
  lastname?: string
  email?: string
  /** Kosongkan saat edit bila sandi tidak diubah — backend mempertahankan sandi lama. */
  password?: string | null
  no_handphone?: string
  nohandphone?: string
  Telephone?: string
  nik?: string
  primaryteam?: string | null
  secondaryteam?: string | null
  stafflevel?: string | null
  role?: string | null
  /** Array kode — backend meng-encode menjadi JSON string untuk sp_users_crud. */
  KodeCabang?: string[]
  kodecabang?: string[]
  KodeDevisi?: string[]
  kodedevisi?: string[]
  KodeTipeMarketing?: string[]
  kodetipemarketing?: string[]
  idjabatan?: number | string | null
}

export interface UserBrowseParams {
  page?: number
  per_page?: number
  term?: string
  role?: string
  desc?: number
}

/** Paginator Laravel. Field yang tidak dipakai UI sengaja tidak didaftarkan. */
export interface UserBrowseResponse {
  current_page: number
  data: UserCrmItem[]
  per_page: number
  last_page: number
  total: number
  from: number | null
  to: number | null
}

/**
 * Opsi dropdown yang sudah dinormalisasi.
 * Kedua dokumen API tidak mencantumkan nama kolom respons master-data,
 * jadi userService menormalkan bentuk apa pun ke pasangan value/label ini.
 */
export interface MasterOption {
  value: string
  label: string
}

export interface UserMasterOptions {
  cabang: MasterOption[]
  devisi: MasterOption[]
  tipeMarketing: MasterOption[]
  jabatan: MasterOption[]
}

/* ── Hierarki User ──────────────────────────────────────────────────────── */

export interface HierarchyUser {
  id: number
  name: string
  nama_jabatan?: string | null
  idjabatan?: number | null
  parent_id?: number | null
}

export interface UserHierarchyResponse {
  current_user: HierarchyUser
  atasan: HierarchyUser[]
  bawahan: HierarchyUser[]
}
