<template>
  <table class="invoice-3" id="print-section">
    <tbody>
      <tr>
        <td>
          <InvoiceThreeHeader />
        </td>
      </tr>
      <tr>
        <td>
          <ClientDetails />
        </td>
      </tr>
      <tr>
        <td>
          <span class="divider-line"> </span>
        </td>
      </tr>
      <tr>
        <td>
          <InvoiceThreeTable />
        </td>
      </tr>
      <tr>
        <td>
          <BankTransfer />
        </td>
      </tr>
      <InvoiceThreeFooter />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const InvoiceThreeFooter = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceThree/Footer.vue')
)

const InvoiceThreeTable = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceThree/Table.vue')
)

const InvoiceThreeHeader = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceThree/Header.vue')
)

const ClientDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceThree/ClientDetails.vue')
)

const BankTransfer = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceThree/BankTransfer.vue')
)
</script>
