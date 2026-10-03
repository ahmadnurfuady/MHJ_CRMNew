<template>
  <Card
    :headerTitle="'Polar Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'chart-block chart-vertical-center'"
  >
    <PolarArea :data="polarChartData" :options="polarChartOptions" id="myPolarGraph" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { PolarArea } from 'vue-chartjs'

import { polarChartData, polarChartOptions } from '@/core/data/charts/chatjsChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
