<template>
  <Card
    :headerTitle="t('dashboard.revenueGrowth')"
    :padding="false"
    :header="'sales-chart'"
    :cardBodyClass="'pt-0'"
  >
    <template #header5>
      <div class="sales-chart-dropdown">
        <ul class="balance-data">
          <li>
            <span class="circle bg-warning"> </span
            ><span class="ms-1 f-w-400">{{ t('dashboard.marketingSales') }}</span>
          </li>
          <li>
            <span class="circle bg-primary"></span
            ><span class="ms-1 f-w-400">{{ t('dashboard.onlineSales') }}</span>
          </li>
        </ul>
        <div class="sales-chart-dropdown-select">
          <div class="card-header-right-icon online-store">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle dropdown-toggle-store"
                id="dropdownMenuButtonToggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ t('common.thisYear') }}
              </button>
              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButtonToggle"
              >
                <span class="dropdown-item">{{ t('common.lastMonth') }}</span
                ><span class="dropdown-item">{{ t('common.lastWeek') }}</span
                ><span class="dropdown-item">{{ t('common.thisYear') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="row">
      <div class="col-xxl-8 col-xl-12">
        <div class="revenuegrowth">
          <div class="revenuegrowth-chart" id="revenuegrowth">
            <apexchart
              :height="315"
              :series="revenueGrowthChartSeries"
              :options="revenueGrowthChart"
            />
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-xl-4 d-xxl-block d-none">
        <div class="revenuegrowth-details">
          <div class="growth-details">
            <span class="f-light f-12 text-uppercase">{{ t('dashboard.totalSales') }}</span>
            <h4 class="f-w-500 mb-2 counter" data-target="5626508">$56.265.08</h4>
            <div class="d-flex justify-content-center align-items-center gap-2 mb-4">
              <p class="mb-0 f-w-500 f-12">{{ t('dashboard.comparedTo') }}</p>
              <span class="f-light f-12 f-w-500">(+40.15% than)</span>
              <p class="mb-0 f-w-500 f-12">{{ t('dashboard.lastYear') }}</p>
            </div>
          </div>
          <div class="growth-details">
            <span class="f-light f-12 text-uppercase">{{ t('dashboard.totalPurchases') }}</span>
            <h4 class="f-w-500 mb-2">$42,256.26</h4>
            <div class="d-flex justify-content-center align-items-center gap-2 mb-4">
              <p class="mb-0 f-w-500 f-12">{{ t('dashboard.comparedTo') }}</p>
              <span class="txt-secondary f-12 f-w-500">(-20.25% than) </span>
              <p class="mb-0 f-w-500 f-12">{{ t('dashboard.lastYear') }}</p>
            </div>
          </div>
          <div class="growth-details">
            <span class="f-light f-12 text-uppercase">{{ t('dashboard.totalReturns') }}</span>
            <h4 class="f-w-500 mb-2">$5,215.62</h4>
            <div class="d-flex justify-content-center align-items-center gap-2">
              <p class="mb-0 f-w-500 f-12">{{ t('dashboard.comparedTo') }}</p>
              <span class="f-w-500 f-light f-12">(+18.15% than) </span>
              <p class="mb-0 f-w-500 f-12">{{ t('dashboard.lastYear') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { revenueGrowthChartSeries, revenueGrowthChart } from '@/core/data/dashboard/default'
import { defineAsyncComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
