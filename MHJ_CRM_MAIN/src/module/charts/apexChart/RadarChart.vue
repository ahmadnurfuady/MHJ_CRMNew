<template>
  <Card :headerTitle="'Radar Chart '" :border="true" :padding="false">
    <div id="radar-chart">
      <apexchart
        :height="330"
        type="radar"
        :options="radarChartOptions"
        :series="radarChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { radarChartOptions, radarChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
