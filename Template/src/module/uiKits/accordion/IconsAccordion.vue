<template>
  <Card
    :headerTitle="'With Icons Accordion'"
    :border="true"
    :padding="false"
    :cardBodyClass="'accordion-border icons-accordion'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>accordion </code>& <code>feather icons</code> through change look icons accordion.
      </p>
    </template>
    <div class="accordion dark-accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="accordion in iconAccordion" :key="accordion.id">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            @click="toggleAccordion(accordion.id)"
            class="accordion-button collapsed gap-2 accordion-light-secondary active txt-secondary"
            :class="{ collapsed: visibleAccordion !== accordion.id }"
            type="button"
          >
            <vue-feather :type="accordion.icon" :class="'svg-wrapper'" />
            {{ accordion.title }}
            <vue-feather :type="'chevron-down'" :class="'svg-color'" />
          </button>
        </h2>
        <div
          class="accordion-collapse collapse"
          :class="{ show: visibleAccordion === accordion.id }"
        >
          <div class="accordion-body" v-html="accordion.description"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { iconAccordion } from '@/core/data/uiKits/accordion'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const visibleAccordion = ref<number>(1)

function toggleAccordion(id: number) {
  visibleAccordion.value = id
}
</script>
