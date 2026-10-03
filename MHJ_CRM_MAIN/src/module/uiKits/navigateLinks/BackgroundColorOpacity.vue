<template>
  <Card
    :headerTitle="'Background Color Opacity'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="'bg-opacity-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>bg-opacity-* (10,25,50,75)</code> class to background opacity links.
      </p>
    </template>

    <div class="bg-primary p-2 mb-3 text-white">
      <a href="#">This is default success background</a>
    </div>
    <template v-for="value in bgColor" :key="value.opacity">
      <div :class="`p-2 mb-3 text-${value.color} bg-opacity-${value.opacity}`">
        <a href="#">This is {{ value.opacity }}% opacity success background</a>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { bgColor } from '@/core/data/uiKits/navigateLinks'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
