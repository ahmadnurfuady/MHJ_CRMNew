<template>
  <Card
    :headerTitle="'Area Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'p-0 chart-block'"
  >
    <template #header4>
      <span>1</span>
    </template>
    <div class="chart-overflow" id="area-chart1">
      <GChart
        :type="areaChart1.chartType"
        :data="areaChart1.dataTable"
        :options="areaChart1.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { areaChart1 } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
