<template>
  <Card :headerTitle="'Lists with Numbers'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> list-group-numbered</code> to ordered wise print numbers.
      </p>
    </template>

    <ol class="list-group list-group-numbered">
      <template v-for="list in numberList" :key="list.title">
        <li :class="`list-group-item txt-${list.class} fw-bold`">{{ list.title }}</li>
      </template>
    </ol>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { numberList } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
