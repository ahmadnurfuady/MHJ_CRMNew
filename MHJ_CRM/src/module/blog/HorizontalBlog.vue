<template>
  <div class="card" v-if="props.blog">
    <div class="blog-box blog-list row">
      <div class="col-sm-5">
        <img
          class="img-fluid sm-100-w"
          :src="getImages(props.blog.image)"
          :alt="props.blog.title"
        />
      </div>
      <div class="col-sm-7">
        <div class="blog-details">
          <div class="blog-date">
            <span>{{ props.blog.date }}</span>
            {{ props.blog.year }}
          </div>
          <h6>{{ props.blog.title }}</h6>
          <div class="blog-bottom-content">
            <ul class="blog-social">
              <li>by: {{ props.blog.createdBy }}</li>
              <li>{{ props.blog.hits }} Hits</li>
            </ul>
            <hr />
            <p class="mt-0">{{ props.blog.description }}</p>
          </div>
        </div>
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
