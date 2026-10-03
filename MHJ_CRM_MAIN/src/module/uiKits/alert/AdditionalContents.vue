<template>
  <Card
    :headerTitle="'Additional Contents'"
    :border="true"
    :padding="false"
    :cardBodyClass="' dark-alert'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> alert </code> utility class to provide additional content within any alerts.
      </p>
    </template>
    <div
      :class="`alert alert-light-${alert.color}`"
      role="alert"
      v-for="(alert, index) in alertAdditionalContent"
      :key="index"
    >
      <h5 :class="`alert-heading pb-2 txt-${alert.color}`">{{ alert.title }}</h5>
      <p>{{ alert.description }}</p>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { alertAdditionalContent } from '@/core/data/uiKits/alert'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
