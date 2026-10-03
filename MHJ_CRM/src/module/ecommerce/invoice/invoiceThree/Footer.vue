<template>
  <tr>
    <td>
      <span class="divider-line bottom-divider"></span>
    </td>
  </tr>
  <tr>
    <td>
      <span class="action-buttons">
        <a class="btn-print" @click="handlePrint()">
          Print Invoice
          <i class="icon-arrow-right"></i>
        </a>
        <a class="btn-download" href="#" download>
          Download
          <i class="icon-arrow-right"></i>
        </a>
      </span>
    </td>
  </tr>
</template>
<script setup lang="ts">
function handlePrint() {
  window.print()
}
</script>
