<template>
  <Card
    :headerTitle="'Outlined Tooltip'"
    :border="true"
    :padding="false"
    :cardBodyClass="'fill-tooltip'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Hover effect through fill dark color and <code>btn-outline-* </code>and
        <code>data-bs-title </code>attribute to the content under the HTML Tag.
      </p>
    </template>
    <div class="common-flex">
      <button class="mb-0 me-0 btn btn-outline-primary" v-tooltip :title="'Tooltip Primary'">
        Tooltip Primary
      </button>
      <button class="mb-0 me-0 btn btn-outline-secondary" v-tooltip :title="'Tooltip Secondary'">
        Tooltip Secondary
      </button>
      <button class="mb-0 me-0 btn btn-outline-success" v-tooltip :title="'Tooltip Success'">
        Tooltip Success
      </button>
      <button class="mb-0 me-0 btn btn-outline-info" v-tooltip :title="'Tooltip Info'">
        Tooltip Info
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
