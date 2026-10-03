<template>
  <Card
    :headerTitle="'Divider Breadcrumbs'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>breadcrumb-icon</code> class to set divider breadcrumb with icons.
      </p>
    </template>
    <nav class="breadcrumb breadcrumb-icon">
      <a class="breadcrumb-item" href="#">Home</a>
      <span class="breadcrumb-item active">Ui Kits</span>
    </nav>
    <nav class="breadcrumb breadcrumb-icon m-0">
      <a class="breadcrumb-item" href="#">Home</a>
      <a class="breadcrumb-item" href="#">Ui Kits</a>
      <span class="breadcrumb-item active">Progress</span>
    </nav>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
