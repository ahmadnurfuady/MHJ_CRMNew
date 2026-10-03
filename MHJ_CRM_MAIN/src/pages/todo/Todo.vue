<template>
  <div class="container-fluid email-wrap bookmark-wrap todo-wrap">
    <div class="row">
      <TodoSidebar />
      <AddTask />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const TodoSidebar = defineAsyncComponent(() => import('@/module/todo/TodoSidebar.vue'))
const AddTask = defineAsyncComponent(() => import('@/module/todo/AddTask.vue'))
</script>
