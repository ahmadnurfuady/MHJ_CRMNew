<template>
  <Card :headerTitle="'Cryptocurrency Prices'" :border="true" :padding="false">
    <div class="chart-container crypto-chart">
      <div class="row">
        <div class="col-12">
          <div id="chart-crypto">
            <apexchart
              type="area"
              :height="400"
              :options="widgetsChart13"
              :series="widgetsChartSeries13"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { widgetsChartSeries13, widgetsChart13 } from '@/core/data/widgets/chart'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
