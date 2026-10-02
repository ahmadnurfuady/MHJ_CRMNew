<template>
  <div class="container-fluid main-offcanvas-wrapper">
    <div class="row">
      <div class="col-12">
        <OffcanvasDirections />
      </div>
      <div class="col-12">
        <OffcanvasVariations />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const OffcanvasDirections = defineAsyncComponent(
  () => import('@/module/uiKits/offcanvas/OffcanvasDirections.vue')
)
const OffcanvasVariations = defineAsyncComponent(
  () => import('@/module/uiKits/offcanvas/OffcanvasVariations.vue')
)
</script>
