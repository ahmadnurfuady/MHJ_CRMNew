<template>
  <div class="container-fluid">
    <div>
      <div class="row product-page-main p-0">
        <ProductSwiper />
        <ProductDetails />
        <FilterBlock />
      </div>
    </div>
    <productTabs />
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const ProductSwiper = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/ProductSwiper.vue')
)
const ProductDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/ProductDetails.vue')
)
const FilterBlock = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/FilterBlock.vue')
)
const productTabs = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/productTabs.vue')
)
</script>
