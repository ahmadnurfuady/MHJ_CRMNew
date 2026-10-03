<template>
  <Card :headerTitle="'Tooltip Directions'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> btn-*</code> to change dark background color and<code> data-bs-placement='*'</code
        >[top/right/bottom/left] to tooltip direction change.
      </p>
    </template>
    <div class="common-flex">
      <button
        class="mb-0 me-0 btn btn-primary"
        v-tooltip
        data-bs-placement="top"
        :title="'Tooltip on top'"
      >
        Tooltip on top
      </button>
      <button
        class="mb-0 me-0 btn btn-secondary"
        v-tooltip
        data-bs-placement="right"
        :title="'Tooltip on right'"
      >
        Tooltip on right
      </button>
      <button
        class="mb-0 me-0 btn btn-success"
        v-tooltip
        data-bs-placement="bottom"
        :title="'Tooltip on bottom'"
      >
        Tooltip on bottom
      </button>
      <button
        class="mb-0 me-0 btn btn-warning"
        v-tooltip
        data-bs-placement="left"
        :title="'Tooltip on left'"
      >
        Tooltip on left
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
