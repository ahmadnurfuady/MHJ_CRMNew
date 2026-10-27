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
      const promos = await promoService.getPromos()
      promoSlides.value = promos
        .filter((promo) => Boolean(promo.is_active) && isPromoCurrentlyActive(promo.start_date, promo.end_date))
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((promo) => ({
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

  return {
    data,
    loading,
    promoSlides,
    promoLoading,
    loadManagerDashboard,
    loadPromoSlides,
  }
}
