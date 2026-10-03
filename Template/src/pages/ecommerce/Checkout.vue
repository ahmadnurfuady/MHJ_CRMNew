<template>
  <div class="container-fluid">
    <div class="row shipping-form">
      <div class="col-xl-8">
        <Card :cardClass="'checkout-cart'" :cardBodyClass="'basic-wizard important-validation'">
          <div class="stepper-horizontal custom-scrollbar" id="stepper1">
            <template v-for="(tab, index) in tabs" :key="index">
              <div class="stepper-one step" :class="{ 'active done': tab.id < activeTab }">
                <div class="step-circle">
                  <span>{{ tab.id }}</span>
                </div>
                <div class="step-title">{{ tab.title }}</div>
                <div class="step-bar-left"></div>
                <div class="step-bar-right"></div>
              </div>
            </template>
          </div>
          <div class="shipping-content">
            <UserInformation v-if="activeTab === 1" />
            <ShippingInformation v-if="activeTab === 2" />
            <PaymentInformation v-if="activeTab === 3" />
            <OrderComplete v-if="activeTab === 4" />
          </div>
          <div class="wizard-footer d-flex gap-2 justify-content-end mt-3">
            <button
              class="btn button-light-primary"
              id="back-btn"
              @click="handleStep(-1)"
              :disabled="activeTab == 1"
            >
              Back
            </button>
            <button
              class="btn btn-primary"
              id="next-btn"
              @click="activeTab == checkoutTabs.length ? placeOrder() : handleStep(1)"
            >
              {{ activeTab == checkoutTabs.length ? 'Finish' : 'Next' }}
            </button>
          </div>
        </Card>
      </div>
      <div class="col-xl-4">
        <Card :headerTitle="'Order Details'" :border="true" :padding="false">
          <ul class="summery-contain">
            <li v-if="!cart.length">There are no products in cart</li>
            <li v-for="(item, index) in cart" :key="index">
              <img class="img-fluid" :src="getImages(item.images[0])" alt="headphone" />
              <h6>
                {{ item.name }} <span>× {{ item.quantity }}</span>
              </h6>
              <h6 class="price">${{ item.price }}</h6>
            </li>
          </ul>
          <ul class="summary-total">
            <li>
              <h6>Subtotal</h6>
              <h6 class="price">${{ getTotalAmount }}</h6>
            </li>
            <li>
              <h6>Shipping</h6>
              <h6 class="price">$14.00</h6>
            </li>
            <li>
              <h6>Tax</h6>
              <h6 class="price">$18.00</h6>
            </li>
            <li>
              <h6>Coupon Code</h6>
              <h6 class="price">$-30.00</h6>
            </li>
            <li class="list-total">
              <h6>Total</h6>
              <h6 class="price">${{ getTotalAmount }}</h6>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { useRouter } from 'vue-router'
import { checkoutTabs } from '@/core/data/order'
import { getImages } from '@/utils/index'
import { useProduct } from '@/store/product'
import { storeToRefs } from 'pinia'

const store = useProduct()
const { productState, getTotalAmount } = storeToRefs(store)
const cart = productState.value.cart

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const UserInformation = defineAsyncComponent(
  () => import('@/module/ecommerce/checkout/UserInformation.vue')
)
const ShippingInformation = defineAsyncComponent(
  () => import('@/module/ecommerce/checkout/ShippingInformation.vue')
)
const PaymentInformation = defineAsyncComponent(
  () => import('@/module/ecommerce/checkout/PaymentInformation.vue')
)
const OrderComplete = defineAsyncComponent(
  () => import('@/module/ecommerce/checkout/OrderComplete.vue')
)

const router = useRouter()

const tabs = checkoutTabs
const activeTab = ref<number>(1)

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value < checkoutTabs.length) {
    activeTab.value = activeTab.value + 1
  }
}

function placeOrder() {
  router.push('/order/details/1244')
}
</script>
