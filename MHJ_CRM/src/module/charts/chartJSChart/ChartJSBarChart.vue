<template>
  <Card :headerTitle="'Bar Chart'" :border="true" :padding="false" :cardBodyClass="'chart-block'">
    <Bar :data="barChart.data" :options="barChart.options" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { Bar } from 'vue-chartjs'

import { barChart } from '@/core/data/charts/chatjsChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
