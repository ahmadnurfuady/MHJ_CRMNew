<template>
  <Modal :modalOpen="props.modalOpen" :modalCentered="true" @closeModal="close()">
    <div class="modal-content">
      <div class="modal-body social-profile text-start dark-sign-up">
        <div class="modal-toggle-wrapper">
          <h3>Riho Login</h3>
          <p class="f-light">Fill in your information below to continue.</p>
          <form class="row g-3">
            <div class="col-md-12">
              <InputWrapper :title="'Email'">
                <InputField
                  :inputId="'email'"
                  :placeholder="'Enter your email'"
                  :inputType="'email'"
                  :required="false"
                />
              </InputWrapper>
            </div>
            <div class="col-md-12">
              <InputWrapper :title="'Password'">
                <InputField
                  :inputId="'password'"
                  :placeholder="'Enter your password'"
                  :inputType="'password'"
                  :required="false"
                />
              </InputWrapper>
            </div>
            <div class="col-12">
              <div class="form-check">
                <Checkbox :label="'Check me out'" :inputId="'basic-checkbox'" :required="false" />
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="button" @click="close()">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}
</script>
