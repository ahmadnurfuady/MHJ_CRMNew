<template>
  <div class="cart-dropdown mt-4">
    <ul class="cart-main-wrapper" v-if="cart.length">
      <li v-for="(item, index) in cart" :key="index" class="cart-product pr-0 pl-0 pb-3">
        <div class="media">
          <img class="img-fluid b-r-5 me-3 img-60" :src="getImages(item.images[0])" />
          <div class="media-body">
            <a class="f-light f-w-500">{{ item.name }}</a>
            <div class="product-qty-box">
              <div class="qty-box">
                <div class="input-group">
                  <button
                    class="btn decrement-touchspin btn-touchspin quantity-left-minus"
                    @click="decrement(item)"
                  >
                    -
                  </button>
                  <input
                    class="input-touchspin spin-outline-light"
                    type="number"
                    v-model="item.quantity"
                  />
                  <button
                    class="btn increment-touchspin btn-touchspin touchspin-light quantity-right-plus"
                    @click="increment(item)"
                  >
                    +
                  </button>
                </div>
              </div>
              <h6 class="font-primary">{{ item.price }}</h6>
            </div>
          </div>
          <div class="close-circle">
            <a class="bg-danger" href="#" @click.prevent="removeProducts(item)">
              <vue-feather type="x"></vue-feather>
            </a>
          </div>
        </div>
      </li>
      <li class="mb-3 total">
        <h6 class="mb-0">
          Order Total :
          <span class="f-right">${{ totalAmount }}</span>
        </h6>
      </li>
    </ul>
    <div class="cart-empty show" v-else>
      <div class="cart-image">
        <img class="img-fluid" :src="getImages('ecommerce/order-trash.gif')" alt="empty" />
      </div>
      <h5>"Oh no! Your cart is empty"</h5>
    </div>
    <div class="card-footer pb-0 pr-0 pl-0">
      <div class="text-center">
        <router-link :to="routes.Ecommerce.Cart" class="btn btn-primary">View Cart</router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getImages } from '@/utils'
import { Product } from '@/types/product'
import { useProduct } from '@/store/product'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { routes } from '@/router/routes'

const store = useProduct()
const { productState, getTotalAmount } = storeToRefs(store)
const { removeProduct, updateCartQuantity } = store

const cart = computed(() => productState.value.cart)

const totalAmount = computed(() => getTotalAmount.value)

function removeProducts(product: Product) {
  removeProduct(product)
}

function increment(product: Product, qty = 1) {
  updateCartQuantity({ product, qty })
}

function decrement(product: Product, qty = -1) {
  updateCartQuantity({ product, qty })
}
</script>
