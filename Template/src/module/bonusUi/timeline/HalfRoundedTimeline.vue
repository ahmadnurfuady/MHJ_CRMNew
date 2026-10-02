<template>
  <Card
    :headerTitle="'Half Rounded Timeline'"
    :border="true"
    :padding="false"
    :cardBodyClass="'rounded-timeline'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> rounded-timeline</code> class to your rounded timeline.
      </p>
    </template>
    <div class="timeline">
      <template v-for="(details, index) in halfRoundedTimeline" :key="details.id">
        <div class="container" :class="index % 2 === 0 ? 'left' : 'right'">
          <div class="date">{{ details.date }}</div>
          <i :class="`icon fa-${details.icon}`"></i>
          <div class="content">
            <div class="timeline-wrapper">
              <div :class="`badge bg-${details.badgeClass}`">{{ details.badge }}</div>
            </div>
            <h5 class="mb-2">{{ details.title }}</h5>
            <p class="mb-0 f-light">{{ details.description }}</p>
            <audio controls v-if="details.audio">
              <source src="@/assets/audio/horse.ogg" type="audio/ogg" />
            </audio>
          </div>
        </div>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { halfRoundedTimeline } from '@/core/data/bonusUI/timeline'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
