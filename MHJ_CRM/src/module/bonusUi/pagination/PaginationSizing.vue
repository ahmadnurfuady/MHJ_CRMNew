<template>
  <Card
    :headerTitle="'Pagination Sizing'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        This pagination example demonstrates different sizing options using utility classes. The
        pagination is rendered in three sizes: large (<code>pagination-lg</code>), medium
        (<code>pagination-md</code>), and small (<code>pagination-sm</code>). Use these size classes
        to adjust the pagination component according to your UI layout and visual hierarchy.
      </p>
    </template>

    <CommonPagination :color="'info'" :class="'m-b-30'" :sizeClass="'pagination-lg'" />

    <CommonPagination :color="'info'" :class="'m-b-30'" :sizeClass="'pagination-md'" />

    <CommonPagination :color="'info'" :sizeClass="'pagination-sm'" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const CommonPagination = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/CommonPagination.vue')
)
</script>
