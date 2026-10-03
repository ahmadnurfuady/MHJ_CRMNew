<template>
  <Card
    :headerTitle="'Variation Timeline'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dark-timeline'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> activity-dot-* </code>class to create rounded animations on the timeline.
      </p>
    </template>
    <ul>
      <li class="d-flex" v-for="timeline in variationTimeline" :key="timeline.id">
        <div :class="`activity-dot-${timeline.class}`"></div>
        <div class="w-100 ms-3">
          <p class="d-flex justify-content-between mb-2">
            <span class="date-content light-background txt-dark">{{ timeline.date }} </span>
            <span>{{ timeline.time }}</span>
          </p>
          <h6>
            {{ timeline.title }}
            <span class="dot-notification"></span>
          </h6>
          <span class="f-light">{{ timeline.description }}</span>
          <div class="recent-images" v-if="timeline.details">
            <ul>
              <li v-for="item in timeline.details" :key="item.id">
                <div class="recent-img-wrap">
                  <img :src="getImages(item.image)" :alt="item.alt" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils'
import { variationTimeline } from '@/core/data/bonusUI/timeline'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
