<template>
  <div class="bottom-info" v-if="props.paginate">
    <div class="d-flex cb-info">
      <template v-if="props.paginateDetails">
        <p>
          Showing
          {{ props.paginate.totalItems > 0 ? props.paginate.startIndex + 1 : 0 }}-
          {{ props.paginate.totalItems > 0 ? props.paginate.endIndex + 1 : 0 }} of
          {{ props.paginate.totalItems > 0 ? props.paginate.totalItems : 0 }} entries
        </p>
      </template>

      <template v-if="props.selectedItems && props.selectedRows">
        <span class="select-info">
          <span class="select-item"> {{ props.selectedItems }} rows selected </span>
        </span>
      </template>
    </div>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: props.paginate.currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="pageSet(1)"> « </a>
      </li>

      <li class="page-item" :class="{ disabled: props.paginate.currentPage === 1 }">
        <a
          class="page-link"
          href="#"
          @click.prevent="pageSet(props.paginate.currentPage - 1)"
        >
          ‹
        </a>
      </li>

      <template v-for="page in props.paginate.pages" :key="page">
        <li class="page-item" :class="{ active: props.paginate.currentPage == page }">
          <a class="page-link" href="#" @click.prevent="pageSet(page)">{{ page }}</a>
        </li>
      </template>

      <li
        class="page-item"
        :class="{ disabled: props.paginate.currentPage == props.paginate.totalPages }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="pageSet(props.paginate.currentPage + 1)"
        >
          ›
        </a>
      </li>

      <li
        class="page-item"
        :class="{ disabled: props.paginate.currentPage == props.paginate.totalPages }"
      >
        <a class="page-link" href="#" @click.prevent="pageSet(props.paginate.totalPages)">
          »
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PaginationProps } from '@/types/common'

const props = defineProps<PaginationProps>()

const emits = defineEmits(['setPage'])

function pageSet(page: number) {
  emits('setPage', page)
}
</script>
