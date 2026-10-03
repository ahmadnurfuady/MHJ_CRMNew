<template>
  <Card :headerTitle="'Column Chart'" :border="true" :padding="false">
    <div id="column-chart">
      <apexchart
        :height="350"
        type="bar"
        :options="columnChartOptions"
        :series="columnChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { columnChartOptions, columnChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
