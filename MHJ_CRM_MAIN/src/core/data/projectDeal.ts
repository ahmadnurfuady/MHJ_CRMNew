import type { Select } from '@/types/common'

export interface DealOption extends Select {
  code?: string
  divisi?: string
  type?: 'Government' | 'Private'
  price?: number
}

// Alasan kalah/batal, muncul saat stage Closed Lost atau Closed Cancel.
export const lostReasons: DealOption[] = [
  { value: 'Tidak jadi pengadaan tahun ini', label: 'Tidak jadi pengadaan tahun ini' },
  { value: 'Budget dialihkan ke kebutuhan lain', label: 'Budget dialihkan ke kebutuhan lain' },
  { value: 'Tidak jadi beli', label: 'Tidak jadi beli' },
  { value: 'Harga Unit Terlalu Tinggi', label: 'Harga Unit Terlalu Tinggi' },
  {
    value: 'Skema Pembayaran Kompetitor Lebih Baik',
    label: 'Skema Pembayaran Kompetitor Lebih Baik',
  },
  { value: 'Paket Promo/Bundling Kompetitor', label: 'Paket Promo/Bundling Kompetitor' },
  { value: 'Spesifikasi Tidak Memenuhi', label: 'Spesifikasi Tidak Memenuhi' },
  { value: 'Performa alat kalah saing', label: 'Performa alat kalah saing' },
  { value: 'Garansi Kompetitor Lebih Panjang', label: 'Garansi Kompetitor Lebih Panjang' },
  {
    value: 'Hubungan User/Owner dengan Kompetitor',
    label: 'Hubungan User/Owner dengan Kompetitor',
  },
  { value: 'Gugur Tender', label: 'Gugur Tender' },
]
