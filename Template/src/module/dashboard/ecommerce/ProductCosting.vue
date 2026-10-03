<template>
  <Card>
    <ul v-for="(item, index) in productCostingData" :key="index" class="product-costing">
      <li class="product-cost">
        <div :class="['product-icon', item.bgClass]">
          <SvgIcon :icon="item.icon" />
        </div>
        <div>
          <span class="f-w-500 f-14 mb-0">{{ item.title }}</span>
          <h2 class="f-w-600">{{ item.amount }}</h2>
        </div>
      </li>
      <li>
        <span class="f-light f-14 f-w-500">{{ item.subtitle }}</span>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { productCostingData } from '@/core/data/dashboard/ecommerce'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
