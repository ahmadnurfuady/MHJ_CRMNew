<template>
  <Card :headerTitle="'Prefetch'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 mb-0">Prefetched data is fetched and processed on initialization.</p>
    </template>
    <form class="theme-form">
      <div>
        <TypeAhead
          :items="states"
          class="typeahead form-control"
          :placeholder="'States of USA'"
          :minInputLength="1"
        />
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { states } from '@/core/data/forms/formWidgets'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
