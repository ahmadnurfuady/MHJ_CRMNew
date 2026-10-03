<template>
  <div>
    <table class="product-page-width">
      <tbody>
        <tr v-for="(item, index) in details" :key="index">
          <td><b v-html="item.title"></b></td>
          <td :class="item.class">{{ item.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { details } from '@/core/data/ecommerce'
</script>
