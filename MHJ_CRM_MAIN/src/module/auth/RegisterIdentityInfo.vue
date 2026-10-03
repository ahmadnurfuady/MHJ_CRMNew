<template>
  <div class="wizard-title">
    <h2>Sign up to account</h2>
    <h5 class="text-muted mb-4">Enter your email & password to login</h5>
  </div>
  <div class="login-main" v-if="props.form">
    <form class="theme-form">
      <div class="form-group mb-3">
        <InputWrapper :title="'Birthdate'" :required="true">
          <InputField
            :formSubmitted="props.formSubmitted"
            :errorMessage="'Birthdate is required.'"
            v-model:modelValue="props.form.dob"
            :inputId="'birth-date'"
            :inputType="'date'"
            :max-date="today"
          />
        </InputWrapper>
      </div>
      <div class="form-group mb-3">
        <InputWrapper :title="'Age'" :required="true">
          <InputField
            :formSubmitted="props.formSubmitted"
            :errorMessage="'Age is required.'"
            v-model:modelValue="props.form.age"
            :inputId="'Age'"
            :placeholder="'Age'"
            :disabled="true"
          />
        </InputWrapper>
      </div>
      <div class="form-group mb-3">
        <InputWrapper :title="'Have Passport'" :required="true">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Have you password ?'"
            v-model="props.form.havePassword"
            :options="havePasswordOption"
            :formSubmitted="formSubmitted"
            :errorMessage="'Please select a valid option.'"
          />
        </InputWrapper>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { havePasswordOption } from '@/core/data/registerWizard'
import type { RegisterIdentityInfo } from '@/types/registerWizard'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  form: RegisterIdentityInfo
  formSubmitted: boolean
}>()

const today = new Date()
</script>
