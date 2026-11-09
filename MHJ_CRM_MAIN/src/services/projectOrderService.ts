import { api } from '@/services/api'

/** Satu tahapan milestone dari `GET /api/project/ordertracking/{projectId}`. */
export interface OrderMilestone {
  urut: number
  milestone_id: number | string
  nama: string
  keterangan: string | null
  /** Departemen in-charge, mis. "Sales" / "Admin" / "Logistik". */
  department?: string | null
  is_completed: boolean
  /** Status tahap: 'done' = selesai, 'process' = sedang dikerjakan, 'pending' = belum giliran. */
  status?: 'done' | 'process' | 'pending'
  /** Tanggal mulai step (auto-isi saat step sebelumnya selesai, bisa di-override). */
  started_at?: string | null
  started_time?: string | null
  started_date?: string | null
  completed_at: string | null
  completed_time: string | null
  completed_date: string | null
  no_referensi_erp: string | null
  catatan?: string | null
}

export interface OrderTrackingResult {
  milestones: OrderMilestone[]
  totalSteps: number
  completedSteps: number
  isComplete: boolean
}

interface OrderTrackingResponse {
  data?: OrderMilestone[]
  milestones?: OrderMilestone[]
  total_steps?: number
  completed_steps?: number
  is_complete?: boolean
}

/** Label fallback agar timeline tetap menampilkan 11 tahapan saat master kosong. */
const MILESTONE_LABELS = [
  'Data pelanggan telah dibuat dan surat pesanan telah diupload',
  'Surat pesanan telah dibuat',
  'Pembayaran DP',
  'SPJB telah disetujui',
  'Delivery order telah dibuat',
  'Produk dalam proses pengiriman',
  'Produk telah tiba di alamat tujuan',
  'Produk dalam proses install',
  'Produk sudah ter-install',
  'Training & BAST',
  'Penerimaan Surat Setoran Pajak (SSP)',
]

function placeholderMilestones(): OrderMilestone[] {
  return MILESTONE_LABELS.map((nama, index) => ({
    urut: index + 1,
    milestone_id: index + 1,
    nama,
    keterangan: null,
    is_completed: false,
    completed_at: null,
    completed_time: null,
    completed_date: null,
    no_referensi_erp: null,
  }))
}

/** `GET /api/project/ordertracking/{projectId}` → 11 tahapan terurut. */
export async function fetchOrderTracking(projectId: number | string): Promise<OrderTrackingResult> {
  const response = await api.get<OrderTrackingResponse>(`/project/ordertracking/${projectId}`)
  const rows = response.data?.milestones ?? response.data?.data ?? []
  const milestones = rows.length ? rows : placeholderMilestones()
  const completedSteps = response.data?.completed_steps
    ?? milestones.filter((item) => item.is_completed).length

  return {
    milestones,
    totalSteps: response.data?.total_steps ?? milestones.length,
    completedSteps,
    isComplete: response.data?.is_complete ?? (milestones.length > 0 && completedSteps === milestones.length),
  }
}

/** `POST /api/project/pocustomer` — upsert PO Customer. */
export async function savePoCustomer(payload: Record<string, unknown>) {
  const response = await api.post('/project/pocustomer', payload)
  return response.data
}

/** `GET /api/project/pocustomer/{projectId}` */
export async function fetchPoCustomer(projectId: number | string) {
  const response = await api.get<{ data?: unknown; exists?: boolean }>(`/project/pocustomer/${projectId}`)
  return response.data?.data ?? null
}

/**
 * `POST /api/project/suratpesanan` — upsert Surat Pesanan.
 * Dikirim sebagai FormData agar scan dokumen (PDF/gambar) ikut terunggah.
 */
export async function saveSuratPesanan(
  payload: Record<string, unknown>,
  file?: File | Blob | null,
  fileName?: string,
) {
  const formData = new FormData()
  Object.entries(payload).forEach(([key, value]) => {
    if (value === null || value === undefined) return
    formData.append(key, typeof value === 'boolean' ? (value ? '1' : '0') : String(value))
  })
  if (file) {
    formData.append('file', file, fileName ?? (file instanceof File ? file.name : 'surat-pesanan'))
  }

  const response = await api.postForm('/project/suratpesanan', formData)
  return response.data
}

/** `GET /api/project/suratpesanan/{projectId}` */
export async function fetchSuratPesanan(projectId: number | string) {
  const response = await api.get<{ data?: unknown; exists?: boolean }>(`/project/suratpesanan/${projectId}`)
  return response.data?.data ?? null
}

/** Satu baris reminder peluang Win yang belum lengkap datanya. */
export interface WonMissingRequirement {
  project_id: number
  id: number
  projects_name: string | null
  project_name: string | null
  company_name: string | null
  stage_name: string | null
  status: string | null
  has_po_customer: boolean
  has_surat_pesanan: boolean
  missing_customer: boolean
  missing_surat_pesanan: boolean
  missing: string[]
}

interface WonMissingRequirementResponse {
  data?: WonMissingRequirement[]
  total?: number
  total_missing_customer?: number
  total_missing_surat_pesanan?: number
}

/**
 * `GET /api/project/wonmissingrequirements`
 *
 * Satu call untuk mengambil daftar peluang Win milik user yang Data Pelanggan
 * (PO Customer) dan/atau Surat Pesanannya belum dibuat. Menggantikan N panggilan
 * `/pocustomer/{id}` + `/suratpesanan/{id}` per peluang di halaman list.
 */
export async function fetchWonMissingRequirements(): Promise<WonMissingRequirement[]> {
  const response = await api.get<WonMissingRequirementResponse>('/project/wonmissingrequirements')
  return response.data?.data ?? []
}
