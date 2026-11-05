import { fetchRecentActivities } from '@/services/managerDashboardService'
import {
  fetchDashboardMetrics,
  fetchDashboardMetricsFromExistingApis,
  type DashboardMetricsRaw,
} from '@/services/analyticsService'
import type {
  ManagerDashboardData,
  ManagerKpiCard,
  ManagerBenchmarkSummary,
  ManagerOpportunityOutcome,
  ManagerAreaCoverage,
  MapHighlight,
} from '@/types/dashboard/manager'

/** Konfigurasi navigasi dan state kosong Dashboard Manager. */
const managerDashboardData: ManagerDashboardData = {
  greetingName: '',
  kpis: [],
  opportunityOutcome: { won: 0, lost: 0, total: 0, wonPercent: 0, lostPercent: 0 },
  quickActions: [
    { id: 'materi-dokumen', label: 'Materi Dokumen', icon: 'document-text', to: '/app/file_manager' },
    { id: 'kalender-tugas', label: 'Kalender Tugas', icon: 'calendar', to: '/crmAdmin/calendar' },
    { id: 'promo', label: 'Promo', icon: 'tag', to: '/crmAdmin/promos' },
    { id: 'piutang', label: 'Piutang', icon: 'tag', to: '/crmAdmin/piutang' },
    { id: 'form-survey', label: 'Form Survey', icon: 'clipboard', comingSoon: true },
  ],
  benchmark: { stats: [], progressStats: [], winningChance: 0, averageProgress: 0 },
  coverage: {
    stats: [],
    highlight: {
      lat: -6.2297,
      lng: 106.8198,
      label: '',
      zoom: 11,
    },
  },
  activities: [],
}

/** Format "Rp 12,5M" / "Rp 850Jt" / "Rp 500Rb" dari angka IDR (satuan rupiah). */
function formatRupiahCompact(amount: number): string {
  if (!Number.isFinite(amount) || amount <= 0) return 'Rp0'
  if (amount >= 1_000_000_000) {
    const miliar = amount / 1_000_000_000
    const value = miliar >= 10 ? miliar.toFixed(0) : miliar.toFixed(1).replace('.', ',')
    return `Rp${value}M`
  }
  if (amount >= 1_000_000) {
    return `Rp${Math.round(amount / 1_000_000)}Jt`
  }
  if (amount >= 1_000) {
    return `Rp${Math.round(amount / 1_000)}Rb`
  }
  return `Rp${Math.round(amount)}`
}

/** Format "45,85%" dari angka (0..100). */
function formatPercent(value: number, digits = 2): string {
  if (!Number.isFinite(value)) return '0%'
  const str = digits > 0 ? value.toFixed(digits) : Math.round(value).toString()
  return `${str.replace('.', ',')}%`
}

/** Clamp 0..100 untuk progress bar. */
function clampProgress(value: number): number {
  if (!Number.isFinite(value)) return 0
  if (value < 0) return 0
  if (value > 100) return 100
  return Math.round(value * 10) / 10
}

function buildKpis(m: DashboardMetricsRaw): ManagerKpiCard[] {
  return [
    {
      id: 'target-omset',
      label: 'Target vs Omset',
      value: formatRupiahCompact(m.realisasi_omset),
      sublabel: `dari ${formatRupiahCompact(m.target_nominal)}`,
      icon: 'graph',
      progress: clampProgress(m.target_achievement_percent),
      accent: 'blue',
    },
    {
      id: 'win-rate',
      label: 'Win Rate',
      value: `${Math.round(m.global_win_rate_percent)}%`,
      sublabel: `${m.qty_po_terbit} deal ditutup`,
      icon: 'star',
      progress: clampProgress(m.global_win_rate_percent),
      accent: 'amber',
    },
    {
      id: 'funnel-aktif',
      label: 'Funnel Aktif',
      value: `${m.active_projects_count}`,
      sublabel: `${m.stalled_projects_count} stalled`,
      icon: 'filter',
      progress: clampProgress(m.funnel_progress_percent),
      accent: 'violet',
    },
  ]
}

function buildOpportunityOutcome(m: DashboardMetricsRaw): ManagerOpportunityOutcome {
  return {
    won: m.win_count,
    lost: m.lost_count,
    total: m.finished_count,
    wonPercent: m.win_percent,
    lostPercent: m.lost_percent,
  }
}

function rupiahStat(id: string, label: string, amount: number, hint?: string) {
  return { id, label, value: formatRupiahCompact(amount), amount, ...(hint ? { hint } : {}) }
}

function buildBenchmark(m: DashboardMetricsRaw): ManagerBenchmarkSummary {
  return {
    stats: [
      rupiahStat('target-tahunan', 'Target Tahunan', m.target_tahunan_value),
      rupiahStat('target-peluang', 'Target Peluang', m.target_peluang_value, 'Target x3'),
      rupiahStat('real-peluang', 'Real Peluang', m.real_peluang_value),
      rupiahStat('revenue', 'Revenue', m.revenue_value),
    ],
    progressStats: [
      {
        id: 'peluang-progres',
        label: 'Peluang Progres',
        value: clampProgress(m.peluang_progress_percent),
        displayValue: formatPercent(m.peluang_progress_percent),
      },
      {
        id: 'target-progres',
        label: 'Target Progres',
        value: clampProgress(m.target_progress_percent),
        displayValue: formatPercent(m.target_progress_percent),
      },
    ],
    winningChance: m.winning_chance_percent,
    averageProgress: m.capaian_average_percent,
  }
}

function buildCoverage(m: DashboardMetricsRaw, highlight: MapHighlight): ManagerAreaCoverage {
  const areaProgress =
    m.total_target_hospitals > 0
      ? clampProgress((m.active_visited_hospitals / m.total_target_hospitals) * 100)
      : 0

  return {
    stats: [
      {
        id: 'area-coverage',
        label: 'Cakupan Wilayah',
        value: `${m.active_visited_hospitals}`,
        progress: areaProgress,
        hint: `dari ${m.total_target_hospitals} faskes dikunjungi`,
        icon: 'map-point',
      },
      {
        id: 'market-coverage',
        label: 'Cakupan Pasar',
        value: `${m.qty_po_terbit}`,
        progress: clampProgress(m.market_coverage_percent),
        hint: `dari ${m.active_visited_hospitals} faskes membeli`,
        icon: 'cart',
      },
    ],
    highlight,
  }
}

/** Mengambil data Dashboard Manager hanya dari backend. */
export async function fetchManagerDashboardData(): Promise<ManagerDashboardData> {
  const [primaryMetrics, activities] = await Promise.all([
    fetchDashboardMetrics(),
    fetchRecentActivities(5).catch((error) => {
      console.error('Gagal memuat aktivitas terbaru dari backend.', error)
      return [] as ManagerDashboardData['activities']
    }),
  ])
  const metrics = primaryMetrics ?? await fetchDashboardMetricsFromExistingApis()

  const kpis = metrics ? buildKpis(metrics) : []
  const benchmark = metrics
    ? buildBenchmark(metrics)
    : managerDashboardData.benchmark
  const highlight = managerDashboardData.coverage.highlight
  const coverage = metrics
    ? buildCoverage(metrics, highlight)
    : { stats: [], highlight }

  return {
    ...managerDashboardData,
    kpis,
    opportunityOutcome: metrics
      ? buildOpportunityOutcome(metrics)
      : managerDashboardData.opportunityOutcome,
    benchmark,
    coverage,
    activities,
  }
}
