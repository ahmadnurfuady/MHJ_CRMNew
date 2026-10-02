<template>
  <Modal
    :title="'Scrolling Long Modal'"
    :modalOpen="props.modalOpen"
    :modalCentered="true"
    :dialogClass="'modal-dialog-scrollable'"
    @closeModal="close()"
  >
    <div class="modal-body custom-scrollbar">
      <template v-for="(content, i) of modalContent" :key="i">
        <h6>{{ content.title }}</h6>

        <div class="d-flex mt-2" v-for="(description, index) of content.content" :key="index">
          <div class="flex-shrink-0">
            <vue-feather :type="'arrow-right-circle'" :class="'svg-modal'" />
          </div>
          <div class="flex-grow-1 ms-2">
            <p :class="index === content.content.length - 1 ? 'pb-4' : ''">
              {{ description.description }}
            </p>
          </div>
        </div>
      </template>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" type="button" @click="close()">Close</button>
      <button class="btn btn-primary" type="button">Save</button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { modalContent } from '@/core/data/uiKits/modal'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}
</script>
