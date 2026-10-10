<template>
  <div class="task-detail-page">
    <div class="detail-toolbar">
      <router-link :to="routes.App.Task" class="back-button" aria-label="Kembali ke daftar tugas">
        <i class="fa-solid fa-arrow-left"></i>
      </router-link>
      <div>
        <p>Tasks</p>
        <h3>Detail Tugas</h3>
      </div>
    </div>

    <div v-if="loading && !task" class="task-detail-state card">
      <span class="spinner-border text-primary" aria-hidden="true"></span>
      <strong>Memuat detail tugas...</strong>
    </div>

    <div v-else-if="loadError || !task" class="task-detail-state card">
      <div class="state-icon"><i class="fa-solid fa-circle-exclamation"></i></div>
      <strong>Detail tugas tidak dapat ditampilkan</strong>
      <p>{{ loadError || 'Data tugas tidak ditemukan.' }}</p>
      <router-link :to="routes.App.Task" class="btn btn-primary btn-sm">
        Kembali ke daftar
      </router-link>
    </div>

    <TaskDetail v-else :task="task" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { routes } from '@/router/routes'
import { useTask } from '@/store/task'
import type { TaskDetails } from '@/types/tasks'

const TaskDetail = defineAsyncComponent(() => import('@/module/task/TaskDetail.vue'))
const props = defineProps<{ taskId: number }>()
const taskStore = useTask()
const { currentTask } = storeToRefs(taskStore)
const task = ref<TaskDetails | null>(null)
const loading = ref(false)
const loadError = ref('')

function mergeTaskDetail(base: TaskDetails, detail: TaskDetails) {
  const merged = { ...base }
  for (const [key, value] of Object.entries(detail) as [keyof TaskDetails, unknown][]) {
    const hasValue =
      value !== undefined &&
      value !== null &&
      value !== '' &&
      (!Array.isArray(value) || value.length > 0)
    if (hasValue) Object.assign(merged, { [key]: value })
  }
  return merged
}

async function loadTask() {
  const listTask = currentTask.value?.data?.find((item) => item.id === props.taskId) ?? null
  task.value = listTask
  loadError.value = ''
  loading.value = true

  try {
    const detail = await taskStore.fetchTaskById(props.taskId)
    if (!detail && !listTask) throw new Error('Data tugas tidak ditemukan.')
    task.value = detail && listTask ? mergeTaskDetail(listTask, detail) : detail ?? listTask
  } catch (error) {
    if (!listTask) {
      task.value = null
      loadError.value =
        error instanceof Error ? error.message : taskStore.error || 'Gagal memuat detail tugas.'
    }
  } finally {
    loading.value = false
  }
}

watch(() => props.taskId, loadTask, { immediate: true })
</script>

<style scoped>
.task-detail-page {
  --task-primary: var(--theme-default, #18a6e4);
  padding-bottom: 28px;
}

.detail-toolbar {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.detail-toolbar p {
  margin: 0 0 2px;
  color: #73808d;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.detail-toolbar h3 {
  margin: 0;
  color: #17212b;
  font-size: 23px;
}

.back-button {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid #e2e8ed;
  border-radius: 12px;
  color: var(--task-primary);
  background: #fff;
  box-shadow: 0 4px 14px rgba(26, 47, 67, 0.06);
}

.task-detail-state {
  display: flex;
  min-height: 330px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e5eaee;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
}

.task-detail-state p {
  margin: 0;
  color: #73808d;
}

.state-icon {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border-radius: 50%;
  color: #d93b43;
  background: #fde7e8;
  font-size: 19px;
}

@media (max-width: 575.98px) {
  .detail-toolbar h3 {
    font-size: 19px;
  }
}

@media print {
  .detail-toolbar {
    display: none;
  }
}
</style>
