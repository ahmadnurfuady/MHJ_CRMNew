<template>
  <Card
    :headerTitle="'Doughnut Chart'"
    :border="true"
    :padding="false"
    :cardBodyClass="'chart-block chart-vertical-center'"
  >
    <Doughnut :data="doughnutChart.data" :options="doughnutChart.options" id="myDoughnutGraph" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { Doughnut } from 'vue-chartjs'

import { doughnutChart } from '@/core/data/charts/chatjsChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
