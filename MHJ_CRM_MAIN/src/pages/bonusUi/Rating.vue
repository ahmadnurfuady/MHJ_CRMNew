<template>
  <div class="container-fluid ratings">
    <div class="row">
      <div class="col-xxl-4 col-md-6">
        <StarRating />
      </div>
      <div class="col-xxl-4 col-md-6">
        <VibrantStars />
      </div>
      <div class="col-xxl-4 col-md-6">
        <BorderedStars />
      </div>
      <div class="col-xxl-4 col-md-6">
        <FluidStarsRating />
      </div>
      <div class="col-xxl-4 col-md-6">
        <CaptureRating />
      </div>
      <div class="col-xxl-4 col-md-6">
        <ResetRating />
      </div>
      <div class="col-xxl-4 col-md-6">
        <CustomStarsRating />
      </div>
      <div class="col-xxl-4 col-md-6">
        <AnimatedStarRating />
      </div>
      <div class="col-xxl-4 col-md-6">
        <GlowingStarRating />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const StarRating = defineAsyncComponent(() => import('@/module/bonusUi/rating/StarRating.vue'))
const VibrantStars = defineAsyncComponent(() => import('@/module/bonusUi/rating/VibrantStars.vue'))
const BorderedStars = defineAsyncComponent(
  () => import('@/module/bonusUi/rating/BorderedStars.vue')
)
const FluidStarsRating = defineAsyncComponent(
  () => import('@/module/bonusUi/rating/FluidStarsRating.vue')
)
const CaptureRating = defineAsyncComponent(
  () => import('@/module/bonusUi/rating/CaptureRating.vue')
)
const ResetRating = defineAsyncComponent(() => import('@/module/bonusUi/rating/ResetRating.vue'))
const CustomStarsRating = defineAsyncComponent(
  () => import('@/module/bonusUi/rating/CustomStarsRating.vue')
)
const AnimatedStarRating = defineAsyncComponent(
  () => import('@/module/bonusUi/rating/AnimatedStarRating.vue')
)
const GlowingStarRating = defineAsyncComponent(
  () => import('@/module/bonusUi/rating/GlowingStarRating.vue')
)
</script>
