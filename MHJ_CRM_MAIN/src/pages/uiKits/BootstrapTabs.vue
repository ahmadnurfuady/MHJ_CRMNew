<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-xl-6">
        <SimpleTab />
      </div>
      <div class="col-sm-12 col-xl-6">
        <IconTab />
      </div>
      <div class="col-sm-12 col-xxl-6">
        <VerticalTabs />
      </div>
      <div class="col-sm-12 col-xxl-6">
        <PillsTabs />
      </div>
      <div class="col-xxl-6">
        <JustifyTabs />
      </div>
      <div class="col-xxl-6">
        <MaterialLeftTab />
      </div>
      <div class="col-xxl-6">
        <MaterialStyleTab />
      </div>
      <div class="col-xxl-6">
        <BorderTabs />
      </div>
      <div class="col-xxl-6">
        <BackgroundPillTabs />
      </div>
      <div class="col-xxl-6">
        <ArrowTabs />
      </div>
      <div class="col-xxl-6">
        <BottomTabs />
      </div>
      <div class="col-xxl-6">
        <AnimatedTabs />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const SimpleTab = defineAsyncComponent(() => import('@/module/uiKits/bootstrapTabs/SimpleTab.vue'))
const IconTab = defineAsyncComponent(() => import('@/module/uiKits/bootstrapTabs/IconTab.vue'))
const VerticalTabs = defineAsyncComponent(
  () => import('@/module/uiKits/bootstrapTabs/VerticalTabs.vue')
)
const PillsTabs = defineAsyncComponent(() => import('@/module/uiKits/bootstrapTabs/PillsTabs.vue'))
const JustifyTabs = defineAsyncComponent(
  () => import('@/module/uiKits/bootstrapTabs/JustifyTabs.vue')
)
const MaterialLeftTab = defineAsyncComponent(
  () => import('@/module/uiKits/bootstrapTabs/MaterialLeftTab.vue')
)
const MaterialStyleTab = defineAsyncComponent(
  () => import('@/module/uiKits/bootstrapTabs/MaterialStyleTab.vue')
)
const BorderTabs = defineAsyncComponent(
  () => import('@/module/uiKits/bootstrapTabs/BorderTabs.vue')
)
const BackgroundPillTabs = defineAsyncComponent(
  () => import('@/module/uiKits/bootstrapTabs/BackgroundPillTabs.vue')
)
const ArrowTabs = defineAsyncComponent(() => import('@/module/uiKits/bootstrapTabs/ArrowTabs.vue'))
const BottomTabs = defineAsyncComponent(
  () => import('@/module/uiKits/bootstrapTabs/BottomTabs.vue')
)
const AnimatedTabs = defineAsyncComponent(
  () => import('@/module/uiKits/bootstrapTabs/AnimatedTabs.vue')
)
</script>
