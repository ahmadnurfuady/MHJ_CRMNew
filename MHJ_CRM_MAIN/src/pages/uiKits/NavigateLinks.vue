<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xxl-3 col-sm-6">
        <LinkUtilities />
      </div>
      <div class="col-xxl-3 col-sm-6">
        <LinkUnderlines />
      </div>
      <div class="col-xxl-3 col-sm-6">
        <BorderOpacity />
      </div>
      <div class="col-xxl-3 col-sm-6">
        <BackgroundColorOpacity />
      </div>
      <div class="col-sm-12">
        <CommonLinks />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const LinkUtilities = defineAsyncComponent(
  () => import('@/module/uiKits/navigateLinks/LinkUtilities.vue')
)
const LinkUnderlines = defineAsyncComponent(
  () => import('@/module/uiKits/navigateLinks/LinkUnderlines.vue')
)
const BorderOpacity = defineAsyncComponent(
  () => import('@/module/uiKits/navigateLinks/BorderOpacity.vue')
)
const BackgroundColorOpacity = defineAsyncComponent(
  () => import('@/module/uiKits/navigateLinks/BackgroundColorOpacity.vue')
)
const CommonLinks = defineAsyncComponent(
  () => import('@/module/uiKits/navigateLinks/CommonLinks.vue')
)
</script>
