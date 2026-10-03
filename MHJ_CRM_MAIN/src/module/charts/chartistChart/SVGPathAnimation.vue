<template>
  <Card :headerTitle="'SVG Path animation'" :border="true" :padding="false">
    <chartist
      class="ct-7 flot-chart-container"
      ratio="1"
      type="Line"
      :data="chart2.data"
      :options="chart2.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart2 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
