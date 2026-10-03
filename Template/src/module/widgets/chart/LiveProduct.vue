<template>
  <div class="small-chart-widget chart-widgets-small">
    <Card :headerTitle="'Live Products'" :border="true" :padding="true">
      <div class="chart-container">
        <div class="row">
          <div class="col-12">
            <div id="chart-widget6">
              <apexchart
                type="area"
                :height="320"
                :options="widgetsChart11"
                :series="widgetsChartSeries11"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { widgetsChartSeries11, widgetsChart11 } from '@/core/data/widgets/chart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
