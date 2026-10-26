<template>
  <div class="card add-project-link">
    <div class="categories"></div>
    <div class="categories-content">
      <span class="text-truncate col-8 f-12 d-block mb-2">Let’s add work to your space</span
      ><button type="button" class="add-project-button mhj-add-button" @click="projectStore.openCreateModal()">
        <SolarIcon name="add" :size="19" color="#fff" secondary-color="#fff" :secondary-opacity="1" aria-hidden="true" />
        Tambah Peluang
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
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--theme-default);
}

.quick-action-icon {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border-radius: 50%;
  background: var(--mhj-soft, var(--app-primary-wash, #ddf2fb));
}
</style>
