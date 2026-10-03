<template>
  <Card
    :headerTitle="'Variation of Breadcrumb'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Using the <code>breadcrumb </code>class to any icon sets, you can set variations of the
        breadcrumb.
      </p>
    </template>
    <nav class="breadcrumb breadcrumb-no-divider mb-0 gap-2">
      <a class="breadcrumb-item mb-1 mb-xl-0" href="#">Home -></a>
      <a class="breadcrumb-item ps-0 mb-1 mb-xl-0" href="#">Tables -></a>
      <a class="breadcrumb-item ps-0 mb-1 mb-xl-0" href="#">Bootstrap Tables -></a>
      <span class="breadcrumb-item active ps-0">Basic Tables</span>
    </nav>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
