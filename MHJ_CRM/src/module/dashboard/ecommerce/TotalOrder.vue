<template>
  <Card>
    <div class="total-revenue mb-2">
      <span>Total Order</span><router-link :to="routes.Dashboards.Default">View Report</router-link>
    </div>
    <h3 class="f-w-600 counter" data-target="35452">35,452</h3>
    <div class="total-chart">
      <div class="data-grow d-flex gap-2 arrow-down-left">
        <vue-feather :type="'arrow-down-left'" class="font-secondary"></vue-feather>
        <span class="f-w-500">15.00% from last week</span>
      </div>
      <div class="total-order">
        <div id="totalOrder">
          <apexchart
            :height="chartHeight"
            :series="totalOrderChartSeries"
            :options="totalOrderChart"
          />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { totalOrderChart, totalOrderChartSeries } from '@/core/data/dashboard/ecommerce'
import { routes } from '@/router/routes'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  chartHeight?: number
}>()
</script>
