<template>
  <div class="card add-project-link">
    <div class="categories"></div>
    <div class="categories-content">
      <span class="text-truncate col-8 f-12 d-block mb-2">Let’s add work to your space</span
      ><button type="button" class="add-project-button" @click="projectStore.openCreateModal()">
        +Tambah Peluang
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from '@/store/project'

const projectStore = useProjectStore()
</script>

<style scoped>
.add-project-button {
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--theme-default);
}
</style>
