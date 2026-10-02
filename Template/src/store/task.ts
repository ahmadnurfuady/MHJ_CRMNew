import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { computed } from 'vue'
import { tasks } from '@/core/data/tasks'
import Swal from 'sweetalert2'
import { Task, TaskData, TaskDetails } from '@/types/tasks'

export const useTask = defineStore('task', () => {
  const taskData = reactive<TaskData>({
    task: tasks,
    activeTask: tasks[0],
    formSubmitted: false,
    title: '',
    description: '',
    subtitle: '',
    errors: [],
  })

  const setActive = (value: Task) => {
    taskData.activeTask = value
  }

  const currentTask = computed(() =>
    taskData.task.find((Task) => Task.id === taskData.activeTask.id)
  )

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
    setActive,
    warningAlert,
    save,
  }
})
