<template>
  <Card
    :headerTitle="'Animated Color divider'"
    :border="true"
    :padding="false"
    :cardBodyClass="'linear-divider'"
  >
    <template #header5>
      <p class="mb-0 mt-1">
        Use <code>animated-line</code> and <code>animated-divider </code> classes to create a linear
        animated divider.
      </p>
    </template>

    <h6>Main Heading</h6>
    <div class="animated-divider animated-line"></div>
    <p class="mb-0 c-light">
      This CSS divider embodies simplicity at its finest, yet it exudes an air of elegance and
      timelessness. Despite its minimalist design, it commands attention effortlessly. While the
      divider takes center stage in this arrangement, it seamlessly integrates with the overall
      aesthetic, allowing the backdrop image to shine through.
    </p>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
