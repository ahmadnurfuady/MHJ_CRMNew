<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 col-md-12 box-col-12">
        <ChartJSBarChart />
      </div>
      <div class="col-xl-6 col-md-12 box-col-12">
        <ChartJSLineChart />
      </div>
      <div class="col-xl-6 col-md-12 box-col-12">
        <ChartJSRadarChart />
      </div>
      <div class="col-xl-6 col-md-12 box-col-12">
        <ChartJSLineChart2 />
      </div>
      <div class="col-xl-6 col-md-12 box-col-12">
        <ChartJSDoughnutChart />
      </div>
      <div class="col-xl-6 col-md-12 box-col-12">
        <ChartJSPolarChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ChartJSBarChart = defineAsyncComponent(
  () => import('@/module/charts/chartJSChart/ChartJSBarChart.vue')
)
const ChartJSLineChart = defineAsyncComponent(
  () => import('@/module/charts/chartJSChart/ChartJSLineChart.vue')
)
const ChartJSRadarChart = defineAsyncComponent(
  () => import('@/module/charts/chartJSChart/ChartJSRadarChart.vue')
)
const ChartJSLineChart2 = defineAsyncComponent(
  () => import('@/module/charts/chartJSChart/ChartJSLineChart2.vue')
)
const ChartJSDoughnutChart = defineAsyncComponent(
  () => import('@/module/charts/chartJSChart/ChartJSDoughnutChart.vue')
)
const ChartJSPolarChart = defineAsyncComponent(
  () => import('@/module/charts/chartJSChart/ChartJSPolarChart.vue')
)
</script>
