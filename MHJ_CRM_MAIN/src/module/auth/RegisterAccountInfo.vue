<template>
  <div class="wizard-title">
    <h2>Sign up to account</h2>
    <h5 class="text-muted mb-4">Enter your email & password to login</h5>
  </div>
  <div class="login-main" v-if="props.form">
    <form class="theme-form">
      <div class="form-group mb-3 m-t-15">
        <InputWrapper :title="'Email'" :required="true">
          <InputField
            :formSubmitted="props.formSubmitted"
            :errorMessage="'Email is required.'"
            v-model:modelValue="props.form.email"
            :inputId="'email'"
            :inputType="'email'"
            :placeholder="'name@gmail.com'"
          />
        </InputWrapper>
      </div>
      <div class="form-group mb-3">
        <InputWrapper :title="'Password'" :required="true">
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
      <div class="form-group mb-3">
        <InputWrapper :title="'Confirm Password'" :required="true">
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
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { RegisterAccountInfo } from '@/types/registerWizard'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const props = defineProps<{
  form: RegisterAccountInfo
  formSubmitted: boolean
}>()
</script>
