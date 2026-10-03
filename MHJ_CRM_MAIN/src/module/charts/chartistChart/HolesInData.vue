<template>
  <Card :headerTitle="'Holes in data'" :border="true" :padding="false">
    <chartist
      class="ct-2 flot-chart-container"
      ratio="1"
      type="Line"
      :data="chart12.data"
      :options="chart12.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart12 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
