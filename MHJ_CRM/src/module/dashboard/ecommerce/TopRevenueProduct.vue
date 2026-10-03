<template>
  <Card
    :headerTitle="'Top Revenue Product '"
    :padding="false"
    :cardBodyClass="'pt-0'"
    :header="'total-revenue'"
  >
    <template #header5>
      <div class="sales-chart-dropdown-select">
        <div class="card-header-right-icon">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              id="dropdownMenuButtonup"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Today
            </button>
            <div
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButtonup"
              role="menu"
            >
              <span class="dropdown-item">Last Month</span
              ><span class="dropdown-item">Last Week </span
              ><span class="dropdown-item">Last Day </span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="revenueproduct" id="revenueproduct">
      <apexchart :height="230" :series="topRevenueProductSeries" :options="topRevenueProduct" />
    </div>
    <div class="sales-chart-dropdown">
      <ul class="balance-data flex-wrap flex">
        <li>
          <span class="circle bg-primary"></span><span class="f-light ms-1">Men & Women Jeans</span>
        </li>
        <li>
          <span class="circle bg-warning"></span
          ><span class="f-light ms-1">Men & Women T-shirts</span>
        </li>
        <li>
          <span class="circle bg-secondary"></span
          ><span class="f-light ms-1">Men & Women Shoes</span>
        </li>
        <li>
          <span class="circle bg-light"></span><span class="f-light ms-1">Kurtas & Kurti</span>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { topRevenueProduct, topRevenueProductSeries } from '@/core/data/dashboard/ecommerce'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
