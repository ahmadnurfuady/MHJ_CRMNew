<template>
  <Card
    :headerTitle="'Simple Horizontal Divider'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-divider'"
  >
    <template #header5>
      <p class="mb-0 mt-1">Use <code>divider-h-line</code> class for horizontal divider.</p>
    </template>

    <template v-for="(divider, index) in simpleDivider" :key="index">
      <div :class="`divider-h-line bg-${divider.color}`"></div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { simpleDivider } from '@/core/data/uiKits/divider'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
