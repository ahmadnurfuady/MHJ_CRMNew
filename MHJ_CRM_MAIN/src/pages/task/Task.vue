<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <TaskList />
      </div>
    </div>
  </div>

  <NewTask />
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useTask } from '@/store/task'

const TaskList = defineAsyncComponent(() => import('@/module/task/TaskList.vue'))
const NewTask = defineAsyncComponent(() => import('@/module/task/NewTask.vue'))

const taskStore = useTask()

onMounted(() => {
  taskStore.fetchTasks().catch(() => {
    Swal.fire({ icon: 'error', text: taskStore.error ?? 'Gagal memuat data task.' })
  })
})
</script>
