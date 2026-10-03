<template>
  <Card
    :headerTitle="'Column Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'chart-block'"
  >
    <template #header4>
      <span>2</span>
    </template>
    <div class="chart-overflow" id="column-chart2">
      <GChart
        :type="columnChart2.chartType"
        :data="columnChart2.dataTable"
        :options="columnChart2.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { columnChart2 } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
