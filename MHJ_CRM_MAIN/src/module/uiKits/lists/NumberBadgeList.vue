<template>
  <Card :headerTitle="'Numbered & Badge Lists'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> list-group-numbered</code> modifier class to numbered list group items.Numbers are
        generated via CSS for better placement inside list group items.
      </p>
    </template>
    <ol class="list-group list-group-numbered badge-list">
      <li class="list-group-item" v-for="(details, index) in numberBadgeList" :key="index">
        <div>{{ details.name }}</div>
        <span :class="`badge badge-${details.tagColor} rounded-pill p-2`">{{
          details.tagText
        }}</span>
      </li>
    </ol>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { numberBadgeList } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
