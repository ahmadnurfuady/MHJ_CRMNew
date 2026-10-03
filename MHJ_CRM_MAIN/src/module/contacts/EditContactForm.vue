<template>
  <form class="custom-input">
    <div class="row g-3">
      <div class="mt-0 mb-3 col-md-12">
        <InputWrapper :title="'Name'">
          <div class="row g-3">
            <div class="col-xxl-6">
              <InputField
                :formSubmitted="formSubmitted"
                :errorMessage="'First name is required.'"
                v-model:modelValue="contactForm.firstName"
                :inputId="'first-name'"
                :placeholder="'Enter first Name'"
              />
            </div>
            <div class="col-xxl-6">
              <InputField
                :formSubmitted="formSubmitted"
                :errorMessage="'Last name is required.'"
                v-model:modelValue="contactForm.lastName"
                :inputId="'last-name'"
                :placeholder="'Enter last Name'"
              />
            </div>
          </div>
        </InputWrapper>
      </div>
      <div class="mt-0 mb-3 col-md-12">
        <InputWrapper :title="'Email Address'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'Email is required.'"
            v-model:modelValue="contactForm.email"
            :inputId="'email'"
            :inputType="'email'"
            :placeholder="'Enter email'"
          />
        </InputWrapper>
      </div>
      <div class="mt-0 mb-3 col-md-12">
        <InputWrapper :title="'Phone'">
          <div class="row g-3">
            <div class="col-xxl-6">
              <InputField
                :formSubmitted="formSubmitted"
                :errorMessage="'Contact number is required.'"
                v-model:modelValue="contactForm.contactNumber"
                :inputId="'contact-number'"
                :placeholder="'Enter contact number'"
              />
            </div>
            <div class="col-xxl-6">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select contact type'"
                v-model="contactForm.contactType"
                :options="contactTypes"
                :formSubmitted="formSubmitted"
              />
            </div>
          </div>
        </InputWrapper>
      </div>
    </div>
    <div class="row more-data" :style="{ display: moreInformation ? 'block' : 'none' }">
      <div class="mt-0 mb-3 col-md-12">
        <InputWrapper :title="'URLS'">
          <div class="row g-3">
            <div class="col-xxl-6 xl-100">
              <InputField
                :formSubmitted="formSubmitted"
                :inputId="'url'"
                :placeholder="'Enter url'"
                :required="false"
              />
            </div>
            <div class="col-xxl-6 xl-100">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select url type'"
                v-model="url_type"
                :options="urlTypes"
                :formSubmitted="formSubmitted"
                :required="false"
              />
            </div>
          </div>
        </InputWrapper>
      </div>
      <div class="mt-0 mb-3 col-md-12">
        <label>Personal</label>
        <div class="d-block">
          <label class="me-3" for="edo-ani2">
            <input
              class="radio_animated"
              id="edo-ani2"
              type="radio"
              name="rdo-ani1"
              :checked="contactState.activeContact && contactState.activeContact.gender == 'Male'"
            />
            <span>Male</span>
          </label>
          <label for="edo-ani3">
            <input
              class="radio_animated"
              id="edo-ani3"
              type="radio"
              name="rdo-ani1"
              :checked="contactState.activeContact && contactState.activeContact.gender == 'Female'"
            />
            <span>Female</span>
          </label>
        </div>
      </div>
      <div class="mt-0 mb-3 col-md-12">
        <div class="row g-3">
          <div class="col-12">
            <div class="input-group">
              <Flatpickr
                class="form-control digits"
                placeholder="dd-mm-yyyy"
                :config="dateConfig"
                v-model="contactForm.dob.data"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-0 mb-3 col-md-12">
        <div class="row g-3">
          <div class="col-xxl-6">
            <InputWrapper :title="'Personality'">
              <InputField
                :formSubmitted="formSubmitted"
                :errorMessage="'Personality is required.'"
                v-model:modelValue="contactForm.personality"
                :inputId="'personality'"
                :placeholder="'Enter personality'"
              />
            </InputWrapper>
          </div>
          <div class="col-xxl-6">
            <InputWrapper :title="'Interest'">
              <InputField
                :formSubmitted="formSubmitted"
                :errorMessage="'Interest is required.'"
                v-model:modelValue="contactForm.interest"
                :inputId="'interest'"
                :placeholder="'Enter interest'"
              />
            </InputWrapper>
          </div>
        </div>
      </div>
      <div class="mb-3 col-md-12">
        <InputWrapper :title="'Home Address'">
          <div class="row g-3">
            <div class="col-12">
              <div class="mb-2">
                <InputField
                  :formSubmitted="formSubmitted"
                  :inputId="'address'"
                  :placeholder="'Enter address'"
                  :required="false"
                />
              </div>
            </div>
            <div class="col-xxl-6">
              <div class="mb-2">
                <InputField
                  :formSubmitted="formSubmitted"
                  :errorMessage="'City is required.'"
                  v-model:modelValue="contactForm.city"
                  :inputId="'city'"
                  :placeholder="'Enter city'"
                />
              </div>
            </div>
            <div class="col-xxl-6">
              <div class="mb-2">
                <InputField
                  :formSubmitted="formSubmitted"
                  :inputId="'state'"
                  :placeholder="'Enter State'"
                  :required="false"
                />
              </div>
            </div>
            <div class="col-xxl-6">
              <div>
                <InputField
                  :formSubmitted="formSubmitted"
                  :inputId="'country'"
                  :placeholder="'Enter Country'"
                  :required="false"
                />
              </div>
            </div>
            <div class="col-xxl-6">
              <div>
                <InputField
                  :formSubmitted="formSubmitted"
                  :inputId="'postal-code'"
                  :placeholder="'Enter postal code'"
                  :required="false"
                />
              </div>
            </div>
          </div>
        </InputWrapper>
      </div>
    </div>
    <a
      class="ps-0 edit-information"
      href="#"
      @click.prevent="editMoreInformation()"
      :style="{ display: moreInformation ? 'none' : 'block' }"
      >Edit more information</a
    >
    <button class="btn btn-primary update-contact me-2" type="button" @click="save()">Save</button>
    <button class="btn button-light-primary" type="button" data-bs-dismiss="modal">Cancel</button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch, defineAsyncComponent } from 'vue'
import { initInputField, initSelectField } from '@/core/data/common'
import { contactTypes, urlTypes } from '@/core/data/contacts'
import { useContact } from '@/store/contact'
import { assignFormFieldValue } from '@/utils/index'
import { storeToRefs } from 'pinia'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)
const contactForm = ref({
  firstName: initInputField(),
  lastName: initInputField(),
  email: initInputField(),
  contactNumber: initInputField(),
  contactType: initSelectField(),
  dob: initInputField(),
  personality: initInputField(),
  interest: initInputField(),
  city: initInputField(),
})

const url_type = ref(initSelectField())

const dateConfig = ref({
  dateFormat: 'd-m-Y',
})

const formSubmitted = ref<boolean>(false)
const moreInformation = ref<boolean>(false)

function editMoreInformation() {
  moreInformation.value = true
}

function save() {
  moreInformation.value = false
  contactState.value.isEditContact = false
}

watch(
  () => contactState.value.activeContact,
  (newValue) => {
    if (newValue) {
      const date = new Date(newValue.dob)
      contactForm.value = assignFormFieldValue(contactForm.value, newValue)
      contactForm.value.dob.data = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    }
  },
  { immediate: true }
)
</script>
