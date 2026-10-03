<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Browser Defaults'"
    :cardBodyClass="'custom-input'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Not interested in custom validation feedback messages or writing JavaScript to change form
        behaviors? Depending on your browser and OS,While these feedback styles cannot be styled
        with CSS, you can still customize the feedback text through JavaScript.
      </p>
    </template>
    <form class="row g-3" ngNativeValidate @submit.prevent="submitForm()">
      <div class="col-12">
        <InputWrapper :title="'First Name'">
          <InputField
            :formSubmitted="formSubmitted"
            v-model:modelValue="browserDefaultForm.firstName"
            :inputId="'first-name'"
            :placeholder="'Enter first name'"
            :browserValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'Email Address'">
          <InputField
            :formSubmitted="formSubmitted"
            v-model:modelValue="browserDefaultForm.email"
            :inputId="'email'"
            :inputType="'email'"
            :placeholder="'pesamof475@saeoil.com'"
            :browserValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'Password'">
          <InputField
            :formSubmitted="formSubmitted"
            v-model:modelValue="browserDefaultForm.password"
            :inputId="'password'"
            :inputType="'password'"
            :placeholder="'Enter password'"
            :browserValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'State'">
          <select
            class="form-select"
            id="validationDefault04"
            required
            v-model="browserDefaultForm.state.data"
          >
            <option selected disabled value>Choose...</option>
            <option v-for="(state, index) in states" :key="index" :value="state.value">
              {{ state.label }}
            </option>
          </select>
        </InputWrapper>
      </div>
      <div class="col-12">
        <InputWrapper :title="'Choose file'">
          <InputField
            :formSubmitted="formSubmitted"
            v-model:modelValue="browserDefaultForm.file"
            :inputId="'file'"
            :inputType="'file'"
            :placeholder="'Choose file'"
            :browserValidation="true"
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
                id="flexRadioDefault1"
                type="radio"
                name="flexRadioDefault"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">Visa</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                id="flexRadioDefault2"
                type="radio"
                name="flexRadioDefault"
                required
              />
              <label class="form-check-label" for="flexRadioDefault2">MasterCard</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                id="flexRadioDefault3"
                type="radio"
                name="flexRadioDefault"
                required
              />
              <label class="form-check-label" for="flexRadioDefault3">Paypal</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <InputWrapper :title="'Description'">
          <InputField
            :formSubmitted="formSubmitted"
            v-model:modelValue="browserDefaultForm.description"
            :inputId="'description'"
            :inputType="'textarea'"
            :placeholder="'Enter description'"
            :browserValidation="true"
          />
        </InputWrapper>
      </div>
      <div class="col-12 checkbox-checked">
        <Checkbox
          :formSubmitted="formSubmitted"
          :class="'form-check-input'"
          :label="'I agree to the policies'"
          :errorMessage="'You must agree before submitting.'"
          v-model:modelValue="browserDefaultForm.policy"
          :inputId="'policy'"
          :browserValidation="true"
        />
      </div>
      <div class="col-12">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            id="flexSwitchCheckDefault"
            type="checkbox"
            role="switch"
            required
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >Are you certain that the details above are accurate?</label
          >
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'

import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common'
import { states } from '@/core/data/country'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const formSubmitted = ref<boolean>(false)
const browserDefaultForm = reactive({
  firstName: initInputField(),
  email: initInputField(),
  password: initInputField(),
  state: initSelectField(),
  file: initInputField(),
  description: initInputField(),
  policy: initCheckboxField(),
})

function submitForm() {
  formSubmitted.value = true
}
</script>
