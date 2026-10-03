<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 col-12">
        <VerticalSlider />
      </div>
      <div class="col-xl-6 col-12">
        <NestedSwiper />
      </div>
      <div class="col-xl-6 col-12">
        <MouseWheelVariant />
      </div>
      <div class="col-xl-6 col-12">
        <AutoPlayVariant />
      </div>
      <div class="col-12">
        <EffectCoverflow />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const VerticalSlider = defineAsyncComponent(
  () => import('@/module/bonusUi/swiperSlider/VerticalSlider.vue')
)
const NestedSwiper = defineAsyncComponent(
  () => import('@/module/bonusUi/swiperSlider/NestedSwiper.vue')
)
const MouseWheelVariant = defineAsyncComponent(
  () => import('@/module/bonusUi/swiperSlider/MouseWheelVariant.vue')
)
const AutoPlayVariant = defineAsyncComponent(
  () => import('@/module/bonusUi/swiperSlider/AutoPlayVariant.vue')
)
const EffectCoverflow = defineAsyncComponent(
  () => import('@/module/bonusUi/swiperSlider/EffectCoverflow.vue')
)
</script>
