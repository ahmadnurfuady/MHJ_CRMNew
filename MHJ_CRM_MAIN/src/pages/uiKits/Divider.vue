<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xxl-4 col-md-6 box-col-6">
        <HorizontalSolidDivider />
      </div>
      <div class="col-xxl-4 col-md-6 box-col-6">
        <HorizontalDashedDivider />
      </div>
      <div class="col-xxl-4 col-md-6 box-col-6">
        <HorizontalDottedDivider />
      </div>
      <div class="col-xxl-4 col-md-6 box-col-6">
        <VerticalDashedDivider />
      </div>
      <div class="col-xxl-4 col-md-6 box-col-6">
        <VerticalDottedDivider />
      </div>
      <div class="col-xxl-4 col-md-6 box-col-6">
        <VerticalDoubleDivider />
      </div>
      <div class="col-md-6">
        <AnimatedColorDivider />
      </div>
      <div class="col-md-6">
        <HorizontalEditableDivider />
      </div>
      <div class="col-md-6">
        <SimpleHorizontalDivider />
      </div>
      <div class="col-md-6">
        <SimpleVerticalDivider />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const HorizontalSolidDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/HorizontalSolidDivider.vue')
)
const HorizontalDashedDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/HorizontalDashedDivider.vue')
)
const HorizontalDottedDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/HorizontalDottedDivider.vue')
)
const VerticalDashedDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/VerticalDashedDivider.vue')
)
const VerticalDottedDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/VerticalDottedDivider.vue')
)
const VerticalDoubleDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/VerticalDoubleDivider.vue')
)
const AnimatedColorDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/AnimatedColorDivider.vue')
)
const HorizontalEditableDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/HorizontalEditableDivider.vue')
)
const SimpleHorizontalDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/SimpleHorizontalDivider.vue')
)
const SimpleVerticalDivider = defineAsyncComponent(
  () => import('@/module/uiKits/divider/SimpleVerticalDivider.vue')
)
</script>
