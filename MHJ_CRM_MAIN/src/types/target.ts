/** Satu baris target penjualan: nominal target & realisasi per periode-cabang-divisi. */
export interface TargetItem {
  id: number
  tahun: number
  bulan: number | null
  nama_bulan: string
  KodeCabang: string
  nama_cabang: string
  KodeDevisi: string
  nama_devisi: string
  nominal: number
  realisasi: number
  persentase_capaian: number
  selisih: number
  keterangan: string | null
  created_by?: number | null
  created_at?: string | null
  updated_by?: number | null
  updated_at?: string | null
}

/** Ringkasan KPI untuk kartu di atas tabel target. */
export interface TargetKpi {
  total_target: number
  total_realisasi: number
  gap: number
  avg_capaian: number
  total_baris: number
}

/** Opsi dropdown master cabang / divisi. */
export interface TargetMasterOption {
  kode: string
  nama: string
}

/** Payload simpan/ubah target. */
export interface TargetFormPayload {
  tahun: number
  bulan: number | null
  kode_cabang: string
  kode_devisi: string
  nominal: number
  realisasi: number
  keterangan: string | null
}
