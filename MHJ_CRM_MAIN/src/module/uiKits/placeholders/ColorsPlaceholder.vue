<template>
  <Card
    :headerTitle="'Colors'"
    :headerClass="'mb-0'"
    :border="true"
    :padding="false"
    :cardBodyClass="'placeholder-glow'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        By default, the <code>placeholder </code>uses <code>currentcolor</code>. This can be
        overridden with a custom color or utility class.
      </p>
    </template>

    <span class="placeholder col-12"></span>
    <span class="placeholder col-12 bg-primary"></span>
    <span class="placeholder col-12 bg-secondary"></span>
    <span class="placeholder col-12 bg-success"></span>
    <span class="placeholder col-12 bg-danger"></span>
    <span class="placeholder col-12 bg-warning"></span>
    <span class="placeholder col-12 bg-info"></span>
    <span class="placeholder col-12 bg-light"></span>
    <span class="placeholder col-12 bg-dark"></span>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
