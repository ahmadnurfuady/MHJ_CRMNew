<template>
  <Card
    :headerTitle="'Border Warning State'"
    :border="true"
    :padding="false"
    :header="'border-l-warning border-3'"
    :cardClass="'common-hover'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Use class of<code> border-l-* </code>for left border and <code>border-3 </code>is used to
        increase the width of the border.
      </p>
    </template>
    <ol class="list-group list-group-numbered">
      <template v-for="details in warningStateCard" :key="details.id">
        <li :class="`list-group-item txt-${details.colorClass} fw-bold`">
          {{ details.text }}
        </li>
      </template>
    </ol>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { warningStateCard } from '@/core/data/bonusUI/creativeCards'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
