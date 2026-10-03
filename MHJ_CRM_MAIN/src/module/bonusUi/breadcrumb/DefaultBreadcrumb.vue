<template>
  <Card
    :headerTitle="'Default Breadcrumbs'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use <code> breadcrumb</code> class to set breadcrumb.</p>
    </template>
    <nav class="breadcrumb">
      <a class="breadcrumb-item" href="#">Home</a>
      <span class="breadcrumb-item active">Ui Kits</span>
    </nav>
    <nav class="breadcrumb m-0">
      <a class="breadcrumb-item" href="#">Home</a>
      <a class="breadcrumb-item" href="#">Ui Kits</a>
      <span class="breadcrumb-item active">Alert</span>
    </nav>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
