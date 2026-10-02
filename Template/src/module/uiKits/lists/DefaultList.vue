<template>
  <Card
    :headerTitle="'Default Lists'"
    :border="true"
    :padding="false"
    :cardClass="'list-with-icon'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> list-group </code>define the list of items and used
        <code> list-group-item </code>to indicate the current content.
      </p>
    </template>

    <ul class="list-group">
      <li class="list-group-item" v-for="(list, index) in defaultList" :key="index">
        <i class="icofont icofont-arrow-right"></i>{{ list }}
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { defaultList } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
