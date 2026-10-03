<template>
  <Card :headerTitle="'bar-chart2'" :border="true" :padding="false" :cardBodyClass="'chart-block'">
    <div id="bar-chart2">
      <GChart
        :type="barChart.chartType"
        :data="barChart.dataTable"
        :options="barChart.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { barChart } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
