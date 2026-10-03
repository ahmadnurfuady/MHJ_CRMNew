<template>
  <Card
    :headerTitle="'Sales Chart'"
    :padding="true"
    :header="'sales-chart'"
    :cardBodyClass="'p-2 pt-0'"
  >
    <template #header5 v-if="dropdown">
      <div class="sales-chart-dropdown">
        <ul class="balance-data">
          <li><span class="circle bg-warning"></span><span class="f-light ms-2">Revenue</span></li>
          <li><span class="circle bg-primary"> </span><span class="f-light ms-2">Orders</span></li>
        </ul>
        <div class="sales-chart-dropdown-select">
          <div class="card-header-right-icon online-store">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle dropdown-toggle-store"
                id="dropdownMenuButtonToggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Online Store
              </button>
              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButtonToggle"
                role="menu"
              >
                <span class="dropdown-item">All </span><span class="dropdown-item">Employee</span
                ><span class="dropdown-item">Client </span>
              </div>
            </div>
          </div>
          <div class="card-header-right-icon">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Last Year
              </button>
              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton1"
                role="menu"
              >
                <span class="dropdown-item">Last Month</span
                ><span class="dropdown-item">Last Week </span
                ><span class="dropdown-item">Today </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div class="sales-wrapper">
      <div id="saleschart">
        <apexchart :height="chartHeight" :series="saleChartSeries" :options="saleChartChart" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { saleChartChart, saleChartSeries } from '@/core/data/dashboard/ecommerce'
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  dropdown?: boolean
  chartHeight?: number
}>()

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
