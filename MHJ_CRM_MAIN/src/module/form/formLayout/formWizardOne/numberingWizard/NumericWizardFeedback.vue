<template>
  <form class="stepper-three row g-3 needs-validation custom-input" novalidate v-if="props.form">
    <div class="col-sm-6">
      <InputWrapper :title="'LinkedIn'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'LinkedIn url is required.'"
          v-model:modelValue="props.form.linkedIn"
          :inputId="'linkedin-url'"
          :inputType="'url'"
          :placeholder="'https://linkedIn.com/riho'"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Github'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Github url is required.'"
          v-model:modelValue="props.form.github"
          :inputId="'github-url'"
          :inputType="'url'"
          :placeholder="'https://github.com/riho'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
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
    <div class="col-12">
      <InputWrapper :title="'Give Feedback'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Feedback is required.'"
          v-model:modelValue="props.form.feedback"
          :inputId="'feedback'"
          :inputType="'textarea'"
          :placeholder="'Enter feedback'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="form-check">
        <Checkbox
          :class="'form-check-input'"
          :label="'Agree to terms and conditions'"
          :inputId="'feedback-agreement'"
          v-model:modelValue="props.form.feedbackAgreement"
          :formSubmitted="props.formSubmitted"
          :errorMessage="'You must agree before submitting'"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { states } from '@/core/data/country'
import type { NumberingWizardFeedback } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  form: NumberingWizardFeedback
  formSubmitted: boolean
}>()
</script>
