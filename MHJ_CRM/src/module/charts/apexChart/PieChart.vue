<template>
  <Card :headerTitle="'Pie Chart'" :border="true" :padding="false" :cardBodyClass="'apex-chart'">
    <div id="pie-chart">
      <apexchart
        :height="380"
        type="pie"
        :options="pieChartOptions"
        :series="pieChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { pieChartOptions, pieChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
