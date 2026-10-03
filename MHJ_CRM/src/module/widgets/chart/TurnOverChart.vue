<template>
  <Card :headerTitle="'Turn Over'" :border="true" :padding="false">
    <div class="chart-container">
      <div class="row">
        <div class="col-12">
          <div id="chart-widget7">
            <apexchart
              type="area"
              :height="280"
              :options="widgetsChart12"
              :series="widgetsChartSeries12"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { widgetsChartSeries12, widgetsChart12 } from '@/core/data/widgets/chart'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
