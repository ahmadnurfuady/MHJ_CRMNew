<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <BasicTooltip />
      </div>
      <div class="col-md-6">
        <ColoredTooltip />
      </div>
      <div class="col-md-6">
        <LightTooltips />
      </div>
      <div class="col-lg-6">
        <TooltipDirections />
      </div>
      <div class="col-lg-6">
        <HTMLElementsTooltip />
      </div>
      <div class="col-lg-6">
        <OutlinedTooltip />
      </div>
      <div class="col-lg-6">
        <DisabledTooltip />
      </div>
      <div class="col-md-6">
        <SVGTooltip />
      </div>
      <div class="col-md-6">
        <IconsTooltip />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BasicTooltip = defineAsyncComponent(() => import('@/module/uiKits/tooltip/BasicTooltip.vue'))
const ColoredTooltip = defineAsyncComponent(
  () => import('@/module/uiKits/tooltip/ColoredTooltip.vue')
)
const LightTooltips = defineAsyncComponent(
  () => import('@/module/uiKits/tooltip/LightTooltips.vue')
)
const TooltipDirections = defineAsyncComponent(
  () => import('@/module/uiKits/tooltip/TooltipDirections.vue')
)
const HTMLElementsTooltip = defineAsyncComponent(
  () => import('@/module/uiKits/tooltip/HTMLElementsTooltip.vue')
)
const OutlinedTooltip = defineAsyncComponent(
  () => import('@/module/uiKits/tooltip/OutlinedTooltip.vue')
)
const DisabledTooltip = defineAsyncComponent(
  () => import('@/module/uiKits/tooltip/DisabledTooltip.vue')
)
const SVGTooltip = defineAsyncComponent(() => import('@/module/uiKits/tooltip/SVGTooltip.vue'))
const IconsTooltip = defineAsyncComponent(() => import('@/module/uiKits/tooltip/IconsTooltip.vue'))
</script>
