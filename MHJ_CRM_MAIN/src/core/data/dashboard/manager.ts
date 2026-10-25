import { fetchRecentTasks } from '@/services/managerDashboardService'
import {
  fetchDashboardMetrics,
  type DashboardMetricsRaw,
} from '@/services/analyticsService'
import type {
  ManagerDashboardData,
  ManagerKpiCard,
  ManagerBenchmarkSummary,
  ManagerAreaCoverage,
  MapHighlight,
} from '@/types/dashboard/manager'

/**
 * Data base untuk Dashboard Manager. Nilai di sini dipakai sebagai fallback
 * jika endpoint di BE belum tersedia atau gagal diambil.
 * - KPI/benchmark/coverage → di-override oleh `fetchDashboardMetrics()` (GET /api/dashboard/metrics)
 * - Peta cakupan mengambil daftar RS langsung dari store Company/Hospital di komponen peta.
 * - Aktivitas → di-override oleh `fetchRecentTasks()` (GET /api/tasks)
 */
const managerDashboardData: ManagerDashboardData = {
  greetingName: 'Sales',
  dummySections: [
    'KPI kinerja',
    'Benchmark target',
    'Ringkasan cakupan',
    'Titik sorotan peta',
    'Aktivitas terbaru',
  ],
  kpis: [
    {
      id: 'target-omset',
      label: 'Target vs Omset',
      value: 'Rp12,5M',
      sublabel: 'dari Rp15M',
      icon: 'graph',
      progress: 83,
      accent: 'blue',
    },
    {
      id: 'win-rate',
      label: 'Win Rate',
      value: '68%',
      sublabel: '14 deal ditutup',
      icon: 'star',
      progress: 68,
      accent: 'amber',
    },
    {
      id: 'cakupan-pasar',
      label: 'Cakupan Pasar',
      value: '45/100',
      sublabel: 'Faskes aktif',
      icon: 'cart',
      progress: 45,
      accent: 'green',
    },
    {
      id: 'funnel-aktif',
      label: 'Funnel Aktif',
      value: '24',
      sublabel: '3 perlu ditutup',
      icon: 'filter',
      progress: 60,
      accent: 'violet',
    },
  ],
  quickActions: [
    { id: 'materi-dokumen', label: 'Materi Dokumen', icon: 'document-text', to: '/app/file_manager' },
    { id: 'kalender-tugas', label: 'Kalender Tugas', icon: 'calendar', to: '/crmAdmin/calendar' },
    { id: 'promo', label: 'Promo', icon: 'tag', to: '/crmAdmin/promos' },
    { id: 'form-survey', label: 'Form Survey', icon: 'clipboard', comingSoon: true },
  ],
  benchmark: {
    stats: [
      { id: 'target-tahunan', label: 'Target Tahunan', value: 'Rp23,70M' },
      { id: 'target-peluang', label: 'Target Peluang', value: 'Rp71,10M', hint: 'Target x3' },
      { id: 'real-peluang', label: 'Real Peluang', value: 'Rp32,59M' },
      { id: 'revenue', label: 'Revenue', value: 'Rp6,74M' },
    ],
    progressStats: [
      { id: 'peluang-progres', label: 'Peluang Progres', value: 45.85, displayValue: '45,85%' },
      { id: 'target-progres', label: 'Target Progres', value: 28.45, displayValue: '28,45%' },
    ],
    winningChance: 20.68,
  },
  coverage: {
    stats: [
      {
        id: 'area-coverage',
        label: 'Area Coverage',
        value: '45',
        progress: 45,
        hint: 'dari 100 faskes dikunjungi',
        icon: 'map-point',
      },
      {
        id: 'market-coverage',
        label: 'Market Coverage',
        value: '12',
        progress: 26.7,
        hint: 'dari 45 faskes membeli',
        icon: 'cart',
      },
    ],
    highlight: {
      lat: -6.2297,
      lng: 106.8198,
      label: 'RS Mitra Keluarga Cemara',
      zoom: 11,
    },
  },
  activities: [
    {
      id: 1,
      type: 'call',
      title: 'Telepon dengan Dr. David',
      subtitle: 'RSUD Bhayangkara',
      time: '1 jam lalu',
      icon: 'phone',
    },
    {
      id: 2,
      type: 'email',
      title: 'Kirim proposal ke RS Siloam Surabaya',
      subtitle: 'Proposal pengadaan alat',
      time: '3 jam lalu',
      icon: 'letter',
    },
    {
      id: 3,
      type: 'meeting',
      title: 'Meeting dengan RS Hermina Jakarta',
      subtitle: 'Presentasi produk & demo',
      time: '3 jam lalu',
      icon: 'camera',
    },
  ],
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
  const targetAchievement = clampProgress(m.target_achievement_percent)
  const marketCoverageProgress =
    m.total_target_hospitals > 0
      ? clampProgress((m.active_visited_hospitals / m.total_target_hospitals) * 100)
      : clampProgress(m.market_coverage_percent)
  const funnelProgress =
    m.active_projects_count + m.stalled_projects_count > 0
      ? clampProgress(
          (m.active_projects_count / (m.active_projects_count + m.stalled_projects_count)) * 100,
        )
      : 0

  return [
    {
      id: 'target-omset',
      label: 'Target vs Omset',
      value: formatRupiahCompact(m.realisasi_omset),
      sublabel: `dari ${formatRupiahCompact(m.target_nominal)}`,
      icon: 'graph',
      progress: targetAchievement,
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
      id: 'cakupan-pasar',
      label: 'Cakupan Pasar',
      value: `${m.active_visited_hospitals}/${m.total_target_hospitals}`,
      sublabel: 'Faskes aktif (< 90 hr)',
      icon: 'cart',
      progress: marketCoverageProgress,
      accent: 'green',
    },
    {
      id: 'funnel-aktif',
      label: 'Funnel Aktif',
      value: `${m.active_projects_count}`,
      sublabel: `${m.stalled_projects_count} stalled`,
      icon: 'filter',
      progress: funnelProgress,
      accent: 'violet',
    },
  ]
}

