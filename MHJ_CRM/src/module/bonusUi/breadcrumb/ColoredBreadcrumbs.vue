<template>
  <Card :headerTitle="'Colored Breadcrumbs'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        You can set background colors like <code>[bg-*] </code>and set breadcrumb using the<code>
          breadcrumb class</code
        >.
      </p>
    </template>
    <ol class="breadcrumb breadcrumb-colored m-b-30 bg-info">
      <li class="breadcrumb-item"><a class="fw-bold" href="#">Home</a></li>
      <li class="breadcrumb-item"><a class="fw-bold" href="#">Bonus Ui</a></li>
      <li class="breadcrumb-item active fw-bold">Breadcrumb</li>
    </ol>
    <ol class="breadcrumb breadcrumb-colored m-b-30 bg-warning">
      <li class="breadcrumb-item"><a class="fw-bold" href="#">Home</a></li>
      <li class="breadcrumb-item"><a class="fw-bold" href="#">Icons</a></li>
      <li class="breadcrumb-item active fw-bold">Flag-icon</li>
    </ol>
    <ol class="breadcrumb breadcrumb-colored m-0 bg-danger">
      <li class="breadcrumb-item"><a class="fw-bold" href="#">Home</a></li>
      <li class="breadcrumb-item"><a class="fw-bold" href="#">Gallery</a></li>
      <li class="breadcrumb-item active fw-bold">Gallery-grid</li>
    </ol>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
