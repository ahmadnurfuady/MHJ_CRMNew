<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <DarkThemeAlert />
      </div>
      <div class="col-xl-12">
        <LightThemeAlert />
      </div>
      <div class="col-sm-12">
        <OutlineAlert />
      </div>
      <div class="col-sm-12 col-xl-6">
        <IconTextAlert />
      </div>
      <div class="col-xl-6">
        <LiveAlert />
      </div>
      <div class="col-sm-12 col-xl-6">
        <DismissingLightAlert />
      </div>
      <div class="col-sm-12 col-xl-6">
        <DismissingDarkAlert />
      </div>
      <div class="col-xl-6">
        <LeftBorderAlert />
      </div>
      <div class="col-xl-6">
        <CustomAlert />
      </div>
      <div class="col-xl-12">
        <IconsAlerts />
      </div>
      <div class="col-sm-12">
        <AdditionalContents />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DarkThemeAlert = defineAsyncComponent(
  () => import('@/module/uiKits/alert/DarkThemeAlert.vue')
)
const LightThemeAlert = defineAsyncComponent(
  () => import('@/module/uiKits/alert/LightThemeAlert.vue')
)
const OutlineAlert = defineAsyncComponent(() => import('@/module/uiKits/alert/OutlineAlert.vue'))
const IconTextAlert = defineAsyncComponent(() => import('@/module/uiKits/alert/IconTextAlert.vue'))
const LiveAlert = defineAsyncComponent(() => import('@/module/uiKits/alert/LiveAlert.vue'))
const DismissingLightAlert = defineAsyncComponent(
  () => import('@/module/uiKits/alert/DismissingLightAlert.vue')
)
const DismissingDarkAlert = defineAsyncComponent(
  () => import('@/module/uiKits/alert/DismissingDarkAlert.vue')
)
const LeftBorderAlert = defineAsyncComponent(
  () => import('@/module/uiKits/alert/LeftBorderAlert.vue')
)
const CustomAlert = defineAsyncComponent(() => import('@/module/uiKits/alert/CustomAlert.vue'))
const IconsAlerts = defineAsyncComponent(() => import('@/module/uiKits/alert/IconsAlerts.vue'))
const AdditionalContents = defineAsyncComponent(
  () => import('@/module/uiKits/alert/AdditionalContents.vue')
)
</script>
