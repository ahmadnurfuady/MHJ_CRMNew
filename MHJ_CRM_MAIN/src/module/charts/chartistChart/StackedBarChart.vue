<template>
  <Card :headerTitle="'Stacked bar chart'" :border="true" :padding="false">
    <chartist
      class="ct-10 flot-chart-container"
      ratio="1"
      type="Bar"
      :data="chart7.data"
      :options="chart7.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart7 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
