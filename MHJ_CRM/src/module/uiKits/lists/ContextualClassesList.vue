<template>
  <Card
    :headerTitle="'Contextual Classes'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="'contextual-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use contextual classes to style list items with a stateful background and colors.<code>
          list-light-*</code
        >
        and <code> txt-*</code>.
      </p>
    </template>

    <div class="list-group">
      <template v-for="(list, index) in contextualClassList" :key="index">
        <a
          :class="`list-group-item list-group-item-action list-light-${list.colorClass}`"
          href="#"
        >
          This is {{ list.colorClass }} bg you can use
          <em :class="`txt-${list.colorClass} fw-bold`">.list-light-{{ list.colorClass }}</em>
          class.
        </a>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { contextualClassList } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
