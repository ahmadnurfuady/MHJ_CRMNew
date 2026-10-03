<template>
  <form class="row g-3 needs-validation custom-input" novalidate v-if="props.form">
    <div class="col-md-12">
      <div class="accordion dark-accordion" id="accordionExample-a">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button accordion-light-primary txt-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne-a"
              aria-expanded="true"
              aria-controls="collapseOne-a"
            >
              NET BANKING
              <vue-feather :type="'chevron-down'" :class="'svg-color'" />
            </button>
          </h2>
          <div class="accordion-collapse collapse show" id="collapseOne-a">
            <div class="accordion-body weight-title card-wrapper">
              <h6 class="sub-title f-14">SELECT YOUR BANK</h6>
              <div class="row choose-bank">
                <div class="col-sm-6" v-for="(banks, index) in netBanking" :key="index">
                  <div
                    class="form-check radio radio-primary"
                    v-for="(bank, index) in banks.details"
                    :key="index"
                  >
                    <input
                      class="form-check-input"
                      :id="bank.id"
                      type="radio"
                      name="flexRadioDefault-v"
                      :value="bank.title"
                      v-model="props.form.bank"
                    />
                    <label class="form-check-label" :for="bank.id">{{ bank.title }}</label>
                  </div>
                </div>
                <template v-if="!props.form.bank && props.formSubmitted">
                  <div class="invalid-feedback d-block">Please select bank.</div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <InputField
        :formSubmitted="props.formSubmitted"
        :errorMessage="'Please enter a message in the textarea.'"
        v-model:modelValue="props.form.feedback"
        :inputId="'feedback'"
        :inputType="'textarea'"
        :placeholder="'Your Feedback'"
      />
    </div>
    <div class="col-12">
      <div class="form-check mb-0">
        <Checkbox
          :class="'form-check-input'"
          :label="'Agree to terms and conditions'"
          :inputId="'agreement'"
          v-model:modelValue="props.form.isBankingCorrect"
          :formSubmitted="props.formSubmitted"
          :errorMessage="'You must agree before submitting'"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { netBanking } from '@/core/data/forms/formLayout'
import type { VerticalValidationNetBanking } from '@/types/forms/formLayout'

const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const props = defineProps<{
  form: VerticalValidationNetBanking
  formSubmitted: boolean
}>()
</script>
