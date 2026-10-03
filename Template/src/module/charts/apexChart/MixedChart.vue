<template>
  <Card :headerTitle="'Mixed Chart'" :border="true" :padding="false">
    <div id="mixed-chart">
      <apexchart
        :height="350"
        type="candlestick"
        :options="mixChartOption"
        :series="mixChartSeriesSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { mixChartOption, mixChartSeriesSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
