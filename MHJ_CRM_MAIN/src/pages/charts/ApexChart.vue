<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-xl-6 box-col-6">
        <BasicAreaChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <AreaSpalineChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <BarChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <ColumnChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-12">
        <BubbleChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <SteplineChart />
      </div>
      <div class="col-sm-12 col-xl-12 box-col-6">
        <ColumnAnnotation />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <PieChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <DonutChart />
      </div>
      <div class="col-sm-12 col-xl-12 box-col-12">
        <MixedChart />
      </div>
      <div class="col-sm-12 col-xl-12 box-col-12">
        <CandlestickChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <RadarChart />
      </div>

      <div class="col-sm-12 col-xl-6 box-col-6">
        <RadialBarChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BasicAreaChart = defineAsyncComponent(
  () => import('@/module/charts/apexChart/BasicAreaChart.vue')
)
const AreaSpalineChart = defineAsyncComponent(
  () => import('@/module/charts/apexChart/AreaSpalineChart.vue')
)
const BarChart = defineAsyncComponent(() => import('@/module/charts/apexChart/BarChart.vue'))
const ColumnChart = defineAsyncComponent(() => import('@/module/charts/apexChart/ColumnChart.vue'))
const BubbleChart = defineAsyncComponent(() => import('@/module/charts/apexChart/BubbleChart.vue'))
const SteplineChart = defineAsyncComponent(
  () => import('@/module/charts/apexChart/SteplineChart.vue')
)
const ColumnAnnotation = defineAsyncComponent(
  () => import('@/module/charts/apexChart/ColumnAnnotation.vue')
)
const PieChart = defineAsyncComponent(() => import('@/module/charts/apexChart/PieChart.vue'))
const DonutChart = defineAsyncComponent(() => import('@/module/charts/apexChart/DonutChart.vue'))
const MixedChart = defineAsyncComponent(() => import('@/module/charts/apexChart/MixedChart.vue'))
const CandlestickChart = defineAsyncComponent(
  () => import('@/module/charts/apexChart/CandlestickChart.vue')
)
const RadarChart = defineAsyncComponent(() => import('@/module/charts/apexChart/RadarChart.vue'))
const RadialBarChart = defineAsyncComponent(
  () => import('@/module/charts/apexChart/RadialBarChart.vue')
)
</script>
