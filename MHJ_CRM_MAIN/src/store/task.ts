import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { computed } from 'vue'
import Swal from 'sweetalert2'
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
import { useAuthStore } from '@/store/auth'
import { useProjectStore } from '@/store/project'
import type { ListParams, Pagination } from '@/types/api'
import type { Select } from '@/types/common'
import type { Projects } from '@/types/project'
import type { SalesTaskPayload, Task, TaskData, TaskDetails } from '@/types/tasks'

const projectStageStorageKey = 'mhj-crm-project-stages'
const CREATED_BY_ME = 'CreatedByMe'

function normalizeText(value: unknown, fallback = ''): string {
  if (value == null) return fallback
  const text = String(value).trim()
  return !text || text === '-' ? fallback : text
}

function pickText(raw: Dict, ...keys: string[]): string {
  for (const key of keys) {
    const text = normalizeText(raw[key])
    if (text) return text
  }
  return ''
}

/**
 * Mengambil task dengan urutan sumber canonical tanpa menggabungkan collection.
 * Urutan ini mencegah record yang sama dari `tasks`, `data`, dan `list` tampil ganda.
 */
export function extractTasks(payload: unknown): ReturnType<typeof extractList> {
  if (Array.isArray(payload)) return { items: payload }
  if (!isRecord(payload)) return { items: [] }

  const tasks = payload.tasks
  if (Array.isArray(tasks) || (isRecord(tasks) && Array.isArray(tasks.data))) {
    return extractList(payload, ['tasks'])
  }
  if (Array.isArray(payload.data)) return extractList(payload)
  if (Array.isArray(payload.list)) return extractList(payload, ['list'])
  if (isRecord(payload.data)) return extractTasks(payload.data)

  return { items: [] }
}

function readStorage<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : fallback
  } catch {
    return fallback
  }
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean)
  if (typeof value !== 'string' || !value.trim()) return []

  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed)) {
      return parsed.map((item) => String(item).trim()).filter(Boolean)
    }
  } catch {
    // Kolom varchar lama menyimpan daftar dengan pemisah koma.
  }

  return value.split(',').map((item) => item.trim()).filter(Boolean)
}

function nullableText(value: string): string | null {
  const normalized = value.trim()
  return normalized || null
}

/** Mengubah input datetime-local menjadi format yang diterima SQL Server datetime. */
function toSqlDateTime(value: string): string | null {
  const normalized = value.trim()
  if (!normalized) return null
  const sqlDateTime = normalized.replace('T', ' ')
  return /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(sqlDateTime)
    ? `${sqlDateTime}:00`
    : sqlDateTime
}

/**
 * Mengubah satu baris tabel `tasks` menjadi TaskDetails.
 * Kolom DB: task_name, description, project_id, due_date, created_at, created_by.
 * Field form (title, scheduledAt, notes) tetap dibaca sebagai cadangan untuk data lokal.
 */
