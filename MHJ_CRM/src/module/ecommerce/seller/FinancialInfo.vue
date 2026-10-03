<template>
  <form class="stepper-four row g-3 needs-validation custom-input" novalidate>
    <div class="col-sm-6">
      <InputWrapper :title="'Bank Name'">
        <InputField
          :inputId="'bank-name'"
          :placeholder="'Enter your bank name'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Card Number'">
        <InputField
          :inputId="'card-number'"
          :placeholder="'xxxx xxxx xxxx xxxx'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-xl-4">
      <InputWrapper :title="'Expiration(MM/YY)'">
        <InputField
          :inputId="'expiration'"
          :placeholder="'xx/xx'"
          :inputType="'number'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-xl-4 col-sm-6">
      <InputWrapper :title="'CVV Number'">
        <InputField :inputId="'cvv'" :placeholder="'xxx'" :inputType="'number'" :required="false" />
      </InputWrapper>
    </div>
    <div class="col-xl-4 col-sm-6">
      <InputWrapper :title="'Shift Code'">
        <InputField
          :inputId="'shift-code'"
          :placeholder="'Enter shift code'"
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
