<template>
  <Card
    :cardClass="'o-hidden'"
    :headerTitle="'Monthly History'"
    :border="true"
    :padding="false"
    :cardBodyClass="'bottom-content'"
  >
    <apexchart
      type="bar"
      height="380"
      :options="widgetsChart4"
      :series="widgetsChart4Series"
    ></apexchart>
  </Card>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { widgetsChart4Series, widgetsChart4 } from '@/core/data/widgets/chart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
