<template>
  <Card :headerTitle="'Word Tree'" :border="true" :padding="false" :cardBodyClass="'chart-block'">
    <div class="word-tree" id="wordtree_basic">
      <GChart
        :type="wordTreeChart.chartType"
        :data="wordTreeChart.dataTable"
        :options="wordTreeChart.options"
        :settings="wordTreeChart.settings"
      ></GChart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { wordTreeChart } from '@/core/data/charts/googleChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
