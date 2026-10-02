<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <GridOptions />
      </div>
      <div class="col-sm-12">
        <ColumnGrid />
      </div>
      <div class="col-xl-5">
        <FlexBehaviorsGrid />
      </div>
      <div class="col-xl-7">
        <HorizontalGuttersGrid />
      </div>
      <div class="col-xl-6">
        <VerticalGuttersGrid />
      </div>
      <div class="col-xl-6">
        <RowColumnsGutters />
      </div>
      <div class="col-sm-12">
        <NoGutters />
      </div>
      <div class="col-sm-12">
        <VerticalAlignmentGrid />
      </div>
      <div class="col-sm-12">
        <HorizontalAlignmentGrid />
      </div>
      <div class="col-sm-12">
        <NestingGrid />
      </div>
      <div class="col-sm-12">
        <OrderGrid />
      </div>
      <div class="col-sm-12">
        <OffsetGrid />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const GridOptions = defineAsyncComponent(() => import('@/module/uiKits/grid/GridOptions.vue'))
const ColumnGrid = defineAsyncComponent(() => import('@/module/uiKits/grid/ColumnGrid.vue'))
const FlexBehaviorsGrid = defineAsyncComponent(
  () => import('@/module/uiKits/grid/FlexBehaviorsGrid.vue')
)
const HorizontalGuttersGrid = defineAsyncComponent(
  () => import('@/module/uiKits/grid/HorizontalGuttersGrid.vue')
)
const VerticalGuttersGrid = defineAsyncComponent(
  () => import('@/module/uiKits/grid/VerticalGuttersGrid.vue')
)
const RowColumnsGutters = defineAsyncComponent(
  () => import('@/module/uiKits/grid/RowColumnsGutters.vue')
)
const NoGutters = defineAsyncComponent(() => import('@/module/uiKits/grid/NoGutters.vue'))
const VerticalAlignmentGrid = defineAsyncComponent(
  () => import('@/module/uiKits/grid/VerticalAlignmentGrid.vue')
)
const HorizontalAlignmentGrid = defineAsyncComponent(
  () => import('@/module/uiKits/grid/HorizontalAlignmentGrid.vue')
)
const NestingGrid = defineAsyncComponent(() => import('@/module/uiKits/grid/NestingGrid.vue'))
const OrderGrid = defineAsyncComponent(() => import('@/module/uiKits/grid/OrderGrid.vue'))
const OffsetGrid = defineAsyncComponent(() => import('@/module/uiKits/grid/OffsetGrid.vue'))
</script>
