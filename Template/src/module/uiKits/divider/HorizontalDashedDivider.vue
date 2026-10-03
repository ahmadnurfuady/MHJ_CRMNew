<template>
  <Card
    :headerTitle="'Horizontal Dashed Divider'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-divider'"
  >
    <template #header5>
      <p class="mb-0 mt-1">Use <code>divider-body-2</code> class for dashed divider.</p>
    </template>

    <template v-for="(divider, index) in horizontalDashedDivider" :key="index">
      <div :class="`divider-body divider-body-2 divider-${divider.color}`">
        <div :class="`divider-circle bg-light-${divider.color}`">
          <i :class="`${divider.icon} txt-${divider.color}`"></i>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { horizontalDashedDivider } from '@/core/data/uiKits/divider'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
