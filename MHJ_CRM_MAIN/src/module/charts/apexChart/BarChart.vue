<template>
  <Card :headerTitle="'Bar chart'" :border="true" :padding="false">
    <div id="basic-bar">
      <apexchart
        :height="350"
        type="bar"
        :options="barChartOptions"
        :series="barChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { barChartOptions, barChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
