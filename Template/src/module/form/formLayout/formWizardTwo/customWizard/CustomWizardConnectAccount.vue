<template>
  <form class="row g-3 needs-validation" novalidate v-if="props.form">
    <div class="col-sm-6 bank-search">
      <InputWrapper :title="'Aadhaar Number'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Aadhar number is required.'"
          v-model:modelValue="props.form.aadharNumber"
          :inputId="'aadhar-number'"
          :placeholder="'xxxx xxxx xxxx'"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6 bank-search">
      <InputWrapper :title="'PAN'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'PAN number is required.'"
          v-model:modelValue="props.form.panNumber"
          :inputId="'pan-number'"
          :placeholder="'xxxxxxxxxx'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <h6>Choose from these popular banks</h6>
      <div class="bank-selection">
        <div class="form-check radio radio-primary ps-0">
          <ul class="radio-wrapper">
            <li v-for="details in banks" :key="details.id">
              <input
                class="form-check-input"
                type="checkbox"
                :id="details.id"
                :value="details.title"
                v-model="props.form.bank"
                @change="handleChange($event, details.title)"
              />
              <label class="form-check-label" :for="details.id">
                <img :src="details.image" :alt="details.alt" />
                <span>{{ details.title }}</span>
              </label>
            </li>
          </ul>
          <template v-if="props.form.bank && !props.form.bank.length && props.formSubmitted">
            <div class="invalid-feedback d-block">Select at least one bank.</div>
          </template>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { banks } from '@/core/data/forms/formLayout'
import type { CustomWizardConnectBankAccount } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const props = defineProps<{
  form: CustomWizardConnectBankAccount
  formSubmitted: boolean
}>()

const defaultChecked = banks.find((type) => type.checked)
if (defaultChecked && props.form) {
  props.form.bank.push(defaultChecked.title)
}

function handleChange(event: Event, value: string) {
  const isChecked = (event.target as HTMLInputElement).checked

  if (props.form && Array.isArray(props.form.bank)) {
    const index = props.form.bank.indexOf(value)

    if (isChecked && index === -1) {
      props.form.bank.push(value) // Add if not already present
    } else if (!isChecked && index !== -1) {
      props.form.bank.splice(index, 1) // Remove if present
    }
  }
}
</script>
