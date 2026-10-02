<template>
  <Card :headerTitle="'Margins'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use margin classes like: <code>m-* [10 / 15 / 20 / 25 / 30 / 35 / 40 / 45 / 50]</code>.
      </p>
    </template>

    <div class="gradient-border">
      <div
        class="helper-common-box gap-0 mb-0"
        v-for="(margin, index) of marginPaddingValue"
        :key="index"
      >
        <div :class="`helper-box m-${margin} bg-light border`"></div>
        <span>m-{{ margin }}</span>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { marginPaddingValue } from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
