<template>
  <nav v-if="pagination" :class="props.class">
    <ul
      :class="[
        `pagination pagination-${props.color} pagin-border-${props.color}`,
        props.alignmentClass,
        props.sizeClass,
      ]"
    >
      <li class="page-item" :class="{ disabled: currentPage === 1 && props.disable }">
        <a class="page-link" href="#" @click.prevent="handlePage(-1)">Previous</a>
      </li>
      <template v-for="page in pagination.pages" :key="page">
        <li class="page-item" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="setPage(page)">{{
            getPageNumber(page)
          }}</a>
        </li>
      </template>
      <li
        class="page-item"
        :class="{ disabled: currentPage === pagination?.totalPages && props.disable }"
      >
        <a class="page-link" href="#" @click.prevent="handlePage(1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'

import type { PaginationProps } from '@/types/bonusUI'
import { handlePagination } from '@/utils/pagination'

const { paginate, handlePage, setPage, setTotalPages, pagination, currentPage } = handlePagination()

const props = withDefaults(defineProps<PaginationProps>(), {
  disable: true,
  totalPages: 20,
  pageSize: 1,
})

const emits = defineEmits(['pagination'])

onMounted(() => {
  setTotalPages(props.totalPages, props.pageSize)
  paginate()
})

watch(
  () => pagination.value,
  (newValue) => {
    if (newValue) {
      emits('pagination', newValue)
    }
  }
)

function getPageNumber(page: number) {
  if (props.type === 'romanUppercase') {
    return toRoman(page)
  } else if (props.type === 'romanLowercase') {
    return toRoman(page).toLowerCase()
  } else {
    return page
  }
}

const toRoman = (num: number): string => {
  const romanMap: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]
  let result = ''
  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      result += symbol
      num -= value
    }
  }
  return result
}
</script>
