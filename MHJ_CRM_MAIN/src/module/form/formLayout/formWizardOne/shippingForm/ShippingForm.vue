<template>
  <Card :headerTitle="'Shipping Form'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Fill up your true details and next proceed.</p>
    </template>

    <div class="row">
      <div class="col-12">
        <div class="row shipping-form g-5">
          <div class="col-xl-8 shipping-border checkout-cart">
            <div class="nav nav-pills horizontal-options shipping-options">
              <template v-for="(tab, index) of shippingForm" :key="index">
                <a
                  class="nav-link b-r-0"
                  :class="{ active: activeTab === index + 1 }"
                  @click="handleTab(index + 1)"
                >
                  <div class="cart-options">
                    <div class="stroke-icon-wizard">
                      <i :class="`fa-solid fa-${tab.icon}`"></i>
                    </div>
                    <div class="cart-options-content">
                      <h6>{{ tab.title }}</h6>
                    </div>
                  </div>
                </a>
              </template>
            </div>
            <div class="tab-content dark-field shipping-content shipping-wizard basic-wizard">
              <div class="tab-pane fade show active">
                <UserInformation v-if="activeTab === 1" />
                <ShippingInformation v-if="activeTab === 2" />
                <PaymentInformation v-if="activeTab === 3" />
                <OrderComplete :type="'classic'" v-if="activeTab === 4" />

                <div
                  class="wizard-footer d-flex gap-2 justify-content-end mt-3"
                  v-if="activeTab !== 4"
                >
                  <button
                    class="btn button-light-primary"
                    id="backbtn"
                    @click="handleStep(-1)"
                    :disabled="activeTab == 1"
                  >
                    Process To Back <i class="fa-solid fa-truck proceed-prev"></i>
                  </button>
                  <button class="btn btn-primary" id="nextbtn" @click="handleStep(1)">
                    {{ activeTab == shippingForm.length ? 'Finish' : 'Process To Next'
                    }}<i class="fa-solid fa-truck proceed-next"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="shipping-info">
              <h5>Current Cart</h5>
              <div class="overflow-auto custom-scrollbar">
                <table class="table table-striped" v-if="productState.cart.length">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Product Detail</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in cart" :key="index">
                      <td>
                        <img :src="getImages(item.images[0])" :alt="item.images[0]" />
                      </td>
                      <td>
                        <div>
                          <h6>{{ item.name }}</h6>
                          <span>${{ item.quantity }} * {{ item.price }}</span>
                        </div>
                      </td>
                      <td>
                        <p>${{ item.quantity * item.price }}</p>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Subtotal :</td>
                      <td colspan="2">{{ getTotalAmount }}</td>
                    </tr>
                    <tr>
                      <td>Discount :</td>
                      <td colspan="2">$0.00</td>
                    </tr>
                    <tr>
                      <td>Shipping Charge :</td>
                      <td colspan="2">$0.00</td>
                    </tr>
                    <tr>
                      <td>Tax :</td>
                      <td colspan="2">$0.00</td>
                    </tr>
                    <tr>
                      <td>Total (USD) :</td>
                      <td colspan="2">{{ getTotalAmount }}</td>
                    </tr>
                  </tfoot>
                </table>
                <template v-else>
                  <div class="inbox-data">
                    <div class="empty-cart d-block">
                      <img
                        :src="getImages('ecommerce/icon-empty-cart.png')"
                        class="img-fluid my-3"
                      />
                      <p>Your cart is empty.</p>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { storeToRefs } from 'pinia'

import { shippingForm } from '@/core/data/forms/formLayout'
import { useProduct } from '@/store/product'
import { getImages } from '@/utils/index'

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

const store = useProduct()
const { productState, getTotalAmount } = storeToRefs(store)
const cart = productState.value.cart

const activeTab = ref<number>(1)

function handleTab(value: number) {
  if (value) {
    activeTab.value = value
  }
}

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value < shippingForm.length) {
    activeTab.value = activeTab.value + 1
  }
}
</script>
