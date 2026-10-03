<template>
  <form class="stepper-four row g-3 needs-validation shipping-wizard">
    <div class="order-confirm" v-if="props.type == 'simple'">
      <img :src="`${getImages('gif/dashboard-8/successful.gif')}`" alt="popper" />
      <div>
        <h5>Order Placed Successfully</h5>
        <p class="mb-0">A confirmation email with your order details has been sent to you.</p>
      </div>
    </div>
    <div class="order-confirm" v-else-if="props.type == 'classic'">
      <img :src="`${getImages('gif/dashboard-8/successful.gif')}`" alt="popper" />
      <h5>Thank you! Your order is confirmed.</h5>
      <p class="mb-0">
        An email with your order's specifics will be sent to you as order confirmation.
      </p>
      <p class="text-center f-w-500 mt-2">
        Order ID:
        <a class="text-decoration-underline" href="#">GE34598 </a>
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils/index'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const props = withDefaults(
  defineProps<{
    type?: string
  }>(),
  {
    type: 'simple',
  }
)
</script>
