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
  /**
   * Label siap-tampil dari backend (detail_termin / label_timeline). Dipakai
   * langsung oleh util bila ada; data lokal tanpa label ini tetap dihitung dari
   * field terstruktur di atas.
   */
  detailTermin?: string
  labelWaktu?: string
}
