<template>
  <Card :headerTitle="'Line chart with area'" :border="true" :padding="false">
    <chartist
      class="ct-4 flot-chart-container"
      ratio="1"
      type="Line"
      :data="chart4.data"
      :options="chart4.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart4 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
