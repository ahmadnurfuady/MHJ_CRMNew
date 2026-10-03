<template>
  <form class="stepper-two row g-3 needs-validation custom-input" novalidate>
    <div class="col-sm-6">
      <InputWrapper :title="'Business Logo'">
        <InputField
          :inputId="'business-logo'"
          :placeholder="'Logo'"
          :inputType="'file'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Business Name'">
        <InputField
          :inputId="'business-name'"
          :placeholder="'Enter your business name here'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Business Address'">
        <InputField
          :inputId="'business-address'"
          :placeholder="'Enter your business address'"
          :inputType="'textarea'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-lg-4 col-sm-6">
      <InputWrapper :title="'Phone Number'">
        <InputField
          :inputId="'phone'"
          :placeholder="'Enter your phone number'"
          :inputType="'number'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-lg-4 col-sm-6">
      <InputWrapper :title="'Postal Code'">
        <InputField
          :inputId="'postal-code'"
          :placeholder="'Enter your postal code'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-lg-4">
      <InputWrapper :title="'Business Email'">
        <InputField
          :inputId="'email'"
          :placeholder="'Enter your business email'"
          :inputType="'email'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Contact Person Name'">
        <InputField
          :inputId="'contact-person-name'"
          :placeholder="'Enter your contact person name'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Contact Person Phone'">
        <InputField
          :inputId="'contact-person-phone'"
          :placeholder="'Enter your contact person phone'"
          :inputType="'number'"
          :required="false"
        />
      </InputWrapper>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
