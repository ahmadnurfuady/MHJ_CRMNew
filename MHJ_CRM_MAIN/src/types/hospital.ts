/**
 * Rumah Sakit adalah data dari tabel `companies` di backend.
 * Nama kolom database tertera di komentar setiap field.
 */
export interface Hospital {
  id: number
  /** Penanda fixture lokal untuk preview UI; tidak pernah berasal dari API. */
  isDemo?: boolean
  /** company_name */
  name: string
  /** company_owner */
  owner: string
  /** telephone */
  phone: string
  /** email */
  email: string
  /** website */
  website: string
  /** industry */
  industry: string
  /** description */
  description: string
  /** address */
  address: string
  /** map_address */
  mapAddress: string
  /** country */
  country: string
  /** province */
  province: string
  /** city */
  city: string
  /** pos_code */
  posCode: string
  /** kd_kelurahan */
  kdKelurahan: string
  /** aktif (1 = aktif) */
  aktif: number
  /** status_finance / grading dari penilaian Finance */
  financeStatus: string
  /** kelas Rumah Sakit, bila disediakan endpoint company */
  hospitalClass: string
  /** jenis Rumah Sakit, bila disediakan endpoint company */
  hospitalType: string
  /** Field khusus form Rumah Sakit. */
  jenis: string
  tipe: string
  penyelenggara: string
  tipeMarketingGo500: string
  sirs: string
  latitude?: number
  longitude?: number
  /** metrik ringkas per Rumah Sakit */
  totalContacts?: number
  totalProjects?: number
  totalInstalledEquipment?: number
  /** tanggal aktivitas kunjungan terbaru */
  lastVisitAt: string
}

/** Data kontak yang ikut dikembalikan endpoint fetchcompanybyid. */
export interface HospitalContactAssociation {
  id: number
  country: string
  province: string
  city: string
  createdById?: number
  gender: string
  projectName: string
  projectId?: number
  latitude?: number
  longitude?: number
}

/**
 * Payload create/update Rumah Sakit memakai nama kolom database `companies`.
 * Hanya field yang sudah terkonfirmasi kolomnya yang dikirim.
 */
export interface HospitalPayload {
  company_name: string
  /** Diisi dari field Penyelenggara pada form Tambah Rumah Sakit. */
  company_owner?: string
  telephone?: string
  map_address?: string
  email?: string
  website?: string
  description?: string
  address?: string
  country?: string
  province?: string
  city?: string
  pos_code?: string
  jenis?: string
  /** Alias backend/SP untuk field Jenis. */
  industry?: number | null
  tipe?: string
  /** Alias backend/SP untuk field Tipe. */
  type?: number | null
  penyelenggara?: string
  tipe_marketing_go500?: string
  sirs?: string
  latitude?: number | null
  longitude?: number | null
  /** Grading/status yang dikelola oleh Finance. */
  status_finance?: string
  /** Alias yang dipakai sebagian respons/prosedur backend. */
  grading?: string
}
