import { api } from '@/services/api'

/**
 * Response mentah dari `GET /api/dashboard/metrics`
 * (controller: `DashboardController@dashboardMetrics`). Shape ini
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
}

interface MetricsResponse {
  status: string
  data: DashboardMetricsRaw
}

export interface HospitalMapPoint {
  id: number | string
  name: string
  type?: string | null
  city?: string | null
  province?: string | null
  branch?: string | null
  coordinates: { lat: number; lng: number }
  visit_frequency: number
  sales_volume: number
  active_deals: number
  metric_value: number
  display_label: string
}

interface HospitalMapResponse {
  status: string
  mode: string
  total: number
  data: HospitalMapPoint[]
}

/** `GET /api/dashboard/metrics` → metric mentah untuk KPI, benchmark & coverage. */
export async function fetchDashboardMetrics(params?: {
  branchId?: number | string | null
  divisionId?: number | string | null
}): Promise<DashboardMetricsRaw | null> {
  try {
    const response = await api.get<MetricsResponse>('/dashboard/metrics', {
      params: {
        branch_id: params?.branchId ?? undefined,
        division_id: params?.divisionId ?? undefined,
      },
    })
    return response.data?.data ?? null
  } catch (error) {
    console.error('Gagal memuat dashboard metrics.', error)
    return null
  }
}

/** `GET /api/dashboard/hospital-map` → daftar RS beserta koordinat untuk peta cakupan. */
export async function fetchHospitalMap(mode: 'visit' | 'sales' = 'visit'): Promise<HospitalMapPoint[]> {
  try {
    const response = await api.get<HospitalMapResponse>('/dashboard/hospital-map', {
      params: { mode },
    })
    return response.data?.data ?? []
  } catch (error) {
    console.error('Gagal memuat hospital map.', error)
    return []
  }
}
