<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <DefaultRangeSlider />
      </div>
      <div class="col-lg-6">
        <MinMaxValue />
      </div>
      <div class="col-lg-6">
        <StepsRangeSlider />
      </div>
      <div class="col-lg-6">
        <DirectionSlider />
      </div>
      <div class="col-lg-6">
        <CustomLabel />
      </div>
      <div class="col-lg-6">
        <DisabledSlider />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DefaultRangeSlider = defineAsyncComponent(
  () => import('@/module/bonusUi/rangeSlider/DefaultRangeSlider.vue')
)
const MinMaxValue = defineAsyncComponent(
  () => import('@/module/bonusUi/rangeSlider/MinMaxValue.vue')
)
const StepsRangeSlider = defineAsyncComponent(
  () => import('@/module/bonusUi/rangeSlider/StepsRangeSlider.vue')
)
const DirectionSlider = defineAsyncComponent(
  () => import('@/module/bonusUi/rangeSlider/DirectionSlider.vue')
)
const CustomLabel = defineAsyncComponent(
  () => import('@/module/bonusUi/rangeSlider/CustomLabel.vue')
)
const DisabledSlider = defineAsyncComponent(
  () => import('@/module/bonusUi/rangeSlider/DisabledSlider.vue')
)
</script>
