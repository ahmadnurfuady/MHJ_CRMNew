<template>
  <Modal :modalOpen="props.modalOpen" :modalCentered="true" @closeModal="close()">
    <div class="modal-body">
      <div class="modal-toggle-wrapper">
        <ul class="modal-img">
          <li><img :src="getImages('gif/logout.gif')" alt="logout" /></li>
        </ul>
        <h4 class="pt-3 text-center">Already leaving??</h4>
        <p class="text-center">Are you sure want to logout this dashboard?</p>
        <span class="d-block text-center mb-4">
          Not a member?
          <a class="ms-1" href="#" @click.prevent="navigate()">Register</a>
        </span>
        <button class="btn btn-dark d-flex m-auto" type="button" @click="close()">
          Yes, Log out
        </button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { getImages } from '@/utils/index'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])
const router = useRouter()

function close() {
  emits('closeModal')
}

function navigate() {
  close()
  router.push('/dashboard/e-commerce')
}
</script>