export function normalizeTask(raw: Dict): TaskDetails {
  const rawProjectId = pick(raw, 'project_id', 'projectId')
  const projectId = rawProjectId === undefined ? null : Number(rawProjectId)
  const hospitalId = pickNumber(raw, 'company_id', 'hospital_id', 'companyId', 'hospitalId')
  const contactId = pickNumber(raw, 'contact_id', 'contactId')
  const rawTitle = pickText(raw, 'task_name', 'title', 'judul')
  const explicitProjectName = pickText(raw, 'projects_name', 'project_name', 'projectName')
  const embeddedProjectMatch =
    Number.isFinite(projectId) && projectId !== null && projectId > 0
      ? rawTitle.match(/^(.*?)\s*\(([^()]+)\)\s*$/)
      : null
  const title = embeddedProjectMatch?.[1]?.trim() || rawTitle || 'Task tanpa judul'
  const projectName = normalizeText(explicitProjectName || embeddedProjectMatch?.[2]?.trim())
  const hospital = pickText(
    raw,
    'hospital_name',
    'company_name',
    'hospital',
    'rumahSakit',
    'rumah_sakit'
  )
  const gpsCoordinates = pickString(raw, 'gps_coordinates').split(',')
  const gpsLatitude = Number(gpsCoordinates[0])
  const gpsLongitude = Number(gpsCoordinates[1])

  return {
    id: pickNumber(raw, 'id', 'ID') || Date.now(),
    title,
    subtitle: pickString(raw, 'subtitle') || projectName || hospital,
    description: pickText(raw, 'description', 'notes', 'keterangan'),
    kind: 'sales',
    category: pickText(raw, 'category', 'kategori'),
    status: pickText(raw, 'status', 'status_name') || 'Unknown',
    type: pickText(raw, 'type') || 'Unknown',
    priority: pickText(raw, 'priority') || 'Normal',
    progress: pickNumber(raw, 'progress'),
    assignedId: pickNumber(raw, 'assigned_id', 'assignedId') || null,
    owner: pickText(
      raw,
      'owner_name',
      'assigned_name',
      'created_by_name',
      'leader_name',
      'owner',
      'assigned_id',
      'created_by'
    ),
    projectId,
    projectName,
    hospitalId: hospitalId || undefined,
    hospital,
    contactId: contactId || undefined,
    contact: pickText(raw, 'contact_person', 'contact_name', 'contact'),
    scheduledAt: pickText(raw, 'scheduled_at', 'scheduledAt', 'due_date'),
    dueDate: pickText(raw, 'due_date', 'dueDate'),
    divisions: toStringArray(pick(raw, 'divisions', 'division')),
    products: toStringArray(pick(raw, 'products', 'product')),
    unrelatedProduct: Boolean(pick(raw, 'unrelatedProduct', 'unrelated_product')),
    stageFrom: pickString(raw, 'stageFrom', 'stage_from'),
    stageTo: pickString(raw, 'pipeline_stage', 'stageTo', 'stage_to'),
    photoName: pickString(raw, 'photoName', 'photo_name', 'photo_path'),
    photoUrl: pickString(
      raw,
      'photoUrl',
      'photo_url',
      'photo_path',
      'live_photo_url',
      'live_photo',
    ),
    latitude: pickNumber(raw, 'latitude') || (Number.isFinite(gpsLatitude) ? gpsLatitude : 0),
    longitude:
      pickNumber(raw, 'longitude') || (Number.isFinite(gpsLongitude) ? gpsLongitude : 0),
    locationAccuracy: pickNumber(raw, 'locationAccuracy', 'location_accuracy'),
    locationAddress: pickString(raw, 'locationAddress', 'location_address', 'address_location'),
    contactPhone: pickString(raw, 'contactPhone', 'contact_phone', 'telephone_1', 'phone'),
    createdAt: pickString(raw, 'createdAt', 'created_at'),
  }
}

