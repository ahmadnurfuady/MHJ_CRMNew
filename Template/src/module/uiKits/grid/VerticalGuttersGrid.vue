<template>
  <Card
    :cardClass="'height-equal-2'"
    :headerTitle="'Vertical Gutters'"
    :border="true"
    :padding="false"
    :cardBodyClass="'v-gutter'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Use<code> gy-* </code> classes control vertical space between elements in rows, especially
        when they wrap and wider spacing can overflow the page and wrap the <code> row</code> with
        <code> overflow-hidden</code> to prevent this.
      </p>
    </template>

    <div class="container overflow-hidden text-center">
      <div class="row gy-3">
        <div class="col-6">
          <div class="p-3"><span>Custom column padding</span></div>
        </div>
        <div class="col-6">
          <div class="p-3"><span>Custom column padding</span></div>
        </div>
        <div class="col-6">
          <div class="p-3"><span>Custom column padding</span></div>
        </div>
        <div class="col-6">
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
