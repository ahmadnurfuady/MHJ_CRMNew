<template>
  <div class="container-fluid">
    <div class="row popover-main">
      <div class="col-sm-12">
        <BasicPopover />
      </div>
      <div class="col-lg-4 col-md-6">
        <DisabledPopover />
      </div>
      <div class="col-lg-4 col-md-6">
        <DelayPopover />
      </div>
      <div class="col-lg-4">
        <DismissPopover />
      </div>
      <div class="col-sm-12">
        <PopoverDirections />
      </div>
      <div class="col-sm-12">
        <PopoverOffsets />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BasicPopover = defineAsyncComponent(() => import('@/module/uiKits/popover/BasicPopover.vue'))
const DisabledPopover = defineAsyncComponent(
  () => import('@/module/uiKits/popover/DisabledPopover.vue')
)
const DelayPopover = defineAsyncComponent(() => import('@/module/uiKits/popover/DelayPopover.vue'))
const DismissPopover = defineAsyncComponent(
  () => import('@/module/uiKits/popover/DismissPopover.vue')
)
const PopoverDirections = defineAsyncComponent(
  () => import('@/module/uiKits/popover/PopoverDirections.vue')
)
const PopoverOffsets = defineAsyncComponent(
  () => import('@/module/uiKits/popover/PopoverOffsets.vue')
)
</script>
