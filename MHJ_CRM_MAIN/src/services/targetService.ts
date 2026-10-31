import { api } from '@/services/api'
import type {
  TargetFormPayload,
  TargetItem,
  TargetKpi,
  TargetMasterOption,
} from '@/types/target'

interface TargetListResponse {
  success: boolean
  data: TargetItem[]
  kpi: TargetKpi | null
  message?: string
}

export interface TargetListFilter {
  tahun?: number | null
  bulan?: number | null
  kode_cabang?: string | null
  kode_devisi?: string | null
  search?: string | null
  limit?: number
}

function cleanParams(filter: TargetListFilter): Record<string, string | number> {
  const params: Record<string, string | number> = {}
  if (filter.tahun) params.tahun = filter.tahun
  if (filter.bulan) params.bulan = filter.bulan
  if (filter.kode_cabang) params.kode_cabang = filter.kode_cabang
  if (filter.kode_devisi) params.kode_devisi = filter.kode_devisi
  if (filter.search) params.search = filter.search
  if (filter.limit) params.limit = filter.limit
  return params
}

export const targetService = {
  /** GET /api/target — list data target + ringkasan KPI (dipengaruhi filter). */
  async list(filter: TargetListFilter = {}): Promise<TargetListResponse> {
    const res = await api.get('/target', { params: cleanParams(filter) })
    const payload = res.data as TargetListResponse
    return {
      success: payload?.success ?? true,
      data: Array.isArray(payload?.data) ? payload.data : [],
      kpi: payload?.kpi ?? null,
      message: payload?.message,
    }
  },

  /** GET /api/target/{id} — detail target untuk form edit. */
  async detail(id: number): Promise<TargetItem> {
    const res = await api.get(`/target/${id}`)
    return (res.data as { data: TargetItem }).data
  },

  /** POST /api/target — simpan target baru. */
  async create(payload: TargetFormPayload): Promise<void> {
    await api.post('/target', payload)
  },

  /** PUT /api/target/{id} — update target existing. */
  async update(id: number, payload: TargetFormPayload): Promise<void> {
    await api.put(`/target/${id}`, payload)
  },

  /** DELETE /api/target/{id} — hapus target. */
  async remove(id: number): Promise<void> {
    await api.delete(`/target/${id}`)
  },

  /** GET /api/target/master/cabang — opsi dropdown cabang. */
  async getCabang(): Promise<TargetMasterOption[]> {
    const res = await api.get('/target/master/cabang')
    const payload = res.data as { data?: TargetMasterOption[] }
    return Array.isArray(payload?.data) ? payload.data : []
  },

  /** GET /api/target/master/devisi — opsi dropdown divisi. */
  async getDevisi(): Promise<TargetMasterOption[]> {
    const res = await api.get('/target/master/devisi')
    const payload = res.data as { data?: TargetMasterOption[] }
    return Array.isArray(payload?.data) ? payload.data : []
  },
}
