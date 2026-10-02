<template>
  <div class="col-sm-12 empty-cart-cls text-center" v-if="!cart.length">
    <img :src="getImages('ecommerce/order-trash.gif')" class="img-fluid my-3" />
    <h4>"Oh no! Your cart is empty"</h4>
    <router-link
      :to="routes.Ecommerce.Products.ProductGrid"
      class="btn btn-primary cart-btn-transform my-2"
      >continue shopping</router-link
    >
  </div>
</template>
<script lang="ts" setup>
import { routes } from '@/router/routes'
import { useProduct } from '@/store/product'
import { getImages } from '@/utils/index'
import { storeToRefs } from 'pinia'

const store = useProduct()
const { productState } = storeToRefs(store)
const cart = productState.value.cart
</script>
