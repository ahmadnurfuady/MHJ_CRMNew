<template>
  <Card
    :headerTitle="'Disabled outline switch'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use the <code>.switch-outline </code> class to created outline.</p>
    </template>
    <template v-for="(item, index) in colors" :key="index">
      <div class="d-flex">
        <div class="flex-shrink-0 text-end icon-state switch-outline">
          <label class="switch mb-0">
            <input type="checkbox" />
            <span :class="`switch-state bg-${item.color}`"></span>
          </label>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { colors } from '@/core/data/common'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
