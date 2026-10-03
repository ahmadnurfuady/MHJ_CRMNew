<template>
  <div class="container-fluid common-cart">
    <div class="row">
      <ProductCart />
      <CartSummary />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const ProductCart = defineAsyncComponent(() => import('@/module/ecommerce/cart/ProductCart.vue'))
const CartSummary = defineAsyncComponent(() => import('@/module/ecommerce/cart/CartSummary.vue'))
</script>
