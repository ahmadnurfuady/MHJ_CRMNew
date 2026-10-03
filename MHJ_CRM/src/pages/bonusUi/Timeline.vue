<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 box-col-12">
        <AnimatedTimeline />
      </div>
      <div class="col-xl-6 box-col-6 notification main-timeline">
        <BasicTimeline />
      </div>
      <div class="col-xl-6">
        <HoveringTimeline />
      </div>
      <div class="col-xxl-4 col-xl-5 notification box-col-12">
        <VariationTimeline />
      </div>
      <div class="col-xxl-8 col-xl-7 box-col-12">
        <HorizontalTimeline />
      </div>
      <div class="col-sm-12 box-col-12">
        <HalfRoundedTimeline />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AnimatedTimeline = defineAsyncComponent(
  () => import('@/module/bonusUi/timeline/AnimatedTimeline.vue')
)
const BasicTimeline = defineAsyncComponent(
  () => import('@/module/bonusUi/timeline/BasicTimeline.vue')
)
const HoveringTimeline = defineAsyncComponent(
  () => import('@/module/bonusUi/timeline/HoveringTimeline.vue')
)
const VariationTimeline = defineAsyncComponent(
  () => import('@/module/bonusUi/timeline/VariationTimeline.vue')
)
const HorizontalTimeline = defineAsyncComponent(
  () => import('@/module/bonusUi/timeline/HorizontalTimeline.vue')
)
const HalfRoundedTimeline = defineAsyncComponent(
  () => import('@/module/bonusUi/timeline/HalfRoundedTimeline.vue')
)
</script>
