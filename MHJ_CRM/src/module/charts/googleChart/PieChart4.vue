<template>
  <Card
    :headerTitle="'Pie Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'p-0 chart-block'"
  >
    <template #header4>
      <span>4</span>
    </template>
    <div class="chart-overflow" id="pie-chart4">
      <GChart
        :type="pieChart4.chartType"
        :data="pieChart4.dataTable"
        :options="pieChart4.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { pieChart4 } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
