<template>
  <div class="job-search">
    <div class="card-body">
      <div class="d-flex">
        <img
          class="img-40 img-fluid m-r-20"
          :src="getImages(jobDetails.image)"
          :alt="jobDetails.mainTitle"
        />
        <div class="flex-grow-1">
          <h6 class="f-w-600">
            <a href="#">{{ jobDetails.mainTitle }}</a>
            <span class="pull-right">
              <router-link class="btn btn-primary" :to="routes.JobSearch.Apply">Apply</router-link>
            </span>
          </h6>
          <p>
            {{ jobDetails.subtitle }}
            <span>
              <Rate :rating="jobDetails.rating" />
            </span>
          </p>
        </div>
      </div>
      <div class="job-description" v-for="(item, index) in jobDetails.sections" :key="index">
        <h6>{{ item.title }}</h6>
        <ul v-if="index !== 0">
          <li v-for="(content, i) of item.content" :key="i">{{ content.description }}</li>
        </ul>
        <template v-else>
          <p class="c-o-light" v-for="(content, i) of item.content" :key="i">
            {{ content.description }}
          </p>
        </template>
      </div>
      <div class="job-description">
        <button class="btn btn-primary me-2" type="button">
          <span>
            <i class="fa-solid fa-check me-1"></i>
          </span>
          Save this job
        </button>
        <button class="btn btn-primary" type="button">
          <span>
            <i class="fa fa-share-alt me-1"></i>
          </span>
          Share
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { jobDetails } from '@/core/data/jobs/jobSearch'
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'
import { defineAsyncComponent } from 'vue'

const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'))
</script>
