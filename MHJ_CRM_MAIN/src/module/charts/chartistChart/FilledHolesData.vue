<template>
  <Card :headerTitle="'Filled holes in data'" :border="true" :padding="false">
    <chartist
      class="ct-3 flot-chart-container"
      ratio="1"
      type="Line"
      :data="chart5.data"
      :options="chart5.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart5 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
