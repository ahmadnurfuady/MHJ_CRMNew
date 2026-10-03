<template>
  <form class="row g-3 common-form">
    <div class="col-xxl-6">
      <InputWrapper :title="'Meta Title'">
        <InputField :inputId="'meta-title'" :placeholder="'Enter meta title'" />
      </InputWrapper>
    </div>
    <div class="col-xxl-6">
      <InputWrapper :title="'Meta Keywords'">
        <InputField :inputId="'meta-keyword'" :placeholder="'Enter meta keyword'" />
      </InputWrapper>
    </div>
    <div class="col-md-12">
      <InputWrapper :title="'Meta Description'">
        <Editor />
      </InputWrapper>
      <p class="mb-0 mt-1 f-light">
        Enhance your SEO ranking with an added tag description for the product.
      </p>
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
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

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
  additionalTabId: number
}>()

const emits = defineEmits(['changeTab'])
const { changeTab } = useProduct()

function handleTab(value: number) {
  if (props.additionalTabId) {
    const updatedId = changeTab(value, props.additionalTabId)
    if (updatedId) {
      emits('changeTab', updatedId)
    }
  }
}
</script>
