<template>
  <table class="invoice-4" id="print-section">
    <tbody>
      <tr>
        <td>
          <InvoiceFourHeader />
        </td>
      </tr>
      <tr>
        <td>
          <BillingDetails />
        </td>
      </tr>
      <tr>
        <td>
          <InvoiceFourTable />
        </td>
      </tr>
      <tr>
        <td class="divider-line"></td>
      </tr>
      <tr>
        <td>
          <BankTransfer />
        </td>
      </tr>
      <tr class="footer-section">
        <InvoiceFourFooter />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BillingDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceFour/BillingDetails.vue')
)

const InvoiceFourTable = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceFour/Table.vue')
)

const InvoiceFourHeader = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceFour/Header.vue')
)

const InvoiceFourFooter = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceFour/Footer.vue')
)
const BankTransfer = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceFour/BankTransfer.vue')
)
</script>
