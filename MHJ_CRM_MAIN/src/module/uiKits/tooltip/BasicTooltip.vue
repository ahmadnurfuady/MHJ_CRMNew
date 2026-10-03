<template>
  <Card :headerTitle="'Basic Tooltip'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>data-bs-title</code> to change tooltip title and <code>data-bs-toggle</code> to
        add tooltip attribute.
      </p>
    </template>

    <button
      class="example-popover btn btn-primary mb-0 me-0"
      type="button"
      v-tooltip
      :title="'Surprise!!! Thank you for hovering...'"
    >
      It's magic please hover me...
    </button>
    <h5 class="mb-1 py-4 pb-0">Inline Tooltip Content</h5>

    <p class="mb-0 c-o-light">
      Here, is some content about tooltips that you can set the
      <a class="txt-primary fw-bold" v-tooltip :title="'popover text'"> tooltip</a>
      inside the content with help of tooltip and also you can add
      <button
        class="btn btn-success text-white border-0 px-3 py-1 me-0 mb-0"
        type="button"
        v-tooltip
        :title="'button'"
      >
        button
      </button>
      .Tooltips helps you to add more and more content. A tooltip is often used to specify extra
      information about something when the user moves the mouse pointer over an element
    </p>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
