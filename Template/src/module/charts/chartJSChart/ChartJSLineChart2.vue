<template>
  <Card :headerTitle="'Line Chart'" :border="true" :padding="false" :cardBodyClass="'chart-block'">
    <Line :data="lineChartOptions.data" :options="lineChartOptions.options" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { Line } from 'vue-chartjs'

import { lineChartOptions } from '@/core/data/charts/chatjsChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
