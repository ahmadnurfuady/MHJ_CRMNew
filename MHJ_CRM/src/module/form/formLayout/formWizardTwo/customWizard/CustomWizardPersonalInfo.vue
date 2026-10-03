<template>
  <form class="row g-3 needs-validation custom-input" novalidate v-if="props.form">
    <div class="col-xl-4 col-sm-6">
      <InputWrapper :title="'First Name'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'First name is required.'"
          v-model:modelValue="props.form.firstName"
          :inputId="'first-name'"
          :placeholder="'Enter first name'"
        />
      </InputWrapper>
    </div>
    <div class="col-xl-4 col-sm-6">
      <InputWrapper :title="'Last Name'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Last name is required.'"
          v-model:modelValue="props.form.lastName"
          :inputId="'last-name'"
          :placeholder="'Enter last name'"
        />
      </InputWrapper>
    </div>
    <div class="col-xl-4 col-12">
      <InputWrapper :title="'Email'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Email is required.'"
          v-model:modelValue="props.form.email"
          :inputId="'email'"
          :inputType="'email'"
          :placeholder="'pixelstrap@gmail.com'"
        />
      </InputWrapper>
    </div>
    <div class="col-xl-5 col-sm-4">
      <InputWrapper :title="'Select State'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select state'"
          v-model="props.form.state"
          :options="states"
          :formSubmitted="formSubmitted"
          :errorMessage="'Please select a valid state.'"
        />
      </InputWrapper>
    </div>
    <div class="col-xl-3 col-sm-4">
      <InputWrapper :title="'Postal Code'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Postal code is required.'"
          v-model:modelValue="props.form.postalCode"
          :inputId="'postal-code'"
          :placeholder="'Enter postal code'"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-4">
      <InputWrapper :title="'Contact Number'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Contact number is required.'"
          v-model:modelValue="props.form.contactNumber"
          :inputId="'contact-number'"
          :inputType="'number'"
          :placeholder="'Enter contact number'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="form-check">
        <Checkbox
          :class="'form-check-input'"
          :label="'Agree to terms and conditions'"
          :inputId="'basic-info-agreement'"
          v-model:modelValue="props.form.infoAgreement"
          :errorMessage="'You must agree before submitting'"
          :formSubmitted="props.formSubmitted"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { states } from '@/core/data/country'
import type { CustomWizardPersonalInfo } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  form: CustomWizardPersonalInfo
  formSubmitted: boolean
}>()
</script>
