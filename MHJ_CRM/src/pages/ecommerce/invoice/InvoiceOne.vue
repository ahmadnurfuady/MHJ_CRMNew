<template>
  <table class="table-wrapper invoice-1">
    <tbody>
      <InvoiceOneHeader />
      <tr>
        <td>
          <BillingDetails />
        </td>
      </tr>
      <tr>
        <td>
          <InvoiceOneTable />
        </td>
      </tr>
    </tbody>
    <tr>
      <InvoiceOneFooter />
    </tr>
  </table>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const InvoiceOneHeader = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceOne/Header.vue')
)
const InvoiceOneTable = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceOne/Table.vue')
)
const InvoiceOneFooter = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceOne/Footer.vue')
)
const BillingDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceOne/BillingDetails.vue')
)
</script>
