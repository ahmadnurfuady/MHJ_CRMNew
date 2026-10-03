<template>
  <form class="stepper-three row g-3 needs-validation custom-input" novalidate>
    <div class="col-12">
      <InputWrapper :title="'Business Details'">
        <InputField
          :inputId="'business-details'"
          :placeholder="'Enter your business details'"
          :inputType="'textarea'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Establishment Date'">
        <InputField
          :inputId="'date'"
          :placeholder="'Enter date'"
          :inputType="'date'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Business Type'">
        <InputField
          :inputId="'business-type'"
          :placeholder="'Enter your business type'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-lg-2 col-sm-3">
      <label class="form-label" for="serviceArea">Insured?</label>
      <div class="common-flex">
        <div class="form-check">
          <input
            class="form-check-input"
            id="flexRadioDefault1"
            type="radio"
            name="flexRadioDefault"
          />
          <label class="form-check-label" for="flexRadioDefault1">Yes</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            id="flexRadioDefault2"
            type="radio"
            name="flexRadioDefault"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">No </label>
        </div>
      </div>
    </div>
    <div class="col-lg-2 col-sm-3">
      <label class="form-label" for="serviceArea">Licensed?</label>
      <div class="common-flex">
        <div class="form-check">
          <input
            class="form-check-input"
            id="flexRadioDefault3"
            type="radio"
            name="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault3">Yes</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            id="flexRadioDefault4"
            type="radio"
            name="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault4">No </label>
        </div>
      </div>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Additional Info'">
        <InputField
          :inputId="'additional-info'"
          :placeholder="'You can write anything...'"
          :inputType="'textarea'"
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
