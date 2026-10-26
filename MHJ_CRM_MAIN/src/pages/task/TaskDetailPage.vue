<template>
  <div class="task-detail-page">
    <div class="detail-toolbar">
      <router-link :to="backTarget" class="back-button" aria-label="Kembali ke daftar tugas">
        <SolarIcon
          name="arrow-left-linear"
          :size="26"
          color="var(--app-primary-dark, #087cae)"
          :stroke-width="2.5"
        />
      </router-link>
      <h3 class="detail-toolbar__title">Detail Tugas</h3>
      <button
        v-if="task"
        class="btn btn-primary edit-task-header"
        type="button"
        data-bs-toggle="modal"
        :data-bs-target="editModalTarget"
      >
        <vue-feather type="edit-2" size="17" />
        <span>Edit Tugas</span>
      </button>
    </div>

    <div v-if="loading && !task" class="task-detail-state card">
      <span class="spinner-border text-primary" aria-hidden="true"></span>
      <strong>Memuat detail tugas...</strong>
    </div>

    <div v-else-if="loadError || !task" class="task-detail-state card">
      <div class="state-icon"><SolarIcon name="fa-circle-exclamation" /></div>
      <strong>Detail tugas tidak dapat ditampilkan</strong>
      <p>{{ loadError || 'Data tugas tidak ditemukan.' }}</p>
      <router-link :to="backTarget" class="btn btn-primary btn-sm">
        Kembali ke daftar
      </router-link>
    </div>

    <template v-else>
      <TaskDetail :task="task" />
      <SalesTaskForm
        v-if="task.kind !== 'app-specialist'"
        :task="task"
        @saved="loadTask"
      />
      <AppSpecialistTaskForm v-else :task="task" @saved="loadTask" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { routes } from '@/router/routes'
import { useTask } from '@/store/task'
import { getApiErrorMessage } from '@/api/response'
import type { TaskDetails } from '@/types/tasks'
import SalesTaskForm from '@/module/task/SalesTaskForm.vue'
import AppSpecialistTaskForm from '@/module/task/AppSpecialistTaskForm.vue'

const TaskDetail = defineAsyncComponent(() => import('@/module/task/TaskDetail.vue'))
const props = defineProps<{ taskId: number }>()
const taskStore = useTask()
const route = useRoute()
const { currentTask } = storeToRefs(taskStore)
const task = ref<TaskDetails | null>(null)
const loading = ref(false)
const loadError = ref('')
const backTarget = computed(() => ({
  path: routes.App.Task,
  query: route.query.view === 'calendar' ? { view: 'calendar' } : undefined,
}))
const editModalTarget = computed(() =>
  task.value?.kind === 'app-specialist'
    ? '#app-specialist-task-modal'
    : '#sales-task-modal',
)

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
      loadError.value = taskStore.error || getApiErrorMessage(error, 'Gagal memuat detail tugas.')
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

.detail-toolbar__title {
  margin: 0;
  color: #17212b;
  font-size: 23px;
}

.back-button {
  display: grid;
  width: 50px;
  height: 50px;
  place-items: center;
  box-sizing: border-box;
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.28);
  border-radius: 12px;
  padding: 0;
  background: #fff;
  box-shadow: none;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    box-shadow 0.18s ease;
}

.back-button :deep(.solar-icon) {
  transition:
    color 0.18s ease,
    transform 0.18s ease;
}

.back-button:hover :deep(.solar-icon),
.back-button:focus-visible :deep(.solar-icon) {
  color: #fff !important;
  transform: translateX(-2px);
}

.back-button:hover,
.back-button:focus-visible {
  border-color: var(--task-primary);
  background: var(--task-primary);
  box-shadow: 0 6px 16px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.back-button:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  outline-offset: 2px;
}

.edit-task-header {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-left: auto;
  padding: 9px 18px;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
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

  .edit-task-header {
    width: 42px;
    padding: 0;
  }

  .edit-task-header span {
    display: none;
  }
}

@media print {
  .detail-toolbar {
    display: none;
  }
}
</style>
