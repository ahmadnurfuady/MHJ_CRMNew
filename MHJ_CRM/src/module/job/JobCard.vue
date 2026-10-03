<template>
  <div
    class="card"
    :class="{ 'ribbon-vertical-left-wrapper': details.ribbon }"
    v-if="props.details"
  >
    <div class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-warning" v-if="details.ribbon">
      <i :class="`icofont icofont-${details.ribbonIcon}`"></i>
    </div>
    <div class="job-search">
      <div class="card-body">
        <div class="d-flex">
          <img
            class="img-40 img-fluid m-r-20"
            :src="getImages(details.image)"
            :alt="details.title"
          />
          <div class="flex-grow-1">
            <h6>
              <a href="#">{{ details.title }}</a>
              <template v-if="details.tagTitle">
                <span class="badge badge-primary pull-right">{{ details.tagTitle }}</span>
              </template>
              <span class="pull-right" v-else>{{ details.time }}</span>
            </h6>
            <p class="mt-0">
              {{ details.subTitle }}
              <span class="ps-sm-1">
                <Rate :rating="details.rating" />
              </span>
            </p>
          </div>
        </div>
        <p>{{ details.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JobCard } from '@/types/jobs'
import { getImages } from '@/utils/index'
import { defineAsyncComponent } from 'vue'
const props = defineProps<{
  details: JobCard
}>()

const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'))
</script>
