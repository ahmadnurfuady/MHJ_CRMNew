<template>
  <Card :headerTitle="'Gantt Chart'" :border="true" :padding="false" :cardBodyClass="'chart-block'">
    <div class="chart-overflow" id="gantt-chart">
      <GChart
        type="Gantt"
        :data="ganttChartDataTable"
        :options="ganttChartOptions"
        :settings="ganttChartSettings"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import {
  ganttChartDataTable,
  ganttChartOptions,
  ganttChartSettings,
} from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
