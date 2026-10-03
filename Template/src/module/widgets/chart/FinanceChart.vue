<template>
  <Card :headerTitle="'Finance'" :border="true" :padding="false">
    <div class="chart-container column-container">
      <div id="column-chart">
        <apexchart
          type="line"
          :height="400"
          :options="widgetsChart16"
          :series="widgetsChartSeries16"
        ></apexchart>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { widgetsChart16, widgetsChartSeries16 } from '@/core/data/widgets/chart'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
