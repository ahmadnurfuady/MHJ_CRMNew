import type { ManagerDashboardData } from '@/types/dashboard/manager'

/**
 * Data dummy untuk Dashboard Manager. Bentuknya meniru respons API (lihat
 * `ManagerDashboardData`) supaya `fetchManagerDashboardData()` di bawah tinggal
 * diarahkan ke endpoint backend (mis. `GET /api/dashboard/manager`) begitu sudah
 * tersedia, tanpa perlu mengubah komponen yang memakainya.
 */
const managerDashboardData: ManagerDashboardData = {
  greetingName: 'Sales',
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
      sublabel: 'RS aktif',
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
    { id: 'promo', label: 'Promo', icon: 'tag', to: '/crmAdmin/settings/promo' },
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
        hint: 'dari 100 RS dikunjungi',
        icon: 'map-point',
      },
      {
        id: 'market-coverage',
        label: 'Market Coverage',
        value: '12',
        progress: 26.7,
        hint: 'dari 45 RS membeli',
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

/**
 * Mengambil data Dashboard Manager. Saat ini resolve dari dummy data di atas;
 * ganti body fungsi ini dengan panggilan `api.get(...)` begitu endpoint backend-nya siap.
 */
export function fetchManagerDashboardData(): Promise<ManagerDashboardData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(managerDashboardData), 200)
  })
}
