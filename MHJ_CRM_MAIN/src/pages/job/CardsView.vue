<template>
  <div class="container-fluid card-view-wrapper">
    <div class="row">
      <div class="col-xl-3 xl-40 box-col-12">
        <JobFilter />
      </div>
      <div class="col-xl-9 xl-60 box-col-12">
        <div class="row">
          <div class="col-xl-6 xl-100" v-for="(details, index) in filteredCards" :key="index">
            <JobCard :details="details" />
          </div>
          <div class="col-sm-12">
            <div class="job-pagination">
              <CommonPagination
                :color="'primary'"
                :totalPages="jobCards.length"
                :pageSize="12"
                @pagination="handlePagination($event)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
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
