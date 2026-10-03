<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-xl-6 box-col-6">
        <AreaChart1 />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <AreaChart2 />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <ColumnChart1 />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <ColumnChart2 />
      </div>
      <div class="col-sm-12 box-col-12">
        <GanttChart />
      </div>
      <div class="col-sm-12 box-col-12">
        <LineChart />
      </div>
      <div class="col-sm-12 box-col-12">
        <ComboChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-12">
        <GoogleBarChart />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-12">
        <WordTree />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <PieChart1 />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <PieChart2 />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <PieChart3 />
      </div>
      <div class="col-sm-12 col-xl-6 box-col-6">
        <PieChart4 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AreaChart1 = defineAsyncComponent(() => import('@/module/charts/googleChart/AreaChart1.vue'))
const AreaChart2 = defineAsyncComponent(() => import('@/module/charts/googleChart/AreaChart2.vue'))
const ColumnChart1 = defineAsyncComponent(
  () => import('@/module/charts/googleChart/ColumnChart1.vue')
)
const ColumnChart2 = defineAsyncComponent(
  () => import('@/module/charts/googleChart/ColumnChart2.vue')
)
const GanttChart = defineAsyncComponent(() => import('@/module/charts/googleChart/GanttChart.vue'))
const LineChart = defineAsyncComponent(() => import('@/module/charts/googleChart/LineChart.vue'))
const ComboChart = defineAsyncComponent(() => import('@/module/charts/googleChart/ComboChart.vue'))
const GoogleBarChart = defineAsyncComponent(
  () => import('@/module/charts/googleChart/GoogleBarChart.vue')
)
const WordTree = defineAsyncComponent(() => import('@/module/charts/googleChart/WordTree.vue'))
const PieChart1 = defineAsyncComponent(() => import('@/module/charts/googleChart/PieChart1.vue'))
const PieChart2 = defineAsyncComponent(() => import('@/module/charts/googleChart/PieChart2.vue'))
const PieChart3 = defineAsyncComponent(() => import('@/module/charts/googleChart/PieChart3.vue'))
const PieChart4 = defineAsyncComponent(() => import('@/module/charts/googleChart/PieChart4.vue'))
</script>
