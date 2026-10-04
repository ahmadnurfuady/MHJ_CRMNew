import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { computed } from 'vue'
import { tasks } from '@/core/data/tasks'
import { projects } from '@/core/data/project'
import Swal from 'sweetalert2'
import type { SalesTaskPayload, Task, TaskData, TaskDetails } from '@/types/tasks'

const salesTaskStorageKey = 'mhj-crm-sales-tasks'
const projectStageStorageKey = 'mhj-crm-project-stages'

function readStorage<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : fallback
  } catch {
    return fallback
  }
}

export const useTask = defineStore('task', () => {
  const storedSalesTasks = readStorage<TaskDetails[]>(salesTaskStorageKey, [])
  const initialTasks = tasks.map((group) => ({
    ...group,
    data: group.data ? [...group.data] : undefined,
  }))
  const createdByMe = initialTasks.find((group) => group.value === 'CreatedByMe')
  if (createdByMe?.data) {
    createdByMe.data = [...storedSalesTasks, ...createdByMe.data]
  }

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

  const setActive = (value: Task) => {
    taskData.activeTask = value
  }

  const currentTask = computed(() =>
    taskData.task.find((Task) => Task.id === taskData.activeTask.id)
  )

  const projectList = computed(() =>
    projects.map((project) => ({
      ...project,
      status: projectStages[project.id] ?? project.status,
    }))
  )

  function persistSalesTasks() {
    const salesTasks =
      taskData.task
        .find((group) => group.value === 'CreatedByMe')
        ?.data?.filter((task) => task.kind === 'sales') ?? []
    localStorage.setItem(salesTaskStorageKey, JSON.stringify(salesTasks))
  }

  function createSalesTask(payload: SalesTaskPayload) {
    const target = taskData.task.find((group) => group.value === 'CreatedByMe')
    if (!target?.data) return null

    const newTask: TaskDetails = {
      id: Date.now(),
      title: payload.title,
      subtitle: payload.projectName || payload.hospital,
      description: payload.notes,
      kind: 'sales',
      category: payload.category,
      owner: payload.owner,
      projectId: payload.projectId,
      projectName: payload.projectName,
      hospital: payload.hospital,
      contact: payload.contact,
      scheduledAt: payload.scheduledAt,
      divisions: payload.divisions,
      products: payload.products,
      unrelatedProduct: payload.unrelatedProduct,
      stageFrom: payload.stageFrom,
      stageTo: payload.stageTo,
      photoName: payload.photoName,
      latitude: payload.latitude,
      longitude: payload.longitude,
      locationAccuracy: payload.locationAccuracy,
      createdAt: new Date().toISOString(),
    }

    target.data.unshift(newTask)
    taskData.activeTask = target
    persistSalesTasks()

    if (payload.projectId && payload.stageTo) {
      projectStages[payload.projectId] = payload.stageTo
      localStorage.setItem(projectStageStorageKey, JSON.stringify(projectStages))
    }

    return newTask
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
          currentTask.value.data.splice(index, 1)
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
    setActive,
    warningAlert,
    save,
    createSalesTask,
  }
})
