<template>
  <Card :headerTitle="'Outline Accordion'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Made custom <code>accordion-wrapper</code> class use to bring border-left side.
      </p>
    </template>
    <div class="accordion dark-accordion" id="accordionPanelsStayOpenExample">
      <div
        class="accordion-item accordion-wrapper"
        v-for="accordion in outlineAccordion"
        :key="accordion.id"
      >
        <h2 class="accordion-header">
          <button
            @click="toggleAccordion(accordion.id)"
            class="accordion-button accordion-light-primary txt-primary"
            :class="{ collapsed: visibleAccordion !== accordion.id }"
            type="button"
          >
            {{ accordion.title }}
            <vue-feather :type="'chevron-down'" :class="'svg-color'" />
          </button>
        </h2>
        <div
          class="accordion-collapse collapse"
          :class="{ show: visibleAccordion === accordion.id }"
        >
          <div class="accordion-body">{{ accordion.description }}</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { outlineAccordion } from '@/core/data/uiKits/accordion'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const visibleAccordion = ref<number | null>(1)

function toggleAccordion(id: number) {
  visibleAccordion.value = visibleAccordion.value === id ? null : id
}
</script>
