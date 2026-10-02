<template>
  <Card :headerTitle="'Radial Bar Chart'" :border="true" :padding="false">
    <div id="circle-chart">
      <apexchart
        :height="350"
        type="radialBar"
        :options="radialBarChartOptions"
        :series="radialBarChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { radialBarChartOptions, radialBarChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
