<template>
  <Modal
    :title="'Print Preview'"
    :modalOpen="contactState.openPrintContactModal"
    :modalCentered="true"
    @closeModal="contactState.openPrintContactModal = false"
  >
    <div class="modal-body list-persons">
      <div class="profile-mail pt-0" v-if="contactState.activeContact">
        <div class="common-flex align-items-center">
          <img
            class="img-fluid rounded-circle"
            :src="getImages(contactState.activeContact.profile)"
            :alt="contactState.activeContact.firstName"
          />
          <div class="flex-grow-1 mt-0">
            <h5>
              <span id="first-name">{{ contactState.activeContact.firstName }}</span>
              <span id="last-name">{{ contactState.activeContact.lastName }}</span>
            </h5>
            <p id="email">{{ contactState.activeContact.email }}</p>
          </div>
        </div>
        <div class="email-general">
          <h6>General</h6>
          <p>
            Email Address:
            <span class="font-primary" id="email">{{ contactState.activeContact.email }}</span>
          </p>
        </div>
      </div>
      <button class="btn btn-primary" id="btnPrint" type="button" @click="handlePrint">
        Print
      </button>
      <button
        class="btn button-light-primary ms-2"
        type="button"
        @click="contactState.openPrintContactModal = false"
      >
        Cancel
      </button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { storeToRefs } from 'pinia'

import { useContact } from '@/store/contact'
import { getImages } from '@/utils/index'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)

function handlePrint() {
  window.print()
}
</script>
