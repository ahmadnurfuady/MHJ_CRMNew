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
  Telephone?: string | null
  nik?: string | null
  primaryteam?: string | null
  secondaryteam?: string | null
  stafflevel?: string | null
  role?: string | null
  KodeCabang?: string | null
  KodeDevisi?: string | null
  KodeTipeMarketing?: string | null
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
  KodeCabang?: string | null
  kodecabang?: string | null
  KodeDevisi?: string | null
  kodedevisi?: string | null
  KodeTipeMarketing?: string | null
  kodetipemarketing?: string | null
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
