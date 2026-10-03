<template>
  <Card
    :headerTitle="'Pie Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'p-0 chart-block'"
  >
    <template #header4>
      <span>1</span>
    </template>
    <div class="chart-overflow" id="pie-chart1">
      <GChart
        :type="pieChart1.chartType"
        :data="pieChart1.dataTable"
        :options="pieChart1.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { pieChart1 } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
