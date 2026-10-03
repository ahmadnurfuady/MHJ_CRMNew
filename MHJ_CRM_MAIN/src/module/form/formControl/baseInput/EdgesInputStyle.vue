<template>
  <Card
    :headerTitle="'Edges Input Style'"
    :border="true"
    :padding="false"
    :cardBodyClass="'theme-form'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use <code>btn-pill </code>to define border-radius.</p>
    </template>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Email Address'">
            <InputField
              :inputId="'email'"
              :placeholder="'name&#64;example.com'"
              :required="false"
              :class="'btn-pill'"
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
              :class="'btn-pill'"
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
              v-model="theme"
              :options="themeSelection"
              :required="false"
              :class="'btn-pill'"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Default File Input Example'">
            <InputField
              :inputId="'file'"
              :inputType="'file'"
              :required="false"
              :class="'btn-pill px-4'"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <label class="form-label">Default Input</label>
          <input
            class="form-control btn-pill"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3 d-flex gap-3 checkbox-checked">
          <div class="form-check">
            <input
              class="form-check-input"
              id="flexRadioDefault1"
              type="radio"
              name="flexRadioDefault"
            />
            <label class="form-check-label mb-0" for="flexRadioDefault1">Male </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              id="flexRadioDefault2"
              type="radio"
              name="flexRadioDefault"
              checked
            />
            <label class="form-check-label mb-0" for="flexRadioDefault2">Female</label>
          </div>
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
              :class="'btn-pill'"
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
import { themeSelection } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const theme = ref(initSelectField())
</script>
