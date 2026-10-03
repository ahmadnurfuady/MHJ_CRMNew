<template>
  <Modal :modalOpen="props.modalOpen" :staticBackdrop="true" @closeModal="close()">
    <div class="modal-body">
      <div class="modal-toggle-wrapper">
        <ul class="modal-img">
          <li><img :src="getImages('gif/time.gif')" alt="alarm" /></li>
        </ul>
        <h4 class="text-center pb-2">Failed to establish a connection.</h4>
        <p class="text-center">Getting back in touch in <b class="txt-warning">14 seconds...</b></p>
        <button class="btn btn-warning d-flex m-auto" type="button" @click="close()">Close</button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}
</script>
