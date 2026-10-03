<template>
  <Modal :modalOpen="props.modalOpen" :modalCentered="true" @closeModal="close()">
    <div class="modal-content">
      <div class="modal-body">
        <div class="modal-toggle-wrapper">
          <ul class="modal-img">
            <li><img :src="getImages('gif/danger.gif')" alt="error" /></li>
          </ul>
          <h4 class="text-center pb-2">Ohh! Something went wrong!</h4>
          <p class="text-center c-light">
            Attackers on malicious activity may trick you into doing something Dangerous like
            installing software or revealing your personal Information.
          </p>
          <button class="btn btn-secondary d-flex m-auto" type="button" @click="close()">
            Close
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}
</script>
