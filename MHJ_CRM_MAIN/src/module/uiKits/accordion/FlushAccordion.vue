<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Flush Accordion'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Add <code>accordion-flush</code> to remove the default<code> background-color</code> , some
        borders, and some rounded corners to render accordions edge-to-edge with their parent
        container.
      </p>
    </template>
    <div class="accordion accordion-flush dark-accordion" id="simple-accordion">
      <div class="accordion-item" v-for="accordion in flushAccordion" :key="accordion.id">
        <h2 class="accordion-header" :id="`heading-${accordion.id}`">
          <button
            @click="toggleAccordion(accordion.id)"
            class="accordion-button txt-secondary accordion-light-secondary"
            :class="{ collapsed: !visibleAccordion.includes(accordion.id) }"
            type="button"
          >
            {{ accordion.title }}
            <vue-feather :type="'chevron-down'" :class="'svg-color'" />
          </button>
        </h2>
        <div
          class="accordion-collapse collapse"
          :class="{ show: visibleAccordion.includes(accordion.id) }"
        >
          <div class="accordion-body" v-html="accordion.description"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { flushAccordion } from '@/core/data/uiKits/accordion'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const visibleAccordion = ref<number[]>([1])

function toggleAccordion(id: number) {
  if (visibleAccordion.value && visibleAccordion.value.includes(id)) {
    visibleAccordion.value = visibleAccordion.value.filter((item) => item !== id)
  } else {
    visibleAccordion.value.push(id)
  }
}
</script>
