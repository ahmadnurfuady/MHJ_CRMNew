<template>
  <Card :headerTitle="'Horizontal Timeline'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> event-list </code>and <code>events</code> classes to create a new horizontal
        timeline.
      </p>
    </template>
    <template v-for="content in horizontalTimeline" :key="content.id">
      <div class="list-inline events timeline-list row" :class="content.ulClass">
        <div :class="timeline.divClass" v-for="timeline in content.details" :key="timeline.id">
          <div>
            <div class="vertical-line" v-if="content.verticalLine == 'top'"></div>
            <div class="list-inline-item event-list">
              <div class="px-4">
                <div
                  :class="`event-date bg-light-${timeline.colorClass} txt-${timeline.colorClass}`"
                >
                  {{ timeline.date }}
                </div>
                <h5>{{ timeline.title }}</h5>
                <p class="f-light text-truncate">{{ timeline.description }}</p>
                <div :class="timeline.class">
                  <a class="btn btn-primary px-3" href="#">Read more</a>
                </div>
              </div>
            </div>
            <div class="vertical-line" v-if="content.verticalLine == 'bottom'"></div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { horizontalTimeline } from '@/core/data/bonusUI/timeline'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
