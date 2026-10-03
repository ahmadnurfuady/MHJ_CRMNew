<template>
  <Card
    :headerTitle="'Delay Popover'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex popover-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use<code> data-bs-delay="{value}"</code> to set delay popover.</p>
    </template>

    <button
      class="btn btn-primary example-popover mb-0 me-0"
      type="button"
      v-popover
      data-bs-placement="right"
      title="Popover Title"
      data-bs-delay='{"show":1500,"hide":1800}'
      data-bs-content="And here's some amazing content. It's very engaging. Right?"
    >
      Delay Popover
    </button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
