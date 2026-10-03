<template>
  <table class="header-section">
    <tbody>
      <tr class="header-content">
        <td>
          <h4 class="invoice-heading">INVOICE</h4>
          <ul class="invoice-to-list">
            <li>
              <span class="label-text">Invoice to :</span>
            </li>
            <li>
              <span class="customer-name">Brooklyn Simmons</span>
              <span class="customer-address">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
              <span class="customer-info">Phone : (219) 555-0114</span>
              <span class="customer-info">Email : yourmail@themesforest.com</span>
              <span class="customer-info">Website: www.websites.com</span>
            </li>
          </ul>
        </td>
        <td>
          <img class="company-logo" :src="getImages('logo/logo_dark.png')" alt="logo" />
          <span class="company-info"
            >2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span
          >
          <span class="company-info">Phone : (239) 555-0108</span>
          <span class="company-info">Email : Riho@themesforest.com</span>
          <span class="company-info">Website: www.Rihothemes.com</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
