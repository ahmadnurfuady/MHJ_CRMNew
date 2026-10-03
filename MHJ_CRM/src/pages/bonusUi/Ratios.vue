<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xxl-12">
        <AspectRatios />
      </div>
      <div class="col-xl-6">
        <CustomRatio />
      </div>
      <div class="col-xl-6">
        <DefaultRatio />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AspectRatios = defineAsyncComponent(() => import('@/module/bonusUi/ratios/AspectRatios.vue'))
const CustomRatio = defineAsyncComponent(() => import('@/module/bonusUi/ratios/CustomRatio.vue'))
const DefaultRatio = defineAsyncComponent(() => import('@/module/bonusUi/ratios/DefaultRatio.vue'))
</script>
