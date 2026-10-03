<template>
  <Card :headerTitle="'Custom Checkbox'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-check-input </code>and <code>form-check-label </code>for checkbox and filled
        checkbox used <code>checkbox-solid-*</code> and bordered checkbox used
        <code>checkbox-*</code>.
      </p>
    </template>

    <div class="row g-3">
      <div class="col-xl-4 col-sm-6">
        <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
          <h6 class="sub-title">Bordered Checkbox</h6>
          <template v-for="(item, index) in borderCheckboxList" :key="index">
            <div :class="`form-check checkbox checkbox-${item.class} mb-0`">
              <Checkbox
                :class="'form-check-input'"
                :label="item.label"
                :inputId="item.id"
                :required="false"
                v-model:modelValue="item.model"
              />
            </div>
          </template>
        </div>
      </div>

      <div class="col-xl-4 col-sm-12 order-xl-0 order-sm-1">
        <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
          <h6 class="sub-title">Icon Checkbox</h6>
          <div class="form-check checkbox checkbox-primary ps-0 main-icon-checkbox">
            <ul class="checkbox-wrapper">
              <li v-for="(icon, index) in iconCheckboxList" :key="index">
                <Checkbox
                  :class="'form-check-input'"
                  :label="icon.label"
                  :inputId="icon.id"
                  :required="false"
                  v-model:modelValue="icon.model"
                  :customizeCheckbox="true"
                >
                  <i :class="`fa ${icon.icon}`"></i>
                  <span>{{ icon.label }}</span>
                </Checkbox>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-sm-6">
        <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
          <h6 class="sub-title">Filled Checkbox</h6>
          <template v-for="(item, index) in filledCheckboxList" :key="index">
            <div :class="`form-check checkbox checkbox-${item.class}`">
              <Checkbox
                :class="'form-check-input'"
                :label="item.label"
                :inputId="item.id"
                :required="false"
                v-model:modelValue="item.model"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue'

import { borderCheckbox, filledCheckbox, iconsCheckbox } from '@/core/data/forms/formControl'
import type { BorderCheckbox, FilledCheckbox, IconsCheckbox } from '@/types/forms/formControls'
import { initializeCheckboxList } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const borderCheckboxList = ref<BorderCheckbox[]>(borderCheckbox)
const iconCheckboxList = ref<IconsCheckbox[]>(iconsCheckbox)
const filledCheckboxList = ref<FilledCheckbox[]>(filledCheckbox)

onMounted(() => {
  initializeCheckboxList(borderCheckboxList.value)
  initializeCheckboxList(iconCheckboxList.value)
  initializeCheckboxList(filledCheckboxList.value)
})
</script>
