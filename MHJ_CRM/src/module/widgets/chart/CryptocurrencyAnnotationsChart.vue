<template>
  <Card :headerTitle="'Cryptocurrency Annotations'" :border="true" :padding="false">
    <div class="chart-container">
      <div class="row">
        <div class="col-12">
          <div id="chart-annotation">
            <apexchart
              type="line"
              :height="400"
              :options="widgetsChart14"
              :series="widgetsChartSeries14"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { widgetsChartSeries14, widgetsChart14 } from '@/core/data/widgets/chart'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
