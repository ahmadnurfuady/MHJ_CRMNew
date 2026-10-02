<template>
  <Card :headerTitle="'Simple line chart'" :border="true" :padding="false">
    <chartist
      class="ct-1 flot-chart-container"
      ratio="1"
      type="Line"
      :data="chart1.data"
      :options="chart1.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart1 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