function buildBenchmark(m: DashboardMetricsRaw): ManagerBenchmarkSummary {
  const targetPeluang = m.target_nominal * 3
  const realPeluang = m.total_po_value > 0 ? m.total_po_value : m.realisasi_omset
  const peluangProgres = targetPeluang > 0 ? (realPeluang / targetPeluang) * 100 : 0
  const targetProgres = clampProgress(m.target_achievement_percent)
  const winningChance = m.qty_project_masuk > 0
    ? (m.qty_po_terbit / m.qty_project_masuk) * 100
    : m.global_win_rate_percent

  return {
    stats: [
      { id: 'target-tahunan', label: 'Target Tahunan', value: formatRupiahCompact(m.target_nominal) },
      { id: 'target-peluang', label: 'Target Peluang', value: formatRupiahCompact(targetPeluang), hint: 'Target x3' },
      { id: 'real-peluang', label: 'Real Peluang', value: formatRupiahCompact(realPeluang) },
      { id: 'revenue', label: 'Revenue', value: formatRupiahCompact(m.invoiced_sales_value) },
    ],
    progressStats: [
      {
        id: 'peluang-progres',
        label: 'Peluang Progres',
        value: clampProgress(peluangProgres),
        displayValue: formatPercent(peluangProgres),
      },
      {
        id: 'target-progres',
        label: 'Target Progres',
        value: targetProgres,
        displayValue: formatPercent(targetProgres),
      },
    ],
    winningChance: clampProgress(winningChance),
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
        label: 'Area Coverage',
        value: `${m.active_visited_hospitals}`,
        progress: areaProgress,
        hint: `dari ${m.total_target_hospitals} faskes dikunjungi`,
        icon: 'map-point',
      },
      {
        id: 'market-coverage',
        label: 'Market Coverage',
        value: `${m.qty_po_terbit}`,
        progress: clampProgress(m.market_coverage_percent),
        hint: `dari ${m.active_visited_hospitals} faskes membeli`,
        icon: 'cart',
      },
    ],
    highlight,
  }
}

/**
 * Mengambil data Dashboard Manager. Setiap section di-override dengan data
 * backend kalau endpoint-nya sukses; kalau gagal, pakai dummy di atas.
 */
export async function fetchManagerDashboardData(): Promise<ManagerDashboardData> {
  const [metrics, activities] = await Promise.all([
    fetchDashboardMetrics(),
    fetchRecentTasks(5).catch((error) => {
      console.error('Gagal memuat daftar tugas terbaru dari backend.', error)
      return [] as ManagerDashboardData['activities']
    }),
  ])

  const kpis = metrics ? buildKpis(metrics) : managerDashboardData.kpis
  const benchmark = metrics ? buildBenchmark(metrics) : managerDashboardData.benchmark
  const highlight = managerDashboardData.coverage.highlight
  const coverage = metrics
    ? buildCoverage(metrics, highlight)
    : { ...managerDashboardData.coverage, highlight }
  const dummySections = [
    ...(!metrics ? ['KPI kinerja', 'Benchmark target', 'Ringkasan cakupan'] : []),
    'Titik sorotan peta',
    ...(!activities.length ? ['Aktivitas terbaru'] : []),
  ]

  return {
    ...managerDashboardData,
    dummySections,
    kpis,
    benchmark,
    coverage,
    activities: activities.length ? activities : managerDashboardData.activities,
  }
}
