<template>
  <Card
    :headerTitle="'Horizontal Solid Divider'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-divider'"
  >
    <template #header5>
      <p class="mb-0 mt-1">Use <code>divider-body-1</code> class for linear divider.</p>
    </template>

    <template v-for="(divider, index) in horizontalSolidDivider" :key="index">
      <div :class="`divider-body divider-body-1 divider-${divider.color}`">
        <div :class="`divider-p-${divider.color}`">
          <i :class="`${divider.icon} me-2 txt-${divider.color} f-20`"></i>
          <span :class="`txt-${divider.color}`">{{ titleCase(divider.color) }}</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { horizontalSolidDivider } from '@/core/data/uiKits/divider'
import { titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
