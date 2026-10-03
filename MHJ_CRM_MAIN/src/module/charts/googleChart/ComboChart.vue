<template>
  <Card :headerTitle="'Combo Chart'" :border="true" :padding="false" :cardBodyClass="'chart-block'">
    <div class="chart-overflow" id="combo-chart">
      <GChart
        :type="comboChart.chartType"
        :data="comboChart.dataTable"
        :options="comboChart.options"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { comboChart } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
