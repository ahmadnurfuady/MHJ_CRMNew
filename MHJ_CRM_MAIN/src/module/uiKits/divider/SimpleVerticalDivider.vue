<template>
  <Card
    :headerTitle="'Simple Vertical Divider'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-divider'"
  >
    <template #header5>
      <p class="mb-0 mt-1">Use <code>vr</code> class for vertical divider.</p>
    </template>

    <div class="common-align">
      <template v-for="(divider, index) in simpleDivider" :key="index">
        <div :class="`vr bg-${divider.color}`"></div>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { simpleDivider } from '@/core/data/uiKits/divider'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
