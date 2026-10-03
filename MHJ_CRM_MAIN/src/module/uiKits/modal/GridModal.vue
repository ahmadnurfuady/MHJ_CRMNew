<template>
  <Modal
    :title="'Grid Modal'"
    :modalOpen="props.modalOpen"
    :modalCentered="true"
    @closeModal="close()"
  >
    <div class="modal-body">
      <div class="container-fluid">
        <div class="row common-align">
          <div class="col-md-4">
            <span class="grid-space bg-light-secondary txt-secondary">.col-md-4</span>
          </div>
          <div class="col-md-4 ms-auto">
            <span class="grid-space bg-light-secondary txt-secondary">.col-md-4 .ms-auto</span>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-3 ms-auto">
            <span class="grid-space bg-light-secondary txt-secondary">.col-md-3 .ms-auto</span>
          </div>
          <div class="col-md-2 ms-auto">
            <span class="grid-space bg-light-secondary txt-secondary">.col-md-2 .ms-auto</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 ms-auto">
            <span class="grid-space bg-light-secondary txt-secondary">.col-md-6 .ms-auto</span>
          </div>
        </div>
        <div class="row common-align">
          <div class="col-sm-9">
            <span class="grid-space bg-light-secondary txt-secondary">Level 1: .col-sm-9</span>
            <div class="row">
              <div class="col-8 col-sm-6">
                <span class="grid-space bg-light-secondary txt-secondary mb-0">
                  Level 2: .col-8 .col-sm-6</span
                >
              </div>
              <div class="col-4 col-sm-6">
                <span class="grid-space bg-light-secondary txt-secondary mb-0"
                  >Level 2: .col-4 .col-sm-6</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
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
