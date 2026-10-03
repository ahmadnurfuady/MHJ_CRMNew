<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Border Opacity'"
    :border="true"
    :padding="false"
    :cardBodyClass="'border-opacity-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>border-opacity-* (10,25,50,75)</code> class to border opacity links.
      </p>
    </template>

    <div class="border p-2 mb-xl-3 mb-2 border-primary">
      <a href="#">This is default primary border</a>
    </div>
    <template v-for="(value, index) in opacity" :key="index">
      <div :class="`border p-2 mb-xl-3 mb-2 border-opacity-${value}`">
        <a href="#">This is {{ value }}% opacity primary border</a>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { opacity } from '@/core/data/uiKits/navigateLinks'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
