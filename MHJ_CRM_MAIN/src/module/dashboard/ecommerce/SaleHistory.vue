<template>
  <Card :header="'total-revenue '" :padding="true" :headerTitle="'Sale History'">
    <template #header5>
      <router-link :to="routes.Dashboards.Default">View All </router-link>
    </template>
    <ul>
      <li v-for="item in saleHistoryData" :key="item.id" class="sale-history-card">
        <div class="history-price">
          <router-link :to="routes.Ecommerce.Category" class="f-w-500 f-14 mb-0">{{
            item.title
          }}</router-link>
          <span class="mb-0 txt-primary f-w-600 f-16">{{ item.price }}</span>
        </div>
        <div class="state-time">
          <span class="f-w-500 f-14 f-light mb-0">{{ item.country }}</span>
          <span class="f-w-400 f-14 f-light">{{ item.timeAgo }}</span>
        </div>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { saleHistoryData } from '@/core/data/dashboard/ecommerce'
import { routes } from '@/router/routes'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
