<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-9 xl-60 order-xl-0 order-1 box-col-12">
        <DetailsPage :details="courseDetails" :comment="corsesComments" />
      </div>
      <div class="col-xl-3 xl-40 box-col-12 learning-filter">
        <CourseFilter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { corsesComments, courseDetails } from '@/core/data/courses'

const CourseFilter = defineAsyncComponent(() => import('@/module/course/CourseFilter.vue'))
const DetailsPage = defineAsyncComponent(() => import('@/module/blog/DetailsPage.vue'))
</script>
