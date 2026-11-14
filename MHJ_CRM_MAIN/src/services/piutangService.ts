import { api } from '@/services/api'
import type { Piutang, PiutangStatus } from '@/types/piutang'

export interface PiutangListParams {
  search?: string
  installed_base?: string
  visit_urgency?: string
  grading?: string
  tipe_rs?: string
  penyelenggara?: string
  kode_cabang?: string
  provinsi?: string
  kota?: string
}

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
 */
function extractHospitalNames(payload: unknown): Set<string> {
  if (!payload || typeof payload !== 'object') return new Set()

  const root = payload as Record<string, unknown>
  const companies = root.companies
  const rows = Array.isArray(companies)
    ? companies
    : companies && typeof companies === 'object' && Array.isArray((companies as Record<string, unknown>).data)
      ? ((companies as Record<string, unknown>).data as unknown[])
      : Array.isArray(root.list)
        ? root.list
        : []

  return new Set(
    rows
      .filter((row): row is Record<string, unknown> => Boolean(row) && typeof row === 'object')
      .map((row) => String(row.company_name ?? row.name ?? '').trim().toLocaleLowerCase('id-ID'))
      .filter(Boolean),
  )
}

/**
 * Ambil daftar Piutang. Filter Faskes menggunakan endpoint company yang sudah ada,
 * lalu hasil Piutang dicocokkan berdasarkan nama pelanggan tanpa perubahan backend.
 */
export async function fetchPiutangList(params: PiutangListParams = {}): Promise<PiutangListResult> {
  const search = params.search?.trim()
  const filterParams = Object.fromEntries(
    Object.entries(params).filter(([key, value]) => key !== 'search' && value !== undefined),
  )
  const hasHospitalFilters = Object.values(filterParams).some((value) => String(value).trim() !== '')

  const [response, hospitalResponse] = await Promise.all([
    api.getbydata<PiutangApiResponse>('dashboardpiutang/daftar', search ? { search } : {}),
    hasHospitalFilters
      ? api.getbydata('company', { ...filterParams, per_page: 1000, limit: 1000 })
      : Promise.resolve(null),
  ])

  const rows = Array.isArray(response.data?.data) ? response.data!.data! : []
  const counts = response.data?.total_per_status ?? {}
  const hospitalNames = hospitalResponse ? extractHospitalNames(hospitalResponse.data) : null
  const items = rows
    .map(mapRow)
    .filter((item) => !hospitalNames || hospitalNames.has(item.faskes.toLocaleLowerCase('id-ID')))

  const filteredCounts: Record<PiutangStatus, number> = {
    on_progress: 0,
    terlambat: 0,
    lunas: 0,
  }
  items.forEach((item) => filteredCounts[item.status]++)

  return {
    items,
    totalPerStatus: hospitalNames
      ? filteredCounts
      : {
          on_progress: toNumber(counts.on_progress),
          terlambat: toNumber(counts.terlambat),
          lunas: toNumber(counts.lunas),
        },
  }
}
