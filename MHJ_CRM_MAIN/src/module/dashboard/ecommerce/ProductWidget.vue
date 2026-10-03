<template>
  <div class="card" v-if="banner">
    <div class="div ecommerce-banner"></div>
  </div>
  <div class="col-xl-12" v-for="(widget, index) in widgets" :key="index">
    <Card
      :cardClass="'product-widget'"
      :padding="false"
      :cardBodyClass="'new-product'"
      :header="'total-revenue'"
    >
      <div class="product-cost">
        <div class="add-product">
          <div :class="['product-icon', widget.bgClass]">
            <SvgIcon :icon="widget.mainIcon" />
          </div>
          <div>
            <h6 class="mb-1">{{ widget.title }}</h6>
            <span class="f-light">{{ widget.description }}</span>
          </div>
        </div>
        <div class="product-icon" v-if="widget.secondaryIcon">
          <SvgIcon :icon="widget.secondaryIcon" />
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { widgets } from '@/core/data/dashboard/ecommerce'
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  banner?: boolean
}>()

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
