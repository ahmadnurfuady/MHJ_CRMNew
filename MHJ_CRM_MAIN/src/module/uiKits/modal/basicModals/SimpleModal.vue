<template>
  <Modal :modalOpen="props.modalOpen" @closeModal="close()">
    <div class="modal-body">
      <div class="modal-toggle-wrapper">
        <h4>Up to <strong class="txt-danger">85% OFF</strong>,Hurry Up Online Shopping</h4>
        <div class="modal-img">
          <img :src="getImages('gif/online-shopping.gif')" alt="online-shopping" />
        </div>
        <p class="text-sm-center">
          Our difficulty in finding regular clothes that was of great quality, comfortable, and
          didn't impact the environment given way to creatures of habit.
        </p>
        <button
          class="btn bg-primary d-flex align-items-center gap-2 text-light ms-auto"
          type="button"
          @click="close()"
        >
          Explore More
          <vue-feather :type="'arrow-right'" />
        </button>
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
