<template>
  <Card
    :headerTitle="'User Visits by Day'"
    :padding="false"
    :header="'total-revenue pb-0'"
    :cardBodyClass="'pt-0 pb-0'"
  >
    <template #header5 v-if="chartDropdown">
      <div class="sales-chart-dropdown">
        <ul class="balance-data">
          <li><span class="circle bg-primary"> </span><span class="f-light ms-1">Chrome</span></li>
          <li>
            <span class="circle bg-primary-1"> </span><span class="f-light ms-1">Firefox</span>
          </li>
          <li>
            <span class="circle bg-primary-2"> </span><span class="f-light ms-1">Safari</span>
          </li>
        </ul>
      </div>
    </template>
    <div class="user-visitsCharts">
      <div id="visitsCharts">
        <apexchart :height="chartHeight" :series="visitsChartSeries" :options="visitsChart" />
      </div>
    </div>
    <template #details>
      <div class="card-footer">
        <div class="common-space">
          <div>
            <router-link :to="routes.Dashboards.Default" class="f-w-600 f-14">
              Most Visited Day</router-link
            >
            <span class="f-light f-w-500 f-14 d-block">Total 59.6k visits on Sunday </span>
          </div>
          <div class="visited-dropdown">
            <SvgIcon icon="arrow-down" svgClass="'mb-0'" />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { visitsChartSeries, visitsChart } from '@/core/data/dashboard/default'
import { routes } from '@/router/routes'
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  chartDropdown?: boolean
  chartHeight?: number
}>()

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
