<template>
  <Card :headerTitle="'Candlestick Chart'" :border="true" :padding="false">
    <div id="candlestick">
      <apexchart
        :height="350"
        type="candlestick"
        :options="candleStickOptions"
        :series="candleStickSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { candleStickOptions, candleStickSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
