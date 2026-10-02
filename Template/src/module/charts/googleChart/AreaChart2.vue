<template>
  <Card
    :headerTitle="'Area Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'p-0 chart-block'"
  >
    <template #header4>
      <span>2</span>
    </template>
    <div class="chart-overflow" id="area-chart2">
      <GChart
        :type="areaChart2.chartType"
        :data="areaChart2.dataTable"
        :options="areaChart2.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { areaChart2 } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
