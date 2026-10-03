<template>
  <Card
    :headerTitle="'With Icons Breadcrumbs'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use<code> breadcrumb</code> class, to set breadcrumb with icons.</p>
    </template>
    <ol class="breadcrumb bg-white p-l-0">
      <li class="breadcrumb-item">
        <a href="#">
          <i class="fa-solid fa-house"></i>
        </a>
      </li>
      <li class="breadcrumb-item active">Bonus Ui</li>
    </ol>
    <ol class="breadcrumb bg-white m-b-0 p-b-0 p-l-0">
      <li class="breadcrumb-item">
        <a href="#">
          <i class="fa-solid fa-house"></i>
        </a>
      </li>
      <li class="breadcrumb-item">Bonus Ui</li>
      <li class="breadcrumb-item active">Breadcrumb</li>
    </ol>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
