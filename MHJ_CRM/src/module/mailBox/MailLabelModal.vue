<template>
  <Modal
    :title="'Compose Message'"
    :modalOpen="props.modalOpen"
    :sizeClass="'modal-lg'"
    @closeModal="closeModal()"
  >
    <div class="modal-body add-label-modal">
      <form class="custom-input row">
        <div class="col">
          <div class="row mb-3">
            <InputWrapper :title="'Label Name :'" :class="'col-lg-2'">
              <div class="col-lg-10">
                <InputField
                  :inputId="'label-name'"
                  :placeholder="'Enter label name'"
                  :inputType="'email'"
                  :required="false"
                />
              </div>
            </InputWrapper>
          </div>
          <div class="row mb-3">
            <InputWrapper :title="'Email :'" :class="'col-lg-2'">
              <div class="col-lg-10">
                <InputField
                  :inputId="'email'"
                  :placeholder="'Enter your email'"
                  :inputType="'email'"
                  :required="false"
                />
              </div>
            </InputWrapper>
          </div>
          <div class="row mb-3">
            <label class="form-label col-lg-2 col-sm-3" for="exampleColorInput"
              >Label Color :</label
            >
            <div class="col-2">
              <input
                class="form-control form-control-color"
                id="exampleColorInput"
                type="color"
                value="#18A6E4"
                title="Choose your color"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn button-light-primary" @click="closeModal()">Cancel</button>
      <button class="btn btn-primary" type="button">Add</button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen?: boolean
}>()

const emits = defineEmits(['closeModal'])

function closeModal() {
  emits('closeModal')
}
</script>
