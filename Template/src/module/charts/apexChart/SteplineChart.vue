<template>
  <Card :headerTitle="'Stepline Chart'" :border="true" :padding="false">
    <div id="stepline">
      <apexchart
        :height="350"
        type="line"
        :options="stepLineChartOptions"
        :series="stepLineChartSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { stepLineChartOptions, stepLineChartSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
