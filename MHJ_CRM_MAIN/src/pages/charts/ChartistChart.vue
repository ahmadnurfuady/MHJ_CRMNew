<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <AdvancedAnimations />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <SVGPathAnimation />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <DonutSvgAnimate />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <BiPolarLineChart />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <LineChartWithArea />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <BiPolarBarChart />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <StackedBarChart />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <HorizontalBarChart />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <ResponsiveConfiguration />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <SimpleLineChart />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <HolesInData />
      </div>
      <div class="col-xl-6 col-md-12 col-sm-12 box-col-12">
        <FilledHolesData />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AdvancedAnimations = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/AdvancedAnimations.vue')
)

const SVGPathAnimation = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/SVGPathAnimation.vue')
)
const DonutSvgAnimate = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/DonutSvgAnimate.vue')
)
const BiPolarLineChart = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/BiPolarLineChart.vue')
)
const LineChartWithArea = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/LineChartWithArea.vue')
)
const BiPolarBarChart = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/BiPolarBarChart.vue')
)
const StackedBarChart = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/StackedBarChart.vue')
)
const HorizontalBarChart = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/HorizontalBarChart.vue')
)
const ResponsiveConfiguration = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/ResponsiveConfiguration.vue')
)
const SimpleLineChart = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/SimpleLineChart.vue')
)
const HolesInData = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/HolesInData.vue')
)
const FilledHolesData = defineAsyncComponent(
  () => import('@/module/charts/chartistChart/FilledHolesData.vue')
)
</script>
