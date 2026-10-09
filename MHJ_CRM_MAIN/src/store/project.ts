import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/api'
import {
  extractItem,
  extractList,
  isRecord,
  normalizeOptions,
  pick,
  pickNumber,
  pickString,
  type Dict
} from '@/api/response'
import { runApiAction } from '@/store/apiAction'
import type { ListParams, Pagination } from '@/types/api'
import type { Profile, Projects } from '@/types/project'
import type { Select } from '@/types/common'

// Gambar placeholder karena tabel project belum memiliki kolom banner.
const DEFAULT_BANNER = 'project/list/1.png'

const ENDPOINT = 'project'

/** Payload create/update mengikuti kolom tabel `m_projects`. */
export interface ProjectPayload {
  projects_name: string
  company_id?: number | string
  contact_id?: number | string
  owner_id?: number | string
  stage_id?: number | string
  currency?: string
  amount_value?: number
  expected_close_date?: string
  priority?: number
  competitor_id?: number | string
  sumberdana_id?: number | string
  probability?: number
  aktif?: number
  idold?: number | string
  created_by?: number | string
}

/** Mengubah nama status menjadi slug, mis. "Closed Won" menjadi "closed_won". */
function toSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

/** Mengubah created_at menjadi tanggal yang mudah dibaca, mis. "29 Apr 2026". */
function formatDate(value: string): string {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

function optionalNumber(raw: Dict, ...keys: string[]): number | undefined {
  const value = pick(raw, ...keys)
  if (value === undefined || value === '') return undefined
  const number = Number(value)
  return Number.isFinite(number) ? number : undefined
}

/** Mengubah satu baris tabel `m_projects` menjadi model tampilan Projects. */
export function normalizeProject(raw: Dict): Projects {
  const ownerName = pickString(raw, 'owner_name', 'leader_name')
  const stageName = pickString(raw, 'stage_name', 'status_name', 'stage', 'status')
  const stageId = optionalNumber(raw, 'stage_id', 'status_id')
  const ownerId = optionalNumber(raw, 'owner_id', 'leader_id')
  const amountValue = optionalNumber(
    raw,
    'amount_value',
    // Alias lama tetap dibaca selama masa transisi API.
    'project_value',
    'deal_value',
    'total_value',
    'value',
    'amount',
    'budget',
    'nilai'
  )
  const currency = pickString(raw, 'currency') || 'IDR'
  const expectedCloseDate = pickString(raw, 'expected_close_date')
  const probability = optionalNumber(raw, 'probability')

  return {
    id: pickNumber(raw, 'id', 'ID'),
    projectName: pickString(raw, 'projects_name', 'project_name', 'deal_name'),
    projectDescription: pickString(raw, 'company_name', 'description'),
    projectBanner: DEFAULT_BANNER,
    date: formatDate(expectedCloseDate || pickString(raw, 'created_at')),
    progress: probability ?? 0,
    status: toSlug(stageName) || String(stageId ?? ''),
    budget: amountValue !== undefined ? `${currency} ${amountValue.toLocaleString('id-ID')}` : '',
    projectValue: amountValue ?? 0,
    teamMember: ownerName ? [{ name: ownerName } as Profile] : [],
    companyId: optionalNumber(raw, 'company_id'),
    contactId: optionalNumber(raw, 'contact_id'),
    ownerId,
    stageId,
    currency,
    amountValue,
    expectedCloseDate,
    priority: optionalNumber(raw, 'priority'),
    competitorId: optionalNumber(raw, 'competitor_id'),
    sumberdanaId: optionalNumber(raw, 'sumberdana_id'),
    probability,
    aktif: optionalNumber(raw, 'aktif'),
    idold: optionalNumber(raw, 'idold'),
    companyName: pickString(raw, 'company_name'),
    contactName: pickString(raw, 'contact_name'),
    ownerName,
    stageName,
    competitorName: pickString(raw, 'competitor_name'),
    sumberdanaName: pickString(raw, 'sumberdana_name'),
    createdBy: pickString(raw, 'created_by')
  }
}

export const useProjectStore = defineStore('project', () => {
  const items = ref<Projects[]>([])
  const selectedItem = ref<Projects | null>(null)
  const loading = ref(false)
  const submitting = ref(false)
  const error = ref<string | null>(null)
  const pagination = reactive<Pagination>({
    page: 1,
    perPage: 10,
    total: 0,
    lastPage: 1
  })
  // Menandai bahwa daftar sudah pernah berhasil dimuat dari API.
  const loaded = ref(false)
  const lastParams = ref<ListParams>({})

  // Data pendukung foreign key tabel m_projects.
  const lookups = reactive<{
    stage: Select[]
    owner: Select[]
    competitor: Select[]
    sumberdana: Select[]
  }>({
    stage: [],
    owner: [],
    competitor: [],
    sumberdana: []
  })

  /** GET /api/project. */
  function fetchProjects(params: ListParams = {}) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data project.',
      task: async () => {
        const response = await api.getbydata(ENDPOINT, { ...params })
        // "companies" dipertahankan sebagai fallback response API lama.
        const { items: rawItems, meta } = extractList(response.data, ['projects', 'companies'])
        items.value = rawItems.filter(isRecord).map(normalizeProject)
        if (meta) Object.assign(pagination, meta)
        lastParams.value = params
        loaded.value = true
        return items.value
      }
    })
  }

  /** GET /api/project/fetchprojectbyid?id=<id>. */
  function fetchProjectById(id: number) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat detail project.',
      task: async () => {
        const response = await api.getbydata(`${ENDPOINT}/fetchprojectbyid`, {
          id
        })
        const raw = extractItem(response.data, ['project', 'projects'])
        selectedItem.value = raw ? normalizeProject(raw) : null
        return selectedItem.value
      }
    })
  }

  /** POST /api/project/input dengan choice "i". */
  function createProject(payload: ProjectPayload) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menyimpan project.',
      task: async () => {
        const response = await api.post(`${ENDPOINT}/input`, {
          choice: 'i',
          ...payload
        })
        const raw = extractItem(response.data, ['project', 'projects'])
        const created = raw ? normalizeProject(raw) : null

        if (created && created.id) {
          items.value = [created, ...items.value]
        } else {
          await fetchProjects(lastParams.value)
        }
        return created
      }
    })
  }

  /** POST /api/project/input dengan choice "u". */
  function updateProject(id: number, payload: Partial<ProjectPayload>) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal memperbarui project.',
      task: async () => {
        const response = await api.post(`${ENDPOINT}/input`, {
          choice: 'u',
          id,
          ...payload
        })
        const raw = extractItem(response.data, ['project', 'projects'])

        if (raw) {
          const updated = normalizeProject(raw)
          items.value = items.value.map((item) => (item.id === id ? updated : item))
          if (selectedItem.value?.id === id) selectedItem.value = updated
          return updated
        }

        await fetchProjects(lastParams.value)
        return null
      }
    })
  }

  /** POST /api/project/input dengan choice "d". */
  function deleteProject(id: number) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menghapus project.',
      task: async () => {
        await api.post(`${ENDPOINT}/input`, { choice: 'd', id })
        items.value = items.value.filter((item) => item.id !== id)
        if (selectedItem.value?.id === id) selectedItem.value = null
      }
    })
  }

  /** GET lookup yang memang tersedia: status untuk stage dan leader untuk user/owner. */
  function fetchProjectLookups() {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data pendukung project.',
      task: async () => {
        const [stageResponse, ownerResponse] = await Promise.all([
          api.get(`${ENDPOINT}/status`),
          api.get(`${ENDPOINT}/leader`)
        ])
        lookups.stage = normalizeOptions(stageResponse.data, [
          'stages',
          'stage',
          'statuses',
          'status'
        ])
        lookups.owner = normalizeOptions(ownerResponse.data, [
          'owners',
          'owner',
          'leaders',
          'leader',
          'users'
        ])

        // Backend belum menyediakan route lookup khusus untuk kedua master ini.
        // Form project tetap memakai opsi lokal tanpa menembakkan request 404.
        lookups.competitor = []
        lookups.sumberdana = []
      }
    })
  }

  return {
    items,
    selectedItem,
    loading,
    submitting,
    error,
    pagination,
    loaded,
    lookups,
    fetchProjects,
    fetchProjectById,
    createProject,
    updateProject,
    deleteProject,
    fetchProjectLookups
  }
})
