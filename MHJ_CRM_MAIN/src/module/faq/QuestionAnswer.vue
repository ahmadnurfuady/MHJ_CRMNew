<template>
  <template v-for="items in faqQuestionAnswer" :key="items.id">
    <div class="faq-title" v-if="items.headerTitle">
      <h6>{{ items.headerTitle }}</h6>
    </div>
    <template v-for="item in items.details" :key="item.id">
      <div class="card">
        <div class="card-header">
          <h5>
            <button
              class="btn btn-link collapsed ps-0"
              :aria-expanded="visibleAccordion !== item.id ? false : true"
              :class="{ collapsed: visibleAccordion !== item.id }"
              @click="toggleAccordion(item.id)"
            >
              <vue-feather :type="'help-circle'" />
              {{ item.title }}
            </button>
          </h5>
        </div>
        <div class="collapse" :class="{ show: visibleAccordion === item.id }">
          <div class="card-body">
            {{ item.description }}
          </div>
        </div>
      </div>
    </template>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { faqQuestionAnswer } from '@/core/data/faq'

const visibleAccordion = ref<number | null>(1)

function toggleAccordion(id: number) {
  visibleAccordion.value = visibleAccordion.value === id ? null : id
}
</script>
