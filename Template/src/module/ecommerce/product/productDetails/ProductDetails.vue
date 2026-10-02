<template>
  <div class="col-xxl-5 box-col-6 order-xxl-0 order-1" v-if="displayedProduct">
    <Card>
      <div class="product-page-details">
        <h3>{{ displayedProduct?.name }}</h3>
      </div>
      <div class="product-price">
        ${{ displayedProduct?.price }}.00
        <del>${{ displayedProduct?.salePrice }}.00</del>
      </div>
      <ul class="product-color">
        <li class="bg-primary"></li>
        <li class="bg-secondary"></li>
        <li class="bg-success"></li>
        <li class="bg-info"></li>
        <li class="bg-warning"></li>
      </ul>
      <hr />
      <p>{{ displayedProduct?.description }}</p>
      <hr />
      <StockView />
      <hr />
      <div class="row">
        <div class="col-md-4">
          <h6 class="f-w-600 product-title">share it</h6>
        </div>
        <div class="col-md-8">
          <div class="product-icon">
            <ul class="product-social">
              <li class="d-inline-block" v-for="(item, index) in social" :key="index">
                <a :href="item.link" target="_blank">
                  <i :class="item.icon"></i>
                </a>
              </li>
            </ul>
            <form class="d-inline-block f-right"></form>
          </div>
        </div>
      </div>
      <hr />
      <div class="row g-sm-3 g-1">
        <div class="col-sm-4">
          <h6 class="f-w-600 product-title">Quantity</h6>
        </div>
        <div class="col-sm-8">
          <div class="touchspin-wrapper">
            <button
              class="decrement-touchspin btn-touchspin touchspin-primary"
              @click="decrement(displayedProduct)"
            >
              <i class="fa fa-minus"></i>
            </button>

            <input
              class="input-touchspin spin-outline-primary"
              type="number"
              v-model="displayedProduct.quantity"
              readonly
            />

            <button
              class="increment-touchspin btn-touchspin touchspin-primary"
              @click="increment(displayedProduct)"
            >
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-4">
          <h6 class="f-w-600 product-title">Rate Now</h6>
        </div>
        <div class="col-md-8">
          <div class="d-flex">
            <div class="main-star-rating common-f-start">
              <div class="common-flex star-box">
                <RatingStars :rating="displayedProduct?.star || 0" />
              </div>
              (250 review)
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="m-t-15 btn-showcase">
        <router-link
          @click="addToCarts(displayedProduct)"
          class="btn btn-primary btn-hover-effect"
          :to="routes.Ecommerce.Cart"
        >
          <i class="fa fa-shopping-basket me-1"></i>Add To Cart
        </router-link>
        <router-link class="btn btn-danger btn-hover-effect" :to="routes.Ecommerce.Wishlist">
          <i class="fa fa-heart me-1"></i>Add To WishList
        </router-link>
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '@/router/routes'
import { social } from '@/core/data/ecommerce'
import { useProduct } from '@/store/product'
import { storeToRefs } from 'pinia'
import { Product } from '@/types/product'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'))
const StockView = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/StockView.vue')
)

const store = useProduct()
const { productState } = storeToRefs(store)
const { addToCart, updateCartQuantity } = store
const router = useRouter()
let paramId = router.currentRoute.value.params.id

if (Array.isArray(paramId)) {
  paramId = paramId[0]
}
const routeId = parseInt(paramId)

const productData = productState.value.product.find((item) => item.id === routeId)

const cartProduct = computed(() => productState.value.cart.find((item) => item.id === routeId))

const displayedProduct = computed(() => cartProduct.value || productData)

function increment(product: Product) {
  addToCart(product)
  updateCartQuantity({ product, qty: 1 })
}

function decrement(product: Product) {
  updateCartQuantity({ product, qty: -1 })
}

function addToCarts(product: Product) {
  addToCart(product)
}
</script>
