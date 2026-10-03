<template>
  <table class="order-details">
    <thead>
      <tr>
        <th><span>Description</span></th>
        <th><span>Rate</span></th>
        <th><span>Qty</span></th>
        <th><span>Line Total</span></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in items" :key="i">
        <td>
          <span :class="item.color"></span>
          <span>{{ item.name }}</span>
        </td>
        <td>
          <span>{{ format(item.rate) }}</span>
        </td>
        <td>
          <span>{{ item.qty }}</span>
        </td>
        <td>
          <span>{{ format(item.rate * item.qty) }}</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td><span>Subtotal</span></td>
        <td>
          <span>{{ format(subtotal) }}</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td><span>Tax(5%)</span></td>
        <td>
          <span>{{ format(tax) }}</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td><span>Amount Due (USD)</span></td>
        <td>
          <span> {{ format(total) }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const items = [
  { name: 'Project', rate: 4000, qty: 1, color: 'dot-primary' },
  { name: 'Creative Design', rate: 8000, qty: 2, color: 'dot-red' },
  { name: 'Web Development', rate: 2000, qty: 2, color: 'dot-orange' },
  { name: 'Graphics Design', rate: 2000, qty: 1, color: 'dot-green' },
]

const subtotal = items.reduce((sum, item) => sum + item.rate * item.qty, 0)
const tax = subtotal * 0.05
const total = subtotal + tax

function format(num: number) {
  return '$' + num.toLocaleString(undefined, { minimumFractionDigits: 2 })
}
</script>
