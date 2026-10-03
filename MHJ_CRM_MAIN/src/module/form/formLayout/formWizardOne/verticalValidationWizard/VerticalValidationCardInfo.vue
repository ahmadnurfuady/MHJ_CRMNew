<template>
  <form class="row g-3 needs-validation custom-input" novalidate v-if="props.form">
    <div class="col-xxl-6">
      <div class="card-wrapper border rounded-3 checkbox-checked">
        <h6 class="sub-title">Select your payment method</h6>
        <div class="radio-form">
          <div class="form-check" v-for="radio in cardInfo" :key="radio.id">
            <input
              class="form-check-input"
              :id="radio.id"
              type="radio"
              name="flexRadioDefault-a"
              :value="radio.title"
              v-model="props.form.paymentMethod"
            />
            <label class="form-check-label" :for="radio.id">{{ radio.title }}</label>
          </div>
          <template v-if="!props.form.paymentMethod && props.formSubmitted">
            <div class="invalid-feedback d-block">Please select payment method.</div>
          </template>
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="row">
        <div class="col-12">
          <div class="input-group mb-3">
            <InputField
              :formSubmitted="props.formSubmitted"
              :errorMessage="'Recipient username is required.'"
              v-model:modelValue="props.form.recipientUsername"
              :inputId="'recipient-name'"
              :placeholder="'Recipient\'s username'"
            />
            <button class="btn btn-outline-secondary" id="button-addon2" type="button">
              Submit
            </button>
          </div>
        </div>
        <div class="col-12">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">&#64;</span>
            <InputField
              :formSubmitted="props.formSubmitted"
              :errorMessage="'Username is required.'"
              v-model:modelValue="props.form.username"
              :inputId="'username'"
              :placeholder="'Username'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <InputWrapper :title="'Card Number'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Card number is required.'"
          v-model:modelValue="props.form.cardNumber"
          :inputId="'card-number'"
          :placeholder="'xxxx xxxx xxxx xxxx'"
        />
      </InputWrapper>
    </div>
    <div class="col-md-4 col-sm-6">
      <InputWrapper :title="'Expiration(MM/YY)'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Expiration date is required.'"
          v-model:modelValue="props.form.expiration"
          :inputId="'expiration-date'"
          :inputType="'number'"
          :placeholder="'xx/xx'"
        />
      </InputWrapper>
    </div>
    <div class="col-md-4 col-sm-6">
      <InputWrapper :title="'CVV Number'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'CVV number date is required.'"
          v-model:modelValue="props.form.cvv"
          :inputId="'cvv'"
          :inputType="'number'"
          :placeholder="'xxx'"
        />
      </InputWrapper>
    </div>
    <div class="col-md-12 col-sm-6">
      <InputWrapper :title="'Upload Documentation'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'file is required.'"
          v-model:modelValue="props.form.document"
          :inputId="'file'"
          :inputType="'file'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="form-check mb-0">
        <Checkbox
          :class="'form-check-input'"
          :label="'All the above information is correct'"
          :inputId="'card-info-agreement'"
          v-model:modelValue="props.form.isCardInfoCorrect"
          :formSubmitted="props.formSubmitted"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { cardInfo } from '@/core/data/forms/formLayout'
import type { VerticalValidationCardInfo } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const props = defineProps<{
  form: VerticalValidationCardInfo
  formSubmitted: boolean
}>()
</script>
