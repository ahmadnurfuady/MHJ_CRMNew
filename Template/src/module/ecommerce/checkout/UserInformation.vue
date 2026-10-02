<template>
  <form class="stepper-one row g-3 needs-validation shipping-wizard" novalidate>
    <div class="row g-3 custom-input">
      <div class="col-sm-6">
        <InputWrapper :title="'Full Name'">
          <InputField :inputId="'full-name'" :placeholder="'Enter full name'" :required="false" />
        </InputWrapper>
      </div>
      <div class="col-sm-6">
        <InputWrapper :title="'Contact Number'">
          <InputField
            :inputId="'contact-number'"
            :placeholder="'Enter number'"
            :inputType="'number'"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-sm-12">
        <InputWrapper :title="'Email'">
          <InputField
            :inputId="'email'"
            :placeholder="'pixelstrap@example.com'"
            :inputType="'email'"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'Current Address'">
          <InputField
            :inputId="'current-address'"
            :placeholder="'Enter your current address'"
            :inputType="'textarea'"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'Other Notes'">
          <InputField
            :inputId="'other-note'"
            :placeholder="'Enter your queries...'"
            :inputType="'textarea'"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-md-4">
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
      <div class="col-md-4 col-sm-6">
        <InputWrapper :title="'State'">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select state'"
            v-model="infoForm.state"
            :options="states"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-md-4 col-sm-6">
        <InputWrapper :title="'Postal Code'">
          <InputField
            :inputId="'postal-code'"
            :placeholder="'Enter postal code'"
            :required="false"
          />
        </InputWrapper>
      </div>
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
})
const states = ref<Select[]>([])

function countryChange(value: SelectField) {
  if (value && value.selected && value.selected.data) {
    states.value = value.selected.data
  }
}
</script>
