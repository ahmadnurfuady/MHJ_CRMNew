<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 set-col-12 box-col-12" v-for="blog in blogs.slice(0, 1)" :key="blog.id">
        <SingleBlog :blog="blog" />
      </div>
      <div class="col-xl-6 set-col-12 box-col-12">
        <HorizontalBlog :blog="blog" v-for="blog in blogs.slice(1, 3)" :key="blog.id" />
      </div>
      <div
        class="col-md-6 col-xxl-3 box-col-6"
        v-for="blog in blogs.slice(3, blogs.length)"
        :key="blog.id"
      >
        <VerticalBlog :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { blogs } from '@/core/data/blog'

const SingleBlog = defineAsyncComponent(() => import('@/module/blog/SingleBlog.vue'))
const HorizontalBlog = defineAsyncComponent(() => import('@/module/blog/HorizontalBlog.vue'))
const VerticalBlog = defineAsyncComponent(() => import('@/module/blog/VerticalBlog.vue'))
</script>
