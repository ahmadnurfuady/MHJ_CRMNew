export type PiutangStatus = 'on_progress' | 'terlambat' | 'lunas'

export interface Piutang {
  id: string
  faskes: string
  produk: string
  noNota: string
  terminKe?: number
  terminTotal?: number
  tipeBayar: 'termin' | 'sekali' | 'pelunasan'
  totalPiutang: number
  jatuhTempo?: string
  tanggalLunas?: string
  status: PiutangStatus
}
