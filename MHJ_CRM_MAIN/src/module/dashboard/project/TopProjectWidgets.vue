<template>
  <Card
    :cardClass="'o-hidden small-widget'"
    :padding="false"
    :cardBodyClass="item.class1"
    :header="'total-revenue'"
  >
    <span class="f-light f-w-500 f-14">{{ item.title }}</span>
    <div class="project-details">
      <div class="project-counter">
        <h2 class="f-w-600 counter" data-target="1523">{{ item.number }}</h2>
        <span class="f-12 f-w-400">(This month)</span>
      </div>
      <div class="product-sub" :class="'bg-light-' + item.class2">
        <SvgIcon :icon="item.icon" svgClass="invoice-icon" />
      </div>
    </div>
    <ul class="bubbles">
      <li class="bubble" v-for="index in 8" :key="index"></li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { Widgets } from '@/types/dashboard/project'
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  item: Widgets
}>()
</script>
