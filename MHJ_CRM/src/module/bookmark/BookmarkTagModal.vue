<template>
  <Modal
    :title="'Create Tag'"
    :modalOpen="props.modalOpen"
    :sizeClass="'modal-lg'"
    @closeModal="closeModal()"
  >
    <div class="modal-body custom-input">
      <form class="form-bookmark needs-validation" novalidate>
        <div class="row g-2">
          <div class="mt-0 col-md-12">
            <InputWrapper :title="'Tag Name :'" :class="'col-lg-2'">
              <InputField :inputId="'tag-name'" :placeholder="'Enter tag name'" :required="false" />
            </InputWrapper>
          </div>
          <div class="mt-0 col-md-12">
            <label>Tag color</label>
            <input class="form-color d-block" type="color" value="#18A6E4" />
          </div>
        </div>
        <button class="btn btn-primary me-2" type="button">Save</button>
        <button class="btn btn-secondary" type="button" @click="closeModal()">Cancel</button>
      </form>
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
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

function closeModal() {
  emits('closeModal')
}
</script>
