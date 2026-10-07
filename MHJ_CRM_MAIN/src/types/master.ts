/**
 * Tipe data modul Master Data CRM.
 * Skema mengikuti kolom tabel SQL Server di DOKUMENTASI_INTEGRASI_MASTER.md:
 * dbo.jabatan, dbo.dbCabang, dbo.dbdevisi, dbo.dbtipemarketing.
 */

export interface MasterJabatanItem {
  id: number
  nama_jabatan: string
  keterangan: string | null
  /** id jabatan atasan (parent); null bila jabatan level teratas. */
  parent_id?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type JabatanCrudChoice = 'i' | 'u' | 'd'

/**
 * Payload sp_jabatan_crud. Backend menerima aksi lewat `action` ATAU `choice`;
 * keduanya selalu dikirim dari service agar aman apa pun yang dibaca controller.
 */
export interface JabatanCrudPayload {
  action: JabatanCrudChoice
  choice?: JabatanCrudChoice
  id?: number | null
  nama_jabatan?: string
  keterangan?: string | null
  parent_id?: number | null
}

export interface MasterCabangItem {
  KodeCabang: string
  NamaCabang: string
  Alamat?: string
  Kota?: string
}

export interface MasterDevisiItem {
  KodeDevisi: string
  NamaDevisi: string
  NamaAlias?: string | null
}

export interface MasterTipeMarketingItem {
  KodeTipeMarketing: string
  namaTipeMarketing: string
  Keterangan?: string
  nonaktif?: string
  CreateDate?: string
}
