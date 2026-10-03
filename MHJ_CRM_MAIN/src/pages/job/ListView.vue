<template>
  <div class="container-fluid list-view-wrapper">
    <div class="row">
      <div class="col-xl-3 xl-40 box-col-12">
        <JobFilter />
      </div>
      <div class="col-xl-9 xl-60 box-col-12">
        <JobCard :details="details" v-for="details in filteredCards" :key="details.id" />
        <div class="job-pagination">
          <CommonPagination
            :color="'primary'"
            :totalPages="jobCards.length"
            :pageSize="10"
            @pagination="handlePagination($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { jobCards } from '@/core/data/jobs/jobSearch'
import type { Pagination } from '@/types/common'
import type { JobCard } from '@/types/jobs'

const JobFilter = defineAsyncComponent(() => import('@/module/job/JobFilter.vue'))
const JobCard = defineAsyncComponent(() => import('@/module/job/JobCard.vue'))
const CommonPagination = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/CommonPagination.vue')
)

const cards = ref(jobCards)
const filteredCards = ref<JobCard[]>([])

function handlePagination(pagination: Pagination) {
  if (pagination) {
    filteredCards.value = cards.value.slice(pagination.startIndex, pagination.endIndex + 1)
  }
}
</script>
