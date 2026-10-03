<template>
  <form class="stepper-one row g-3 needs-validation custom-input" novalidate>
    <div class="col-sm-6">
      <InputWrapper :title="'Full Name'">
        <InputField
          :inputId="'full-name'"
          :placeholder="'Enter your full name'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Phone'">
        <InputField
          :inputId="'phone'"
          :placeholder="'Enter your phone number'"
          :inputType="'number'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-4">
      <InputWrapper :title="'Country'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select country'"
          v-model="infoForm.country"
          :options="country"
          :required="false"
          @update:modelValue="countryChange($event)"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-4">
      <InputWrapper :title="'State'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select state'"
          v-model="infoForm.state"
          :options="states"
          :required="false"
          @update:modelValue="stateChange($event)"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-4">
      <InputWrapper :title="'City'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select city'"
          v-model="infoForm.city"
          :options="cities"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Email'">
        <InputField
          :inputId="'email'"
          :placeholder="'Enter your email'"
          :inputType="'number'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Postal Code'">
        <InputField
          :inputId="'postalCode'"
          :placeholder="'Enter your postal code'"
          :inputType="'number'"
          :required="false"
        />
      </InputWrapper>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { country } from '@/core/data/country'
import type { Select, SelectField } from '@/types/common'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const infoForm = ref({
  country: initSelectField(),
  state: initSelectField(),
  city: initSelectField(),
})
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
