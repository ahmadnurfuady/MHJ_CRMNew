<template>
  <form class="row g-3 common-form">
    <div class="col-12">
      <div class="row g-2 product-tag">
        <label class="form-label d-block m-0">Colors</label>
        <TagInput v-model:tags="colors" />
      </div>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Option Name'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select Color'"
          v-model="form.optionName"
          :options="colorOptionName"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Option Value'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select Value'"
          v-model="form.optionValue"
          :options="colorOptionValue"
        />
      </InputWrapper>
    </div>
    <div class="product-buttons">
      <button class="btn" type="button" @click="handleTab(-1)">
        <SvgIcon :icon="'back-arrow'"></SvgIcon>Previous
      </button>
      <button class="btn" type="button" @click="handleTab(1)">
        Next
        <SvgIcon :icon="'front-arrow'"></SvgIcon>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { colorOptionName, colorOptionValue } from '@/core/data/product'
import { useProduct } from '@/store/product'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  additionalTabId: number
}>()

const emits = defineEmits(['changeTab'])

const { changeTab } = useProduct()

const colors = ref<string[]>(['Green', 'Purple', 'Yellow', 'Blue'])
const form = ref({
  optionName: initSelectField(),
  optionValue: initSelectField(),
})

function handleTab(value: number) {
  if (props.additionalTabId) {
    const updatedId = changeTab(value, props.additionalTabId)
    if (updatedId) {
      emits('changeTab', updatedId)
    }
  }
}
</script>
