<template>
  <table class="items-table">
    <thead>
      <tr class="table-header-row">
        <th class="description-header">
          <span>Description</span>
        </th>
        <th class="qty-header">
          <span>Qty</span>
        </th>
        <th class="price-header">
          <span>Price</span>
        </th>
        <th class="subtotal-header">
          <span>Subtotal</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in invoice3Products" :key="index">
        <td class="item-description">
          <span class="color-bar" :class="item.color"></span>
          <ul class="item-list">
            <li>
              <h4 class="item-name">{{ item.title }}</h4>
              <span class="item-license"> {{ item.license }}</span>
            </li>
          </ul>
        </td>
        <td class="item-qty">
          <span>{{ item.qty }}</span>
        </td>
        <td class="item-price">
          <span>{{ item.price }}</span>
        </td>
        <td class="item-subtotal">
          <span>${{ item.qty * item.price }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { invoice3Products } from '@/core/data/ecommerce'
</script>
