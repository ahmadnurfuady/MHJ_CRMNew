<template>
  <div class="container-fluid job-details-wrapper">
    <div class="row">
      <div class="col-xl-3 xl-40 box-col-12">
        <JobFilter />
      </div>
      <div class="col-xl-9 xl-60 box-col-12">
        <div class="card">
          <JobDetails />
        </div>
        <div class="header-faq">
          <h5 class="mb-0 f-w-600">Similar Jobs</h5>
        </div>
        <div class="row">
          <div
            class="col-xl-6 xl-100"
            v-for="(details, index) in jobCards.slice(0, 6)"
            :key="index"
          >
            <JobCard :details="details" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { jobCards } from '@/core/data/jobs/jobSearch'
import { defineAsyncComponent } from 'vue'

const JobFilter = defineAsyncComponent(() => import('@/module/job/JobFilter.vue'))
const JobDetails = defineAsyncComponent(() => import('@/module/job/JobDetails.vue'))
const JobCard = defineAsyncComponent(() => import('@/module/job/JobCard.vue'))
</script>
