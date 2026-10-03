<template>
  <Card
    :headerTitle="'Popover Offsets'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex popover-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> data-bs-offset="*,*"</code> through set popover offset.
      </p>
    </template>

    <button
      class="btn btn-secondary mb-0 me-0"
      type="button"
      data-bs-offset="50,0"
      v-popover
      data-bs-delay-show="5000"
      title="Popover Title"
      data-bs-content="And here's some amazing content. It's very engaging. Right?"
      data-kt-initialized="1"
    >
      Popover Offset 50
    </button>
    <button
      class="example-popover btn btn-dark mb-0 me-0"
      type="button"
      data-bs-offset="-50,0"
      data-container="body"
      v-popover
      data-bs-placement="left"
      title="Popover Title"
      data-bs-content="Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."
    >
      Popover Offset -50
    </button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
