<template>
  <div class="row g-3" v-if="props.form">
    <div class="col-sm-6">
      <InputWrapper :title="'Name'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Name is required.'"
          v-model:modelValue="props.form.name"
          :inputId="'name'"
          :placeholder="'Enter your name'"
        />
      </InputWrapper>
    </div>
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
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { StudentValidationPersonalInfo } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const props = defineProps<{
  form: StudentValidationPersonalInfo
  formSubmitted: boolean
}>()
</script>
