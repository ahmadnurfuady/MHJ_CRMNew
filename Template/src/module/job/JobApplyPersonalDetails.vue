<template>
  <form class="form theme-form custom-input">
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Full Name:'">
            <InputField
              :inputId="'job-personal-details-name'"
              :placeholder="'Enter your full name'"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Email:'">
            <InputField
              :inputId="'job-personal-details-email'"
              :inputType="'email'"
              :placeholder="'Enter email'"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Password:'">
            <InputField
              :inputId="'job-personal-details-password'"
              :inputType="'password'"
              :placeholder="'Enter password'"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Repeat Password:'">
            <InputField
              :inputId="'job-personal-details-repeat-password'"
              :inputType="'password'"
              :placeholder="'Enter repeat password'"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row select-values.date">
      <div class="col-12">
        <div class="col-form-label pt-0">Birth Date</div>
      </div>
      <div class="col-sm-4">
        <div class="mb-3">
          <div class="col-form-label">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select month'"
              v-model="dob.month"
              :options="month"
              :required="false"
            />
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="mb-3">
          <div class="col-form-label">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select date'"
              v-model="dob.date"
              :options="values.date"
              :required="false"
            />
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="mb-3">
          <div class="col-form-label">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select year'"
              v-model="dob.year"
              :options="values.year"
              :required="false"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Phone Number:'">
            <InputField
              :inputId="'job-personal-details-number'"
              :inputType="'number'"
              :placeholder="'Enter phone no.'"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, reactive, onMounted } from 'vue'

import { initSelectField } from '@/core/data/common'
import { month } from '@/core/data/jobs/applyForm'
import type { Select } from '@/types/common'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

interface Values {
  date: Select[]
  year: Select[]
}
const values = reactive<Values>({
  date: [],
  year: [],
})

const dob = ref({
  date: initSelectField(),
  month: initSelectField(),
  year: initSelectField(),
})

onMounted(() => {
  for (let i = 1; i <= 31; i++) {
    values.date.push({ value: i, label: i.toString() })
  }

  for (let i = new Date().getFullYear() - 100; i <= new Date().getFullYear(); i++) {
    values.year.push({ value: i, label: i.toString() })
  }
})
</script>
