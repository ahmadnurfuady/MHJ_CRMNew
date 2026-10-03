<template>
  <div class="container-fluid">
    <ProjectCreate />
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const ProjectCreate = defineAsyncComponent(
  () => import('@/module/project/projectCreate/ProjectCreate.vue')
)
</script>
