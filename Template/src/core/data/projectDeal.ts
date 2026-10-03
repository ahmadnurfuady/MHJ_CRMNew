import type { Select } from '@/types/common'

// Data form Add Project mengikuti Kerangka Menu - 3. Menu Project.
// Perusahaan, divisi, dan produk nantinya diambil dari Go500. Sekarang masih data contoh.

export interface DealOption extends Select {
  code?: string
  divisi?: string
  type?: 'Government' | 'Private'
  price?: number
}

// Type RS menentukan prefiks Deal Name: EKAT = Government, PRVT = Private.
export const hospitals: DealOption[] = [
  { value: 'rs-mata-surabaya', label: 'RS Mata Surabaya', type: 'Government' },
  { value: 'rsud-dr-soetomo', label: 'RSUD Dr. Soetomo', type: 'Government' },
  { value: 'rs-siloam-surabaya', label: 'RS Siloam Surabaya', type: 'Private' },
]

export const contacts: DealOption[] = [
  { value: 'dr-andi', label: 'Dr Andi' },
  { value: 'dr-budi', label: 'Dr Budi' },
]

export const owners: DealOption[] = [
  { value: 'andhi', label: 'Andhi' },
  { value: 'fuad', label: 'Fuad' },
]

// Nama alias divisi beserta kode divisi go500 (sesuai tabel di CSV).
export const divisiList: DealOption[] = [
  { value: 'MHJ CT & XR', label: 'MHJ CT & XR', code: 'DI' },
  { value: 'MHJ MRI', label: 'MHJ MRI', code: 'MRI' },
  { value: 'MHJ CATHLAB', label: 'MHJ CATHLAB', code: 'SI2' },
  { value: 'MHJ NUCLEAR', label: 'MHJ NUCLEAR', code: 'ONC1' },
  { value: 'MHJ BOSTON', label: 'MHJ BOSTON', code: 'SI3' },
  { value: 'MHJ MEDISTIM', label: 'MHJ MEDISTIM', code: 'SI7' },
  { value: 'MHJ AMBU', label: 'MHJ AMBU', code: 'AMB' },
  { value: 'MHJ SCHILLER', label: 'MHJ SCHILLER', code: 'SC' },
  { value: 'MHJ USG GI', label: 'MHJ USG GI', code: 'USGI' },
  { value: 'MHJ USG WHC', label: 'MHJ USG WHC', code: 'USWHC' },
  { value: 'MHJ USG POC', label: 'MHJ USG POC', code: 'USPOC' },
  { value: 'MHJ VSCAN', label: 'MHJ VSCAN', code: 'USVSC' },
  { value: 'MHJ OPHTHAL', label: 'MHJ OPHTHAL', code: 'ND' },
  { value: 'MHJ HCD', label: 'MHJ HCD', code: 'PAC' },
  { value: 'IDM DIGITAL IMAGING', label: 'IDM DIGITAL IMAGING', code: 'IDMDI' },
  { value: 'IDM DENTAL', label: 'IDM DENTAL', code: 'IDMDT' },
  { value: 'IDM PATIENT MONITOR', label: 'IDM PATIENT MONITOR', code: 'IDMPM' },
  { value: 'IDM SURGICAL', label: 'IDM SURGICAL', code: 'IDMSU' },
  { value: 'IDM PUMP', label: 'IDM PUMP', code: 'IDMPU' },
  { value: 'IDM Suction Pump', label: 'IDM Suction Pump', code: 'IDMSP' },
  { value: 'IDM NITRIC OXIDE', label: 'IDM NITRIC OXIDE', code: 'IDMNO' },
  { value: 'IDM STERILIZATOR', label: 'IDM STERILIZATOR', code: 'IDMST' },
  { value: 'IDM INSTRUMENT', label: 'IDM INSTRUMENT', code: 'IDMIN' },
  { value: 'IDM MOT', label: 'IDM MOT', code: 'IDMMO' },
  { value: 'IDM VENTILATOR & ANESTHESIA', label: 'IDM VENTILATOR & ANESTHESIA', code: 'IDMVA' },
  { value: 'IDM MAINTENANCE KIT', label: 'IDM MAINTENANCE KIT', code: 'IDMMK' },
  { value: 'IDM INSTRUMENT MATA', label: 'IDM INSTRUMENT MATA', code: 'IDMIM' },
  { value: 'IDM CABINET', label: 'IDM CABINET', code: 'IDMCB' },
  { value: 'IDM Healthcare Digital', label: 'IDM Healthcare Digital', code: 'IDMHC' },
]

// Produk difilter menurut kode divisi. Harga diambil dari go500 (contoh: OCT).
export const products: DealOption[] = [
  { value: 'OCT', label: 'OCT', divisi: 'ND', price: 2500000000 },
]

export const competitors: DealOption[] = [
  { value: 'Zeiss', label: 'Zeiss' },
  { value: 'Lainnya', label: 'Lainnya' },
]

export const fundingSources: DealOption[] = [
  { value: 'APBD', label: 'APBD' },
  { value: 'APBN', label: 'APBN' },
  { value: 'Swasta', label: 'Swasta' },
]

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
