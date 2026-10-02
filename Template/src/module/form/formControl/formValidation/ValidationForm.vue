<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Validation Form'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Custom feedback styles apply custom colors, borders, focus styles, and background icons to
        better communicate feedback.Background icons for
        <code>&lt;select&gt;</code>s are only available with <code>form-select</code> and not
        <code>form-control.</code>
      </p>
    </template>

    <form class="row g-3 needs-validation custom-input" novalidate @submit.prevent="submitForm()">
      <div class="col-12">
        <InputWrapper :title="'First Name'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'First name is required.'"
            v-model:modelValue="validationForm.firstName"
            :inputId="'first-name'"
            :placeholder="'Enter first name'"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'Password'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'Password is required.'"
            v-model:modelValue="validationForm.password"
            :inputId="'password'"
            :inputType="'password'"
            :placeholder="'Enter password'"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'State'">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select state'"
            v-model="validationForm.state"
            :errorMessage="'Please select state.'"
            :options="states"
            :formSubmitted="formSubmitted"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper :title="'City'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'City is required.'"
            v-model:modelValue="validationForm.city"
            :inputId="'city'"
            :placeholder="'Enter city'"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper :title="'Zip'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'Zip is required.'"
            v-model:modelValue="validationForm.zip"
            :inputId="'zip'"
            :placeholder="'Enter zip'"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">Select Your Payment Method</h6>
          <div class="radio-form">
            <div class="form-check">
              <input
                class="form-check-input"
                id="validationFormCheck25"
                type="radio"
                name="radio-stacked"
                required
              />
              <label class="form-check-label" for="validationFormCheck25">MaterCard</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                id="validationFormCheck23"
                type="radio"
                name="radio-stacked"
                required
              />
              <label class="form-check-label" for="validationFormCheck23">VISA</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select Your Favorite Pixelstrap theme'"
          v-model="validationForm.favoriteTheme"
          :errorMessage="'Please select your favorite pixelstrap theme.'"
          :options="selectTheme"
          :formSubmitted="formSubmitted"
        />
      </div>
      <div class="col-12">
        <InputWrapper :title="'Choose File'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'File is required.'"
            v-model:modelValue="validationForm.document"
            :inputId="'document'"
            :inputType="'file'"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'Description'">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'Description is required.'"
            v-model:modelValue="validationForm.description"
            :inputId="'description'"
            :inputType="'textarea'"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <div class="form-check">
          <Checkbox
            :formSubmitted="formSubmitted"
            :class="'form-check-input'"
            :label="'Agree to terms and conditions'"
            :errorMessage="'You must agree before submitting.'"
            v-model:modelValue="validationForm.condition"
            :inputId="'condition'"
          />
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'

import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common'
import { states } from '@/core/data/country'
import { selectTheme } from '@/core/data/forms/formControl'
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
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const formSubmitted = ref<boolean>(false)
let validationForm = reactive({
  firstName: initInputField(),
  password: initInputField(),
  state: initSelectField(),
  city: initInputField(),
  zip: initInputField(),
  favoriteTheme: initSelectField(),
  document: initInputField(),
  description: initInputField(),
  condition: initCheckboxField(),
})

function submitForm() {
  formSubmitted.value = true
  const { isValid, formData } = validateForm(validationForm)

  if (isValid) {
    validationForm = resetForm(validationForm)
    formSubmitted.value = false
  }
}
</script>
