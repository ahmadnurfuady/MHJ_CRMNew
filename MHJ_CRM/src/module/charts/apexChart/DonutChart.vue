<template>
  <Card :headerTitle="'Donut Chart'" :border="true" :padding="false" :cardBodyClass="'apex-chart'">
    <div id="donut-chart">
      <apexchart
        :height="380"
        type="donut"
        :options="donutChartOptions"
        :series="donutChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { donutChartOptions, donutChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
