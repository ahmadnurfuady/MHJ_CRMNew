<template>
  <td>
    <img :src="getImages('email-template/invoice-3/sign.png')" alt="sign" />
    <span class="signature-name">Laurine T. Ebbert</span>
    <span class="signature-role">( Designer )</span>
  </td>
  <td>
    <span class="action-buttons">
      <a class="btn-print" @click="handlePrint">
        Print Invoice
        <i class="icon-arrow-right"></i>
      </a>
      <a class="btn-download" href="#" download>
        Download
        <i class="icon-arrow-right"></i>
      </a>
    </span>
  </td>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
function handlePrint() {
  window.print()
}
</script>
