<template>
  <Card :headerTitle="'Column Chart'" :border="true" :padding="false">
    <div id="annotation-chart">
      <apexchart
        :height="350"
        type="line"
        :options="annotationChartOptions"
        :series="annotationChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { annotationChartOptions, annotationChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
