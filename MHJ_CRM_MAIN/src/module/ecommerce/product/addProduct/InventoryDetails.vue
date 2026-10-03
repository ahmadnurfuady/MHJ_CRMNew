<template>
  <form class="common-form row g-3" id="advance-tab">
    <div class="col-sm-6">
      <InputWrapper :title="'Stock Availability'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select stock availability'"
          v-model="form.stockAvailability"
          :options="stockAvailability"
        />
      </InputWrapper>
    </div>
    <div class="col-sm-6">
      <InputWrapper :title="'Low Stock Level'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select stock level'"
          v-model="form.stockLevel"
          :options="stockLevel"
        />
      </InputWrapper>
    </div>
    <div class="col-xxl-4 col-sm-6">
      <InputWrapper :title="'Stock Quantity'">
        <InputField :inputId="'stock-quantity'" :placeholder="'Stock quantity'" :required="false" />
      </InputWrapper>
    </div>
    <div class="col-xxl-4 col-sm-6">
      <InputWrapper :title="'Restock Date'">
        <InputField
          :inputId="'restock-date'"
          :placeholder="'Date'"
          :required="false"
          :inputType="'date'"
        />
      </InputWrapper>
    </div>
    <div class="col-xxl-4 col-sm-6">
      <InputWrapper :title="'Pre-Order'">
        <InputField :inputId="'pre-order'" :placeholder="'Quantity'" :required="false" />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" id="gridCheck" type="checkbox" />
        <label class="form-check-label m-0" for="gridCheck">This is a digital product.</label>
      </div>
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
import { defineAsyncComponent, ref } from 'vue'
import { initSelectField } from '@/core/data/common'
import { stockAvailability, stockLevel } from '@/core/data/product'
import { useProduct } from '@/store/product'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  activeTabId: number
  additionalTabId: number
}>()

const emits = defineEmits(['previousPage', 'nextPage'])
const { changeTab } = useProduct()

const form = ref({
  stockAvailability: initSelectField(),
  stockLevel: initSelectField(),
})

function handleTab(value: number) {
  if (props.activeTabId && props.additionalTabId) {
    if (value == -1) {
      const updatedId = changeTab(value, props.activeTabId)
      if (updatedId) {
        emits('previousPage', updatedId)
      }
    } else if (value == 1) {
      const updatedId = changeTab(value, props.additionalTabId)
      if (updatedId) {
        emits('nextPage', updatedId)
      }
    }
  }
}
</script>
