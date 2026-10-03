<template>
  <Card
    :headerTitle="'Raise Input Style'"
    :border="true"
    :padding="false"
    :cardBodyClass="'theme-form'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use <code>input-air-* </code>to define bottom box-shadow.</p>
    </template>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Email Address'">
            <InputField
              :inputId="'email'"
              :placeholder="'name&#64;example.com'"
              :required="false"
              :class="'input-air-primary'"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Password'">
            <InputField
              :inputId="'password'"
              :placeholder="'Enter Password'"
              :required="false"
              :class="'input-air-primary'"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Select Your Favorite Pixelstrap Theme'">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select Your Favorite Pixelstrap Theme'"
              v-model="form.theme"
              :options="themeSelection"
              :required="false"
              :class="'input-air-primary'"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Select The Color You Like Below'">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select The Color You Like Below'"
              v-model="form.color"
              :options="selectColor"
              :required="false"
              :class="'input-air-primary'"
              :multiSelect="true"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>
          <InputWrapper :title="'Comments'">
            <InputField
              :inputId="'comments'"
              :inputType="'textarea'"
              :required="false"
              :class="'input-air-primary'"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <template #details>
      <div class="card-footer text-end">
        <button class="btn btn-primary me-3" type="button">Submit</button>
        <input class="btn btn-light" type="reset" value="Cancel" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { selectColor, themeSelection } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const form = ref({
  theme: initSelectField(),
  color: initSelectField(),
})
</script>
