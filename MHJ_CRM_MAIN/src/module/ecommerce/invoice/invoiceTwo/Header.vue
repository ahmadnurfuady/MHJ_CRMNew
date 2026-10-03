<template>
  <!-- Header Section -->
  <tr>
    <td>
      <table class="header-table">
        <tbody>
          <tr>
            <td class="header-left-section">
              <img :src="getImages('logo/logo_dark.png')" alt="logo" />
              <address class="company-info">
                <span class="company-address-text">
                  1982 Harvest Lane New York, NY12210 United State
                </span>
              </address>
            </td>
            <td class="header-right-section">
              <span class="contact-info">Email : Riho@themesforest.com</span>
              <span class="contact-info">Website: www.Rihothemes.com</span>
              <span class="contact-info">Contact No : (316) 555-0116</span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <!-- Invoice Info Section -->
  <tr>
    <td>
      <table class="invoice-info-table">
        <tbody>
          <tr class="invoice-info-row">
            <td class="info-item">
              <span class="info-label">Invoice No.</span>
              <h4 class="info-value">#VL25000365</h4>
            </td>
            <td class="info-item">
              <span class="info-label">Date :</span>
              <h4 class="info-value">09/03/2025</h4>
            </td>
            <td class="info-item">
              <span class="info-label">Payment Status :</span>
              <h4 class="status-badge status-paid">Paid</h4>
            </td>
            <td class="info-item">
              <span class="info-label">Total Amount :</span>
              <h4 class="info-amount">$26,410.00</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
