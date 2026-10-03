<template>
  <table class="table table-bordered table-striped">
    <tbody>
      <tr>
        <td class="item">
          <h6 class="p-2 mb-0">Item Description</h6>
        </td>
        <td class="Hours">
          <h6 class="p-2 mb-0">Hours</h6>
        </td>
        <td class="Rate">
          <h6 class="p-2 mb-0">Rate</h6>
        </td>
        <td class="subtotal">
          <h6 class="p-2 mb-0">Sub-total</h6>
        </td>
      </tr>
      <tr v-for="(product, i) in invoice6" :key="i">
        <td>
          <label class="mb-0">{{ product.name }}</label>
          <p class="m-0">{{ product.description }}</p>
        </td>
        <td>
          <p class="itemtext">{{ product.hours }}</p>
        </td>
        <td>
          <p class="itemtext">${{ product.rate }}</p>
        </td>
        <td>
          <p class="itemtext">${{ product.hours * product.rate }}.00</p>
        </td>
      </tr>
      <tr>
        <td></td>
        <td><p class="m-0">HST</p></td>
        <td>
          <p class="m-0">{{ taxPercent }}%</p>
        </td>
        <td>
          <p class="m-0">${{ taxAmount }}.00</p>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td><h6 class="mb-0 p-2">Total</h6></td>
        <td>
          <h6 class="mb-0 p-2">${{ total }}</h6>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { invoice6 } from '@/core/data/ecommerce'
import { computed } from 'vue'

const taxPercent = 13

const subTotal = computed(() =>
  invoice6.reduce(
    (sum: number, item: { hours: number; rate: number }) => sum + item.hours * item.rate,
    0
  )
)

const taxAmount = computed(() => Number(((subTotal.value * taxPercent) / 100).toFixed(2)))

const total = computed(() => (subTotal.value + taxAmount.value).toFixed(2))
</script>
