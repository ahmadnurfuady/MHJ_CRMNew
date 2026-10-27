import { api } from '@/services/api'
import { extractList, isRecord, pick, pickString, type Dict } from '@/api/response'

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

interface DashboardListSource {
  items: Dict[]
  total: number
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

function parseNumber(value: unknown): number {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0
  if (typeof value !== 'string') return 0

  const direct = Number(value)
  if (Number.isFinite(direct)) return direct

  const normalized = value.trim().replace(/[^\d,.-]/g, '')
  if (!normalized) return 0

  const commaIndex = normalized.lastIndexOf(',')
  const dotIndex = normalized.lastIndexOf('.')
  let numeric = normalized

  if (commaIndex >= 0 && dotIndex >= 0) {
    const decimalSeparator = commaIndex > dotIndex ? ',' : '.'
    const thousandsSeparator = decimalSeparator === ',' ? /\./g : /,/g
    numeric = normalized.replace(thousandsSeparator, '').replace(decimalSeparator, '.')
  } else if (commaIndex >= 0) {
    numeric = /^-?\d{1,3}(,\d{3})+$/.test(normalized)
      ? normalized.replace(/,/g, '')
      : normalized.replace(',', '.')
  } else if (dotIndex >= 0 && /^-?\d{1,3}(\.\d{3})+$/.test(normalized)) {
    numeric = normalized.replace(/\./g, '')
  }

  const parsed = Number(numeric)
  return Number.isFinite(parsed) ? parsed : 0
}

function rowNumber(row: Dict, ...keys: string[]): number {
  return parseNumber(pick(row, ...keys))
}

function normalizeStage(row: Dict): string {
  const stageId = rowNumber(row, 'stage_id', 'pipeline_id', 'status_id')
  const stageName = pickString(
    row,
    'stage_name',
    'pipeline_name',
    'status_name',
    'stage',
    'status',
  )
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')

  if (stageName) return stageName
  if (stageId === 5) return 'closed_won'
  if (stageId === 6) return 'closed_lost'
  if (stageId === 7) return 'closed_cancel'
  return ''
}

function isWonProject(row: Dict): boolean {
  const stage = normalizeStage(row)
  return stage === 'closed_won' || stage === 'won' || stage.endsWith('_won')
}

function isClosedProject(row: Dict): boolean {
  const stage = normalizeStage(row)
  return (
    isWonProject(row)
    || stage === 'closed_lost'
    || stage === 'closed_cancel'
    || stage === 'lost'
    || stage === 'cancelled'
    || stage === 'canceled'
    || stage.endsWith('_lost')
    || stage.endsWith('_cancel')
  )
}

function projectValue(row: Dict): number {
  return rowNumber(
    row,
    'amount_value',
    'project_value',
    'deal_value',
    'total_value',
    'value',
    'amount',
    'budget',
    'nilai',
  )
}

function projectProbability(row: Dict): number {
  const value = rowNumber(row, 'probability', 'progress', 'chance')
  return Math.min(100, Math.max(0, value))
}

function parseDate(value: unknown): number {
  if (typeof value !== 'string' || !value.trim()) return 0
  const timestamp = new Date(value.replace(' ', 'T')).getTime()
  return Number.isFinite(timestamp) ? timestamp : 0
}

function projectActivityDate(row: Dict): number {
  return parseDate(
    pick(
      row,
      'stage_entered_at',
      'stage_changed_at',
      'status_changed_at',
      'updated_at',
      'created_at',
    ),
  )
}

function hospitalLastVisit(row: Dict): number {
  return parseDate(
    pick(
      row,
      'Last Visit At',
      'last_visit_at',
      'lastVisitAt',
      'last_visit',
      'last_visited_at',
      'latest_visit_at',
    ),
  )
}

function projectCompanyKey(row: Dict): string {
  const id = pick(row, 'company_id', 'hospital_id', 'customer_id')
  if (id !== undefined && id !== null && String(id).trim()) return `id:${String(id).trim()}`

  const name = pickString(
    row,
    'company_name',
    'hospital_name',
    'rumah_sakit_name',
    'customer_name',
  ).trim().toLowerCase()
  return name ? `name:${name}` : ''
}

function explicitTarget(payload: unknown, rows: Dict[]): number {
  const keys = ['target_nominal', 'sales_target', 'target_amount', 'annual_target', 'target_omset']
  if (isRecord(payload)) {
    const direct = rowNumber(payload, ...keys)
    if (direct > 0) return direct
    if (isRecord(payload.data)) {
      const nested = rowNumber(payload.data, ...keys)
      if (nested > 0) return nested
    }
  }

  return rows.reduce((total, row) => total + rowNumber(row, ...keys), 0)
}

async function fetchDashboardList(
  endpoint: 'project' | 'company',
  keys: string[],
): Promise<{ source: DashboardListSource; payload: unknown }> {
  const response = await api.get(endpoint, { params: { page: 1, per_page: 1000 } })
  const { items, meta } = extractList(response.data, keys)
  const rows = items.filter(isRecord)
  return {
    source: {
      items: rows,
      total: Math.max(rows.length, meta?.total ?? 0),
    },
    payload: response.data,
  }
}

/**
 * Fallback sementara untuk dashboard ketika `/dashboard/metrics` belum tersedia.
 * Semua angka tetap dihitung dari endpoint CRM yang aktif; tidak ada record dummy lokal.
 */
export async function fetchDashboardMetricsFromExistingApis(): Promise<DashboardMetricsRaw | null> {
  const [projectResult, hospitalResult] = await Promise.allSettled([
    fetchDashboardList('project', ['deals', 'projects', 'companies']),
    fetchDashboardList('company', ['companies']),
  ])

  if (projectResult.status === 'rejected' && hospitalResult.status === 'rejected') {
    console.error('Gagal menyusun dashboard dari endpoint Peluang dan Faskes.', {
      project: projectResult.reason,
      hospital: hospitalResult.reason,
    })
    return null
  }

  const projects = projectResult.status === 'fulfilled'
    ? projectResult.value.source.items
    : []
  const hospitals = hospitalResult.status === 'fulfilled'
    ? hospitalResult.value.source.items
    : []
  const projectTotal = projectResult.status === 'fulfilled'
    ? projectResult.value.source.total
    : 0
  const hospitalTotal = hospitalResult.status === 'fulfilled'
    ? hospitalResult.value.source.total
    : 0

  const wonProjects = projects.filter(isWonProject)
  const closedProjects = projects.filter(isClosedProject)
  const openProjects = projects.filter((row) => {
    const activeFlag = pick(row, 'aktif', 'active', 'is_active')
    return !isClosedProject(row) && activeFlag !== 0 && activeFlag !== '0' && activeFlag !== false
  })

  const ninetyDaysAgo = Date.now() - 90 * 24 * 60 * 60 * 1000
  const stalledProjects = openProjects.filter((row) => {
    const activityAt = projectActivityDate(row)
    return activityAt > 0 && activityAt < ninetyDaysAgo
  })
  const activeProjects = openProjects.length - stalledProjects.length

  const totalPipelineValue = projects.reduce((total, row) => total + projectValue(row), 0)
  const weightedPipelineValue = projects.reduce((total, row) => {
    const probability = isWonProject(row) ? 100 : projectProbability(row)
    return total + projectValue(row) * (probability / 100)
  }, 0)
  const wonValue = wonProjects.reduce((total, row) => total + projectValue(row), 0)
  const backlogValue = openProjects.reduce((total, row) => total + projectValue(row), 0)

  const projectPayload = projectResult.status === 'fulfilled'
    ? projectResult.value.payload
    : null
  const apiTarget = explicitTarget(projectPayload, projects)
  // Ringkasan lama mendefinisikan Target Peluang = Target Tahunan x3.
  // Saat target eksplisit tidak tersedia, total pipeline API menjadi Target Peluang.
  const targetNominal = apiTarget > 0 ? apiTarget : totalPipelineValue / 3

  const activeVisitedHospitals = hospitals.filter((row) => {
    const lastVisit = hospitalLastVisit(row)
    return lastVisit >= ninetyDaysAgo
  }).length

  const buyingHospitals = new Set(
    wonProjects.map(projectCompanyKey).filter(Boolean),
  ).size
  const coverageDenominator = activeVisitedHospitals || hospitalTotal
  const marketCoverage = coverageDenominator > 0
    ? (buyingHospitals / coverageDenominator) * 100
    : 0
  const targetAchievement = targetNominal > 0 ? (wonValue / targetNominal) * 100 : 0
  const winRateDenominator = closedProjects.length || projectTotal
  const winRate = winRateDenominator > 0
    ? (wonProjects.length / winRateDenominator) * 100
    : 0

  return {
    target_nominal: targetNominal,
    realisasi_omset: wonValue,
    target_achievement_percent: targetAchievement,
    global_win_rate_percent: winRate,
    qty_po_terbit: wonProjects.length,
    qty_project_masuk: projectTotal,
    market_coverage_percent: marketCoverage,
    active_visited_hospitals: activeVisitedHospitals,
    total_target_hospitals: hospitalTotal,
    active_projects_count: activeProjects,
    stalled_projects_count: stalledProjects.length,
    backlog_value: backlogValue,
    total_po_value: weightedPipelineValue,
    invoiced_sales_value: wonValue,
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
