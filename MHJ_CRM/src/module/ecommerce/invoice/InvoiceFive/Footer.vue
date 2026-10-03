<template>
  <tr class="footer-section">
    <td>
      <img :src="getImages('email-template/invoice-3/sign.png')" alt="sign" />
      <span class="signer-name">Laurine T. Ebbert</span>
      <span class="signer-designation">( Designer )</span>
    </td>
    <td>
      <span class="button-group">
        <a class="btn-primary" @click="handlePrint">
          Print Invoice
          <i class="icon-arrow-right btn-icon"></i>
        </a>
        <a class="btn-secondary" href="#" download>
          Download
          <i class="icon-arrow-right btn-icon"></i>
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
