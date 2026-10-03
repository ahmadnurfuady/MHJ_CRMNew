<template>
  <tr>
    <td>
      <table class="logo-wrapper">
        <tbody>
          <tr>
            <td>
              <img :src="getImages('logo/logo_dark.png')" alt="logo" />
              <span>202-555-0258</span>
            </td>
            <td class="address">
              <span>1982 Harvest Lane New York, NY 12210 United State</span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>

  <tr>
    <td>
      <img
        class="banner-image"
        :src="getImages('email-template/invoice-1/1.png')"
        alt="background"
      />
    </td>
  </tr>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
