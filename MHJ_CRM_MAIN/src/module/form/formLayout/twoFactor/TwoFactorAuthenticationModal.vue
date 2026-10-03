<template>
  <Modal
    :title="'Two-factor Authentication'"
    :modalOpen="props.modalOpen"
    :modalCentered="true"
    @closeModal="closeModal()"
  >
    <div class="modal-body">
      <div class="modal-toggle-wrapper">
        <p>
          To log into your account, you'll also need to enter your username, password, and a code
          that was sent to you through SMS or an app.
        </p>
        <div class="authentication-options">
          <div class="form-check radio radio-primary ps-0">
            <ul class="radio-wrapper">
              <li>
                <input
                  class="form-check-input"
                  id="radioOptionWizard1"
                  type="radio"
                  name="radio2"
                  value="option2"
                />
                <label class="form-check-label mb-0" for="radioOptionWizard1">
                  <i class="fa-solid fa-gear fa-spin"></i>
                  <span class="d-flex flex-column">
                    <span>2FA Authenticator</span>
                    <span>Obtain codes from a authy/google authenticator/ios 15 etc.</span>
                  </span>
                </label>
              </li>
              <li>
                <input
                  class="form-check-input"
                  id="radioOptionWizard2"
                  type="radio"
                  name="radio2"
                  value="option2"
                  checked
                />
                <label class="form-check-label mb-0" for="radioOptionWizard2">
                  <i class="fa-solid fa-comments"></i>
                  <span class="d-flex flex-column">
                    <span>SMS</span>
                    <span
                      >The backup login method will be sent to you via SMS if you require it.</span
                    >
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <button class="btn btn-dark rounded-pill w-100 mt-3" @click="next()">Next</button>
        <button
          class="btn rounded-pill w-100 pb-0 dark-toggle-btn"
          type="button"
          @click="closeModal()"
        >
          Cancel
        </button>
      </div>
    </div>
  </Modal>

  <QRCodeModal :modalOpen="qrCodeModalOpen" @closeModal="qrCodeModalOpen = false" />
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))
const QRCodeModal = defineAsyncComponent(
  () => import('@/module/form/formLayout/twoFactor/QRCodeModal.vue')
)

const props = defineProps<{
  modalOpen: boolean
}>()

const emit = defineEmits(['closeModal'])

const qrCodeModalOpen = ref<boolean>(false)

function closeModal() {
  emit('closeModal')
}

function next() {
  closeModal()
  qrCodeModalOpen.value = true
}
</script>
