import { ref } from 'vue'

import { fetchManagerDashboardData } from '@/core/data/dashboard/manager'
import { promoService } from '@/services/promoService'
import type { ManagerDashboardData, PromoSlide } from '@/types/dashboard/manager'

function isPromoCurrentlyActive(startDate: string | null, endDate: string | null): boolean {
  const now = Date.now()
  if (startDate && new Date(startDate).getTime() > now) return false
  if (endDate && new Date(endDate).getTime() < now) return false
  return true
}

const data = ref<ManagerDashboardData | null>(null)
const loading = ref(false)
const promoSlides = ref<PromoSlide[]>([])
const promoLoading = ref(false)

/**
 * Data & state untuk Dashboard Manager. KPI/benchmark/coverage/activity masih
 * dummy (lihat `@/core/data/dashboard/manager.ts`), sementara promo sudah
 * dipakaikan ke API sungguhan (`promoService`) karena endpoint-nya sudah ada.
 */
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
      const promos = await promoService.getPromos()
      promoSlides.value = promos
        .filter((promo) => Boolean(promo.is_active) && isPromoCurrentlyActive(promo.start_date, promo.end_date))
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((promo) => ({
          id: promo.id,
          title: promo.title,
          content: promo.content,
          imageUrl: promo.image_url ?? null,
        }))
    } catch (error) {
      console.error('Gagal memuat promo.', error)
      promoSlides.value = []
    } finally {
      promoLoading.value = false
    }
  }

  return {
    data,
    loading,
    promoSlides,
    promoLoading,
    loadManagerDashboard,
    loadPromoSlides,
  }
}
