<template>
  <Card :headerTitle="'Flat Input Style'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Use <code>btn-square </code>to define 0px border-radius.</p>
    </template>
    <form class="form theme-form dark-inputs">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <InputWrapper :title="'Select Your Favorite Roman Number'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'I'"
                v-model="selectList.romanNumber"
                :options="selectNumber"
                :required="false"
                :class="'btn-square'"
              />
            </InputWrapper>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <InputWrapper :title="'Select Your Multiple Paintings'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Landscape'"
                v-model="selectList.paintings"
                :options="selectPainting"
                :required="false"
                :multiSelect="true"
                :class="'btn-square'"
              />
            </InputWrapper>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <InputWrapper :title="'Please Do Comments'">
            <InputField
              :inputId="'comment'"
              :inputType="'textarea'"
              :class="'btn-square'"
              :required="false"
            />
          </InputWrapper>
        </div>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { selectNumber, selectPainting } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const selectList = ref({
  romanNumber: initSelectField(),
  paintings: initSelectField(),
})
</script>
