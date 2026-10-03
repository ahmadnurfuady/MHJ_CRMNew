<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-xl-4 col-md-12 box-col-12"
        v-for="(chart, index) in commonLineCharts"
        :key="index"
      >
        <TopWidgetsChart :chart="chart" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 box-col-12">
        <MonthlyHistory />
      </div>
      <div class="col-xl-6 col-lg-12 box-col-6 xl-50">
        <SkillStatusChart />
      </div>
      <div class="col-xl-6 col-lg-12 box-col-6 xl-50">
        <OrderStatusChart />
      </div>
    </div>
    <div class="row">
      <div class="xl-50 col-xl-7 col-lg-12">
        <LiveProduct />
      </div>
      <div class="xl-50 col-xl-5 col-lg-12">
        <TurnOverChart />
      </div>
      <div class="xl-50 col-xl-6 col-lg-12">
        <CryptocurrencyPricesChart />
      </div>
      <div class="xl-50 col-xl-6 col-lg-12">
        <CryptocurrencyAnnotationsChart />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 box-col-12">
        <StockMarketChart />
      </div>
      <div class="col-xl-5 col-lg-12 box-col-12">
        <FinanceChart />
      </div>
      <div class="col-xl-7 col-lg-12 box-col-6">
        <OrderStatus2Chart />
      </div>
      <div class="xl-50 col-xl-5 col-lg-12 box-col-6">
        <MonthlySalesChart />
      </div>
      <div class="xl-50 col-xl-7 col-lg-12 box-col-12">
        <UsersChart />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { commonLineCharts } from '@/core/data/widgets/chart'

const TopWidgetsChart = defineAsyncComponent(
  () => import('@/module/widgets/chart/TopWidgetsChart.vue')
)
const MonthlyHistory = defineAsyncComponent(
  () => import('@/module/widgets/chart/MonthlyHistory.vue')
)
const SkillStatusChart = defineAsyncComponent(
  () => import('@/module/widgets/chart/SkillStatusChart.vue')
)
const OrderStatusChart = defineAsyncComponent(
  () => import('@/module/widgets/chart/OrderStatusChart.vue')
)
const LiveProduct = defineAsyncComponent(() => import('@/module/widgets/chart/LiveProduct.vue'))
const CryptocurrencyAnnotationsChart = defineAsyncComponent(
  () => import('@/module/widgets/chart/CryptocurrencyAnnotationsChart.vue')
)
const CryptocurrencyPricesChart = defineAsyncComponent(
  () => import('@/module/widgets/chart/CryptocurrencyPricesChart.vue')
)
const TurnOverChart = defineAsyncComponent(() => import('@/module/widgets/chart/TurnOverChart.vue'))
const StockMarketChart = defineAsyncComponent(
  () => import('@/module/widgets/chart/StockMarketChart.vue')
)
const FinanceChart = defineAsyncComponent(() => import('@/module/widgets/chart/FinanceChart.vue'))
const OrderStatus2Chart = defineAsyncComponent(
  () => import('@/module/widgets/chart/OrderStatus2Chart.vue')
)
const UsersChart = defineAsyncComponent(() => import('@/module/widgets/chart/UsersChart.vue'))
const MonthlySalesChart = defineAsyncComponent(
  () => import('@/module/widgets/chart/MonthlySalesChart.vue')
)
</script>
