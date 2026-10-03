<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <BasicProgress />
        <div class="row">
          <div class="col-xl-6">
            <StripedProgressBars />
          </div>
          <div class="col-xl-6">
            <AnimatedProgressBars />
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <MultipleBars />
          </div>
          <div class="col-xl-6">
            <ProgressNumberSteps />
          </div>
        </div>
        <CustomProgressBars />
        <div class="row">
          <div class="col-xl-6">
            <SmallProgressBars />
          </div>
          <div class="col-xl-6">
            <LargeProgressBars />
          </div>
        </div>
      </div>
      <div class="col-xxl-6 box-col-12">
        <CustomHeightProgressBars />
      </div>
      <div class="col-xxl-6 box-col-12">
        <StepProgressbar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BasicProgress = defineAsyncComponent(
  () => import('@/module/uiKits/progress/BasicProgress.vue')
)
const StripedProgressBars = defineAsyncComponent(
  () => import('@/module/uiKits/progress/StripedProgressBars.vue')
)
const AnimatedProgressBars = defineAsyncComponent(
  () => import('@/module/uiKits/progress/AnimatedProgressBars.vue')
)
const MultipleBars = defineAsyncComponent(() => import('@/module/uiKits/progress/MultipleBars.vue'))
const ProgressNumberSteps = defineAsyncComponent(
  () => import('@/module/uiKits/progress/ProgressNumberSteps.vue')
)
const CustomProgressBars = defineAsyncComponent(
  () => import('@/module/uiKits/progress/CustomProgressBars.vue')
)
const SmallProgressBars = defineAsyncComponent(
  () => import('@/module/uiKits/progress/SmallProgressBars.vue')
)
const LargeProgressBars = defineAsyncComponent(
  () => import('@/module/uiKits/progress/LargeProgressBars.vue')
)
const CustomHeightProgressBars = defineAsyncComponent(
  () => import('@/module/uiKits/progress/CustomHeightProgressBars.vue')
)
const StepProgressbar = defineAsyncComponent(
  () => import('@/module/uiKits/progress/StepProgressbar.vue')
)
</script>
