<template>
  <div class="card" v-if="props.blog">
    <div class="blog-box blog-shadow">
      <img class="img-fluid" :src="getImages(props.blog.image)" :alt="props.blog.title" />
      <div class="blog-details">
        <p>{{ props.blog.date }} {{ props.blog.year }}</p>
        <h5 class="text-white">{{ props.blog.title }}</h5>
        <ul class="blog-social">
          <li><SolarIcon name="icofont-user" class="icofont" />{{ props.blog.createdBy }}</li>
          <li><SolarIcon name="icofont-thumbs-up" class="icofont" />{{ props.blog.hits }} Hits</li>
          <li><SolarIcon name="icofont-ui-chat" class="icofont" />{{ props.blog.comment }} Comments</li>
        </ul>
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
