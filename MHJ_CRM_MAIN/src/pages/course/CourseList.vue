<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-9 xl-60 order-xl-0 order-1 box-col-12">
        <div class="row">
          <div class="col-xl-12" v-for="list in courseList.slice(0, 2)" :key="list.id">
            <HorizontalBlog :blog="list" />
          </div>
          <div
            class="col-xl-4 xl-50 col-sm-6 box-col-6"
            v-for="list in courseList.slice(2, courseList.length)"
            :key="list.id"
          >
            <VerticalBlog :blog="list" />
          </div>
        </div>
      </div>
      <div class="col-xl-3 xl-40 box-col-12 learning-filter">
        <CourseFilter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { courseList } from '@/core/data/courses'

const HorizontalBlog = defineAsyncComponent(() => import('@/module/blog/HorizontalBlog.vue'))
const VerticalBlog = defineAsyncComponent(() => import('@/module/blog/VerticalBlog.vue'))
const CourseFilter = defineAsyncComponent(() => import('@/module/course/CourseFilter.vue'))
</script>