export const useTask = defineStore('task', () => {
  const authStore = useAuthStore()
  const projectStore = useProjectStore()

  // Daftar tabel selalu dimulai kosong dan hanya diisi oleh response API/database.
  const salesTasks = ref<TaskDetails[]>([])
  const databaseTaskGroup: Task = {
    id: 1,
    title: 'Semua Tugas',
    value: CREATED_BY_ME,
    type: 'views',
    data: [],
  }

  const taskData = reactive<TaskData>({
    task: [databaseTaskGroup],
    activeTask: databaseTaskGroup,
    formSubmitted: false,
    title: '',
    description: '',
    subtitle: '',
    errors: [],
  })
  const projectStages = reactive<Record<number, string>>(
    readStorage<Record<number, string>>(projectStageStorageKey, {})
  )

  // State async untuk integrasi API task.
  const selectedItem = ref<TaskDetails | null>(null)
  const loading = ref(false)
  const submitting = ref(false)
  const error = ref<string | null>(null)
  const pagination = reactive<Pagination>({ page: 1, perPage: 10, total: 0, lastPage: 1 })
  const lookups = reactive<{
    status: Select[]
    priority: Select[]
    assignedTo: Select[]
    project: Select[]
  }>({ status: [], priority: [], assignedTo: [], project: [] })

  function createdByMeGroup() {
    return taskData.task.find((group) => group.value === CREATED_BY_ME)
  }

  /** Menyusun ulang daftar utama hanya dari task hasil API/database. */
  function rebuildCreatedByMe() {
    const group = createdByMeGroup()
    if (!group) return
    group.data = [...salesTasks.value]
  }

  function applyProjectRelation(task: TaskDetails, project?: Projects): TaskDetails {
    if (!project) return task

    return {
      ...task,
      projectName: task.projectName || project.projectName,
      subtitle: task.subtitle || project.projectName,
      hospitalId: task.hospitalId ?? project.companyId,
      hospital: task.hospital || project.companyName,
      contactId: task.contactId ?? project.contactId,
      contact: task.contact || project.contactName,
      contactPhone: task.contactPhone || project.contactPhone,
    }
  }

  /**
   * Response task lama hanya membawa `created_by`, sehingga hasil normalisasi owner
   * masih berupa ID. Cocokkan ID tersebut dengan master leader agar tabel dan detail
   * task menampilkan nama akun, bukan angka.
   */
  async function resolveTaskOwners(tasks: TaskDetails[]): Promise<TaskDetails[]> {
    const unresolvedOwnerIds = new Set(
      tasks
        .map((task) => task.owner?.trim() ?? '')
        .filter((owner) => /^\d+$/.test(owner)),
    )
    if (!unresolvedOwnerIds.size) return tasks

    const buildOwnerNames = () =>
      new Map(
        [...projectStore.lookups.owner, ...lookups.assignedTo]
          .filter((option) => option.value !== '' && option.label)
          .map((option) => [String(option.value), option.label]),
      )

    let ownerNames = buildOwnerNames()
    let hasMissingOwner = [...unresolvedOwnerIds].some((ownerId) => !ownerNames.has(ownerId))

    if (hasMissingOwner) {
      try {
        // Sumber utama nama akun/owner CRM: GET /api/project/leader.
        await projectStore.fetchProjectLeaders()
        ownerNames = buildOwnerNames()
        hasMissingOwner = [...unresolvedOwnerIds].some((ownerId) => !ownerNames.has(ownerId))
      } catch {
        // Lanjutkan ke endpoint task lama sebagai fallback.
      }
    }

    if (hasMissingOwner) {
      try {
        const response = await api.get('tasks/assignedto')
        lookups.assignedTo = normalizeOptions(response.data, ['assignedto', 'users'])
      } catch {
        // ID tetap ditampilkan bila master owner tidak dapat dimuat.
      }
    }

    ownerNames = buildOwnerNames()

    return tasks.map((task) => ({
      ...task,
      owner: ownerNames.get(task.owner?.trim() ?? '') || task.owner,
    }))
  }

  /**
   * Endpoint task hanya mengembalikan `project_id` pada sebagian response.
   * Ambil relasi Master Peluang lalu isi nama peluang untuk kebutuhan tabel/detail.
   */
  async function resolveTaskProjects(tasks: TaskDetails[]): Promise<TaskDetails[]> {
    const projectIds = [
      ...new Set(
        tasks
          .map((task) => task.projectId)
          .filter((id): id is number => Number.isFinite(id) && Number(id) > 0),
      ),
    ]
    if (!projectIds.length) return tasks

    const projectMap = new Map<number, Projects>(
      projectStore.items.map((project) => [project.id, project]),
    )
    let missingIds = projectIds.filter((id) => !projectMap.has(id))

    if (missingIds.length) {
      try {
        const projects = await projectStore.fetchProjects({ per_page: 100 })
        projects.forEach((project) => projectMap.set(project.id, project))
      } catch {
        // Daftar task tetap dapat ditampilkan meskipun endpoint peluang gagal.
      }
      missingIds = projectIds.filter((id) => !projectMap.has(id))
    }

    if (missingIds.length) {
      const projectResults = await Promise.allSettled(
        missingIds.map((id) => projectStore.fetchProjectById(id)),
      )
      projectResults.forEach((result) => {
        if (result.status === 'fulfilled' && result.value) {
          projectMap.set(result.value.id, result.value)
        }
      })
    }

    return tasks.map((task) =>
      applyProjectRelation(
        task,
        task.projectId ? projectMap.get(task.projectId) : undefined,
      ),
    )
  }

  rebuildCreatedByMe()

  const setActive = (value: Task) => {
    taskData.activeTask = value
  }

  const currentTask = computed(() =>
    taskData.task.find((Task) => Task.id === taskData.activeTask.id)
  )

  // Daftar project untuk form juga hanya memakai hasil API/database.
  const projectList = computed(() =>
    projectStore.items.map((project) => ({
      ...project,
      status: projectStages[project.id] ?? project.status,
    }))
  )

  /** GET /api/tasks. Mengganti sales task dengan data dari backend. */
  function fetchTasks(params: ListParams = {}) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data task.',
      task: async () => {
        const requestParams = {
          per_page: 100,
          ...params,
        }
        const response = await api.getbydata('tasks', requestParams)
        const firstPage = extractTasks(response.data)
        let rawItems = firstPage.items
        const meta = firstPage.meta

        // List dan Calendar berbagi state lengkap yang sama. Jika backend memaginasi,
        // ambil halaman sisanya lewat endpoint yang sama (bukan loader Calendar baru).
        if (!params.page && meta?.total && meta.total > rawItems.length) {
          const perPage = meta.perPage || requestParams.per_page
          const lastPage = meta.lastPage || Math.ceil(meta.total / perPage)
          const remainingPages = Array.from(
            { length: Math.max(0, lastPage - 1) },
            (_, index) => index + 2,
          )
          const responses = await Promise.all(
            remainingPages.map((page) => api.getbydata('tasks', { ...requestParams, page })),
          )
          rawItems = [
            ...rawItems,
            ...responses.flatMap((pageResponse) => extractTasks(pageResponse.data).items),
          ]
        }

        const seenIds = new Set<string>()
        const normalizedTasks = rawItems
          .filter(isRecord)
          .filter((raw) => {
            const id = normalizeText(pick(raw, 'id', 'ID'))
            if (!id) return true
            if (seenIds.has(id)) return false
            seenIds.add(id)
            return true
          })
          .map(normalizeTask)
        const tasksWithOwners = await resolveTaskOwners(normalizedTasks)
        salesTasks.value = await resolveTaskProjects(tasksWithOwners)
        if (meta) Object.assign(pagination, meta)
        rebuildCreatedByMe()
        return salesTasks.value
      },
    })
  }

  /** GET /api/tasks/fetchtaskbyid?id=<id>. */
  function fetchTaskById(id: number) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat detail task.',
      task: async () => {
        const response = await api.getbydata('tasks/fetchtaskbyid', { id })
        const raw = extractItem(response.data, ['task', 'result'])
        const normalizedTask = raw ? normalizeTask(raw) : null
        if (!normalizedTask) {
          selectedItem.value = null
          return selectedItem.value
        }

        const [taskWithOwner] = await resolveTaskOwners([normalizedTask])
        selectedItem.value =
          (await resolveTaskProjects([taskWithOwner ?? normalizedTask]))[0] ??
          taskWithOwner ??
          normalizedTask
        return selectedItem.value
      },
    })
  }

  /** GET data pendukung: status, priority, assignedto, project. */
  function fetchTaskLookups() {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data pendukung task.',
      task: async () => {
        const [status, priority, assignedTo, project] = await Promise.all([
          api.get('tasks/status'),
          api.get('tasks/priority'),
          api.get('tasks/assignedto'),
          api.get('tasks/project'),
        ])
        lookups.status = normalizeOptions(status.data, ['status'])
        lookups.priority = normalizeOptions(priority.data, ['priority'])
        lookups.assignedTo = normalizeOptions(assignedTo.data, ['assignedto', 'users'])
        lookups.project = normalizeOptions(project.data, ['projects'])
      },
    })
  }

  /**
   * POST /api/tasks/input dengan choice "i".
   * Mengembalikan null jika grup CreatedByMe tidak ada; error API dilempar kembali.
   */
  async function createSalesTask(payload: SalesTaskPayload): Promise<TaskDetails | null> {
    const target = createdByMeGroup()
    if (!target?.data) return null

    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menyimpan task.',
      task: async () => {
        const currentUserId = Number(authStore.user?.id)
        const userId = Number.isInteger(currentUserId) && currentUserId > 0 ? currentUserId : null
        if (!userId) throw new Error('ID owner dari user login tidak tersedia.')
        const gpsCoordinates =
          payload.latitude && payload.longitude
            ? `${payload.latitude},${payload.longitude}`
            : null
        const requestFields: Record<string, string | number | null> = {
          // Parameter insert dbo.sp_tasks_crud.
          choice: 'i',
          task_name: payload.title,
          project_id: payload.projectId,
          description: nullableText(payload.notes),
          assigned_id: userId,
          due_date: toSqlDateTime(payload.scheduledAt),
          priority: null,
          progress: null,
          status_id: null,
          created_by: userId,

          // Konteks wajib sesuai Kerangka Menu - 4. Tasks dan kolom tabel tasks.
          has_project: payload.projectId ? 1 : 0,
          project_name: nullableText(payload.projectName),
          hospital_name: nullableText(payload.hospital),
          contact_person: nullableText(payload.contact),
          contact_phone: nullableText(payload.contactPhone),
          division: nullableText(payload.divisions.join(', ')),
          unrelated_product: payload.unrelatedProduct ? 1 : 0,
          product: payload.unrelatedProduct
            ? 'Tidak terkait produk'
            : nullableText(payload.products.join(', ')),
          pipeline_stage_from: nullableText(payload.stageFrom),
          pipeline_stage: nullableText(payload.stageTo),
          category: nullableText(payload.category),
          type: 'sales',
          assigned_name: nullableText(payload.owner),
          photo_path: nullableText(payload.photoName),
          has_live_photo: payload.photo ? 1 : 0,
          gps_coordinates: gpsCoordinates,
          location_accuracy: payload.locationAccuracy || null,
          location_address: nullableText(payload.locationAddress),
          comments: null,
        }
        const requestData = new FormData()
        Object.entries(requestFields).forEach(([key, value]) => {
          requestData.append(key, value === null ? '' : String(value))
        })
        if (payload.photo) {
          requestData.append('photo', payload.photo, payload.photoName || payload.photo.name)
        }

        const response = await api.post('tasks/input', requestData)
        const raw = extractItem(response.data, ['task', 'result'])
        const createdId = raw ? pickNumber(raw, 'id', 'ID') : 0

        // Ambil ulang dari API supaya daftar tidak pernah memakai fallback lokal/dummy.
        await fetchTasks()
        const newTask =
          (createdId > 0
            ? salesTasks.value.find((task) => task.id === createdId)
            : salesTasks.value.find(
                (task) =>
                  task.title === payload.title && task.projectId === payload.projectId,
              )) ?? null

        taskData.activeTask = target

        if (payload.projectId && payload.stageTo) {
          projectStages[payload.projectId] = payload.stageTo
          localStorage.setItem(projectStageStorageKey, JSON.stringify(projectStages))
        }

        return newTask
      },
    })
  }

  const save = () => {
    taskData.formSubmitted = true
    taskData.errors = []
    if (!taskData.title.trim()) {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a Task Title.',
        confirmButtonColor: 'var(--theme-default)',
      })
      return
    }

    if (taskData.title.length < 5) {
      Swal.fire({
        icon: 'error',
        text: 'Task title must be at least 5 characters long.',
        confirmButtonColor: 'var(--theme-default)',
      })
      return
    }

    if (!taskData.subtitle.trim()) {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a Sub Task title.',
        confirmButtonColor: 'var(--theme-default)',
      })
      return
    }

    if (!taskData.description.trim()) {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a description.',
        confirmButtonColor: 'var(--theme-default)',
      })
      return
    }

    if (taskData.description.length < 5) {
      Swal.fire({
        icon: 'error',
        text: 'Description must be at least 5 characters long.',
        confirmButtonColor: 'var(--theme-default)',
      })
      return
    }
    const createdByMeData = taskData.task.find((data) => data.value === 'CreatedByMe')
    if (!createdByMeData || !createdByMeData.data) {
      Swal.fire({
        icon: 'error',
        text: "Could not find 'CreatedByMe' category in task list.",
        confirmButtonColor: 'var(--theme-default)',
      })
      return
    }
    const newId =
      createdByMeData.data.length > 0
        ? Math.max(...createdByMeData.data.map((item) => item.id)) + 1
        : 1
    const newTask: TaskDetails = {
      id: newId,
      title: taskData.title.trim(),
      subtitle: taskData.subtitle.trim(),
      description: taskData.description.trim(),
    }
    createdByMeData.data.push(newTask)

    Swal.fire({
      icon: 'success',
      text: 'Task added successfully!',
      confirmButtonColor: 'var(--theme-default)',
      timer: 1500,
      showConfirmButton: false,
      position: 'top-end',
      toast: true,
    })
    taskData.title = ''
    taskData.subtitle = ''
    taskData.description = ''
  }

  const warningAlert = (index: number) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'This Task will be deleted from your Personal task',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'var(--theme-default)',
    }).then((result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        if (currentTask.value?.data) {
          const [removed] = currentTask.value.data.splice(index, 1)
          if (removed?.kind === 'sales') {
            salesTasks.value = salesTasks.value.filter((task) => task.id !== removed.id)
          }
        }
        Swal.fire({
          icon: 'success',
          text: 'Your task has been deleted!',
          confirmButtonColor: 'var(--theme-default)',
        })
      } else {
        Swal.fire({
          text: 'Your task is safe!',
          confirmButtonColor: 'var(--theme-default)',
        })
      }
    })
  }

  return {
    taskData,
    currentTask,
    projectList,
    projectStages,
    selectedItem,
    loading,
    submitting,
    error,
    pagination,
    lookups,
    setActive,
    warningAlert,
    save,
    fetchTasks,
    fetchTaskById,
    fetchTaskLookups,
    createSalesTask,
  }
})
