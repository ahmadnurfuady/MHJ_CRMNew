import { api } from '@/services/api'
import { fetchDashboardBundle } from '@/services/dashboardService'

/**
 * Metrics mentah dari bagian `metrics.data` pada `GET /api/dashboard`.
 * Shape ini
 * disamakan dengan isi SP `sp_view_dashboardmetrics` + fallback default
 * di controller, sehingga field selalu ada walau DB kosong.
 */
export interface DashboardMetricsRaw {
  target_nominal: number
  realisasi_omset: number
  target_achievement_percent: number
  global_win_rate_percent: number
  qty_po_terbit: number
  qty_project_masuk: number
  market_coverage_percent: number
  active_visited_hospitals: number
  total_target_hospitals: number
  active_projects_count: number
  stalled_projects_count: number
  backlog_value: number
  total_po_value: number
  invoiced_sales_value: number

  // Field siap tampil (dihitung backend, 1 field = 1 angka di Dashboard Manager)
  /** Kinerja Utama → bar Funnel Aktif */
  funnel_progress_percent: number
  /** Peluang Win vs Lost */
  win_count: number
  lost_count: number
  finished_count: number
  win_percent: number
  lost_percent: number
  /** Ringkasan Target & Benchmark */
  target_tahunan_value: number
  target_peluang_value: number
  real_peluang_value: number
  revenue_value: number
  /** Capaian Kinerja */
  winning_chance_percent: number
  peluang_progress_percent: number
  target_progress_percent: number
  capaian_average_percent: number
  /** Jangkauan Area dan Pasar → Cakupan Wilayah */
  area_visited_count: number
  area_target_count: number
  area_progress_percent: number
  /** Jangkauan Area dan Pasar → Cakupan Pasar */
  market_buying_count: number
  market_base_count: number
  market_progress_percent: number
}

/**
 * Row dari `GET /api/dashboard/hospital-map`
 * (controller: `DashboardController@hospitalMap`). SP mengembalikan ringkasan
 * daftar faskes beserta koordinat & jumlah peluang aktifnya. Nilai numerik
 * dikirim backend sebagai string, parsing dilakukan di komponen presentasi.
 * Nama field koordinat didukung dua variasi (`lat`/`lng` dan
 * `latitude`/`longitude`) agar sinkron dengan SP sqlsrv maupun fallback.
 */
export interface HospitalMapPoint {
  id: number | string
  name: string
  city?: string | null
  province?: string | null
  type?: string | null
  active_projects_count: number | string
  lat?: number | string | null
  lng?: number | string | null
  latitude?: number | string | null
  longitude?: number | string | null
  last_visit_at?: string | null
  lastVisitAt?: string | null
  last_visit?: string | null
  last_visited_at?: string | null
  latest_visit_at?: string | null
}

/**
 * Satu baris seri linearitas dari `GET /api/dashboard/project-linearity`
 * (controller: `DashboardController@projectLinearity`). Angka dikirim backend
 * sebagai string, parsing numerik dilakukan di komponen presentasi.
 */
export interface ProjectLinearityPoint {
  MonthNum: number | string
  MonthName: string
  baseline_coverage_3x: number | string
  total_project_input_value: number | string
}

export interface ProjectLinearityData {
  formula: string
  target_nominal: number
  monthly_baseline: number
  series: ProjectLinearityPoint[]
}

interface ProjectLinearityResponse {
  status: string
  data: ProjectLinearityData
}

/**
 * Satu baris drilldown divisi dari `GET /api/dashboard/win-rate-drilldown`
 * (controller: `DashboardController@winRateDrilldown`).
 */
export interface WinRateDivisionRow {
  division_name: string
  total_deals: number | string
}

interface WinRateDrilldownResponse {
  status: string
  data: WinRateDivisionRow[]
}

/** Bagian metrics `GET /api/dashboard` untuk KPI, benchmark & coverage. */
export async function fetchDashboardMetrics(params?: {
  branchId?: number | string | null
  divisionId?: number | string | null
}): Promise<DashboardMetricsRaw | null> {
  try {
    return (await fetchDashboardBundle(params)).metrics
  } catch (error) {
    console.error('Gagal memuat dashboard metrics.', error)
    return null
  }
}

/** Bagian hospital map `GET /api/dashboard` untuk daftar faskes + peluang aktif. */
export async function fetchHospitalMap(mode: 'visit' | 'sales' = 'visit'): Promise<HospitalMapPoint[]> {
  try {
    return (await fetchDashboardBundle({ mode })).hospitals
  } catch (error) {
    console.error('Gagal memuat hospital map.', error)
    return []
  }
}

/** `GET /api/dashboard/project-linearity` → seri linearitas proyek per bulan. */
export async function fetchProjectLinearity(): Promise<ProjectLinearityData | null> {
  try {
    const response = await api.get<ProjectLinearityResponse>('/dashboard/project-linearity')
    return response.data?.data ?? null
  } catch (error) {
    console.error('Gagal memuat project linearity.', error)
    return null
  }
}

/** `GET /api/dashboard/win-rate-drilldown` → distribusi jumlah deal per divisi produk. */
export async function fetchWinRateDrilldown(): Promise<WinRateDivisionRow[]> {
  try {
    const response = await api.get<WinRateDrilldownResponse>('/dashboard/win-rate-drilldown')
    return response.data?.data ?? []
  } catch (error) {
    console.error('Gagal memuat win rate drilldown.', error)
    return []
  }
}
