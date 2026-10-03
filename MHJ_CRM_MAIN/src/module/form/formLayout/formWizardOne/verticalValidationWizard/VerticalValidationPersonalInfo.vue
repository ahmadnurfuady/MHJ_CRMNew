<template>
  <form class="row g-3 needs-validation custom-input" novalidate v-if="props.form">
    <div class="col-xxl-4 col-sm-6">
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
    <div class="col-xxl-4 col-sm-6">
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
    <div class="col-xxl-4 col-sm-6">
      <InputWrapper :title="'Email'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Email is required.'"
          v-model:modelValue="props.form.email"
          :inputId="'email'"
          :inputType="'email'"
          :placeholder="'riho@example.com'"
        />
      </InputWrapper>
    </div>
    <div class="col-xxl-5 col-sm-6">
      <InputWrapper :title="'State'">
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
    <div class="col-xxl-3 col-sm-6">
      <InputWrapper :title="'Zip Code'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Please provide a valid zip.'"
          v-model:modelValue="props.form.zip"
          :inputId="'zip'"
          :placeholder="'Enter zip'"
        />
      </InputWrapper>
    </div>
    <div class="col-xxl-4 col-sm-6">
      <InputWrapper :title="'Contact Number'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Contact number is required.'"
          v-model:modelValue="props.form.contactNumber"
          :inputId="'contact-number'"
          :placeholder="'Enter number'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="form-check">
        <Checkbox
          :class="'form-check-input'"
          :label="'Agree to terms and conditions'"
          :inputId="'personal-info-agreement'"
          v-model:modelValue="props.form.infoCondition"
          :formSubmitted="props.formSubmitted"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { states } from '@/core/data/country'
import type { VerticalValidationPersonalInfo } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  form: VerticalValidationPersonalInfo
  formSubmitted: boolean
}>()
</script>
