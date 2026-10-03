<template>
  <Card
    :headerTitle="'Horizontal Editable Divider'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-divider horizontal-variation'"
  >
    <template #header5>
      <p class="mb-0 mt-1">
        Use<code> horizontal-variation</code> and <code>double-line-*</code> classes to create a
        thickness divider.
      </p>
    </template>

    <template v-for="(divider, index) in horizontalEditable" :key="index">
      <div
        :class="`divider linear-line double-line double-line-${index + 1}`"
        contenteditable="true"
      >
        {{ divider.value }}
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { horizontalEditable } from '@/core/data/uiKits/divider'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
