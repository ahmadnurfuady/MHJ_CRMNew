import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/api'
import {
  extractItem,
  extractList,
  isRecord,
  normalizeOptions,
  pick,
  pickString,
  type Dict
} from '@/api/response'
import { runApiAction } from '@/store/apiAction'
import type { ListParams, Pagination } from '@/types/api'
import type { Profile, Projects } from '@/types/project'
import type { Select } from '@/types/common'

// Gambar placeholder karena tabel projects belum memiliki kolom banner.
const DEFAULT_BANNER = 'project/list/1.png'

// Pipeline Project memakai controller Deals karena endpoint inilah yang menulis dbo.m_projects.
// Istilah Deals hanya dipertahankan pada URL API; seluruh wording UI tetap Project.
const ENDPOINT = 'deals'

/** Payload form Project; sebelum dikirim dipetakan ke kontrak legacy DealsController. */
export interface ProjectPayload {
  projects_name: string
  company_id: number | null
  contact_id: number | null
  owner_id: number | null
  stage_id: number | null
  currency: string | null
  amount_value: number | null
  expected_close_date: string | null
  priority: number | null
  competitor_id: number | null
  sumberdana_id: number | null
  probability: number | null
  aktif: number
  idold: number | null
  created_by: number | null
  division_code: string | null
  product_names: string[]
  quantity: number
  unit_price: number
  lost_reasons: string[]
  notes: string | null
  timeline: ProjectTimelinePayload[]
}

export interface ProjectTimelinePayload {
  date: string
  activity: string
}

const PIPELINE_STAGES: Record<number, string> = {
  1: 'Qualified',
  2: 'Presentation/Demo',
  3: 'Quotation',
  4: 'Negotiation',
  5: 'Closed Won',
  6: 'Closed Lost',
  7: 'Closed Cancel'
}

/** Mengubah nama status menjadi slug, mis. "Closed Won" menjadi "closed_won". */
function toSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

