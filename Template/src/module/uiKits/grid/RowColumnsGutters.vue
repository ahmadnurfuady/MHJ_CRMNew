<template>
  <Card
    :cardClass="'height-equal-2'"
    :headerTitle="'Row Columns Gutters'"
    :border="true"
    :padding="false"
    :cardBodyClass="'r-c-gutter'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Gutter classes can also be added to row columns. In the following example, we use responsive
        row columns and responsive gutter classes.
      </p>
    </template>

    <div class="container text-center">
      <div class="row row-cols-2 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 g-2 g-lg-3">
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
        <div class="col">
          <div class="p-10"><span>Row column</span></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
