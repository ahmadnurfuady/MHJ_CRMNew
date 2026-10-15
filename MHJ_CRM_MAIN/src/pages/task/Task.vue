<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <TaskDetailPage v-if="detailId" :task-id="detailId" />
        <TaskList v-else />
      </div>
    </div>
  </div>

  <template v-if="!detailId">
    <TaskTypeSelector @select="selectedTaskType = $event" />
    <SalesTaskForm v-if="selectedTaskType === 'sales'" />
    <AppSpecialistTaskForm v-else-if="selectedTaskType === 'app-specialist'" />
  </template>
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'
import { useTask } from '@/store/task'
import type { TaskKind } from '@/types/tasks'
import SalesTaskForm from '@/module/task/SalesTaskForm.vue'
import AppSpecialistTaskForm from '@/module/task/AppSpecialistTaskForm.vue'

const TaskList = defineAsyncComponent(() => import('@/module/task/TaskList.vue'))
const TaskDetailPage = defineAsyncComponent(() => import('@/pages/task/TaskDetailPage.vue'))
const TaskTypeSelector = defineAsyncComponent(() => import('@/module/task/TaskTypeSelector.vue'))

const taskStore = useTask()
const route = useRoute()
const selectedTaskType = ref<TaskKind | null>(null)
const detailId = computed(() => {
  const id = Number(route.query.detail)
  return Number.isFinite(id) && id > 0 ? id : 0
})

watch(detailId, (id) => {
  if (id) return
  taskStore.fetchTasks().catch(() => {
    Swal.fire({ icon: 'error', text: taskStore.error ?? 'Gagal memuat data task.' })
  })
}, { immediate: true })
</script>