function optionalNumber(raw: Dict, ...keys: string[]): number | undefined {
  const value = pick(raw, ...keys)
  if (value === undefined || value === '') return undefined
  const number = Number(value)
  return Number.isFinite(number) ? number : undefined
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

/** Mengubah satu baris dbo.m_projects / view project menjadi model tampilan. */
export function normalizeProject(raw: Dict): Projects {
  const ownerName = pickString(raw, 'owner_name', 'leader_name')
  const stageId = optionalNumber(raw, 'stage_id', 'pipeline_id', 'status_id')
  const stageName =
    pickString(raw, 'stage_name', 'pipeline_name', 'status_name', 'stage', 'status') ||
    PIPELINE_STAGES[stageId ?? 0] ||
    ''
  const ownerId = optionalNumber(raw, 'owner_id', 'leader_id')
  const amountValue = optionalNumber(raw, 'amount_value', 'project_value', 'total_value', 'value')
  const currency = pickString(raw, 'currency') || 'IDR'
  const expectedCloseDate = pickString(raw, 'expected_close_date')
  const probability = optionalNumber(raw, 'probability')
  const companyName = pickString(raw, 'company_name')

  return {
    id: optionalNumber(raw, 'id', 'ID') ?? 0,
    // API /deals masih memakai nama legacy `deal_name` untuk dbo.m_projects.
    projectName: pickString(raw, 'projects_name', 'deal_name', 'project_name'),
    projectDescription: companyName,
    projectBanner: DEFAULT_BANNER,
    date: formatDate(expectedCloseDate || pickString(raw, 'created_at')),
    progress: probability ?? 0,
    status: toSlug(stageName) || String(stageId ?? ''),
    budget: amountValue !== undefined ? `${currency} ${amountValue.toLocaleString('id-ID')}` : '',
    projectValue: amountValue ?? 0,
    companyId: optionalNumber(raw, 'company_id'),
    companyName,
    contactId: optionalNumber(raw, 'contact_id'),
    contactName: pickString(raw, 'contact_name'),
    ownerId,
    ownerName,
    stageId,
    stageName,
    currency,
    amountValue,
    expectedCloseDate,
    priority: optionalNumber(raw, 'priority'),
    competitorId: optionalNumber(raw, 'competitor_id'),
    competitorName: pickString(raw, 'competitor_name'),
    sumberdanaId: optionalNumber(raw, 'sumberdana_id'),
    sumberdanaName: pickString(raw, 'sumberdana_name'),
    probability,
    aktif: optionalNumber(raw, 'aktif'),
    idold: optionalNumber(raw, 'idold'),
    divisionCode: pickString(raw, 'division_code'),
    productNames: pickString(raw, 'product_names'),
    lostReasons: pickString(raw, 'lost_reasons'),
    teamMember: ownerName ? [{ name: ownerName } as Profile] : [],
    createdBy: pickString(raw, 'created_by'),
    createdAt: pickString(raw, 'created_at'),
    quantity: optionalNumber(raw, 'quantity', 'qty'),
    unitPrice: optionalNumber(raw, 'unit_price', 'price', 'harga'),
    notes: pickString(raw, 'notes', 'note', 'description'),
    contactPhone: pickString(raw, 'contact_phone', 'phone', 'telephone_1', 'mobile')
  }
}

export const useProjectStore = defineStore('project', () => {
  const items = ref<Projects[]>([])
  const selectedItem = ref<Projects | null>(null)
  const selectedDetails = ref<Dict[]>([])
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

  // Data pendukung yang dipakai form project.
  const lookups = reactive<{
    owner: Select[]
  }>({
    owner: []
  })

  /** GET /api/deals; endpoint legacy ini membaca dbo.m_projects. */
  function fetchProjects(params: ListParams = {}) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data proyek.',
      task: async () => {
        const response = await api.getbydata(ENDPOINT, { ...params })
        const { items: rawItems, meta } = extractList(response.data, [
          'deals',
          'projects',
          'companies'
        ])
        items.value = rawItems.filter(isRecord).map(normalizeProject)
        if (meta) Object.assign(pagination, meta)
        lastParams.value = params
        loaded.value = true
        return items.value
      }
    })
  }

  /** GET header m_projects dan detail m_projectsdet melalui API legacy Deals. */
  function fetchProjectById(id: number) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat detail proyek.',
      task: async () => {
        const response = await api.getbydata(`${ENDPOINT}/fetchdealsbyid`, {
          id
        })
        const raw = extractItem(response.data, ['deal', 'deals', 'project', 'projects'])
        const detailResult = extractList(response.data, [
          'projectdetails',
          'project_details',
          'm_projectsdet',
          'dealdetails',
          'deal_details',
          'details',
          'taskassoc'
        ])
        selectedDetails.value = detailResult.items.filter(isRecord)
        selectedItem.value = raw ? normalizeProject(raw) : null
        return selectedItem.value
      }
    })
  }

  /** POST /api/deals/input dengan choice "i", lalu ambil ulang baris lengkapnya. */
  function createProject(payload: ProjectPayload) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menyimpan proyek.',
      task: async () => {
        const response = await api.post(`${ENDPOINT}/input`, {
          choice: 'i',
          // Mapping nama form Project ke kontrak legacy DealsController/m_projects.
          deal_name: payload.projects_name,
          pipeline_id: payload.stage_id,
          source_id: null,
          ...payload
        })
        const raw = extractItem(response.data, ['deal', 'deals', 'project', 'projects', 'result'])
        const newId = raw ? optionalNumber(raw, 'id') : undefined

        let created: Projects | null = null
        if (newId) {
          try {
            created = await fetchProjectById(newId)
          } catch {
            created = null
          }
        }

        if (created) {
          items.value = [created, ...items.value]
        } else {
          await fetchProjects(lastParams.value)
        }
        return created
      }
    })
  }

  /** POST /api/deals/input dengan choice "u", lalu ambil ulang baris lengkapnya. */
  function updateProject(id: number, payload: Partial<ProjectPayload>) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal memperbarui proyek.',
      task: async () => {
        await api.post(`${ENDPOINT}/input`, {
          choice: 'u',
          id,
          deal_name: payload.projects_name,
          pipeline_id: payload.stage_id,
          source_id: null,
          ...payload
        })

        let updated: Projects | null = null
        try {
          updated = await fetchProjectById(id)
        } catch {
          updated = null
        }

        if (updated) {
          items.value = items.value.map((item) => (item.id === id ? (updated as Projects) : item))
          if (selectedItem.value?.id === id) selectedItem.value = updated
          return updated
        }

        await fetchProjects(lastParams.value)
        return null
      }
    })
  }

  /** POST /api/deals/input dengan choice "d". */
  function deleteProject(id: number) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menghapus proyek.',
      task: async () => {
        await api.post(`${ENDPOINT}/input`, { choice: 'd', id })
        items.value = items.value.filter((item) => item.id !== id)
        if (selectedItem.value?.id === id) selectedItem.value = null
      }
    })
  }

  /** GET /api/deals/users untuk pilihan owner. */
  function fetchProjectLookups() {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data pendukung proyek.',
      task: async () => {
        const ownerResponse = await api.get(`${ENDPOINT}/users`)
        lookups.owner = normalizeOptions(ownerResponse.data, ['leaders', 'leader', 'users'])
      }
    })
  }

  return {
    items,
    selectedItem,
    selectedDetails,
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
