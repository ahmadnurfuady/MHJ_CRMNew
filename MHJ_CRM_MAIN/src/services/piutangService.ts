import { api } from '@/services/api'
import type { Piutang, PiutangStatus } from '@/types/piutang'

/** Satu baris dari `GET /api/dashboardpiutang/daftar`. */
interface PiutangApiRow {
  id: number | string
  status: PiutangStatus
  nama_pelanggan?: string | null
  deskripsi?: string | null
  no_nota?: string | null
  nilai_piutang?: number | string | null
  detail_termin?: string | null
  tgl_jatuh_tempo?: string | null
  tgl_lunas?: string | null
  label_status?: string | null
  label_timeline?: string | null
}

interface PiutangApiResponse {
  data?: PiutangApiRow[]
  total?: number
  total_per_status?: Partial<Record<PiutangStatus, number>>
}

export interface PiutangListResult {
  items: Piutang[]
  totalPerStatus: Record<PiutangStatus, number>
}

function toNumber(value: unknown): number {
  const number = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(number) ? number : 0
}

/**
 * Ubah satu baris API menjadi model `Piutang` untuk UI. Label siap-pakai dari
 * backend (detail_termin / label_timeline) ikut dibawa; util formatTermin /
 * formatLabelWaktu akan memakainya langsung bila ada.
 */
function mapRow(row: PiutangApiRow): Piutang {
  return {
    id: String(row.id),
    faskes: (row.nama_pelanggan ?? '').trim(),
    produk: (row.deskripsi ?? '').trim(),
    noNota: (row.no_nota ?? '').trim(),
    // tipeBayar hanya dipakai bila detailTermin kosong; default 'termin'.
    tipeBayar: 'termin',
    totalPiutang: toNumber(row.nilai_piutang),
    jatuhTempo: row.tgl_jatuh_tempo ?? undefined,
    tanggalLunas: row.tgl_lunas ?? undefined,
    status: row.status,
    detailTermin: row.detail_termin ?? undefined,
    labelWaktu: row.label_timeline ?? undefined,
  }
}

/**
 * `GET /api/dashboardpiutang/daftar` — daftar piutang + jumlah per status.
 * Tanpa argumen mengambil semua status sekaligus (FE menyaring per tab lokal);
 * `status` opsional memfilter di sisi server.
 */
export async function fetchPiutangList(status?: PiutangStatus): Promise<PiutangListResult> {
  const response = await api.getbydata<PiutangApiResponse>(
    'dashboardpiutang/daftar',
    status ? { status } : {},
  )

  const rows = Array.isArray(response.data?.data) ? response.data!.data! : []
  const counts = response.data?.total_per_status ?? {}

  return {
    items: rows.map(mapRow),
    totalPerStatus: {
      on_progress: toNumber(counts.on_progress),
      terlambat: toNumber(counts.terlambat),
      lunas: toNumber(counts.lunas),
    },
  }
}
