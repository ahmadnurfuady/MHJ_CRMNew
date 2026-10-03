<template>
  <Card
    :headerTitle="'Animated Timeline'"
    :border="true"
    :padding="false"
    :cardBodyClass="'overflow-hidden'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>animated-timeline</code> class to animate timeline events on scroll.
      </p>
    </template>

    <div class="animated-timeline">
      <div
        class="timeline-block"
        v-for="(details, yearIndex) in animatedTimeline"
        :key="details.year"
      >
        <div class="each-year">
          <div class="title">{{ details.year }}</div>

          <div
            class="timeline-event"
            v-for="(timeline, eventIndex) in details.events"
            :key="timeline.id"
            :ref="eventRefHandler(globalIndex(eventIndex, yearIndex))"
            :class="{ show: visibleEvents[globalIndex(eventIndex, yearIndex)] }"
          >
            <div class="timeline-desc">
              <h6 class="pb-1">{{ timeline.title }}:</h6>
              <span>{{ timeline.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ComponentPublicInstance, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { defineAsyncComponent } from 'vue'
import { animatedTimeline } from '@/core/data/bonusUI/timeline'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const visibleEvents = ref<boolean[]>([])

function globalIndex(eventIndex: number, yearIndex: number) {
  let count = 0
  for (let i = 0; i < yearIndex; i++) {
    count += animatedTimeline[i].events.length
  }
  return count + eventIndex
}

function eventRefHandler(index: number) {
  return (ref: Element | ComponentPublicInstance | null) => {
    if (ref instanceof Element) {
      observeEvent(ref as HTMLElement, index)
    }
  }
}

function observeEvent(el: HTMLElement, index: number) {
  useIntersectionObserver(
    el,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        visibleEvents.value[index] = true
      }
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    }
  )
}
</script>

<style scoped>
.timeline-event {
  opacity: 0;
  transform: translateY(20px);
  transition: 0.5s ease;
}

.timeline-event.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
