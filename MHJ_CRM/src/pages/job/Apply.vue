<template>
  <div class="container-fluid job-apply-wrapper">
    <div class="row">
      <div class="col-xl-3 xl-40 box-col-12">
        <JobFilter />
      </div>
      <div class="col-xl-9 xl-60 box-col-12">
        <div class="card">
          <div class="job-search">
            <div class="card-body pb-0">
              <div class="d-flex">
                <img
                  class="img-40 img-fluid m-r-20"
                  :src="getImages('job-search/1.jpg')"
                  alt="pc"
                />
                <div class="flex-grow-1">
                  <h6>
                    <a href="#">UI Designer</a>
                    <span class="pull-right">
                      <button class="btn btn-primary" type="button">
                        <span>
                          <i class="fa-solid fa-check text-white me-1"></i>
                        </span>
                        Save this job
                      </button>
                    </span>
                  </h6>
                  <p class="mt-0">
                    Endless Telecom & Technologies , NY
                    <span>
                      <Rate :rating="rating" />
                    </span>
                  </p>
                </div>
              </div>
              <div class="job-description">
                <h6 class="mb-0">Personal Details</h6>
                <JobApplyPersonalDetails />
                <h6 class="mb-0">Your Education</h6>
                <JobApplyEductionDetails />
                <h6 class="mb-0">Your Experience</h6>
                <JobApplyExperienceDetails />
                <h6 class="mb-0">Upload Your Files</h6>
                <JobApplyDocuments />
              </div>
            </div>
            <div class="card-footer common-flex justify-content-end">
              <button class="btn btn-primary" type="button">Submit</button>
              <input class="btn btn-light" type="reset" value="Cancel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
import { defineAsyncComponent, ref } from 'vue'
const rating = ref(5)

const JobFilter = defineAsyncComponent(() => import('@/module/job/JobFilter.vue'))
const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'))
const JobApplyDocuments = defineAsyncComponent(() => import('@/module/job/JobApplyDocuments.vue'))
const JobApplyPersonalDetails = defineAsyncComponent(
  () => import('@/module/job/JobApplyPersonalDetails.vue')
)
const JobApplyEductionDetails = defineAsyncComponent(
  () => import('@/module/job/JobApplyEductionDetails.vue')
)
const JobApplyExperienceDetails = defineAsyncComponent(
  () => import('@/module/job/JobApplyExperienceDetails.vue')
)
</script>
