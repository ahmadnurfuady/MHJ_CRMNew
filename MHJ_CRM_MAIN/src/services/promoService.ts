import { api } from '@/services/api'

export interface PromoApiItem {
  id: number
  title: string
  content: string | null
  image_path: string | null
  /** URL lengkap siap pakai untuk <img>, mis. `https://.../storage/information-cards/xxx.jpg`. */
  image_url?: string | null
  is_active: boolean | number
  start_date: string | null
  end_date: string | null
  target_type: string
  target_branch_id: number | null
  target_jabatan_id: number | null
  sort_order: number
  created_at?: string
  updated_at?: string
}

export interface PromoPayload {
  title: string
  content: string
  is_active: boolean
  start_date: string
  end_date: string
  target_type: string
  target_branch_id: number | null
  target_jabatan_id: number | null
  sort_order: number
  /** File gambar baru yang dipilih user. Kosongkan jika gambar tidak diubah. */
  image?: File | null
  /** true jika user menghapus gambar yang sudah ada (tanpa mengganti dengan yang baru). */
  removeImage?: boolean
}

/** Membungkus respons yang mungkin array langsung atau `{ data: [...] }`. */
function asArray<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) return payload as T[]
  if (payload && typeof payload === 'object' && Array.isArray((payload as { data?: unknown }).data)) {
    return (payload as { data: T[] }).data
  }
  return []
}

/** Laravel tidak bisa parse body multipart pada request PUT/PATCH, jadi update tetap pakai POST + `_method`. */
function buildFormData(payload: PromoPayload, methodOverride?: 'PUT'): FormData {
  const data = new FormData()
  if (methodOverride) data.append('_method', methodOverride)

  data.append('title', payload.title)
  data.append('content', payload.content ?? '')
  data.append('is_active', payload.is_active ? '1' : '0')
  data.append('start_date', payload.start_date ?? '')
  data.append('end_date', payload.end_date ?? '')
  data.append('target_type', payload.target_type)
  data.append(
    'target_branch_id',
    payload.target_branch_id === null ? '' : String(payload.target_branch_id)
  )
  data.append(
    'target_jabatan_id',
    payload.target_jabatan_id === null ? '' : String(payload.target_jabatan_id)
  )
  data.append('sort_order', String(payload.sort_order))

  if (payload.image) {
    data.append('image', payload.image, payload.image.name)
  } else if (payload.removeImage) {
    data.append('remove_image', '1')
  }

  return data
}

export const promoService = {
  /** GET /api/master-information-cards */
  async getPromos(): Promise<PromoApiItem[]> {
    const res = await api.get('/master-information-cards')
    return asArray<PromoApiItem>(res.data)
  },

  /** POST /api/master-information-cards */
  async createPromo(payload: PromoPayload): Promise<PromoApiItem> {
    const res = await api.postForm<{ data?: PromoApiItem } & PromoApiItem>(
      '/master-information-cards',
      buildFormData(payload)
    )
    return (res.data as { data?: PromoApiItem }).data ?? (res.data as PromoApiItem)
  },

  /** POST /api/master-information-cards/{id} dengan `_method=PUT` (method-spoofing untuk upload file). */
  async updatePromo(id: number, payload: PromoPayload): Promise<PromoApiItem> {
    const res = await api.postForm<{ data?: PromoApiItem } & PromoApiItem>(
      `/master-information-cards/${id}`,
      buildFormData(payload, 'PUT')
    )
    return (res.data as { data?: PromoApiItem }).data ?? (res.data as PromoApiItem)
  },

  /** DELETE /api/master-information-cards/{id} */
  async deletePromo(id: number): Promise<void> {
    await api.delete(`/master-information-cards/${id}`)
  },
}
