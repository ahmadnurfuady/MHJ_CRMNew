import { api } from '@/services/api'
import type {
  DivisionBranchItem,
  TargetIndicatorItem,
  TargetPlanItem,
  TargetPlanSaveRow,
  TargetSummary,
  TargetVersionItem,
  TargetYearItem,
} from '@/types/target'

/** Membungkus respons yang mungkin array langsung atau `{ data: [...] }`. */
function asArray<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) return payload as T[]
  if (payload && typeof payload === 'object' && Array.isArray((payload as { data?: unknown }).data)) {
    return (payload as { data: T[] }).data
  }
  return []
}

export const targetService = {
  /** GET /api/target/years — seluruh periode tahun target. */
  async getYears(): Promise<TargetYearItem[]> {
    const res = await api.get('/target/years')
    return asArray<TargetYearItem>(res.data)
  },

  /** GET /api/target/indicators — seluruh indikator target. */
  async getIndicators(): Promise<TargetIndicatorItem[]> {
    const res = await api.get('/target/indicators')
    return asArray<TargetIndicatorItem>(res.data)
  },

  /** GET /api/target/division-branches — relasi divisi-cabang yang aktif. */
  async getDivisionBranches(): Promise<DivisionBranchItem[]> {
    const res = await api.get('/target/division-branches')
    return asArray<DivisionBranchItem>(res.data)
  },

  /** GET /api/target/versions?target_year_id= — versi target pada satu periode. */
  async getVersions(targetYearId: number): Promise<TargetVersionItem[]> {
    const res = await api.get('/target/versions', { params: { target_year_id: targetYearId } })
    return asArray<TargetVersionItem>(res.data)
  },

  /** GET /api/target/plans?target_version_id= — baris target pada satu versi. */
  async getPlans(targetVersionId: number): Promise<TargetPlanItem[]> {
    const res = await api.get('/target/plans', { params: { target_version_id: targetVersionId } })
    return asArray<TargetPlanItem>(res.data)
  },

  /** GET /api/target/summary?target_year_id= — ringkasan dashboard target. */
  async getSummary(targetYearId: number): Promise<TargetSummary> {
    const res = await api.get('/target/summary', { params: { target_year_id: targetYearId } })
    return (res.data as { data?: TargetSummary }).data ?? (res.data as TargetSummary)
  },

  /** POST /api/target/plans/bulk — simpan massal target (upsert per kombinasi). */
  async savePlans(targetVersionId: number, rows: TargetPlanSaveRow[]): Promise<void> {
    await api.post('/target/plans/bulk', { target_version_id: targetVersionId, rows })
  },

  /** POST /api/target/versions/{id}/submit — ajukan draft untuk persetujuan. */
  async submitVersion(targetVersionId: number): Promise<void> {
    await api.post(`/target/versions/${targetVersionId}/submit`)
  },

  /** POST /api/target/versions/{id}/approve — setujui versi target. */
  async approveVersion(targetVersionId: number, notes?: string): Promise<void> {
    await api.post(`/target/versions/${targetVersionId}/approve`, { notes: notes ?? '' })
  },

  /** POST /api/target/versions/{id}/reject — tolak versi, kembali ke draft dengan catatan. */
  async rejectVersion(targetVersionId: number, notes: string): Promise<void> {
    await api.post(`/target/versions/${targetVersionId}/reject`, { notes })
  },

  /** POST /api/target/versions/{id}/lock — kunci versi yang sudah disetujui. */
  async lockVersion(targetVersionId: number): Promise<void> {
    await api.post(`/target/versions/${targetVersionId}/lock`)
  },

  /** POST /api/target/copy — salin target dari tahun sebelumnya sebagai draft. */
  async copyFromPreviousYear(payload: {
    source_year_id: number
    target_year_id: number
    division_branch_ids?: number[]
    overwrite?: boolean
  }): Promise<void> {
    await api.post('/target/copy', payload)
  },
}
