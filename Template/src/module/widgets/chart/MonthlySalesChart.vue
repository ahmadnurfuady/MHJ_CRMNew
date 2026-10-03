<template>
  <Card :headerTitle="'Monthly Sales'" :border="true" :padding="false">
    <div class="chart-container">
      <div class="row">
        <div class="col-12">
          <div id="chart-widget8">
            <apexchart
              type="radar"
              :height="320"
              ref="chart"
              :options="widgetsChart18"
              :series="widgetsChartSeries18"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { widgetsChartSeries18, widgetsChart18 } from '@/core/data/widgets/chart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
