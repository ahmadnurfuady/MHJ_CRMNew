<template>
  <Card
    :headerTitle="'Basic Popover'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex popover-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use common class <code>data-bs-toggle='popover' </code>and hover to use the
        <code>data-bs-trigger='hover'</code>attributes.
      </p>
    </template>

    <button
      class="btn btn-primary example-popover mb-0 me-0"
      type="button"
      v-popover
      data-bs-placement="left"
      title="Popover Title"
      data-bs-content="And here's some amazing content. It's very engaging. Right?"
    >
      Hurry Up!
    </button>
    <button
      class="example-popover btn btn-secondary mb-0 me-0"
      type="button"
      v-popover
      data-bs-trigger="hover"
      data-container="body"
      data-bs-placement="bottom"
      title="Hover Popover"
      data-offset="-20px -20px"
      data-bs-content=" Several utility instruction sets have been featured in the Bootstrap 4 to promote very easy learning for beginners in the business of web building."
    >
      Hover Tooltip
    </button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
