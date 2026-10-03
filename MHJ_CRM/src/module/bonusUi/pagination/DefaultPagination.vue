<template>
  <Card
    :headerTitle="'Default Pagination'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        This example demonstrates a custom pagination component using a dynamic pager utility. It
        allows users to navigate through paginated content using Previous, Next, and direct page
        number buttons.
      </p>
    </template>

    <CommonPagination :disable="false" :color="'primary'" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const CommonPagination = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/CommonPagination.vue')
)
</script>
