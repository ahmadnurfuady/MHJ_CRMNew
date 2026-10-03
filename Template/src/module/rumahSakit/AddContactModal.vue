<template>
  <Modal
    :title="'Tambah Rumah Sakit'"
    :modalOpen="contactState.openAddContactModal"
    :sizeClass="'modal-lg'"
    @closeModal="closeModal()"
  >
    <div class="modal-body custom-input">
      <form class="form-bookmark needs-validation" @submit.prevent="saveContact()">
        <div class="row g-3">
          <div class="col-sm-6">
            <InputWrapper :title="'First Name'">
              <InputField
                :formSubmitted="contactState.formSubmitted"
                :errorMessage="'First name is required.'"
                v-model:modelValue="contactState.contactForm.firstName"
                :inputId="'first-name'"
                :placeholder="'Enter first Name'"
              />
            </InputWrapper>
          </div>
          <div class="col-sm-6">
            <InputWrapper :title="'Last Name'">
              <InputField
                :formSubmitted="contactState.formSubmitted"
                :errorMessage="'Last name is required.'"
                v-model:modelValue="contactState.contactForm.lastName"
                :inputId="'last-name'"
                :placeholder="'Enter last Name'"
              />
            </InputWrapper>
          </div>
          <div class="col-12">
            <InputWrapper :title="'Email Address'">
              <InputField
                :formSubmitted="contactState.formSubmitted"
                :errorMessage="'Email is required.'"
                v-model:modelValue="contactState.contactForm.email"
                :inputId="'email'"
                :inputType="'email'"
                :placeholder="'Enter email'"
              />
            </InputWrapper>
          </div>
          <div class="col-12">
            <div class="row g-3">
              <div class="col-sm-6">
                <InputWrapper :title="'Phone Number'">
                  <InputField
                    :formSubmitted="contactState.formSubmitted"
                    :errorMessage="'Nomor telepon RS wajib diisi.'"
                    v-model:modelValue="contactState.contactForm.contactNumber"
                    :inputId="'contact-number'"
                    :placeholder="'Masukkan nomor telepon RS'"
                  />
                </InputWrapper>
              </div>
              <div class="col-sm-6">
                <InputWrapper :title="'Tipe RS'">
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Pilih tipe RS'"
                    v-model="contactState.contactForm.contactType"
                    :options="contactTypes"
                    :formSubmitted="contactState.formSubmitted"
                  />
                </InputWrapper>
              </div>
            </div>
          </div>
        </div>
        <input id="index_var" type="hidden" value="5" />
        <button class="btn btn-primary me-2" type="submit">Save</button>
        <button class="btn btn-secondary" type="button" @click="closeModal()">Cancel</button>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { storeToRefs } from 'pinia'

import { contactTypes } from '@/core/data/contacts'
import { useContact } from '@/store/contact'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)
const { saveContact } = contactStore

function closeModal() {
  contactState.value.openAddContactModal = false
}
</script>
