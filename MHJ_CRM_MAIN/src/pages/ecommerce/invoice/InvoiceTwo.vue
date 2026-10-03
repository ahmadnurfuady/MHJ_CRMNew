<template>
  <table class="invoice-2" id="print-section">
    <tbody>
      <InvoiceTwoHeader />
      <tr>
        <td>
          <BillingDetails />
        </td>
      </tr>
      <tr>
        <td>
          <InvoiceTwoTable />
        </td>
      </tr>
      <InvoiceTwoFooter />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const InvoiceTwoTable = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceTwo/Table.vue')
)
const InvoiceTwoFooter = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceTwo/Footer.vue')
)
const InvoiceTwoHeader = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceTwo/Header.vue')
)
const BillingDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceTwo/BillingDetails.vue')
)
</script>
