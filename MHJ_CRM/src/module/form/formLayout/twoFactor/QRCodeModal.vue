<template>
  <Modal
    :title="'Scan QR code'"
    :modalOpen="props.modalOpen"
    :modalCentered="true"
    @closeModal="closeModal()"
  >
    <div class="modal-body main-qr-code">
      <div class="modal-toggle-wrapper">
        <p>
          Scan the QR code using an authenticator app and website such as abc authenticator, OTP
          xyz, or pqr authenticator. You must input the six-digit code it generates below.
        </p>
        <div class="modal-img">
          <div class="qr-img">
            <img :src="getImages('forms/qr-code.png')" alt="qr-code" />
          </div>
          <div class="qr-content">
            <div
              class="alert alert-light-dark light alert-dismissible fade show text-dark border-left-wrapper"
              role="alert"
            >
              <i class="fa-solid fa-triangle-exclamation"></i>
              <div>
                <span
                  >If your qr code is not working then enter this code in your input field.</span
                >
                <span class="f-w-500">TYU78DE29OLAAWCVNTYFGESWQ31098QW</span>
              </div>
              <button class="btn-close" type="button" @click="closeModal()"></button>
            </div>
          </div>
        </div>
        <form class="needs-validation" novalidate>
          <input class="form-control" id="AccountName" type="text" placeholder="Enter QR Code" />
        </form>
        <button class="btn btn-primary" @click="closeModal()">Submit</button>
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

const emit = defineEmits(['closeModal'])

function closeModal() {
  emit('closeModal')
}
</script>
