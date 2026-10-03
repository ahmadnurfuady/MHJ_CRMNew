<template>
  <Card :headerTitle="'Font Sizes'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use font-size for
        <code>f-* [14 / 16 / 18 / 20 / 22 / 24 / 26 / 28 / 30 / 32 / 34 / 36 / 38 / 40]</code>.
      </p>
    </template>

    <div class="gradient-border">
      <div class="font-wrapper border" v-for="(fontsize, index) in fontSize" :key="index">
        <div :class="fontsize.size">Font-size {{ fontsize.size }}</div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { fontSize } from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
