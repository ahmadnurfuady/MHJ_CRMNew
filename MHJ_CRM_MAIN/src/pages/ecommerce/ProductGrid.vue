<template>
  <ProductHeader />
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const ProductHeader = defineAsyncComponent(
  () => import('@/module/ecommerce/product/grid/ProductHeader.vue')
)
</script>
