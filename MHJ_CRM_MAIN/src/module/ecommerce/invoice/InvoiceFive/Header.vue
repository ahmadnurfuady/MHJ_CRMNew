<template>
  <table>
    <tbody>
      <tr class="header-row">
        <td><img :src="getImages('logo/logo_dark.png')" alt="logo" /></td>
        <td>
          <ul class="contact-list">
            <li>
              <SvgIcon :icon="'call'" svgClass="stroke-icon" />
              <span>(239) 555-0108</span>
            </li>
            <li class="bordered">
              <SvgIcon :icon="'email-box'" svgClass="stroke-icon email" />
              <span>Riho@themesforest.com</span>
            </li>
            <li>
              <SvgIcon :icon="'web'" svgClass="stroke-icon web" />
              <span>Website: www.Rihothemes.com</span>
            </li>
          </ul>
        </td>
      </tr>
      <tr class="info-section">
        <td>
          <span class="invoice-to-label">Invoice to :</span>
          <span class="customer-name">Brooklyn Simmons</span>
          <span class="customer-address">2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
          <span class="customer-info">Phone : (219) 555-0114</span>
          <span class="customer-info">Email : yourmail@themesforest.com</span>
          <span class="customer-info">Website: www.websites.com</span>
        </td>
        <td>
          <h4 class="invoice-title">INVOICE</h4>
          <span class="bank-transfer-label">Bank Transfer</span>
          <span class="bank-name">Leslie Alexander</span>
          <span class="bank-details">Bank Account : 0981234098765</span>
          <span class="bank-details">Code : LEF098756</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
import { defineAsyncComponent } from 'vue'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
