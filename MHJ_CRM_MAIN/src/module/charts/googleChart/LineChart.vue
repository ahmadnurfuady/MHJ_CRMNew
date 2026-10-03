<template>
  <Card :headerTitle="'Line Chart'" :border="true" :padding="false" :cardBodyClass="'chart-block'">
    <div class="chart-overflow" id="line-chart">
      <GChart
        :type="lineChart.chartType"
        :data="lineChart.dataTable"
        :options="lineChart.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { lineChart } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
