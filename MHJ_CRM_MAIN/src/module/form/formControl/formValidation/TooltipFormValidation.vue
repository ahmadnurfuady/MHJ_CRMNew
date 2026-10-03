<template>
  <Card :headerTitle="'Tooltip Form Validation'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        If your form layout allows it, you can swap the
        <code>&#123;valid|invalid&#125;-feedback </code> classes for
        <code>&#123;valid|invalid&#125;-tooltip </code>classes to display validation feedback in a
        styled tooltip. Be sure to have a parent with position: relative on it for tooltip
        positioning.
      </p>
    </template>

    <form class="row g-3 needs-validation custom-input" novalidate @submit.prevent="submitForm()">
      <div class="col-md-4 position-relative">
        <InputWrapper :title="'First Name'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'First name is required.'"
            v-model:modelValue="tooltipValidationForm.firstName"
            :inputId="'first-name'"
            :placeholder="'Enter first name'"
            :tooltipValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-md-4 position-relative">
        <InputWrapper :title="'Last Name'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'Last name is required.'"
            v-model:modelValue="tooltipValidationForm.lastName"
            :inputId="'last-name'"
            :placeholder="'Enter last name'"
            :tooltipValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-md-4 position-relative">
        <InputWrapper :title="'Username'">
          <div class="input-group has-validation">
            <span class="input-group-text" id="validationTooltipUsernamePrepend">&#64;</span>
            <InputField
              :formSubmitted="formSubmitted"
              :errorMessage="'User name is required.'"
              v-model:modelValue="tooltipValidationForm.userName"
              :inputId="'user-name'"
              :placeholder="'Enter user name'"
              :tooltipValidation="true"
            />
          </div>
        </InputWrapper>
      </div>
      <div class="col-md-6 position-relative">
        <InputWrapper :title="'City'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'City is required.'"
            v-model:modelValue="tooltipValidationForm.city"
            :inputId="'city'"
            :placeholder="'Enter city'"
            :tooltipValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-md-3 position-relative">
        <InputWrapper :title="'State'">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select state'"
            v-model="tooltipValidationForm.state"
            :errorMessage="'Please select state.'"
            :options="states"
            :formSubmitted="formSubmitted"
            :tooltipValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-md-3 position-relative">
        <InputWrapper :title="'Zip'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'Zip is required.'"
            v-model:modelValue="tooltipValidationForm.zip"
            :inputId="'zip'"
            :placeholder="'Enter zip'"
            :tooltipValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'

import { initInputField, initSelectField } from '@/core/data/common'
import { states } from '@/core/data/country'
import { resetForm } from '@/utils/index'
import { validateForm } from '@/utils/validators/formValidators'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const formSubmitted = ref<boolean>(false)
let tooltipValidationForm = reactive({
  firstName: initInputField(),
  lastName: initInputField(),
  userName: initInputField(),
  city: initInputField(),
  state: initSelectField(),
  zip: initInputField(),
})

function submitForm() {
  formSubmitted.value = true
  const { isValid, formData } = validateForm(tooltipValidationForm)

  if (isValid) {
    tooltipValidationForm = resetForm(tooltipValidationForm)
    formSubmitted.value = false
  }
}
</script>
