<template>
  <Card>
    <div class="total-revenue mb-2">
      <span>Total Revenue</span
      ><router-link :to="routes.Dashboards.Default">View Report</router-link>
    </div>
    <h3 class="f-w-600 counter" data-target="97240">₹97,250.89</h3>
    <div class="total-chart">
      <div class="data-grow d-flex gap-2">
        <vue-feather :type="'arrow-up-right'" class="font-primary"></vue-feather>
        <span class="f-w-500">60.00% from last year </span>
      </div>
      <div class="total-revenue-chart">
        <div id="revenue">
          <apexchart :height="chartHeight" :series="revenueChartSeries" :options="revenueChart" />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { revenueChart, revenueChartSeries } from '@/core/data/dashboard/ecommerce'
import { routes } from '@/router/routes'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  chartHeight?: number
}>()
</script>
