<template>
  <Card :headerTitle="'Stock Market'" :border="true" :padding="false">
    <apexchart
      type="line"
      :height="450"
      :options="widgetsChart15"
      :series="widgetsChartSeries15"
    ></apexchart>
  </Card>
</template>

<script setup lang="ts">
import { widgetsChartSeries15, widgetsChart15 } from '@/core/data/widgets/chart'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
