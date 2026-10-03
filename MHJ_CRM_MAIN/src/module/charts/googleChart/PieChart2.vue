<template>
  <Card
    :headerTitle="'Pie Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'p-0 chart-block'"
  >
    <template #header4>
      <span>2</span>
    </template>
    <div class="chart-overflow" id="pie-chart2">
      <GChart
        :type="pieChart2.chartType"
        :data="pieChart2.dataTable"
        :options="pieChart2.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { pieChart2 } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
