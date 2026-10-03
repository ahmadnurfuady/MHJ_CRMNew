<template>
  <Card
    :headerTitle="'Popover Directions'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex popover-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> data-bs-placement='*'</code> [top/left/bottom/top] to change directions.
      </p>
    </template>

    <button
      class="example-popover btn btn-warning mb-0 me-0"
      type="button"
      v-popover
      data-bs-placement="top"
      title="Top Popover"
      data-bs-content="Popovers need the tooltip plugin considering that a dependency."
    >
      Popover on Top
    </button>
    <button
      class="example-popover btn btn-danger mb-0 me-0"
      type="button"
      v-popover
      data-bs-placement="right"
      title="Right Popover"
      data-bs-content="Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."
    >
      Popover on Right
    </button>
    <button
      class="example-popover btn btn-info mb-0 me-0"
      type="button"
      v-popover
      data-bs-placement="bottom"
      title="Bottom Popover"
      data-bs-content="Identify container:to evade rendering problems in more complex components (like Bootstrap input groups, button groups, etc)."
    >
      Popover on Bottom
    </button>
    <button
      class="example-popover btn btn-dark mb-0 me-0"
      type="button"
      v-popover
      data-bs-placement="left"
      title="Left Popover"
      data-bs-content="Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."
    >
      Popover on Left
    </button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
