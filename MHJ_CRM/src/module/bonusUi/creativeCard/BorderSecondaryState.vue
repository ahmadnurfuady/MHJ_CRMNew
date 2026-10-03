<template>
  <Card
    :headerTitle="'Border Secondary State'"
    :border="true"
    :padding="false"
    :cardClass="'common-hover'"
    :header="'border-l-secondary border-3'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Use class of<code> border-l-* </code>for left border and <code>border-3 </code>is used to
        increase the width of the border.
      </p>
    </template>
    <ol class="list-group list-group-numbered scroll-rtl">
      <li
        class="list-group-item d-flex align-items-start flex-wrap"
        v-for="details in secondaryStateCard"
        :key="details.id"
      >
        <div class="ms-2 me-auto">{{ details.name }}</div>
        <span :class="`badge bg-${details.badgeColor} rounded-pill p-2`">{{
          details.badgeText
        }}</span>
      </li>
    </ol>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { secondaryStateCard } from '@/core/data/bonusUI/creativeCards'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
