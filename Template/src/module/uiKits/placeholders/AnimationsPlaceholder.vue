<template>
  <Card
    :headerTitle="'Animations'"
    :headerClass="'mb-0'"
    :border="true"
    :padding="false"
    :cardBodyClass="'animation-placeholder'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Animate placeholders with <code>placeholder-glow </code>or <code>placeholder-wave</code> to
        better convey the perception of something being actively loaded.
      </p>
    </template>

    <p class="placeholder-glow">
      <span class="placeholder col-12 placeholder-light"></span>
    </p>
    <p class="placeholder-wave">
      <span class="placeholder col-12 placeholder-light"></span>
    </p>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
