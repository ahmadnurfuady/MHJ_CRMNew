<template>
  <form class="row g-3 needs-validation" novalidate v-if="props.form">
    <div class="col-12">
      <h6>Contact Details</h6>
      <p>Please visit the documentation page if you require further information.</p>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Organization Name'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Organization name is required.'"
          v-model:modelValue="props.form.organizationName"
          :inputId="'organization-name'"
          :placeholder="'Gekko &amp; Co.'"
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
          :placeholder="'org@support.com'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Join Organization Type'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select organization type'"
          v-model="props.form.organizationType"
          :options="organizationType"
          :formSubmitted="formSubmitted"
          :errorMessage="'Please select a organization type.'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Organization Description'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Organization description is required.'"
          v-model:modelValue="props.form.organizationDescription"
          :inputId="'organization-description'"
          :inputType="'textarea'"
          :placeholder="'Share your problems and another issues'"
        />
      </InputWrapper>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { organizationType } from '@/core/data/forms/formLayout'
import type { BusinessWizardContactDetails } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  form: BusinessWizardContactDetails
  formSubmitted: boolean
}>()
</script>
