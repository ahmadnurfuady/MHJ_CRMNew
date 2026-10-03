<template>
  <Modal
    :title="'Please confirm if you would like to delete the file.'"
    :modalOpen="props.modalOpen"
    :modalCentered="true"
    @closeModal="closeModal()"
  >
    <div class="modal-body">
      <button type="button" class="btn btn-primary me-2 mt-10" @click="remove()">Yes</button>
      <button type="button" class="btn btn-secondary mt-10" @click="closeModal()">Cancel</button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emit = defineEmits(['closeModal', 'delete'])

function closeModal() {
  emit('closeModal')
}

function remove() {
  emit('delete', true)
  closeModal()
}
</script>
