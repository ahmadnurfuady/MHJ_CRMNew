<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xxl-6 box-col-12">
        <CardPlaceholder />
      </div>
      <div class="col-xxl-6 box-col-12">
        <WidthSizingPlaceholder />
      </div>
      <div class="col-md-6">
        <AnimationsPlaceholder />
      </div>
      <div class="col-md-6">
        <CustomAnimationPlaceholder />
      </div>
      <div class="col-12">
        <ColorsPlaceholder />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const CardPlaceholder = defineAsyncComponent(
  () => import('@/module/uiKits/placeholders/CardPlaceholder.vue')
)
const WidthSizingPlaceholder = defineAsyncComponent(
  () => import('@/module/uiKits/placeholders/WidthSizingPlaceholder.vue')
)
const AnimationsPlaceholder = defineAsyncComponent(
  () => import('@/module/uiKits/placeholders/AnimationsPlaceholder.vue')
)
const CustomAnimationPlaceholder = defineAsyncComponent(
  () => import('@/module/uiKits/placeholders/CustomAnimationPlaceholder.vue')
)
const ColorsPlaceholder = defineAsyncComponent(
  () => import('@/module/uiKits/placeholders/ColorsPlaceholder.vue')
)
</script>
