<template>
  <Card :headerTitle="'Advanced SMIL Animations'" :border="true" :padding="false">
    <chartist
      class="ct-6 flot-chart-container"
      ratio="1"
      type="Line"
      :data="chart8.data"
      :options="chart8.options"
    >
    </chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart8 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
