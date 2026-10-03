<template>
  <div class="container-fluid">
    <div class="row typeahead-wrapper">
      <div class="col-sm-12 col-xl-6">
        <SimpleTypeahead />
      </div>
      <div class="col-sm-12 col-xl-6">
        <PrefetchTypeahead />
      </div>
      <div class="col-sm-12 col-xl-6">
        <RtlSupport />
      </div>
      <div class="col-sm-12 col-xl-6">
        <ScrollableMenu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const SimpleTypeahead = defineAsyncComponent(
  () => import('@/module/form/formWidgets/typeahead/SimpleTypeahead.vue')
)
const PrefetchTypeahead = defineAsyncComponent(
  () => import('@/module/form/formWidgets/typeahead/PrefetchTypeahead.vue')
)
const RtlSupport = defineAsyncComponent(
  () => import('@/module/form/formWidgets/typeahead/RtlSupport.vue')
)
const ScrollableMenu = defineAsyncComponent(
  () => import('@/module/form/formWidgets/typeahead/ScrollableMenu.vue')
)
</script>
