<template>
  <Card
    :headerTitle="'Pie Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'p-0 chart-block'"
  >
    <template #header4>
      <span>3</span>
    </template>
    <div class="chart-overflow" id="pie-chart3">
      <GChart
        :type="pieChart3.chartType"
        :data="pieChart3.dataTable"
        :options="pieChart3.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { pieChart3 } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
