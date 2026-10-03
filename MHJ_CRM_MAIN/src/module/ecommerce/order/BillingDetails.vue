<template>
  <Card
    :headerTitle="'Summary'"
    :padding="false"
    :rightSideDetails="true"
    :cardBodyClass="'pt-0'"
    v-if="props.billingDetails"
  >
    <template #header3>
      <router-link class="btn btn-primary" :to="routes.Ecommerce.Invoice.Invoice2">
        <i class="fa-regular fa-file-lines pe-2 f-14"></i>
        Invoice
      </router-link>
    </template>

    <ul class="tracking-total">
      <li>
        <h6>Subtotal</h6>
        <span> ${{ formatDecimalOnly(props.billingDetails.subTotal) }}</span>
      </li>
      <li>
        <h6>Coupon Discount</h6>
        <span>(-){{ formatDecimalOnly(props.billingDetails.couponDiscount) }}</span>
      </li>
      <li>
        <h6>Tax</h6>
        <span>{{ formatDecimalOnly(props.billingDetails.tax) }}</span>
      </li>
      <li>
        <h6>Shipping</h6>
        <span class="txt-primary">{{ props.billingDetails.shipping }}</span>
      </li>
      <li>
        <h6>Total</h6>
        <span>${{ formatDecimalOnly(props.billingDetails.total) }}</span>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { routes } from '@/router/routes'
import type { BillingDetail } from '@/types/order'
import { formatDecimalOnly } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  billingDetails?: BillingDetail
}>()
</script>
