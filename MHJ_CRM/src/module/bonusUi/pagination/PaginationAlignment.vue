<template>
  <Card
    :headerTitle="'Pagination Alignment'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        This pagination layout demonstrates alignment options using utility classes. The first
        pagination is left-aligned (default), the second is center-aligned using
        <code>justify-content-center</code>, and the third is right-aligned using
        <code>justify-content-end</code>. Each pagination also showcases different styles, including
        numeric and Roman numeral page indicators.
      </p>
    </template>

    <CommonPagination :color="'warning'" :class="'m-b-30'" />

    <CommonPagination
      :color="'danger'"
      :alignmentClass="'justify-content-center'"
      :class="'m-b-30'"
      :type="'romanUppercase'"
    />

    <CommonPagination
      :color="'success'"
      :alignmentClass="'justify-content-end'"
      :type="'romanLowercase'"
    />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const CommonPagination = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/CommonPagination.vue')
)
</script>
