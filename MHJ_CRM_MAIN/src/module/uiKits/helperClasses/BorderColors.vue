<template>
  <Card :headerTitle="'Border Colors'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>b-*/ b-t-*/ b-b-*/ b-l-*/ b-r-* </code>class for borders.
      </p>
    </template>

    <div class="gradient-border">
      <template v-for="(color, index) in colors" :key="index">
        <template v-for="(position, i) in borderPosition" :key="i">
          <div class="helper-common-box">
            <div :class="`helper-box ${position.position}${color.color} border fill-wrapper`"></div>
            <span>{{ position.position }}{{ color.color }}</span>
          </div>
        </template>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { borderPosition, colorsTwo } from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const colors = colorsTwo
</script>
