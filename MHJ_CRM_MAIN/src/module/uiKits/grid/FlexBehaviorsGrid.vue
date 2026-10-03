<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Enable Flex Behaviors'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code>d-flex </code> and <code> d-inline-flex</code> classes to set the flex behaviors.
      </p>
    </template>

    <div class="flex-behaviors">
      <div class="d-flex p-2">I&apos;m a flexbox container!</div>
      <div class="d-inline-flex p-2">I&apos;m an inline flexbox container!</div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
