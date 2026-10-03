<template>
  <Card :headerTitle="'Flush Lists'" :border="true" :padding="false" :cardClass="'list-with-icon'">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> list-group-flush</code> to remove some borders and rounded corners to render list
        group items.
      </p>
    </template>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="(list, index) in flushList" :key="index">
        <i :class="`icofont icofont-${list.icon}`"></i>{{ list.item }}
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { flushList } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
