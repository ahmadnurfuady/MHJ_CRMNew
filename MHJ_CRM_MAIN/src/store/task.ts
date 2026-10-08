import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { computed } from 'vue'
import { tasks } from '@/core/data/tasks'
import { projects } from '@/core/data/project'
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
import { useProjectStore } from '@/store/project'
import type { ListParams, Pagination } from '@/types/api'
import type { Select } from '@/types/common'
import type { SalesTaskPayload, Task, TaskData, TaskDetails } from '@/types/tasks'

const salesTaskStorageKey = 'mhj-crm-sales-tasks'
const projectStageStorageKey = 'mhj-crm-project-stages'
const CREATED_BY_ME = 'CreatedByMe'

function readStorage<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : fallback
  } catch {
    return fallback
  }
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map((item) => String(item)) : []
}

/**
 * Mengubah satu baris tabel `tasks` menjadi TaskDetails.
 * Kolom DB: task_name, description, project_id, due_date, created_at, created_by.
 * Field form (title, scheduledAt, notes) tetap dibaca sebagai cadangan untuk data lokal.
 */
export function normalizeTask(raw: Dict): TaskDetails {
  const projectId = pick(raw, 'project_id', 'projectId')
  const projectName = pickString(raw, 'project_name', 'projectName')
  const hospital = pickString(
    raw,
    'hospital_name',
    'company_name',
    'hospital',
    'rumahSakit',
    'rumah_sakit'
  )

  return {
    id: pickNumber(raw, 'id', 'ID') || Date.now(),
    title: pickString(raw, 'task_name', 'title', 'judul'),
    subtitle: pickString(raw, 'subtitle') || projectName || hospital,
    description: pickString(raw, 'description', 'notes', 'keterangan'),
    kind: 'sales',
    category: pickString(raw, 'category', 'kategori'),
    owner: pickString(raw, 'owner_name', 'created_by_name', 'leader_name', 'owner', 'created_by'),
    projectId: projectId === undefined ? null : Number(projectId),
    projectName,
    hospital,
    contact: pickString(raw, 'contact_name', 'contact'),
    scheduledAt: pickString(raw, 'due_date', 'scheduledAt', 'scheduled_at'),
    divisions: toStringArray(raw.divisions),
    products: toStringArray(raw.products),
    unrelatedProduct: Boolean(pick(raw, 'unrelatedProduct', 'unrelated_product')),
    stageFrom: pickString(raw, 'stageFrom', 'stage_from'),
    stageTo: pickString(raw, 'stageTo', 'stage_to'),
    photoName: pickString(raw, 'photoName', 'photo_name'),
    latitude: pickNumber(raw, 'latitude'),
    longitude: pickNumber(raw, 'longitude'),
    locationAccuracy: pickNumber(raw, 'locationAccuracy', 'location_accuracy'),
    locationAddress: pickString(raw, 'locationAddress', 'location_address', 'address_location'),
    createdAt: pickString(raw, 'createdAt', 'created_at'),
  }
}

export const useTask = defineStore('task', () => {
  const projectStore = useProjectStore()

  // Cache lokal sales task: dipakai sebagai nilai awal sebelum API dimuat.
  const salesTasks = ref<TaskDetails[]>(readStorage<TaskDetails[]>(salesTaskStorageKey, []))

  const initialTasks = tasks.map((group) => ({
    ...group,
    data: group.data ? [...group.data] : undefined,
  }))

  const taskData = reactive<TaskData>({
    task: initialTasks,
    activeTask: initialTasks[0] as Task,
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

  /** Menyusun ulang grup CreatedByMe: sales task dari salesTasks, sisanya dipertahankan. */
  function rebuildCreatedByMe() {
    const group = createdByMeGroup()
    if (!group) return
    const otherTasks = (group.data ?? []).filter((task) => task.kind !== 'sales')
    group.data = [...salesTasks.value, ...otherTasks]
  }

  function persistSalesTasks() {
    localStorage.setItem(salesTaskStorageKey, JSON.stringify(salesTasks.value))
  }

  rebuildCreatedByMe()

  const setActive = (value: Task) => {
    taskData.activeTask = value
  }

  const currentTask = computed(() =>
    taskData.task.find((Task) => Task.id === taskData.activeTask.id)
  )

  // Daftar project mengikuti data API bila sudah dimuat, jika belum memakai data contoh.
  const projectList = computed(() =>
    (projectStore.loaded ? projectStore.items : projects).map((project) => ({
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
        const response = await api.getbydata('tasks', { ...params })
        const { items: rawItems, meta } = extractList(response.data, ['tasks'])
        salesTasks.value = rawItems.filter(isRecord).map(normalizeTask)
        if (meta) Object.assign(pagination, meta)
        rebuildCreatedByMe()
        persistSalesTasks()
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
        const raw = extractItem(response.data, ['task'])
        selectedItem.value = raw ? normalizeTask(raw) : null
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
        // Kolom tabel tasks. Field form lain (hospital, contact, produk, lokasi) belum punya kolomnya.
        const response = await api.post('tasks/input', {
          choice: 'i',
          task_name: payload.title,
          description: payload.notes,
          project_id: payload.projectId,
          due_date: payload.scheduledAt || null,
        })
        const raw = extractItem(response.data, ['task'])
        // Bila backend tidak mengembalikan data baru, pakai data dari form.
        const newTask = normalizeTask(raw ? { ...payload, ...raw } : { ...payload, id: Date.now() })

        salesTasks.value = [newTask, ...salesTasks.value]
        rebuildCreatedByMe()
        taskData.activeTask = target
        persistSalesTasks()

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
          persistSalesTasks()
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
