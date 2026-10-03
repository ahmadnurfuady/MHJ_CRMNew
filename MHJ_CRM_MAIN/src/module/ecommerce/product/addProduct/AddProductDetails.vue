<template>
  <div class="sidebar-body">
    <form class="row g-3 common-form">
      <div class="col-12">
        <InputWrapper :title="'Product SKU'">
          <InputField :inputId="'sku'" :placeholder="'Enter product sku'" :required="false" />
        </InputWrapper>
      </div>
      <div class="col-md-12">
        <InputWrapper :title="'Product Title'">
          <InputField :inputId="'title'" :placeholder="'Enter product title'" :required="false" />
        </InputWrapper>
      </div>
      <div class="col-md-12">
        <label class="form-label">Product Description</label>
        <div class="toolbar-box">
          <Editor />
        </div>
      </div>
      <div class="col-12 product-buttons">
        <button class="btn m-0" type="button" @click="handleTab(1)">
          Next
          <SvgIcon :icon="'front-arrow'" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useProduct } from '@/store/product'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Editor = defineAsyncComponent(() => import('@/components/shared/Editor.vue'))

const props = defineProps<{
  activeTabId: number
}>()

const emits = defineEmits(['changeTab'])
const { changeTab } = useProduct()

function handleTab(value: number) {
  if (props.activeTabId) {
    const updatedId = changeTab(value, props.activeTabId)
    if (updatedId) {
      emits('changeTab', updatedId)
    }
  }
}
</script>
