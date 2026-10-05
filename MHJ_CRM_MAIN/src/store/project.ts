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
  type Dict,
} from '@/api/response'
import { runApiAction } from '@/store/apiAction'
import type { ListParams, Pagination } from '@/types/api'
import type { Profile, Projects } from '@/types/project'
import type { Select } from '@/types/common'

// Gambar placeholder karena tabel project belum memiliki kolom banner.
const DEFAULT_BANNER = 'project/list/1.png'

const ENDPOINT = 'project'

/**
 * Payload create/update project memakai nama kolom tabel `project`.
 * Field yang tidak diisi akan dikirim kosong oleh pemanggil.
 */
export interface ProjectPayload {
  project_name: string
  deal_id: number | string
  leader_id: number | string
  status_id: number | string
  description?: string
  address?: string
  kd_kelurahan?: string
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
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

/** Mengubah satu baris tabel `project` menjadi Projects. */
export function normalizeProject(raw: Dict): Projects {
  const leaderName = pickString(raw, 'leader_name')
  const statusName = pickString(raw, 'status_name')
  const statusId = pickNumber(raw, 'status_id')
  const dealId = pick(raw, 'deal_id')
  const leaderId = pick(raw, 'leader_id')

  return {
    id: pickNumber(raw, 'id', 'ID'),
    projectName: pickString(raw, 'project_name'),
    projectDescription: pickString(raw, 'description'),
    projectBanner: DEFAULT_BANNER,
    date: formatDate(pickString(raw, 'created_at')),
    // Kolom progress dan budget belum ada di tabel project.
    progress: 0,
    status: toSlug(statusName) || String(statusId || ''),
    budget: '',
    teamMember: leaderName ? [{ name: leaderName } as Profile] : [],
    dealId: dealId === undefined ? undefined : Number(dealId),
    leaderId: leaderId === undefined ? undefined : Number(leaderId),
    statusId,
    address: pickString(raw, 'address'),
    kdKelurahan: pickString(raw, 'kd_kelurahan'),
    dealName: pickString(raw, 'deal_name'),
    leaderName,
    statusName,
    createdBy: pickString(raw, 'created_by'),
  }
}

export const useProjectStore = defineStore('project', () => {
  const items = ref<Projects[]>([])
  const selectedItem = ref<Projects | null>(null)
  const loading = ref(false)
  const submitting = ref(false)
  const error = ref<string | null>(null)
  const pagination = reactive<Pagination>({ page: 1, perPage: 10, total: 0, lastPage: 1 })
  // Menandai bahwa daftar sudah pernah berhasil dimuat dari API.
  const loaded = ref(false)
  const lastParams = ref<ListParams>({})

  // Data pendukung form project (status_id, leader_id, deal_id).
  const lookups = reactive<{ status: Select[]; leader: Select[]; deals: Select[] }>({
    status: [],
    leader: [],
    deals: [],
  })

  /** GET /api/project. */
  function fetchProjects(params: ListParams = {}) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data project.',
      task: async () => {
        const response = await api.getbydata(ENDPOINT, { ...params })
        // Response project dibungkus di key "companies" (paginator), sama seperti form lama.
        const { items: rawItems, meta } = extractList(response.data, ['projects', 'companies'])
        items.value = rawItems.filter(isRecord).map(normalizeProject)
        if (meta) Object.assign(pagination, meta)
        lastParams.value = params
        loaded.value = true
        return items.value
      },
    })
  }

  /** GET /api/project/fetchprojectbyid?id=<id>. */
  function fetchProjectById(id: number) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat detail project.',
      task: async () => {
        const response = await api.getbydata(`${ENDPOINT}/fetchprojectbyid`, { id })
        const raw = extractItem(response.data, ['project'])
        selectedItem.value = raw ? normalizeProject(raw) : null
        return selectedItem.value
      },
    })
  }

  /** POST /api/project/input dengan choice "i". */
  function createProject(payload: ProjectPayload) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menyimpan project.',
      task: async () => {
        const response = await api.post(`${ENDPOINT}/input`, { choice: 'i', ...payload })
        const raw = extractItem(response.data, ['project'])
        const created = raw ? normalizeProject(raw) : null

        if (created && created.id) {
          items.value = [created, ...items.value]
        } else {
          await fetchProjects(lastParams.value)
        }
        return created
      },
    })
  }

  /** POST /api/project/input dengan choice "u". */
  function updateProject(id: number, payload: Partial<ProjectPayload>) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal memperbarui project.',
      task: async () => {
        const response = await api.post(`${ENDPOINT}/input`, { choice: 'u', id, ...payload })
        const raw = extractItem(response.data, ['project'])

        if (raw) {
          const updated = normalizeProject(raw)
          items.value = items.value.map((item) => (item.id === id ? updated : item))
          if (selectedItem.value?.id === id) selectedItem.value = updated
          return updated
        }

        await fetchProjects(lastParams.value)
        return null
      },
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
      },
    })
  }

  /** GET data pendukung: /project/status, /project/leader, /project/deals. */
  function fetchProjectLookups() {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data pendukung project.',
      task: async () => {
        const [status, leader, deals] = await Promise.all([
          api.get(`${ENDPOINT}/status`),
          api.get(`${ENDPOINT}/leader`),
          api.get(`${ENDPOINT}/deals`),
        ])
        lookups.status = normalizeOptions(status.data, ['statuses', 'status'])
        lookups.leader = normalizeOptions(leader.data, ['leaders', 'leader'])
        lookups.deals = normalizeOptions(deals.data, ['deals'])
      },
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
    fetchProjectLookups,
  }
})
