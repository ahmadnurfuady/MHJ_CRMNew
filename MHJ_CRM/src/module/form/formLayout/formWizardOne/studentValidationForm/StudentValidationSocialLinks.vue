<template>
  <h5 class="mb-2">Social Links</h5>
  <div class="row g-3" v-if="props.form">
    <div class="col-sm-6">
      <InputWrapper :title="'Twitter'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Twitter URL is required.'"
          v-model:modelValue="props.form.twitter"
          :inputId="'twitter-url'"
          :inputType="'url'"
          :placeholder="'https://twitter.com'"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Github'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Github URL is required.'"
          v-model:modelValue="props.form.github"
          :inputId="'github-url'"
          :inputType="'url'"
          :placeholder="'https://github.com'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="input-group">
        <InputField
          :formSubmitted="props.formSubmitted"
          v-model:modelValue="props.form.document"
          :inputId="'github-url'"
          :inputType="'file'"
        />
        <button class="btn btn-outline-secondary" id="inputGroupFileAddon04" type="button">
          Submit
        </button>
      </div>
    </div>
    <div class="col-12">
      <Select
        getValueKey="label"
        display-key="label"
        :placeholder="'Select position'"
        v-model="props.form.position"
        :options="positions"
        :formSubmitted="formSubmitted"
        :errorMessage="'Please select a valid position.'"
      />
    </div>
    <div class="col-12">
      <InputWrapper :title="'Why do you want to take this position?'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Description is required.'"
          v-model:modelValue="props.form.whyThisPosition"
          :inputId="'description'"
          :inputType="'textarea'"
          :placeholder="'Enter description'"
          :rows="2"
        />
      </InputWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { positions } from '@/core/data/forms/formLayout'
import type { StudentValidationSocialLinks } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  form: StudentValidationSocialLinks
  formSubmitted: boolean
}>()
</script>
