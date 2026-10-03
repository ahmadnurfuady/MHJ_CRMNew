<template>
  <table class="items-table">
    <thead>
      <tr class="table-header">
        <th>
          <span class="header-text">No.</span>
        </th>
        <th class="text-left">
          <span class="header-text">Description</span>
        </th>
        <th>
          <span class="header-text">Unite Price</span>
        </th>
        <th>
          <span class="header-text">Quantity</span>
        </th>
        <th>
          <span class="header-text">Subtotal</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="item-row-number">
          <span class="item-number">1</span>
        </td>
        <td class="item-description">
          <h4 class="item-title">Proposal & Brochure Design</h4>
          <span class="item-license">Regular License</span>
        </td>
        <td class="item-price">
          <span class="price-text">$300.00</span>
        </td>
        <td class="item-quantity">
          <span class="quantity-text">1</span>
        </td>
        <td class="item-subtotal">
          <span class="subtotal-text">$300.00</span>
        </td>
      </tr>
      <tr>
        <td class="item-row-number">
          <span class="item-number">2</span>
        </td>
        <td class="item-description">
          <h4 class="item-title">Web design and development</h4>
          <span class="item-license">Regular License</span>
        </td>
        <td class="item-price">
          <span class="price-text">$400.00</span>
        </td>
        <td class="item-quantity">
          <span class="quantity-text">2</span>
        </td>
        <td class="item-subtotal">
          <span class="subtotal-text">$800.00</span>
        </td>
      </tr>
      <tr>
        <td class="item-row-number">
          <span class="item-number">3</span>
        </td>
        <td class="item-description">
          <h4 class="item-title">Logo & Brand design</h4>
          <span class="item-license">Regular License</span>
        </td>
        <td class="item-price">
          <span class="price-text">$240.00</span>
        </td>
        <td class="item-quantity">
          <span class="quantity-text">2</span>
        </td>
        <td class="item-subtotal">
          <span class="subtotal-text">$480.00</span>
        </td>
      </tr>
      <tr>
        <td class="item-row-number">
          <span class="item-number">4</span>
        </td>
        <td class="item-description">
          <h4 class="item-title">Stationary Design</h4>
          <span class="item-license">Regular License</span>
        </td>
        <td class="item-price">
          <span class="price-text">$100.00</span>
        </td>
        <td class="item-quantity">
          <span class="quantity-text">1</span>
        </td>
        <td class="item-subtotal">
          <span class="subtotal-text">$100.00</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="calc-label">
          <span class="calc-text">Subtotal </span>
        </td>
        <td class="calc-value">
          <span class="calc-amount">$1680.00</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="calc-label no-top-padding">
          <span class="calc-text">VAT / Tax 15% </span>
        </td>
        <td class="calc-value no-top-padding">
          <span class="calc-amount">$50.00</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="calc-label no-top-padding">
          <span class="calc-text">Discount </span>
        </td>
        <td class="calc-value no-top-padding">
          <span class="calc-amount">${{ total }}</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="calc-label no-top-padding">
          <span class="calc-text">Total Due </span>
        </td>
        <td class="calc-value total">
          <span class="total-amount">$1700.00</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { invoiceItems } from "@/core/data/ecommerce";

const taxRate = 15;
const discount = 30;

const subtotal = invoiceItems.reduce((sum, item) => sum + item.price * item.qty, 0);
const tax = (subtotal * taxRate) / 100;
const total = subtotal + tax - discount;
</script>
