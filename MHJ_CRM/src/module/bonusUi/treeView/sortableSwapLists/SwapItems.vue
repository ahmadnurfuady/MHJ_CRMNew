<template>
  <li :class="`list-group-item nested-${props.depth}`" v-if="props.list">
    <img :src="getImages(props.list.icon)" alt="icon" /> {{ props.list.title }}

    <ul class="list-group" v-if="props.list.children && props.list.children.length">
      <template v-for="item in props.list.children" :key="item.id">
        <SwapItems :list="item" :depth="depth + 1" />
      </template>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { SwapList } from '@/types/bonusUI'
import { getImages } from '@/utils/index'
const SwapItems = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/sortableSwapLists/SwapItems.vue')
)

const props = withDefaults(
  defineProps<{
    list: SwapList
    depth: number
  }>(),
  {
    depth: 0,
  }
)
</script>
