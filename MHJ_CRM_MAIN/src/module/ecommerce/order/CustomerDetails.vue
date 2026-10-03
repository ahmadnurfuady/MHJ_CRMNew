<template>
  <Card
    :headerTitle="'Customer Details'"
    :padding="false"
    :cardBodyClass="'pt-0'"
    v-if="props.customerDetails"
  >
    <ul class="customer-details">
      <li>
        <h6>Name</h6>
        <span>{{ props.customerDetails.name }}</span>
      </li>
      <li>
        <h6>Email Address:</h6>
        <span>{{ props.customerDetails.email }}</span>
      </li>
      <li>
        <h6>Billing Address:</h6>
        <span>{{ props.customerDetails.billingAddress }}</span>
      </li>
      <li>
        <h6>Shipping Address:</h6>
        <span>{{ props.customerDetails.shippingAddress }}</span>
      </li>
      <li>
        <h6>Delivery Slot:</h6>
        <span>{{ props.customerDetails.deliverySlot }}</span>
      </li>
      <li>
        <h6>Payment Mode:</h6>
        <span>{{ props.customerDetails.paymentMethod }}</span>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { CustomerDetail } from '@/types/order'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  customerDetails: CustomerDetail
}>()
</script>
