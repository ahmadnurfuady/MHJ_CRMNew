<template>
  <Card
    :headerTitle="'Rounded Pagination'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        This pagination component uses icon-based navigation (chevrons) to move between pages. It
        includes support for skipping directly to the first or last page, shows ellipsis when there
        are too many pages to display at once, and visually highlights the active page. Use the
        <code>setPage()</code> and <code>handlePage()</code> methods to control the current page
        dynamically.
      </p>
    </template>
    <nav>
      <ul class="pagination pagination-dark pagin-border-dark gap-2" v-if="pagination">
        <li class="page-item">
          <a class="page-link rounded-circle" href="#" @click.prevent="handlePage(-1)">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li class="page-item" :class="{ active: currentPage === 1 }" v-if="currentPage >= 4">
          <a class="page-link rounded-circle" href="#" @click.prevent="setPage(1)">1</a>
        </li>
        <template v-if="currentPage >= 4">
          <li class="page-item disabled">
            <a class="page-link rounded-circle" href="#">...</a>
          </li>
        </template>
        <template v-for="page in pagination.pages" :key="page">
          <li class="page-item" v-if="page !== pagination.totalItems">
            <a class="page-link rounded-circle" href="#" @click.prevent="setPage(page)">{{
              page
            }}</a>
          </li>
        </template>
        <template v-if="currentPage < pagination.totalItems - 2">
          <li class="page-item disabled">
            <a class="page-link rounded-circle" href="#">...</a>
          </li>
        </template>
        <li class="page-item">
          <a
            class="page-link rounded-circle"
            href="#"
            @click.prevent="setPage(pagination.totalItems)"
            >{{ pagination.totalItems }}</a
          >
        </li>
        <li class="page-item">
          <a class="page-link rounded-circle" href="#" @click.prevent="handlePage(1)">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue'

import { handlePagination } from '@/utils/pagination'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const { paginate, handlePage, setPage, setTotalPages, pagination, currentPage } = handlePagination()

onMounted(() => {
  setTotalPages(20, 1)
  paginate()
})
</script>
