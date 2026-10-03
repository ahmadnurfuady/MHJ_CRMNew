<template>
  <Card
    :cardClass="'height-equal helper-height-equal'"
    :headerTitle="'Text Colors'"
    :border="true"
    :padding="false"
    :cardBodyClass="'txt-space'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use text color for <code>font-*</code> classes.</p>
    </template>

    <div v-for="(item, index) in fontColors" :key="index" :class="item.class">
      This is a <strong>{{ item.label }}</strong> text used class as {{ item.class }}
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const fontColors = ref([
  { label: 'font-primary', class: 'font-primary' },
  { label: 'font-secondary', class: 'font-secondary' },
  { label: 'font-success', class: 'font-success' },
  { label: 'font-danger', class: 'font-danger' },
  { label: 'font-warning', class: 'font-warning' },
  { label: 'font-info', class: 'font-info' },
  { label: 'font-dark', class: 'font-dark' },
])
</script>
