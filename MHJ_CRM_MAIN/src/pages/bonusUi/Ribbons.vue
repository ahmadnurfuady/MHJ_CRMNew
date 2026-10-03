<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-xl-12">
        <LeftSideRibbons />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-xl-12">
        <RightSideRibbons />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-xl-12">
        <AnimatedRibbons />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const LeftSideRibbons = defineAsyncComponent(
  () => import('@/module/bonusUi/ribbons/LeftSideRibbons.vue')
)
const RightSideRibbons = defineAsyncComponent(
  () => import('@/module/bonusUi/ribbons/RightSideRibbons.vue')
)
const AnimatedRibbons = defineAsyncComponent(
  () => import('@/module/bonusUi/ribbons/AnimatedRibbons.vue')
)
</script>
