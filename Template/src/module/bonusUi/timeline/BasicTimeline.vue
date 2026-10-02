<template>
  <Card
    :headerTitle="'Basic Timeline'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="'dark-timeline'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>timeline-dot-*</code> class to a square style timeline.
      </p>
    </template>
    <ul>
      <li class="d-flex" v-for="details in basicTimeline" :key="details.id">
        <div :class="`timeline-dot-${details.dotClass}`"></div>
        <div class="w-100 ms-3">
          <p class="d-flex justify-content-between mb-2">
            <span class="date-content light-background txt-dark">{{ details.date }}</span>
            <span>{{ details.time }}</span>
          </p>
          <h6 class="mb-0">
            {{ details.title }}
            <span class="dot-notification"></span>
          </h6>
          <p class="f-light">{{ details.description }}</p>
        </div>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { basicTimeline } from '@/core/data/bonusUI/timeline'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
