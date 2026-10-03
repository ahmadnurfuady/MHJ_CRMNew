<template>
  <div class="container-fluid general-widgets">
    <div class="row size-column">
      <div class="col-xxl-9 box-col-12">
        <div class="row">
          <div class="col-xl-3 col-sm-6" v-for="(items, index) in topProjectWidgets" :key="index">
            <TopProjectWidgets :item="items" />
          </div>
          <div class="col-xl-4 col-sm-6">
            <ProductCosting />
          </div>
          <div class="col-xl-4 col-sm-6">
            <UserVisits :chartDropdown="false" :chartHeight="330" />
          </div>
          <div class="col-xl-4 col-lg-6">
            <div class="row">
              <div class="col-md-12 col-sm-6">
                <SaleCard />
              </div>
              <div class="col-md-12 col-sm-6">
                <Deliveries :amount="false" />
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <TimeLine />
          </div>
          <div class="col-xl-6">
            <SalesChart :dropdown="false" :chartHeight="350" />
          </div>
        </div>
      </div>
      <div class="col-xl-3 d-xxl-block d-none box-col-none">
        <div class="col-xl-12 special-Offer-banner">
          <SpecialOfferCard />
        </div>
        <div class="col-xl-12">
          <ProductWidget :banner="false" />
        </div>
        <div class="col-xl-12">
          <TotalRevenue :chartHeight="150" />
        </div>
        <div class="col-xl-12">
          <TotalOrder :chartHeight="150" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { topProjectWidgets } from '@/core/data/dashboard/project'
import { defineAsyncComponent } from 'vue'

const TopProjectWidgets = defineAsyncComponent(
  () => import('@/module/dashboard/project/TopProjectWidgets.vue')
)

const ProductCosting = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/ProductCosting.vue')
)

const UserVisits = defineAsyncComponent(() => import('@/module/dashboard/default/UserVisits.vue'))

const SaleCard = defineAsyncComponent(() => import('@/module/dashboard/default/SaleCard.vue'))

const Deliveries = defineAsyncComponent(() => import('@/module/dashboard/default/Deliveries.vue'))

const TimeLine = defineAsyncComponent(() => import('@/module/dashboard/project/TimeLine.vue'))

const SalesChart = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/SalesChart.vue'))

const SpecialOfferCard = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/SpecialOfferCard.vue')
)

const ProductWidget = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/ProductWidget.vue')
)

const TotalRevenue = defineAsyncComponent(
  () => import('@/module/dashboard/ecommerce/TotalRevenue.vue')
)
const TotalOrder = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/TotalOrder.vue'))
</script>
