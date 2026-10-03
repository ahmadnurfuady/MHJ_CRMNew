<template>
  <Card :headerTitle="'3d Bubble Chart'" :border="true" :padding="false">
    <div id="chart-bubble">
      <apexchart
        :height="350"
        type="bubble"
        :options="bubbleChartOptions"
        :series="bubbleChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { bubbleChartOptions, bubbleChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
