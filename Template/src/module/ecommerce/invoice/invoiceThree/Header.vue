<template>
  <table class="invoice-header-table">
    <tbody>
      <tr>
        <td class="logo-section">
          <img :src="getImages('logo/logo_dark.png')" alt="logo" />
          <address class="company-address">
            <span>1982 Harvest Lane New York, NY12210 United State</span>
          </address>
        </td>
        <td class="invoice-info">
          <span class="invoice-label">Invoice</span>
          <span class="receipt-number">Receipt #1923195</span>
          <span class="invoice-date">May 02, 2025</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
