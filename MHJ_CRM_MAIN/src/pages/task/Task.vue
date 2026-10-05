<template>
  <div class="container-fluid">
    <div class="email-wrap bookmark-wrap">
      <div class="row">
        <TaskSidebar />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useTask } from '@/store/task'
const TaskSidebar = defineAsyncComponent(() => import('@/module/task/TaskSidebar.vue'))

const taskStore = useTask()

onMounted(() => {
  taskStore.fetchTasks().catch(() => {
    Swal.fire({ icon: 'error', text: taskStore.error ?? 'Gagal memuat data task.' })
  })
})
</script>
