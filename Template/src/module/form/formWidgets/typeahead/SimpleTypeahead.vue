<template>
  <Card :headerTitle="'Simple Typeahead'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 mb-0">
        A typeahead example that gets values from a static <code>string[]</code>
      </p>
    </template>
    <div id="the-basics">
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
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { states } from '@/core/data/forms/formWidgets'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
