<template>
  <Card
    :headerTitle="'Basic Radio and Checkbox'"
    :cardClass="'height-equal'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-check-inline </code>to display inline checkbox and radio buttons.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-md-12">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">Simple Checkbox</h6>
          <div class="form-check-size">
            <div
              class="form-check form-check-inline checkbox checkbox-dark mb-0"
              v-for="(item, index) in basicCheckboxList"
              :key="index"
            >
              <Checkbox
                :class="'form-check-input'"
                :label="item.label"
                :inputId="item.id"
                :required="false"
                v-model:modelValue="item.model"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">Simple Radios</h6>
          <div class="form-check-size">
            <div
              class="form-check form-check-inline radio radio-primary"
              v-for="(item, index) in simpleRadio"
              :key="index"
            >
              <input
                class="form-check-input"
                :id="item.id"
                type="radio"
                name="radio5"
                :checked="item.checked"
              />
              <label class="form-check-label mb-0" :for="item.id">{{ item.label }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { basicCheckbox, simpleRadio } from '@/core/data/forms/formControl'
import type { BasicCheckbox } from '@/types/forms/formControls'
import { initializeCheckboxList } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const basicCheckboxList = ref<BasicCheckbox[]>(basicCheckbox)

onMounted(() => {
  initializeCheckboxList(basicCheckboxList.value)
})
</script>
