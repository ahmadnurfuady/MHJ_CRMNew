<template>
  <Card :headerTitle="'Order Status'" :border="true" :padding="false">
    <div class="chart-container">
      <div id="line-chart">
        <apexchart
          type="line"
          :height="400"
          :options="widgetsChart17"
          :series="widgetsChartSeries17"
        ></apexchart>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { widgetsChart17, widgetsChartSeries17 } from '@/core/data/widgets/chart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
