<template>
  <div class="customizer-links" :class="{ open: layoutState.customizer }">
    <div
      class="nav flex-column nac-pills"
      id="c-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <CustomizerSetting />
      <CustomizerSupport />
      <CheckFeatures />
      <BuyNow />
    </div>
  </div>
  <div class="customizer-contain" :class="{ open: layoutState.customizer }">
    <div class="tab-content" id="c-pills-tabContent">
      <ConfigurationView />
      <div class="customizer-body custom-scrollbar">
        <CustomSetting />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useLayout } from '@/store/layout'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent } from 'vue'
const CustomizerSetting = defineAsyncComponent(
  () => import('@/components/layout/customizer/CustomizerSetting.vue')
)
const ConfigurationView = defineAsyncComponent(
  () => import('@/components/layout/customizer/Configuration.vue')
)
const CustomSetting = defineAsyncComponent(
  () => import('@/components/layout/customizer/CustomSetting.vue')
)
const CustomizerSupport = defineAsyncComponent(
  () => import('@/components/layout/customizer/CustomizerSupport.vue')
)
const BuyNow = defineAsyncComponent(() => import('@/components/layout/customizer/BuyNow.vue'))

const store = useLayout()
const { layoutState } = storeToRefs(store)
</script>
