<template>
  <Card
    :headerTitle="'Disabled Popover'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex popover-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use <code>data-bs-toggle="*"</code> to set disabled popover.</p>
    </template>

    <span
      class="d-inline-block"
      v-popover
      tabindex="0"
      role="button"
      data-bs-toggle="popover"
      data-bs-trigger="hover focus"
      title="Disable Popover Title"
      data-bs-content="And here's some amazing content. It's very engaging. Right?"
    >
      <button class="btn btn-primary" type="button" disabled>Disabled Button</button>
    </span>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
