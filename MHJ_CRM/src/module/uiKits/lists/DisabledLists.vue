<template>
  <Card :headerTitle="'Disabled Lists'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> disabled </code>to a <code> list-group-item</code> to make it appear disabled.
      </p>
    </template>

    <div class="list-group">
      <template v-for="item in disabledLists" :key="item.name">
        <a
          :class="`list-group-item list-group-item-action ${item.class}`"
          href="#"
        >
          <img class="rounded-circle" :src="getImages(item.image)" alt="user" />
          {{ item.name }}
        </a>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { disabledLists } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
