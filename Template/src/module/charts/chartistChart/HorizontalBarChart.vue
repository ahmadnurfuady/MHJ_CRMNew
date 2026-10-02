<template>
  <Card :headerTitle="'Horizontal bar chart'" :border="true" :padding="false">
    <chartist
      class="ct-11 flot-chart-container"
      ratio="1"
      type="Bar"
      :data="chart11.data"
      :options="chart11.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart11 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
