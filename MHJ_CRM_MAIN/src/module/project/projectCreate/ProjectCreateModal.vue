<template>
  <Modal
    title="Tambah Peluang"
    :modal-open="projectStore.createModalOpen"
    size-class="modal-xl"
    dialog-class="modal-dialog-scrollable project-create-dialog"
    @close-modal="closeModal"
  >
    <div class="modal-body project-create-modal-body">
      <ProjectCreate
        modal-mode
        :initial-hospital="projectStore.createModalHospital"
        @cancel="closeModal"
        @saved="handleSaved"
      />
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useProjectStore } from '@/store/project'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))
const ProjectCreate = defineAsyncComponent(
  () => import('@/module/project/projectCreate/ProjectCreate.vue')
)

const projectStore = useProjectStore()

function closeModal() {
  if (projectStore.submitting) return
  projectStore.closeCreateModal()
}

function handleSaved() {
  projectStore.closeCreateModal()
}
</script>

<style scoped>
.project-create-modal-body {
  padding: 22px 24px 24px;
}

@media (max-width: 575.98px) {
  .project-create-modal-body {
    padding: 16px;
  }
}
</style>
