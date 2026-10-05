import { api } from '@/services/api'
import type {
  MasterOption,
  UserBrowseParams,
  UserBrowseResponse,
  UserCrmItem,
  UserCrudPayload,
  UserMasterOptions,
} from '@/types/user'

/** Baris master-data mentah: nama kolomnya tidak dijamin oleh dokumentasi API. */
type RawRow = Record<string, unknown>

/**
 * Mengambil array dari respons yang bentuknya belum pasti.
 * Backend master-data bisa mengirim array langsung, `{ data: [...] }`,
 * atau membungkusnya dalam properti bernama entitas (`{ cabang: [...] }`).
 */
function unwrapArray(payload: unknown): RawRow[] {
  if (Array.isArray(payload)) return payload as RawRow[]
  if (payload && typeof payload === 'object') {
    const record = payload as Record<string, unknown>
    if (Array.isArray(record.data)) return record.data as RawRow[]
    const firstArray = Object.values(record).find((value) => Array.isArray(value))
    if (Array.isArray(firstArray)) return firstArray as RawRow[]
  }
  return []
}

/** Mengambil nilai kolom pertama yang cocok, tanpa mempedulikan besar-kecil huruf. */
function pick(row: RawRow, candidates: string[]): string {
  const lowerMap = new Map<string, unknown>()
  Object.entries(row).forEach(([key, value]) => lowerMap.set(key.toLowerCase(), value))

  for (const candidate of candidates) {
    const value = lowerMap.get(candidate.toLowerCase())
    if (value !== null && value !== undefined && String(value).trim() !== '') {
      return String(value).trim()
    }
  }
  return ''
}

function toOptions(payload: unknown, valueKeys: string[], labelKeys: string[]): MasterOption[] {
  return unwrapArray(payload)
    .map((row) => {
      const value = pick(row, valueKeys)
      return { value, label: pick(row, labelKeys) || value }
    })
    .filter((option) => option.value !== '')
}

const CABANG_VALUE_KEYS = ['KodeCabang', 'kode', 'id']
const CABANG_LABEL_KEYS = ['NamaCabang', 'nama', 'name', 'Cabang', 'keterangan']

const DEVISI_VALUE_KEYS = ['KodeDevisi', 'kode', 'id']
const DEVISI_LABEL_KEYS = ['NamaDevisi', 'nama', 'name', 'Devisi', 'keterangan']

const TIPE_VALUE_KEYS = ['KodeTipeMarketing', 'kode', 'id']
const TIPE_LABEL_KEYS = ['NamaTipeMarketing', 'nama', 'name', 'TipeMarketing', 'keterangan']

const JABATAN_VALUE_KEYS = ['idjabatan', 'id', 'KodeJabatan', 'kode']
const JABATAN_LABEL_KEYS = ['nama_jabatan', 'NamaJabatan', 'nama', 'name', 'jabatan', 'keterangan']

export const userService = {
  /** GET /api/user_list/browse — paginasi, pencarian nama, filter role, urutan A-Z/Z-A. */
  async browseUsers(params: UserBrowseParams): Promise<UserBrowseResponse> {
    const response = await api.get<UserBrowseResponse>('/user_list/browse', { params })
    return response.data
  },

  /** GET /api/userscrm/fetchusersbyid — prefill formulir edit. */
  async fetchUserById(id: number): Promise<UserCrmItem | null> {
    const response = await api.get<{ user?: UserCrmItem }>('/userscrm/fetchusersbyid', {
      params: { id },
    })
    return response.data?.user ?? null
  },

  /** GET /api/userscrm — seluruh user tanpa paginasi, untuk dropdown pilih user. */
  async getAllUsers(): Promise<UserCrmItem[]> {
    const response = await api.get<{ users?: UserCrmItem[] }>('/userscrm')
    return response.data?.users ?? []
  },

  /** POST /api/userscrm/input — menjalankan sp_users_crud untuk insert/update/delete. */
  async crudUser(payload: UserCrudPayload): Promise<{ msg?: string }> {
    const response = await api.post<{ msg?: string }>('/userscrm/input', payload)
    return response.data
  },

  async getMasterCabang(): Promise<MasterOption[]> {
    const response = await api.get('/master-data/cabang')
    return toOptions(response.data, CABANG_VALUE_KEYS, CABANG_LABEL_KEYS)
  },

  async getMasterDevisi(): Promise<MasterOption[]> {
    const response = await api.get('/master-data/devisi')
    return toOptions(response.data, DEVISI_VALUE_KEYS, DEVISI_LABEL_KEYS)
  },

  async getMasterTipeMarketing(): Promise<MasterOption[]> {
    const response = await api.get('/master-data/tipe')
    return toOptions(response.data, TIPE_VALUE_KEYS, TIPE_LABEL_KEYS)
  },

  async getMasterJabatan(): Promise<MasterOption[]> {
    const response = await api.get('/master-data/jabatan')
    return toOptions(response.data, JABATAN_VALUE_KEYS, JABATAN_LABEL_KEYS)
  },

  /**
   * Memuat keempat dropdown sekaligus. Memakai allSettled agar satu endpoint
   * master yang gagal tidak mengosongkan tiga dropdown lainnya.
   */
  async loadMasterOptions(): Promise<UserMasterOptions> {
    const [cabang, devisi, tipeMarketing, jabatan] = await Promise.allSettled([
      this.getMasterCabang(),
      this.getMasterDevisi(),
      this.getMasterTipeMarketing(),
      this.getMasterJabatan(),
    ])

    const settled = (result: PromiseSettledResult<MasterOption[]>): MasterOption[] =>
      result.status === 'fulfilled' ? result.value : []

    return {
      cabang: settled(cabang),
      devisi: settled(devisi),
      tipeMarketing: settled(tipeMarketing),
      jabatan: settled(jabatan),
    }
  },
}

/** Nama tampilan pengguna dari gabungan firstname + lastname, dengan cadangan name/email. */
export function userFullName(user: UserCrmItem): string {
  const composed = [user.firstname, user.lastname].filter(Boolean).join(' ').trim()
  return composed || user.name?.trim() || user.email?.trim() || `User #${user.id}`
}
