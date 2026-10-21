/**
 * Bentuk data untuk "Dashboard Manager" (ringkasan kinerja sales/marketing).
 * Semua angka di sini berasal dari `fetchManagerDashboardData()` (lihat
 * `@/core/data/dashboard/manager.ts`). Saat ini fungsi itu masih mengembalikan
 * data dummy, tapi bentuknya sudah meniru respons API supaya tinggal diganti
 * dengan panggilan backend tanpa mengubah komponen tampilan.
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

export interface ActivityItem {
  id: string | number
  type: ActivityType
  title: string
  subtitle: string
  time: string
  icon: string
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
  quickActions: ManagerQuickAction[]
  benchmark: ManagerBenchmarkSummary
  coverage: ManagerAreaCoverage
  activities: ActivityItem[]
}
