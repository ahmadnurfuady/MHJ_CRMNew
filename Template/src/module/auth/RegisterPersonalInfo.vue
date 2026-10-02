<template>
  <div class="wizard-title">
    <h2>Sign up to account</h2>
    <h6 class="c-o-light mb-4">Enter your email & password to login</h6>
  </div>
  <div class="login-main" v-if="props.form">
    <form class="theme-form">
      <div class="form-group mb-3">
        <InputWrapper :title="'First Name'" :required="true">
          <InputField
            :formSubmitted="props.formSubmitted"
            :errorMessage="'First Name is required.'"
            v-model:modelValue="props.form.firstName"
            :inputId="'first-name'"
            :placeholder="'Joan'"
          />
        </InputWrapper>
      </div>
      <div class="form-group mb-3">
        <InputWrapper :title="'Last Name'" :required="true">
          <InputField
            :formSubmitted="props.formSubmitted"
            :errorMessage="'Last Name is required.'"
            v-model:modelValue="props.form.lastName"
            :inputId="'last-name'"
            :placeholder="'Deo'"
          />
        </InputWrapper>
      </div>
      <div class="form-group mb-3">
        <InputWrapper :title="'Contact No.'" :required="true">
          <InputField
            :formSubmitted="props.formSubmitted"
            :errorMessage="'Contact number is required.'"
            v-model:modelValue="props.form.contact"
            :inputId="'contact-number'"
            :inputType="'number'"
            :placeholder="'9152422278'"
          />
        </InputWrapper>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { RegisterPersonalInfo } from '@/types/registerWizard'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const props = defineProps<{
  form: RegisterPersonalInfo
  formSubmitted: boolean
}>()
</script>
