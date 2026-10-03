<template>
  <Card
    :headerTitle="'Pagination With Active And Disabled'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        This pagination setup provides controls for navigating through pages, with
        <code>Previous</code> and <code>Next</code> buttons that become disabled at the first and
        last pages, respectively. The current page is visually highlighted using the
        <code>active</code> class. Page numbers are dynamically generated from the
        <code>pagination.pages</code> array.
      </p>
    </template>

    <CommonPagination :color="'success'" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const CommonPagination = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/CommonPagination.vue')
)
</script>
