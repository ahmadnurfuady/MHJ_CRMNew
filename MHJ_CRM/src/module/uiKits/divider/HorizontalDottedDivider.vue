<template>
  <Card
    :headerTitle="'Horizontal Dotted Divider'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-divider'"
  >
    <template #header5>
      <p class="mb-0 mt-1">Use <code>divider-body-3</code> class for dotted divider.</p>
    </template>

    <template v-for="(divider, index) in horizontalDottedDivider" :key="index">
      <div :class="`divider-body divider-body-3 divider-${divider.color}`">
        {{ titleCase(divider.color) }}
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { horizontalDottedDivider } from '@/core/data/uiKits/divider'
import { titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
