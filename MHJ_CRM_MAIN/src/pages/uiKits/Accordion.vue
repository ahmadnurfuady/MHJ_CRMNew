<template>
  <div class="container-fluid main-accordion">
    <div class="row">
      <div class="col-sm-12 col-xl-6">
        <SimpleAccordion />
      </div>
      <div class="col-sm-12 col-xl-6">
        <FlushAccordion />
      </div>
      <div class="col-sm-12">
        <MultipleCollapseAccordion />
      </div>
      <div class="col-xl-6 col-sm-12">
        <IconsAccordion />
      </div>
      <div class="col-xl-6 col-sm-12">
        <OutlineAccordion />
      </div>
      <div class="col-md-6 col-sm-12">
        <HorizontalAccordion />
      </div>
      <div class="col-md-6 col-sm-12">
        <CollapseAccordion />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const SimpleAccordion = defineAsyncComponent(
  () => import('@/module/uiKits/accordion/SimpleAccordion.vue')
)
const FlushAccordion = defineAsyncComponent(
  () => import('@/module/uiKits/accordion/FlushAccordion.vue')
)
const MultipleCollapseAccordion = defineAsyncComponent(
  () => import('@/module/uiKits/accordion/MultipleCollapseAccordion.vue')
)
const IconsAccordion = defineAsyncComponent(
  () => import('@/module/uiKits/accordion/IconsAccordion.vue')
)
const OutlineAccordion = defineAsyncComponent(
  () => import('@/module/uiKits/accordion/OutlineAccordion.vue')
)
const HorizontalAccordion = defineAsyncComponent(
  () => import('@/module/uiKits/accordion/HorizontalAccordion.vue')
)
const CollapseAccordion = defineAsyncComponent(
  () => import('@/module/uiKits/accordion/CollapseAccordion.vue')
)
</script>
