<template>
  <Card
    :headerTitle="'Todays Work'"
    :padding="false"
    :header="'total-revenue'"
    :cardBodyClass="'pt-0'"
  >
    <template #header5>
      <router-link :to="routes.Ecommerce.Products.ProductGrid">View All </router-link>
    </template>
    <div class="today-work-table table-responsive custom-scrollbar">
      <table class="today-working-table w-100">
        <tbody>
          <tr v-for="(item, index) in todayWorkList" :key="index">
            <td>
              <span class="f-w-500 f-light d-block f-12 mb-1">
                {{ item.task }}
              </span>
              <router-link :to="routes.Ecommerce.Products.ProductGrid" class="f-w-500 f-14">
                {{ item.title }}</router-link
              >
            </td>
            <td>
              <span class="f-w-500 f-light d-block f-12 mb-1">
                {{ item.assignedLabel }}
              </span>
              <router-link :to="routes.Ecommerce.Products.ProductGrid" class="f-w-500 f-14">
                {{ item.assignedTo }}</router-link
              >
            </td>
            <td>
              <span class="f-w-500 f-light d-block f-12 mb-1">
                {{ item.daysLeftLabel }}
              </span>
              <router-link :to="routes.Ecommerce.Products.ProductGrid" class="f-w-500 f-14">
                {{ item.daysLeft }}</router-link
              >
            </td>

            <td class="text-end">
              <div :class="item.badgeClass + ' product-sub badge rounded-pill'">
                <span>{{ item.priority }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { todayWorkList } from '@/core/data/dashboard/project'
import { routes } from '@/router/routes'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
