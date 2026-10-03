<template>
  <Card
    :headerTitle="'Radar Graph'"
    :border="true"
    :padding="false"
    :cardBodyClass="'chart-block main-radar-graph'"
  >
    <Radar :data="radarGraphOptions.data" :options="radarGraphOptions.options" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { Radar } from 'vue-chartjs'

import { radarGraphOptions } from '@/core/data/charts/chatjsChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
