<template>
  <Card :headerTitle="'Active Lists'" :border="true" :padding="false" :cardClass="'list-with-icon'">
    <template #header5>
      <p class="f-m-light mt-1">
        Add <code>active </code>to a <code>list-group-item </code>to indicate the current active
        selection.
      </p>
    </template>

    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{ 'active bg-warning-light': list.active }"
        v-for="(list, index) in activeLists"
        :key="index"
      >
        <SolarIcon name="icofont-arrow-right" class="icofont" />
        {{ list.item }}
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { activeLists } from '@/core/data/uiKits/lists'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
