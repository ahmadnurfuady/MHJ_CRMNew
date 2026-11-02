import { ref } from 'vue'

import { fetchManagerDashboardData } from '@/core/data/dashboard/manager'
import { api } from '@/services/api'
import {
  fetchHospitalMap,
  fetchProjectLinearity,
  fetchWinRateDrilldown,
  type HospitalMapPoint,
  type ProjectLinearityData,
  type WinRateDivisionRow,
} from '@/services/analyticsService'
import type { PromoApiItem } from '@/services/promoService'
import type { ManagerDashboardData, PromoSlide } from '@/types/dashboard/manager'

const data = ref<ManagerDashboardData | null>(null)
const loading = ref(false)
const promoSlides = ref<PromoSlide[]>([])
const promoLoading = ref(false)
const linearity = ref<ProjectLinearityData | null>(null)
const linearityLoading = ref(false)
const hospitalCoverage = ref<HospitalMapPoint[]>([])
const hospitalCoverageLoading = ref(false)
const winRateDrilldown = ref<WinRateDivisionRow[]>([])
const winRateLoading = ref(false)

/** Data Dashboard Manager dan promo dimuat dari service backend. */
export function useManagerDashboard() {
  async function loadManagerDashboard() {
    loading.value = true
    try {
      data.value = await fetchManagerDashboardData()
    } finally {
      loading.value = false
    }
  }

  async function loadPromoSlides() {
    promoLoading.value = true
    try {
      const res = await api.get<{ data: PromoApiItem[] }>('/dashboard/promo')
      const promos = Array.isArray(res.data?.data) ? res.data.data : []
      promoSlides.value = promos.map((promo) => ({
        id: promo.id,
        title: promo.title,
        content: promo.content,
        // Fallback ke image_path: sama seperti usePromoCatalog.ts, karena API
        // tidak selalu mengisi image_url walau gambar (image_path) sudah ada.
        imageUrl: promo.image_url ?? promo.image_path ?? null,
      }))
    } catch (error) {
      console.error('Gagal memuat promo.', error)
      promoSlides.value = []
    } finally {
      promoLoading.value = false
    }
  }

  async function loadProjectLinearity() {
    linearityLoading.value = true
    try {
      linearity.value = await fetchProjectLinearity()
    } finally {
      linearityLoading.value = false
    }
  }

  async function loadHospitalCoverage() {
    hospitalCoverageLoading.value = true
    try {
      hospitalCoverage.value = await fetchHospitalMap('visit')
    } finally {
      hospitalCoverageLoading.value = false
    }
  }

  async function loadWinRateDrilldown() {
    winRateLoading.value = true
    try {
      winRateDrilldown.value = await fetchWinRateDrilldown()
    } finally {
      winRateLoading.value = false
    }
  }

  return {
    data,
    loading,
    promoSlides,
    promoLoading,
    linearity,
    linearityLoading,
    hospitalCoverage,
    hospitalCoverageLoading,
    winRateDrilldown,
    winRateLoading,
    loadManagerDashboard,
    loadPromoSlides,
    loadProjectLinearity,
    loadHospitalCoverage,
    loadWinRateDrilldown,
  }
}
