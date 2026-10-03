<template>
  <Card :headerTitle="'Custom Ratio'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Wrap any embed, like an <code>&lt;iframe&gt;</code> , in a parent element with
        <code>ratio </code>and an aspect <code>ratio</code> class. Here is a breakdown of these
        ratios:<code> ratio-4x3 </code>.
      </p>
    </template>
    <div class="ratio ratio-4x3">
      <iframe
        src="https://www.youtube.com/embed/FjFWBcQPzSI?si=ZNk3GFvFTpZkPRlU"
        title="YouTube video"
        allowfullscreen
      ></iframe>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
