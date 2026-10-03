<template>
  <Card :headerTitle="'Default Checkbox'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-check-input </code>and <code>form-check-label </code>for checkbox.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-sm-6 col-xl-4" v-for="(checkbox, index) in checkboxList" :key="index">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">{{ checkbox.title }}</h6>
          <template v-for="(item, index) in checkbox.details" :key="index">
            <div class="form-check" :class="{ 'form-check-reverse': item.reverseLabel }">
              <Checkbox
                :class="'form-check-input'"
                :label="item.label"
                :inputId="item.id"
                :required="false"
                :disabled="item.disable"
                v-model:modelValue="item.model"
              />
            </div>
          </template>
        </div>
      </div>
      <div class="col-xl-12 col-sm-6">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">Indeterminate</h6>
          <div class="form-check">
            <Checkbox
              :class="'form-check-input'"
              :label="'Indeterminate checkbox'"
              :inputId="'flexCheckIndeterminate'"
              :required="false"
              v-model:modelValue="indeterminateCheckbox"
              :indeterminate="true"
            />
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { initCheckboxField } from '@/core/data/common'
import { defaultCheckbox } from '@/core/data/forms/formControl'
import { initializeCheckboxList } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const checkboxList = ref(defaultCheckbox)

const indeterminateCheckbox = ref(initCheckboxField())

onMounted(() => {
  for (let i = 0; i < checkboxList.value.length; i++) {
    initializeCheckboxList(checkboxList.value[i].details)
  }
})
</script>
