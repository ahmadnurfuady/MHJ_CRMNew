<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
        <DefaultBreadcrumb />
      </div>
      <div class="col-sm-6">
        <DividerBreadcrumbs />
      </div>
      <div class="col-sm-6">
        <IconsBreadcrumbs />
      </div>
      <div class="col-sm-6">
        <VariationBreadcrumb />
      </div>
      <div class="col-sm-12">
        <ColoredBreadcrumbs />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DefaultBreadcrumb = defineAsyncComponent(
  () => import('@/module/bonusUi/breadcrumb/DefaultBreadcrumb.vue')
)
const DividerBreadcrumbs = defineAsyncComponent(
  () => import('@/module/bonusUi/breadcrumb/DividerBreadcrumbs.vue')
)
const IconsBreadcrumbs = defineAsyncComponent(
  () => import('@/module/bonusUi/breadcrumb/IconsBreadcrumbs.vue')
)
const VariationBreadcrumb = defineAsyncComponent(
  () => import('@/module/bonusUi/breadcrumb/VariationBreadcrumb.vue')
)
const ColoredBreadcrumbs = defineAsyncComponent(
  () => import('@/module/bonusUi/breadcrumb/ColoredBreadcrumbs.vue')
)
</script>
