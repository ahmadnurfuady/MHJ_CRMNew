<template>
  <table class="invoice-5" id="print-section">
    <tbody>
      <tr>
        <td>
          <InvoiceFiveHeader />
        </td>
      </tr>
      <tr>
        <td>
          <InvoiceDetails />
        </td>
      </tr>
      <tr>
        <td>
          <InvoiceFiveTable />
        </td>
      </tr>
      <tr>
        <InvoiceFiveFooter />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const InvoiceFiveHeader = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/InvoiceFive/Header.vue')
)

const InvoiceFiveTable = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/InvoiceFive/Table.vue')
)

const InvoiceFiveFooter = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/InvoiceFive/Footer.vue')
)
const InvoiceDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/InvoiceFive/InvoiceDetails.vue')
)
</script>
