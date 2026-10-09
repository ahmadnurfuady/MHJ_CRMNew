<template>
  <Card
    :headerTitle="'Proyek Statistics'"
    :padding="true"
    :header="'sales-chart'"
    :cardBodyClass="'p-2 pt-0'"
  >
    <template #header5>
      <div class="sales-chart-dropdown-select">
        <div class="card-header-right-icon">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle dropdown-toggle-store"
              id="dropdownMenuButtonStore"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              This Week
            </button>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButtonStore">
              <a class="dropdown-item" href="#">Previews Month </a
              ><a class="dropdown-item" href="#">Last 6Month</a
              ><a class="dropdown-item" href="#">Last 6Month</a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="statistics">
      <div id="statisticschart">
        <apexchart :height="440" :series="projectStatisticsSeries" :options="projectStatistics" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { projectStatisticsSeries, projectStatistics } from '@/core/data/dashboard/project'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
