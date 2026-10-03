<template>
  <div class="advance-options">
    <ul class="nav nav-tabs border-tab">
      <li class="nav-item" v-for="(tab, index) in settingTabs" :key="index">
        <a
          class="nav-link"
          :class="{ active: activeTab === tab.value }"
          @click="handleTab(tab.value)"
          >{{ tab.title }}</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active">
        <Paypal v-if="activeTab === 'paypal'" />
        <Razorpay v-if="activeTab === 'razorpay'" />
        <Mollie v-if="activeTab === 'mollie'" />
        <COD v-if="activeTab === 'cod'" />
        <Stripe v-if="activeTab === 'stripe'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { paymentTabs } from '@/core/data/setting'

const Paypal = defineAsyncComponent(
  () => import('@/module/ecommerce/settings/payment-method/Paypal.vue')
)
const Razorpay = defineAsyncComponent(
  () => import('@/module/ecommerce/settings/payment-method/Razorpay.vue')
)
const Mollie = defineAsyncComponent(
  () => import('@/module/ecommerce/settings/payment-method/Mollie.vue')
)
const COD = defineAsyncComponent(() => import('@/module/ecommerce/settings/payment-method/COD.vue'))
const Stripe = defineAsyncComponent(
  () => import('@/module/ecommerce/settings/payment-method/Stripe.vue')
)

const settingTabs = paymentTabs
const activeTab = ref<string>('paypal')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
