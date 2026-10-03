<template>
  <Modal
    :title="'Tooltip and Popover Modal'"
    :modalOpen="props.modalOpen"
    :modalCentered="true"
    @closeModal="close()"
  >
    <div class="modal-body">
      <h5>Popover in a modal</h5>
      <p class="mt-2">
        This
        <button
          class="btn btn-info"
          v-popover
          title="Popover title"
          data-bs-content="Popover body content is set in this attribute."
          data-bs-trigger="focus"
        >
          button
        </button>
        triggers a popover on click.
      </p>
      <hr />
      <h5>Tooltips in a modal</h5>
      <p class="mt-2">
        <a class="tooltip-test txt-primary" href="#" v-tooltip title="Tooltip"
          >This link</a
        >
        and
        <a class="tooltip-test txt-primary" href="#" v-tooltip title="Tooltip"
          >that link</a
        >
        have tooltips on hover.
      </p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" type="button" @click="close()">Close</button>
      <button class="btn btn-primary" type="button">Save</button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}
</script>
