<template>
  <Modal :modalOpen="props.modalOpen" :modalCentered="true" @closeModal="close()">
    <div class="modal-body">
      <div class="modal-toggle-wrapper">
        <ul class="modal-img">
          <li><img :src="getImages('gif/whatapp.gif')" alt="whatsapp" /></li>
          <li><img :src="getImages('gif/instagram.gif')" alt="instagram" /></li>
          <li><img :src="getImages('gif/facebook.gif')" alt="facebook" /></li>
        </ul>
        <h6>
          Remove your complete account from your phone or tablet to sign out of the Gmail app.
        </h6>
        <button class="btn btn-dark rounded-pill w-100 mt-4" @click="openModal('logoutModal')">
          Connect new account
        </button>
        <button class="btn rounded-pill w-100 pb-0 dark-toggle-btn" type="button" @click="close()">
          Cancel
        </button>
      </div>
    </div>
  </Modal>

  <LogoutModal :modalOpen="modals.logoutModal" @closeModal="closeModal('logoutModal')" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { modals } from '@/core/data/uiKits/modal'
import type { Modals } from '@/types/uiKits'
import { getImages } from '@/utils/index'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))
const LogoutModal = defineAsyncComponent(() => import('@/module/uiKits/modal/LogoutModal.vue'))
const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}

function openModal(value: keyof Modals) {
  close()
  modals[value] = true
}

function closeModal(type: keyof Modals) {
  modals[type] = false
}
</script>
