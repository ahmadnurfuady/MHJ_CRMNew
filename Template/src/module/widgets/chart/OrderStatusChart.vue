<template>
  <Card
    :headerTitle="'Order Status'"
    :border="true"
    :padding="false"
    :dropdownType="'classic'"
    :options="cardToggleOption"
  >
    <div class="chart-container progress-chart">
      <div id="progress1" v-for="(charts, index) in orderStatusChart" :key="index">
        <apexchart
          :height="70"
          :type="'bar'"
          :options="charts.chartDetails"
          :series="charts.chartSeries"
        >
        </apexchart>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { orderStatusChart } from '@/core/data/widgets/chart'
import { dayFilterOptions } from '@/core/data/common'

const cardToggleOption = dayFilterOptions
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
