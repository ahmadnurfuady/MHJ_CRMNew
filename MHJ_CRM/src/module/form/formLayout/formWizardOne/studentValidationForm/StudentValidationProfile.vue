<template>
  <div class="row g-3 avatar-upload" v-if="props.form">
    <div class="col-12">
      <div>
        <div class="avatar-edit">
          <input id="imageUpload" type="file" accept=".png, .jpg, .jpeg" />
          <label for="imageUpload"></label>
        </div>
        <div class="avatar-preview">
          <div id="image"></div>
        </div>
      </div>
      <h6>Add Profile</h6>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Portfolio URL'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Portfolio URL is required.'"
          v-model:modelValue="props.form.profileUrl"
          :inputId="'profile-url'"
          :inputType="'url'"
          :placeholder="'https://riho'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Description'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Description is required.'"
          v-model:modelValue="props.form.profileDescription"
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

import type { StudentValidationProfile } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const props = defineProps<{
  form: StudentValidationProfile
  formSubmitted: boolean
}>()
</script>
