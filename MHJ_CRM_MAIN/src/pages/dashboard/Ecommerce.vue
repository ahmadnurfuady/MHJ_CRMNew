<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 box-col-7">
        <SalesChart :dropdown="true" :chartHeight="280" />
      </div>
      <div class="col-xl-3 col-md-6 box-col-5 total-revenue-total-order">
        <div class="row">
          <div class="col-xl-12">
            <TotalRevenue :chartHeight="120" />
          </div>
          <div class="col-xl-12">
            <TotalOrder :chartHeight="120" />
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 special-Offer-banner box-col-none">
        <SpecialOfferCard />
      </div>
      <div class="col-xxl-6 box-col-12">
        <div class="row">
          <div class="col-xl-5 col-sm-6">
            <ProductCosting />
          </div>
          <div class="col-xl-7 col-sm-6">
            <SaleHistory />
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-md-12 box-col-12">
        <LatestOrders />
      </div>
      <div class="col-xxl-6 box-col-12">
        <LiveProduct />
      </div>
      <div class="col-xxl-3 col-md-6 box-col-6">
        <TopRevenueProduct />
      </div>
      <div class="col-xxl-3 col-md-6 box-col-6">
        <ProductWidget :banner="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const SalesChart = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/SalesChart.vue'))
const SpecialOfferCard = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/SpecialOfferCard.vue')
)
const TotalRevenue = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/TotalRevenue.vue')
)
const TotalOrder = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/TotalOrder.vue'))
const ProductCosting = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/ProductCosting.vue')
)
const SaleHistory = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/SaleHistory.vue')
)
const LatestOrders = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/LatestOrders.vue')
)
const LiveProduct = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/LiveProduct.vue')
)
const TopRevenueProduct = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/TopRevenueProduct.vue')
)
const ProductWidget = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/ProductWidget.vue')
)
</script>
