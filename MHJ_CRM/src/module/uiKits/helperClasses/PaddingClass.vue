<template>
  <Card
    :cardClass="'height-equal helper-height-equal'"
    :headerTitle="'Padding'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use padding classes like:
        <code>p-* [10 / 15 / 20 / 25 / 30 / 35 / 40/ 45 / 50]</code>.
      </p>
    </template>

    <div class="border-wrapper h-100 alert-light-light dark-helper">
      <div class="helper-common-box helper-p-wrapper">
        <template v-for="(padding, index) in marginPaddingValue" :key="index">
          <div :class="`helper-p-box p-${padding} bg-light border`">
            <span>p-{{ padding }}</span>
          </div>
        </template>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { marginPaddingValue } from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
