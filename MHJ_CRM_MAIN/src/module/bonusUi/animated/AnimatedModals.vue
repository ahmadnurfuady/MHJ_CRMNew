<template>
  <Modal
    :modalOpen="props.modalOpen"
    :dialogClass="props.dialogClass"
    :modalCentered="true"
    @closeModal="close()"
  >
    <div>
      <button class="btn-close theme-close" type="button" @click="close()"></button>
      <div class="modal-body">
        <div class="card">
          <div class="animate-widget">
            <div>
              <img class="img-fluid" :src="getImages('slider/6.jpg')" alt="Drawing-room" />
            </div>
            <div class="text-center p-25">
              <p class="text-muted mb-0">
                <strong class="txt-danger">Wow!!!</strong> It's so beautiful animations in Riho
                Theme...
              </p>
            </div>
          </div>
        </div>
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
  dialogClass: string
}>()

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}
</script>
