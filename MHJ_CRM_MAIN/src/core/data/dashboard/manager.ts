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
  opportunityOutcome: {
    won: 0,
    lost: 0,
    total: 0,
    wonPercent: 0,
    lostPercent: 0,
  },
  quickActions: [
    {
      id: 'materi-dokumen',
      label: 'Materi Dokumen',
      icon: 'document-text',
      to: '/app/file_manager',
    },
    {
      id: 'kalender-tugas',
      label: 'Kalender Tugas',
      icon: 'calendar',
      to: '/crmAdmin/calendar',
    },
    { id: 'promo', label: 'Promo', icon: 'tag', to: '/crmAdmin/promos' },
    { id: 'piutang', label: 'Piutang', icon: 'tag', to: '/crmAdmin/piutang' },
    {
      id: 'form-survey',
      label: 'Form Survey',
      icon: 'clipboard',
      comingSoon: true,
    },
  ],
  benchmark: {
    stats: [],
    progressStats: [],
    winningChance: 0,
    averageProgress: 0,
  },
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

/** Format rupiah lengkap tanpa memadatkan atau membulatkan nilai backend. */
function formatRupiah(amount: number): string {
  if (!Number.isFinite(amount)) return 'Rp 0'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  }).format(amount)
}

/** Format persen tanpa mengubah presisi nilai backend. */
function formatPercent(value: number): string {
  if (!Number.isFinite(value)) return '0%'
  return `${value.toLocaleString('id-ID', { maximumFractionDigits: 20 })}%`
}

function buildKpis(m: DashboardMetricsRaw): ManagerKpiCard[] {
  return [
    {
      id: 'target-omset',
      label: 'Target vs Omset',
      value: formatRupiah(m.realisasi_omset),
      sublabel: `dari ${formatRupiah(m.target_nominal)}`,
      icon: 'graph',
      progress: m.target_achievement_percent,
      accent: 'blue',
    },
    {
      id: 'win-rate',
      label: 'Win Rate',
      value: formatPercent(m.global_win_rate_percent),
      sublabel: `${m.qty_po_terbit} deal ditutup`,
      icon: 'star',
      progress: m.global_win_rate_percent,
      accent: 'amber',
    },
    {
      id: 'funnel-aktif',
      label: 'Funnel Aktif',
      value: `${m.active_projects_count}`,
      sublabel: `${m.stalled_projects_count} stalled`,
      icon: 'filter',
      progress: m.funnel_progress_percent,
      accent: 'violet',
    },
  ]
}

function buildOpportunityOutcome(
  m: DashboardMetricsRaw,
): ManagerOpportunityOutcome {
  return {
    won: m.win_count,
    lost: m.lost_count,
    total: m.finished_count,
    wonPercent: m.win_percent,
    lostPercent: m.lost_percent,
  }
}

function rupiahStat(id: string, label: string, amount: number, hint?: string) {
  return {
    id,
    label,
    value: formatRupiah(amount),
    amount,
    ...(hint ? { hint } : {}),
  }
}

function buildBenchmark(m: DashboardMetricsRaw): ManagerBenchmarkSummary {
  return {
    stats: [
      rupiahStat('target-tahunan', 'Target Tahunan', m.target_tahunan_value),
      rupiahStat(
        'target-peluang',
        'Target Peluang',
        m.target_peluang_value,
        'Target x3',
      ),
      rupiahStat('real-peluang', 'Real Peluang', m.real_peluang_value),
      rupiahStat('revenue', 'Revenue', m.revenue_value),
    ],
    progressStats: [
      {
        id: 'peluang-progres',
        label: 'Peluang Progres',
        value: m.peluang_progress_percent,
        displayValue: formatPercent(m.peluang_progress_percent),
      },
      {
        id: 'target-progres',
        label: 'Target Progres',
        value: m.target_progress_percent,
        displayValue: formatPercent(m.target_progress_percent),
      },
    ],
    winningChance: m.winning_chance_percent,
    averageProgress: m.capaian_average_percent,
  }
}

function buildCoverage(
  m: DashboardMetricsRaw,
  highlight: MapHighlight,
): ManagerAreaCoverage {
  return {
    stats: [
      {
        id: 'area-coverage',
        label: 'Cakupan Wilayah',
        value: `${m.area_visited_count}`,
        progress: m.area_progress_percent,
        hint: `dikunjungi dari ${m.area_target_count} faskes target`,
        icon: 'map-point',
      },
      {
        id: 'market-coverage',
        label: 'Cakupan Pasar',
        value: `${m.market_buying_count}`,
        progress: m.market_progress_percent,
        hint: `membeli dari ${m.market_base_count} faskes`,
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
  const metrics =
    primaryMetrics ?? (await fetchDashboardMetricsFromExistingApis())

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
