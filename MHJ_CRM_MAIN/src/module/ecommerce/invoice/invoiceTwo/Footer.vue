<template>
  <!-- Total Section -->
  <tr>
    <td>
      <table class="totals-table">
        <tfoot>
          <tr>
            <td class="total-label total-first">
              <span class="label-text">Subtotal</span>
              <span class="label-colon">:</span>
            </td>
            <td class="total-value total-first">
              <span class="value-text">$26,400.00</span>
            </td>
          </tr>
          <tr>
            <td class="total-label">
              <span class="label-text">VAT (0%)</span>
              <span class="label-colon">:</span>
            </td>
            <td class="total-value">
              <span class="value-text">$0.00</span>
            </td>
          </tr>
          <tr>
            <td class="total-label">
              <span class="label-text">Shipping Rate</span>
              <span class="label-colon">:</span>
            </td>
            <td class="total-value">
              <span class="value-text">$10.00</span>
            </td>
          </tr>
          <tr>
            <td class="total-label total-final">
              <span class="final-label">Total Amount</span>
              <span class="label-colon">:</span>
            </td>
            <td class="total-value total-final-value">
              <span class="final-amount">$26,410.00</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <span class="bottom-divider"></span>
    </td>
  </tr>
  <tr>
    <td>
      <span class="buttons-wrapper">
        <a class="btn btn-print" @click="handlePrint()">
          Print Invoice
          <SolarIcon name="icon-arrow-right" class="btn-icon" />
        </a>
        <a class="btn btn-download" href="#" download>
          Download
          <SolarIcon name="icon-arrow-right" class="btn-icon" />
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
