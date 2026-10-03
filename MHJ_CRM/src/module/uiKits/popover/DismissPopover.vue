<template>
  <Card
    :headerTitle="'Dismiss Popover'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex popover-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use<code> data-bs-dismiss='*'</code> to set dismiss popover.</p>
    </template>
    <a
      class="btn btn-secondary"
      role="button"
      v-popover
      tabindex="0"
      data-bs-trigger="focus"
      title="Dismissible Popover"
      data-bs-content="And here's some amazing content. It's very engaging. Right?"
    >
      Dismissible Popover
    </a>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
