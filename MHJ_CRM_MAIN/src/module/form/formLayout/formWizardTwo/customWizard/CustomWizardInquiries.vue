<template>
  <form class="row g-3 needs-validation custom-input" novalidate v-if="props.form">
    <div class="col-12 inquiries-form">
      <div class="row">
        <div class="col-md-6">
          <p class="f-w-500">Select the option how you want to receive important notifications.</p>
          <div class="choose-option">
            <div
              class="form-check radio radio-primary"
              v-for="(platform, index) of notificationPlatform"
              :key="index"
            >
              <input
                class="orm-check-input me-2"
                :id="platform.id"
                type="radio"
                name="inlineRadioOptions"
                :value="platform.title"
                v-model="props.form.selectNotificationPlatform"
              />
              <label class="form-check-label" :for="platform.id">{{ platform.title }}</label>
            </div>
            <template v-if="!props.form.selectNotificationPlatform && props.formSubmitted">
              <div class="invalid-feedback d-block">
                Please select the platform where you want to receive notifications.
              </div>
            </template>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-3">
            <div class="col-12">
              <InputWrapper :title="'Email'">
                <InputField
                  :formSubmitted="props.formSubmitted"
                  :errorMessage="'Email is required.'"
                  v-model:modelValue="props.form.email"
                  :inputId="'email'"
                  :inputType="'email'"
                  :placeholder="'org@support.com'"
                />
              </InputWrapper>
            </div>
            <div class="col-12">
              <InputWrapper :title="'Contact Number'">
                <InputField
                  :formSubmitted="props.formSubmitted"
                  :errorMessage="'Contact number is required.'"
                  v-model:modelValue="props.form.contactNumber"
                  :inputId="'contact-number'"
                  :placeholder="'Enter number'"
                />
              </InputWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <InputWrapper :title="'If no, could you please describe?'" :class="'f-w-500'">
        <InputField
          :formSubmitted="props.formSubmitted"
          v-model:modelValue="props.form.reason"
          :inputId="'textarea'"
          :inputType="'textarea'"
          :placeholder="'Enter reason'"
        />
      </InputWrapper>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { notificationPlatform } from '@/core/data/forms/formLayout'
import type { CustomWizardInquiries } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const props = defineProps<{
  form: CustomWizardInquiries
  formSubmitted: boolean
}>()
</script>
