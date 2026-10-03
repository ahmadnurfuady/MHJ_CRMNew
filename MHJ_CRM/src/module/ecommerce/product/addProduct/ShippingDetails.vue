<template>
  <form class="common-form">
    <div class="row g-3">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <InputWrapper :title="'Weight (kg)'">
              <i
                class="icon-help-alt ms-1"
                v-tooltip
                title="set proper weight for product items."
              ></i>
              <InputField
                :inputId="'meta-title'"
                :placeholder="'Enter your meta title'"
                :inputType="'number'"
              />
            </InputWrapper>
            <p class="f-light">
              Decide if the product is a digital or physical item. Shipping may be necessary for
              real-world items.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row gx-xl-3 gx-md-2 gy-md-0 g-2">
          <div class="col-12">
            <InputWrapper :title="'Dimensions'">
              <i
                class="icon-help-alt ms-1"
                v-tooltip
                title="set proper length/width and height for product items."
              ></i>
            </InputWrapper>
          </div>
          <div class="col-md-4 col-sm-6">
            <InputField :inputId="'length'" :placeholder="'Length[l]'" :inputType="'number'" />
          </div>
          <div class="col-md-4 col-sm-6">
            <InputField :inputId="'width'" :placeholder="'Width[w]'" :inputType="'number'" />
          </div>
          <div class="col-md-4">
            <InputField :inputId="'height'" :placeholder="'Height[h]'" :inputType="'number'" />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <InputWrapper :title="'Shipping Class'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select shipping class type'"
                v-model="shippingClasses"
                :options="shippingClass"
              />
            </InputWrapper>
          </div>
        </div>
      </div>
      <div class="col-md-12 product-buttons">
        <button class="btn" type="button" @click="handleTab(-1)">
          <SvgIcon :icon="'back-arrow'"></SvgIcon>Previous
        </button>
        <button class="btn" type="button" @click="handleTab(1)">
          Next
          <SvgIcon :icon="'front-arrow'"></SvgIcon>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { shippingClass } from '@/core/data/product'
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
  additionalTabId: number
}>()

const emits = defineEmits(['changeTab'])

const { changeTab } = useProduct()

const shippingClasses = ref(initSelectField())

function handleTab(value: number) {
  if (props.additionalTabId) {
    const updatedId = changeTab(value, props.additionalTabId)
    if (updatedId) {
      emits('changeTab', updatedId)
    }
  }
}
</script>
