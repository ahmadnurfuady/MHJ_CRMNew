<template>
  <form class="stepper-two row g-3 needs-validation custom-input" novalidate v-if="props.form">
    <div class="col-md-12">
      <InputWrapper :title="'Placeholder Name'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Placeholder name is required.'"
          v-model:modelValue="props.form.placeholderName"
          :inputId="'placeholder-name'"
          :placeholder="'Placeholder name'"
        />
      </InputWrapper>
    </div>
    <div class="col-xxl-4 col-sm-6">
      <InputWrapper :title="'Card Number'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Card number is required.'"
          v-model:modelValue="props.form.cardNumber"
          :inputId="'card-number'"
          :inputType="'number'"
          :placeholder="'xxxx xxxx xxxx xxxx'"
        />
      </InputWrapper>
    </div>
    <div class="col-xxl-4 col-sm-6">
      <InputWrapper :title="'Expiration(MM/YY)'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Expiration date is required.'"
          v-model:modelValue="props.form.expiration"
          :inputId="'expiration-date'"
          :inputType="'number'"
          :placeholder="'xx/xx'"
        />
      </InputWrapper>
    </div>
    <div class="col-xxl-4">
      <InputWrapper :title="'CVV Number'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'CVV number date is required.'"
          v-model:modelValue="props.form.cvv"
          :inputId="'cvv'"
          :inputType="'number'"
          :placeholder="'xxx'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Upload Documentation'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'file is required.'"
          v-model:modelValue="props.form.uploadDocument"
          :inputId="'file'"
          :inputType="'file'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="form-check">
        <Checkbox
          :class="'form-check-input'"
          :label="'All the above information is correct'"
          :inputId="'card-info-agreement'"
          v-model:modelValue="props.form.isInformationCorrect"
          :formSubmitted="props.formSubmitted"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { NumberingWizardCardInfo } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const props = defineProps<{
  form: NumberingWizardCardInfo
  formSubmitted: boolean
}>()
</script>
