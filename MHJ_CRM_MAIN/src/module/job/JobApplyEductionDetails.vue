<template>
  <form class="form theme-form">
    <div class="row select-date">
      <div class="col-xl-6 xl-100">
        <div class="mb-3">
          <InputWrapper :title="'College Name:'">
            <InputField
              :inputId="'college-name'"
              :placeholder="'Enter your college name'"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
      <div class="col-xl-6 xl-100 xl-mt-job">
        <InputWrapper :title="'Period:'"></InputWrapper>
        <div class="row">
          <div class="col-sm-6">
            <div class="input-group">
              <InputField
                :inputId="'college-start-date'"
                :inputType="'date'"
                :placeholder="'Enter start date'"
                :required="false"
              />
            </div>
          </div>
          <div class="col-sm-6 xs-mt-period">
            <div class="input-group">
              <InputField
                :inputId="'college-end-date'"
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
          <InputWrapper :title="'Degree Level:'">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select degree'"
              v-model="form.degree"
              :options="degree"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
      <div class="col-xl-6 xl-100">
        <div class="mb-3">
          <InputWrapper :title="'Specialization:'">
            <InputField
              :inputId="'specialization'"
              :placeholder="'Enter specialization'"
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
import { degree } from '@/core/data/jobs/applyForm'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const form = ref({
  degree: initSelectField(),
})
</script>
