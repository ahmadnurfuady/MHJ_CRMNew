<template>
  <Modal
    :title="'Add Category'"
    :modalOpen="contactState.openCategoryModal"
    @closeModal="closeModal()"
  >
    <div class="modal-body">
      <form class="form-bookmark">
        <div class="row g-2">
          <div class="col-md-12">
            <InputField
              :inputId="'category-name'"
              :placeholder="'Enter category name'"
              :required="false"
            />
          </div>
        </div>
        <button class="btn btn-primary me-2" type="button">Save</button>
        <button class="btn button-light-primary" type="button" @click="closeModal()">Cancel</button>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { storeToRefs } from 'pinia'

import { useContact } from '@/store/contact'

const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)

function closeModal() {
  contactState.value.openCategoryModal = false
}
</script>
