import { api } from '@/services/api'
import type {
  JabatanCrudPayload,
  MasterCabangItem,
  MasterDevisiItem,
  MasterJabatanItem,
  MasterTipeMarketingItem,
} from '@/types/master'

/** Membungkus respons yang mungkin array langsung atau `{ data: [...] }`. */
function asArray<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) return payload as T[]
  if (payload && typeof payload === 'object' && Array.isArray((payload as { data?: unknown }).data)) {
    return (payload as { data: T[] }).data
  }
  return []
}

export const masterDataService = {
  /** GET /api/master-data/cabang — seluruh kantor cabang. */
  async getCabang(): Promise<MasterCabangItem[]> {
    const res = await api.get('/master-data/cabang')
    return asArray<MasterCabangItem>(res.data)
  },

  /** GET /api/master-data/devisi — seluruh divisi. */
  async getDevisi(): Promise<MasterDevisiItem[]> {
    const res = await api.get('/master-data/devisi')
    return asArray<MasterDevisiItem>(res.data)
  },

  /** GET /api/master-data/tipe — seluruh tipe marketing. */
  async getTipeMarketing(): Promise<MasterTipeMarketingItem[]> {
    const res = await api.get('/master-data/tipe')
    return asArray<MasterTipeMarketingItem>(res.data)
  },

  /** GET /api/master-data/jabatan — seluruh master jabatan. */
  async getJabatan(): Promise<MasterJabatanItem[]> {
    const res = await api.get('/master-data/jabatan')
    return asArray<MasterJabatanItem>(res.data)
  },

  /** POST /api/master-data/jabatan — jalankan sp_jabatan_crud (insert/update/delete). */
  async crudJabatan(payload: JabatanCrudPayload): Promise<{ msg?: string }> {
    const body: JabatanCrudPayload = {
      action: payload.action,
      choice: payload.action,
      id: payload.id ?? null,
      nama_jabatan: payload.nama_jabatan,
      keterangan: payload.keterangan ?? null,
    }
    const res = await api.post<{ msg?: string }>('/master-data/jabatan', body)
    return res.data
  },

  createJabatan(nama_jabatan: string, keterangan?: string | null) {
    return this.crudJabatan({ action: 'i', nama_jabatan, keterangan: keterangan ?? null })
  },

  updateJabatan(id: number, nama_jabatan: string, keterangan?: string | null) {
    return this.crudJabatan({ action: 'u', id, nama_jabatan, keterangan: keterangan ?? null })
  },

  deleteJabatan(id: number) {
    return this.crudJabatan({ action: 'd', id })
  },
}
