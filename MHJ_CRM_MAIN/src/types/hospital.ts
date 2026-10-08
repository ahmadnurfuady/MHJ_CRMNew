/**
 * Rumah Sakit adalah data dari tabel `companies` di backend.
 * Nama kolom database tertera di komentar setiap field.
 */
export interface Hospital {
  id: number
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
  /** kelas Rumah Sakit, bila disediakan endpoint company */
  hospitalClass: string
  /** jenis Rumah Sakit, bila disediakan endpoint company */
  hospitalType: string
  /** metrik ringkas per Rumah Sakit */
  totalContacts?: number
  totalProjects?: number
  totalInstalledEquipment?: number
  /** tanggal aktivitas kunjungan terbaru */
  lastVisitAt: string
}

/**
 * Payload create/update Rumah Sakit memakai nama kolom database `companies`.
 * Hanya field yang sudah terkonfirmasi kolomnya yang dikirim.
 */
export interface HospitalPayload {
  company_name: string
  telephone?: string
  email?: string
  website?: string
  description?: string
  address?: string
  country?: string
  province?: string
  city?: string
  pos_code?: string
}
