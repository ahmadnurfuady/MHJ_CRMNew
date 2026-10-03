<template>
  <Card
    :headerTitle="'Border Bottom'"
    :border="true"
    :padding="false"
    :header="'border-b-info'"
    :cardClass="'common-hover'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">Use class of<code> border-b-* </code>for the bottom border.</p>
    </template>
    <p>
      By using the border-color, we can give the border in the background direction in a creative
      way. You can design your creative card by taking only the
      <b>border-b-info</b> class. If you want to use other colors like this:
      <b>border-b-*</b>
    </p>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
