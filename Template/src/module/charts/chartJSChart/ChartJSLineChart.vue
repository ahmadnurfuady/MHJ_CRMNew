<template>
  <Card :headerTitle="'Line Graph'" :border="true" :padding="false" :cardBodyClass="'chart-block'">
    <Line :data="lineChart.data" :options="lineChart.options" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { Line } from 'vue-chartjs'

import { lineChart } from '@/core/data/charts/chatjsChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
