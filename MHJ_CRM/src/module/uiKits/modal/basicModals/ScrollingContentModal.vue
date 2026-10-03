<template>
  <Modal :title="'Scrolling Modal'" :modalOpen="props.modalOpen" @closeModal="close()">
    <div class="modal-body">
      <template v-for="(content, i) of modalContent" :key="i">
        <h6>{{ content.title }}</h6>

        <template v-for="(description, index) of content.content" :key="index">
          <div class="d-flex" :class="index === content.content.length - 4 ? 'mt-3' : 'mt-2'">
            <div class="flex-shrink-0">
              <vue-feather :type="'arrow-right-circle'" :class="'svg-modal'" />
            </div>
            <div class="flex-grow-1 ms-2">
              <p>{{ description.description }}</p>
            </div>
          </div>
        </template>
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
