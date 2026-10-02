<template>
  <div class="container-fluid">
    <div class="row size-column">
      <div class="col-xl-8 col-md-12 box-col-12">
        <RevenueGrowth />
      </div>
      <div class="col-xl-4 col-md-6 box-col-none">
        <div class="row">
          <div class="col-md-12 col-sm-6">
            <SaleCard />
          </div>
          <div class="col-md-12 col-sm-6">
            <Deliveries :amount="true" />
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-md-6 box-col-6">
        <TopProducts />
      </div>
      <div class="col-xxl-3 col-sm-6 box-col-6">
        <NewUser />
      </div>
      <div class="col-xxl-5 col-sm-6 box-col-6">
        <TeamActivities />
      </div>
      <div class="col-xxl-4 col-xl-6 box-col-6">
        <UserVisits :chartDropdown="true" :chartHeight="325" />
      </div>
      <div class="col-xxl-5 col-xl-6 box-col-6">
        <LatestTransactions />
      </div>
      <div class="col-xxl-3 col-xl-6 box-col-6">
        <BestSellingProducts />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const RevenueGrowth = defineAsyncComponent(
  () => import('@/module/dashboard/default/RevenueGrowth.vue')
)

const SaleCard = defineAsyncComponent(() => import('@/module/dashboard/default/SaleCard.vue'))

const Deliveries = defineAsyncComponent(() => import('@/module/dashboard/default/Deliveries.vue'))

const TopProducts = defineAsyncComponent(() => import('@/module/dashboard/default/TopProducts.vue'))
const NewUser = defineAsyncComponent(() => import('@/module/dashboard/default/NewUsers.vue'))

const TeamActivities = defineAsyncComponent(
  () => import('@/module/dashboard/default/TeamActivities.vue')
)

const UserVisits = defineAsyncComponent(() => import('@/module/dashboard/default/UserVisits.vue'))

const LatestTransactions = defineAsyncComponent(
  () => import('@/module/dashboard/default/LatestTransactions.vue')
)
const BestSellingProducts = defineAsyncComponent(
  () => import('@/module/dashboard/default/BestSellingProducts.vue')
)
</script>
