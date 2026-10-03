<template>
  <div class="container-fluid">
    <div class="row">
      <CommonButtons />
      <ButtonGroups />
      <BlockLevelButtons />
      <ButtonVariations />
      <BoldBorderButton />
      <UiButton />
      <RadialButtons />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const CommonButtons = defineAsyncComponent(() => import('@/module/button/CommonButtons.vue'))
const ButtonGroups = defineAsyncComponent(() => import('@/module/button/ButtonGroups.vue'))
const BlockLevelButtons = defineAsyncComponent(
  () => import('@/module/button/BlockLevelButtons.vue')
)
const ButtonVariations = defineAsyncComponent(() => import('@/module/button/ButtonVariations.vue'))
const BoldBorderButton = defineAsyncComponent(() => import('@/module/button/BoldBorderButton.vue'))
const UiButton = defineAsyncComponent(() => import('@/module/button/UiButton.vue'))
const RadialButtons = defineAsyncComponent(() => import('@/module/button/RadialButtons.vue'))
</script>
