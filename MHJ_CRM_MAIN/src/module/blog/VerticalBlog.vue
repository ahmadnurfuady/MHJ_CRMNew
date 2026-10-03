<template>
  <div class="card" v-if="props.blog">
    <div class="blog-box blog-grid text-center">
      <img
        class="img-fluid top-radius-blog"
        :src="getImages(props.blog.image)"
        :alt="props.blog.title"
      />
      <div class="blog-details-main">
        <ul class="blog-social">
          <li>{{ props.blog.date }} {{ props.blog.year }}</li>
          <li>by: {{ props.blog.createdBy }}</li>
          <li>{{ props.blog.hits }} Hits</li>
        </ul>
        <hr />
        <h6 class="blog-bottom-details">{{ props.blog.title }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Blog } from '@/types/blog'
import { getImages } from '@/utils/index'

const props = defineProps<{
  blog: Blog
}>()
</script>
