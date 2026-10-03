<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Horizontal Gutters'"
    :border="true"
    :padding="false"
    :cardBodyClass="'h-gutter'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        <code>gx-* </code> classes can be used to control the horizontal gutter widths. The
        <code> container </code> or <code> container-fluid </code> parent may need to be adjusted if
        larger gutters are used too to avoid unwanted overflow, using a matching padding utility.
      </p>
    </template>

    <div class="container px-4 text-center">
      <div class="row gx-5 gy-sm-0 g-3">
        <div class="col">
          <div class="p-3"><span>Custom column padding</span></div>
        </div>
        <div class="col">
          <div class="p-3"><span>Custom column padding</span></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
