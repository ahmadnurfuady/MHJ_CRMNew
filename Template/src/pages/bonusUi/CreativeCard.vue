<template>
  <div class="container-fluid">
    <div class="row effective-card height-equal">
      <div class="col-xxl-3 col-xl-6 col-12 box-col-4">
        <HoverIconCard />
      </div>
      <div class="col-xxl-6 col-xl-6 col-12 box-col-4">
        <ImageHoverCard />
      </div>
      <div class="col-xxl-3 col-12 box-col-4">
        <ImageOverlayCard />
      </div>
      <div class="col-12 col-md-6">
        <BorderLeft />
      </div>
      <div class="col-12 col-md-6">
        <BorderRight />
      </div>
      <div class="col-12 col-md-6">
        <BorderTop />
      </div>
      <div class="col-12 col-md-6">
        <BorderBottom />
      </div>
      <div class="col-xxl-4 col-md-6">
        <BorderPrimaryState />
      </div>
      <div class="col-xxl-4 col-md-6">
        <BorderWarningState />
      </div>
      <div class="col-xxl-4 col-12">
        <BorderSecondaryState />
      </div>
      <div class="col-sm-12 col-xl-6" v-for="(details, index) in absoluteCards" :key="index">
        <AbsoluteCard :details="details" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { absoluteCards } from '@/core/data/bonusUI/creativeCards'

const HoverIconCard = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/HoverIconCard.vue')
)
const ImageHoverCard = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/ImageHoverCard.vue')
)
const ImageOverlayCard = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/ImageOverlayCard.vue')
)
const BorderLeft = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/BorderLeft.vue')
)
const BorderRight = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/BorderRight.vue')
)
const BorderTop = defineAsyncComponent(() => import('@/module/bonusUi/creativeCard/BorderTop.vue'))
const BorderBottom = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/BorderBottom.vue')
)
const BorderPrimaryState = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/BorderPrimaryState.vue')
)
const BorderWarningState = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/BorderWarningState.vue')
)
const BorderSecondaryState = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/BorderSecondaryState.vue')
)
const AbsoluteCard = defineAsyncComponent(
  () => import('@/module/bonusUi/creativeCard/AbsoluteCard.vue')
)
</script>
