<template>
  <div class="col-xl-3 xl-100 box-col-4e">
    <div class="row">
      <div class="col-12 order-xl-0 order-1 order-xxl-2">
        <div class="card">
          <div class="card-header">
            <div class="header-top">
              <h5>Summary</h5>
            </div>
          </div>
          <div class="card-body">
            <ul class="cart-summary">
              <li>
                <h6>Subtotal</h6>
                <span>${{ getTotalAmount }}</span>
              </li>
              <li>
                <h6>Coupon Discount</h6>
                <span>(-) {{ tax }}.00</span>
              </li>
              <li>
                <h6>Shipping</h6>
                <span class="txt-primary">Free</span>
              </li>
            </ul>
          </div>
          <ul class="product-total">
            <li>
              <h4>Total</h4>
              <h4>${{ getTotalAmount }}</h4>
            </li>
            <li>
              <ul class="cart-buttons">
                <li>
                  <router-link :to="routes.Ecommerce.Checkout" class="btn btn-primary">
                    Proceed to Checkout
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="routes.Ecommerce.Products.ProductGrid"
                    class="btn btn-hover-effect"
                  >
                    <span><i class="fa-solid fa-caret-left fa-lg"></i></span>
                    Return to Shopping
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 order-0 order-xxl-1">
        <div class="card">
          <div class="card-body">
            <div class="coupon-cart">
              <span class="pb-1">Have a Coupon&quest;</span>
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter Coupon Code Here..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button class="btn btn-primary" id="button-addon2" type="button">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { routes } from '@/router/routes'
import { useProduct } from '@/store/product'
import { storeToRefs } from 'pinia'

const store = useProduct()
const { getTotalAmount } = storeToRefs(store)
const tax = 30
</script>
