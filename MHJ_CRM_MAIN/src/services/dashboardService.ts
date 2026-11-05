import { api } from '@/services/api'
import type { DashboardMetricsRaw, HospitalMapPoint } from '@/services/analyticsService'
import type { PromoApiItem } from '@/services/promoService'

export interface DashboardTaskRow {
  id: number | string
  task_name?: string | null
  task_subject?: string | null
  hospital_name?: string | null
  company_name?: string | null
  projects_name?: string | null
  project_name?: string | null
  status?: string | null
  status_name?: string | null
  due_date?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export interface DashboardTaskMeta {
  total: number
  perPage: number
  currentPage: number
}

export interface DashboardBundle {
  metrics: DashboardMetricsRaw
  promos: PromoApiItem[]
  tasks: DashboardTaskRow[]
  taskMeta: DashboardTaskMeta
  hospitals: HospitalMapPoint[]
  hospitalMode: string
  hospitalTotal: number
}

export interface DashboardQuery {
  branchId?: number | string | null
  divisionId?: number | string | null
  mode?: string
  search?: string
  status?: string
  stage?: string
  limit?: number
  perPage?: number
  page?: number
}

interface DashboardResponse {
  status?: string
  data?: {
    metrics?: {
      data?: Partial<Record<keyof DashboardMetricsRaw, unknown>> | null
    } | null
    promo?: {
      data?: PromoApiItem[] | null
    } | null
    tasks?: {
      tasks?: {
        data?: DashboardTaskRow[] | null
        total?: unknown
        per_page?: unknown
        current_page?: unknown
      } | null
    } | null
    hospital_map?: {
      data?: HospitalMapPoint[] | null
      mode?: unknown
      total?: unknown
    } | null
  } | null
}

const activeRequests = new Map<string, Promise<DashboardBundle>>()
const cachedBundles = new Map<string, DashboardBundle>()

function toNumber(value: unknown, fallback = 0): number {
  const number = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(number) ? number : fallback
}

function normalizeMetrics(
  raw: Partial<Record<keyof DashboardMetricsRaw, unknown>> | null | undefined,
): DashboardMetricsRaw {
  return {
    target_nominal: toNumber(raw?.target_nominal),
    realisasi_omset: toNumber(raw?.realisasi_omset),
    target_achievement_percent: toNumber(raw?.target_achievement_percent),
    global_win_rate_percent: toNumber(raw?.global_win_rate_percent),
    qty_po_terbit: toNumber(raw?.qty_po_terbit),
    qty_project_masuk: toNumber(raw?.qty_project_masuk),
    market_coverage_percent: toNumber(raw?.market_coverage_percent),
    active_visited_hospitals: toNumber(raw?.active_visited_hospitals),
    total_target_hospitals: toNumber(raw?.total_target_hospitals),
    active_projects_count: toNumber(raw?.active_projects_count),
    stalled_projects_count: toNumber(raw?.stalled_projects_count),
    backlog_value: toNumber(raw?.backlog_value),
    total_po_value: toNumber(raw?.total_po_value),
    invoiced_sales_value: toNumber(raw?.invoiced_sales_value),
    funnel_progress_percent: toNumber(raw?.funnel_progress_percent),
    win_count: toNumber(raw?.win_count),
    lost_count: toNumber(raw?.lost_count),
    finished_count: toNumber(raw?.finished_count),
    win_percent: toNumber(raw?.win_percent),
    lost_percent: toNumber(raw?.lost_percent),
    target_tahunan_value: toNumber(raw?.target_tahunan_value),
    target_peluang_value: toNumber(raw?.target_peluang_value),
    real_peluang_value: toNumber(raw?.real_peluang_value),
    revenue_value: toNumber(raw?.revenue_value),
    winning_chance_percent: toNumber(raw?.winning_chance_percent),
    peluang_progress_percent: toNumber(raw?.peluang_progress_percent),
    target_progress_percent: toNumber(raw?.target_progress_percent),
    capaian_average_percent: toNumber(raw?.capaian_average_percent),
  }
}

export async function fetchDashboardBundle(
  query: DashboardQuery = {},
  options?: { force?: boolean },
): Promise<DashboardBundle> {
  const params = {
    branch_id: query.branchId ?? undefined,
    division_id: query.divisionId ?? undefined,
    mode: query.mode ?? 'visit',
    search: query.search || undefined,
    status: query.status || undefined,
    stage: query.stage || undefined,
    limit: query.limit ?? 100,
    per_page: query.perPage ?? undefined,
    page: query.page ?? 1,
  }
  const cacheKey = JSON.stringify(params)
  const cachedBundle = cachedBundles.get(cacheKey)
  if (!options?.force && cachedBundle) return cachedBundle
  const activeRequest = activeRequests.get(cacheKey)
  if (activeRequest) return activeRequest

  const request = api.get<DashboardResponse>('/dashboard', { params }).then((response) => {
    const payload = response.data?.data
    if (!payload) throw new Error('Response dashboard tidak memiliki data.')

    const taskPage = payload.tasks?.tasks
    const hospitalMap = payload.hospital_map
    const bundle: DashboardBundle = {
      metrics: normalizeMetrics(payload.metrics?.data),
      promos: Array.isArray(payload.promo?.data) ? payload.promo.data : [],
      tasks: Array.isArray(taskPage?.data) ? taskPage.data : [],
      taskMeta: {
        total: toNumber(taskPage?.total),
        perPage: toNumber(taskPage?.per_page, 100),
        currentPage: toNumber(taskPage?.current_page, 1),
      },
      hospitals: Array.isArray(hospitalMap?.data) ? hospitalMap.data : [],
      hospitalMode: typeof hospitalMap?.mode === 'string' ? hospitalMap.mode : 'visit',
      hospitalTotal: toNumber(hospitalMap?.total),
    }

    cachedBundles.set(cacheKey, bundle)
    return bundle
  }).finally(() => {
    activeRequests.delete(cacheKey)
  })

  activeRequests.set(cacheKey, request)
  return request
}

export function clearDashboardBundleCache(): void {
  cachedBundles.clear()
}
