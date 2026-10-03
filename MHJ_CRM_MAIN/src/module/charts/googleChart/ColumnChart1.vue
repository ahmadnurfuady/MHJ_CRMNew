<template>
  <Card
    :headerTitle="'Column Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'chart-block'"
  >
    <template #header4>
      <span>1</span>
    </template>
    <div class="chart-overflow" id="column-chart2">
      <GChart
        :type="columnChart1.chartType"
        :data="columnChart1.dataTable"
        :options="columnChart1.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { columnChart1 } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
