<template>
  <div class="wizard-title">
    <h2>Sign up to account</h2>
    <h5 class="text-muted mb-4">Enter your email & password to login</h5>
  </div>
  <div class="login-main" v-if="props.form">
    <form class="theme-form">
      <div class="form-group mb-3">
        <InputWrapper :title="'Country'" :required="true">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select country'"
            v-model="props.form.country"
            :formSubmitted="formSubmitted"
            :options="country"
            @update:modelValue="countryChange($event)"
          />
        </InputWrapper>
      </div>
      <div class="form-group mb-3">
        <InputWrapper :title="'State'" :required="true">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select state'"
            v-model="props.form.state"
            :formSubmitted="formSubmitted"
            :options="states"
            @update:modelValue="stateChange($event)"
          />
        </InputWrapper>
      </div>
      <div class="form-group mb-3">
        <InputWrapper :title="'City'" :required="true">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select city'"
            v-model="props.form.city"
            :formSubmitted="formSubmitted"
            :options="cities"
          />
        </InputWrapper>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { country } from '@/core/data/country'
import type { Select, SelectField } from '@/types/common'
import type { RegisterAddressInfo } from '@/types/registerWizard'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  form: RegisterAddressInfo
  formSubmitted: boolean
}>()

const states = ref<Select[]>([])
const cities = ref<Select[]>([])

function countryChange(value: SelectField) {
  if (value && value.selected && value.selected.data) {
    states.value = value.selected.data
  }
}

function stateChange(value: SelectField) {
  if (value && value.selected && value.selected.data) {
    cities.value = value.selected.data
  }
}
</script>
