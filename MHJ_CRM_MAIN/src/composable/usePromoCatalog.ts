import { computed, ref } from 'vue'

import {
  promoService,
  type PromoApiItem,
  type PromoStatusCounts,
  type PromoStatusFilter,
} from '@/services/promoService'

export type PromoPeriodStatus = 'active' | 'upcoming' | 'ended'
export type PromoFilter = PromoStatusFilter

export interface PromoCatalogItem {
  id: number
  title: string
  content: string
  imageUrl: string
  isPublished: boolean
  startDate: string
  endDate: string
  targetType: string
  targetBranchId: number | null
  targetJabatanId: number | null
  sortOrder: number
  createdAt: string
  updatedAt: string
}

const items = ref<PromoCatalogItem[]>([])
const loading = ref(false)
const loaded = ref(false)
const error = ref('')

function booleanValue(value: boolean | number): boolean {
  return value === true || Number(value) === 1
}

function normalizePromo(promo: PromoApiItem): PromoCatalogItem {
  return {
    id: Number(promo.id),
    title: String(promo.title || 'Promo MHJ'),
    content: String(promo.content || ''),
    imageUrl: String(promo.image_url || promo.image_path || ''),
    isPublished: booleanValue(promo.is_active),
    startDate: String(promo.start_date || ''),
    endDate: String(promo.end_date || ''),
    targetType: String(promo.target_type || 'all'),
    targetBranchId: promo.target_branch_id ?? null,
    targetJabatanId: promo.target_jabatan_id ?? null,
    sortOrder: Number(promo.sort_order || 0),
    createdAt: String(promo.created_at || ''),
    updatedAt: String(promo.updated_at || ''),
  }
}

function dateTimestamp(value: string, endOfDay = false): number | null {
  if (!value) return null
  const suffix = endOfDay ? 'T23:59:59' : 'T00:00:00'
  const date = new Date(value.includes('T') ? value : `${value}${suffix}`)
  const timestamp = date.getTime()
  return Number.isFinite(timestamp) ? timestamp : null
}

export function promoPeriodStatus(promo: PromoCatalogItem): PromoPeriodStatus {
  const now = Date.now()
  const start = dateTimestamp(promo.startDate)
  const end = dateTimestamp(promo.endDate, true)
  if (start !== null && start > now) return 'upcoming'
  if (end !== null && end < now) return 'ended'
  return 'active'
}

export function promoStatusLabel(status: PromoPeriodStatus): string {
  if (status === 'upcoming') return 'Akan datang'
  if (status === 'ended') return 'Berakhir'
  return 'Berlangsung'
}

export function formatPromoDate(value: string): string {
  const timestamp = dateTimestamp(value)
  if (timestamp === null) return '-'
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(timestamp))
}

export function formatPromoPeriod(promo: PromoCatalogItem): string {
  if (!promo.startDate && !promo.endDate) return 'Tanpa batas waktu'
  if (!promo.startDate) return `Sampai ${formatPromoDate(promo.endDate)}`
  if (!promo.endDate) return `Mulai ${formatPromoDate(promo.startDate)}`
  return `${formatPromoDate(promo.startDate)} – ${formatPromoDate(promo.endDate)}`
}

export function promoTargetLabel(promo: PromoCatalogItem): string {
  if (promo.targetType === 'branch') return `Cabang #${promo.targetBranchId ?? '-'}`
  if (promo.targetType === 'jabatan') return `Jabatan #${promo.targetJabatanId ?? '-'}`
  if (promo.targetType === 'branch_jabatan') {
    return `Cabang #${promo.targetBranchId ?? '-'} · Jabatan #${promo.targetJabatanId ?? '-'}`
  }
  return 'Semua pengguna'
}

export function usePromoCatalog() {
  const publishedItems = computed(() =>
    items.value
      .filter((promo) => promo.isPublished)
      .sort((left, right) => left.sortOrder - right.sortOrder || right.id - left.id),
  )

  async function loadPromos(force = false): Promise<void> {
    if ((loaded.value && !force) || loading.value) return
    loading.value = true
    error.value = ''
    try {
      const response = await promoService.getPromos()
      items.value = response.map(normalizePromo)
      loaded.value = true
    } catch (loadError) {
      console.error('Gagal memuat katalog promo:', loadError)
      error.value = 'Promo belum dapat dimuat. Silakan coba beberapa saat lagi.'
    } finally {
      loading.value = false
    }
  }

  return {
    publishedItems,
    loading,
    loaded,
    error,
    loadPromos,
  }
}

/** Daftar promo untuk halaman katalog: filter tab periode diproses oleh backend. */
export function usePromoCatalogFilter() {
  const listItems = ref<PromoCatalogItem[]>([])
  const counts = ref<PromoStatusCounts | null>(null)
  const listLoading = ref(false)
  const listLoaded = ref(false)
  const listError = ref('')
  let latestRequest = 0

  async function loadFiltered(status: PromoFilter): Promise<void> {
    const requestId = ++latestRequest
    listLoading.value = true
    listError.value = ''
    try {
      const response = await promoService.getPromoCatalog(status)
      // Abaikan respons lama jika user sudah pindah tab sebelum request ini selesai.
      if (requestId !== latestRequest) return
      listItems.value = response.items.map(normalizePromo)
      counts.value = response.counts
      listLoaded.value = true
    } catch (loadError) {
      if (requestId !== latestRequest) return
      console.error('Gagal memuat katalog promo:', loadError)
      listError.value = 'Promo belum dapat dimuat. Silakan coba beberapa saat lagi.'
    } finally {
      if (requestId === latestRequest) listLoading.value = false
    }
  }

  return {
    items: listItems,
    counts,
    loading: listLoading,
    loaded: listLoaded,
    error: listError,
    loadFiltered,
  }
}
