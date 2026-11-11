/**
 * Bentuk data untuk "Dashboard Manager" (ringkasan kinerja sales/marketing).
 * Semua angka berasal dari `fetchManagerDashboardData()`.
 */

export type ManagerKpiAccent = 'blue' | 'amber' | 'green' | 'violet'

export interface ManagerKpiCard {
  id: string
  label: string
  value: string
  sublabel: string
  icon: string
  progress: number
  accent: ManagerKpiAccent
}

export interface ManagerOpportunityOutcome {
  won: number
  lost: number
  total: number
  wonPercent: number
  lostPercent: number
}

export interface ManagerQuickAction {
  id: string
  label: string
  icon: string
  to?: string
  comingSoon?: boolean
}

export interface BenchmarkStat {
  id: string
  label: string
  value: string
  /** Nilai rupiah mentah dari backend, dipakai untuk panjang bar. */
  amount: number
  hint?: string
}

export interface BenchmarkProgressStat {
  id: string
  label: string
  value: number
  displayValue: string
}

export interface ManagerBenchmarkSummary {
  stats: BenchmarkStat[]
  progressStats: BenchmarkProgressStat[]
  winningChance: number
  /** Rata-rata capaian untuk badge status (dari backend). */
  averageProgress: number
}

export interface CoverageStat {
  id: string
  label: string
  value: string
  progress: number
  hint: string
  icon: string
}

export interface MapHighlight {
  lat: number
  lng: number
  label: string
  zoom?: number
}

export interface ManagerAreaCoverage {
  stats: CoverageStat[]
  highlight: MapHighlight
}

export type ActivityType = 'call' | 'email' | 'meeting' | 'note' | 'task'
export type ActivityAction = 'i' | 'u' | 'd'

export interface ActivityItem {
  id: string | number
  type: ActivityType
  title: string
  subtitle: string
  time: string
  icon: string
  action?: ActivityAction
  mhjIcon?: string
}

export interface ActivityLogItem extends ActivityItem {
  action: ActivityAction
  entityName: string
  createdAt: string
}

export interface PromoSlide {
  id: number | string
  title: string
  content?: string | null
  imageUrl?: string | null
}

export interface ManagerDashboardData {
  greetingName: string
  kpis: ManagerKpiCard[]
  opportunityOutcome: ManagerOpportunityOutcome
  quickActions: ManagerQuickAction[]
  benchmark: ManagerBenchmarkSummary
  coverage: ManagerAreaCoverage
  activities: ActivityItem[]
}
