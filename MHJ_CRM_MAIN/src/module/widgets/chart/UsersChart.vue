<template>
  <Card :headerTitle="'Uses'" :border="true" :padding="false">
    <div class="chart-container">
      <div class="row">
        <div class="col-12">
          <div id="chart-widget9">
            <apexchart
              type="bubble"
              :height="320"
              ref="chart"
              :options="widgetsChart19"
              :series="widgetsChartSeries19"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { widgetsChartSeries19, widgetsChart19 } from '@/core/data/widgets/chart'

import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
