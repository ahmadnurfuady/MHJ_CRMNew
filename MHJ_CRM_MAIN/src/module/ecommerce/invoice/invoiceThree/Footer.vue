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
          <SolarIcon name="icon-arrow-right" />
        </a>
        <a class="btn-download" href="#" download>
          Download
          <SolarIcon name="icon-arrow-right" />
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
