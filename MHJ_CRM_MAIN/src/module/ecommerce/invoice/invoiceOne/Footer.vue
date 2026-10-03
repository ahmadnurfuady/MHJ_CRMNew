<template>
  <tr class="footer-row">
    <td>
      <img :src="getImages('email-template/invoice-1/sign.png')" alt="sign" />
      <span></span>
      <span>Authorized Sign</span>
    </td>
    <td>
      <span>
        <a href="#" @click.prevent="handlePrint">
          Print Invoice
          <i class="icon-arrow-right"></i>
        </a>
        <a href="#" download>
          Download
          <i class="icon-arrow-right"></i>
        </a>
      </span>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
function handlePrint() {
  window.print()
}
</script>
