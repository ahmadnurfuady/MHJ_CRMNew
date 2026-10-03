<template>
  <form class="form theme-form">
    <div class="row select-date custom-input">
      <div class="col-xl-6 xl-100">
        <div class="mb-3">
          <InputWrapper :title="'Location:'">
            <InputField :inputId="'location'" :placeholder="'Enter location'" :required="false" />
          </InputWrapper>
        </div>
      </div>
      <div class="col-xl-6 xl-100 xl-mt-job">
        <InputWrapper :title="'Period:'"></InputWrapper>
        <div class="row">
          <div class="col-sm-6">
            <div class="input-group">
              <InputField
                :inputId="'experience-start-date'"
                :inputType="'date'"
                :placeholder="'Enter start date'"
                :required="false"
              />
            </div>
          </div>
          <div class="col-sm-6 xs-mt-period">
            <div class="input-group">
              <InputField
                :inputId="'experience-end-date'"
                :inputType="'date'"
                :placeholder="'Enter end date'"
                :required="false"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 xl-100">
        <div class="mb-3">
          <InputWrapper :title="'Position:'">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select position'"
              v-model="form.experience"
              :options="experience"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
      <div class="col-xl-6 xl-100">
        <div class="mb-3">
          <InputWrapper :title="'Company Name:'">
            <InputField
              :inputId="'company-name'"
              :placeholder="'Enter company name'"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { experience } from '@/core/data/jobs/applyForm'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const form = ref({
  experience: initSelectField(),
})
</script>
