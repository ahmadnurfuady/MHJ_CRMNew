<template>
  <table class="products-table">
    <thead>
      <tr class="products-header">
        <th class="th-left">
          <span class="th-text">Products</span>
        </th>
        <th class="th-left">
          <span class="th-text">Quantity</span>
        </th>
        <th class="th-left">
          <span class="th-text">Price</span>
        </th>
        <th class="th-left">
          <span class="th-text">Unit</span>
        </th>
        <th class="th-left">
          <span class="th-text">Vat %</span>
        </th>
        <th class="th-left">
          <span class="th-text">Total</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="product-row" v-for="(item, i) in invoiceProducts" :key="i">
        <td class="product-cell">
          <span class="product-image-wrapper">
            <img :src="getImages(item.img)" :alt="item.title" style="height: 29px" />
          </span>

          <div>
            <h4 style="font-weight: 400; margin: 4px 0px; font-size: 18px">
              {{ item.title }}
            </h4>
            <span style="color: #52526c; opacity: 0.8; font-size: 14px">
              {{ item.code }}
            </span>
          </div>
        </td>
        <td class="product-data">
          <span class="data-text">{{ item.qty }}</span>
        </td>
        <td class="product-data product-sale">
          <span class="data-text">${{ item.price }}</span>
        </td>
        <td class="product-data product-unit">
          <span class="data-text">{{ item.unit }}</span>
        </td>
        <td class="product-data product-vat">
          <span class="data-text">{{ item.vat }}</span>
        </td>
        <td class="product-data">
          <span class="data-text">{{ item.price * item.qty }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
import { invoiceProducts } from '@/core/data/ecommerce'

function rowBackground(i: number) {
  return i % 2 === 0 ? 'background-color: rgba(245, 246, 249, 1);' : ''
}
</script>
