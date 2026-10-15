<template>
  <NewTask
    task-type="sales"
    modal-id="sales-task-modal"
    :task="task"
    @saved="$emit('saved')"
  />
</template>

<script setup lang="ts">
import NewTask from '@/module/task/NewTask.vue'
import type { TaskDetails } from '@/types/tasks'

defineProps<{ task?: TaskDetails | null }>()
defineEmits<{ saved: [] }>()
</script>
