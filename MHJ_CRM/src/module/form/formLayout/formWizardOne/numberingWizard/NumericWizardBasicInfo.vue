<template>
  <form class="stepper-one row g-3 needs-validation custom-input" novalidate v-if="props.form">
    <div class="col-sm-6">
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
    <div class="col-sm-6">
      <InputWrapper :title="'First Name'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'First name is required.'"
          v-model:modelValue="props.form.firstName"
          :inputId="'first-name'"
          :placeholder="'Enter your name'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Password'" :class="'col-sm-12'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Password is required.'"
          v-model:modelValue="props.form.password"
          :inputId="'password'"
          :inputType="'password'"
          :placeholder="'Enter password'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Confirm Password'" :class="'col-sm-12'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Confirm password is required.'"
          v-model:modelValue="props.form.confirmPassword"
          :inputId="'confirm-password'"
          :inputType="'password'"
          :placeholder="'Enter confirm password'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="form-check">
        <Checkbox
          :class="'form-check-input'"
          :label="'Agree to terms and conditions'"
          :inputId="'basic-info-agreement'"
          v-model:modelValue="props.form.basicInfoAgreement"
          :formSubmitted="props.formSubmitted"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { NumberingWizardBasicInfo } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const props = defineProps<{
  form: NumberingWizardBasicInfo
  formSubmitted: boolean
}>()
</script>
