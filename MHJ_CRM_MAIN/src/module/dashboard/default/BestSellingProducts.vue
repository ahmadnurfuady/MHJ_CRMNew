<template>
  <Card
    :headerTitle="'Best Selling Products'"
    :padding="false"
    :header="'total-revenue'"
    :cardBodyClass="'pt-0'"
  >
    <div class="selling-product">
      <div class="apache-container">
        <v-chart :option="EChartOptions" style="height: 360px; width: 100%" />
      </div>

      <div class="sales-chart-dropdown">
        <ul class="balance-data">
          <li>
            <span class="circle bg-primary"></span>
            <span class="f-light ms-1">Digital</span>
          </li>
          <li>
            <span class="circle bg-warning"></span>
            <span class="f-light ms-1">Clothes</span>
          </li>
          <li>
            <span class="circle bg-secondary"></span>
            <span class="f-light ms-1">Electric</span>
          </li>
          <li>
            <span class="circle bg-light"></span>
            <span class="f-light ms-1">Footwear</span>
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { EChartOptions } from '@/core/data/dashboard/default'
import VueECharts from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { PolarComponent } from 'echarts/components'

use([CanvasRenderer, BarChart, PolarComponent])

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const vChart = VueECharts
</script>
