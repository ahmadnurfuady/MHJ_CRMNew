<template>
  <Card :headerTitle="'Inline Input Types'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Group checkboxes or radios on the same horizontal row by adding<code
          >form-check-inline </code
        >to any <code>form-check</code>.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-md-6 col-xl-4">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">Inline Checkbox</h6>
          <div class="form-check-size rtl-input">
            <div
              class="form-check form-check-inline"
              v-for="(checkbox, index) in inlineCheckboxList"
              :key="index"
            >
              <Checkbox
                :class="'form-check-input me-2'"
                :label="checkbox.label"
                :inputId="checkbox.id"
                :required="false"
                :disabled="checkbox.disable"
                v-model:modelValue="checkbox.model"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">Inline Radios</h6>
          <div class="form-check-size rtl-input">
            <div
              class="form-check form-check-inline"
              v-for="(radio, index) in inlineRadio"
              :key="index"
            >
              <input
                class="form-check-input me-2"
                :id="radio.id"
                type="radio"
                name="inlineRadioOptions"
                :value="radio.value"
                :checked="radio.checked"
                :disabled="radio.disable"
              />
              <label class="form-check-label" :for="radio.id">{{ radio.label }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-xl-4">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">Inline Switches</h6>
          <div class="form-check-size">
            <div
              class="form-check form-switch form-check-inline"
              v-for="(item, index) in inlineSwitch"
              :key="index"
            >
              <input
                class="form-check-input check-size"
                :id="item.id"
                type="checkbox"
                role="switch"
                :checked="item.checked"
                :disabled="item.disable"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { inlineCheckbox, inlineRadio, inlineSwitch } from '@/core/data/forms/formControl'
import type { InlineCheckbox } from '@/types/forms/formControls'
import { initializeCheckboxList } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const inlineCheckboxList = ref<InlineCheckbox[]>(inlineCheckbox)

onMounted(() => {
  initializeCheckboxList(inlineCheckboxList.value)
})
</script>
