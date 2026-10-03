<template>
  <Card :border="false" :padding="false" v-if="props.details || props.comment">
    <div class="blog-single">
      <div class="blog-box blog-details" v-if="props.details">
        <img class="img-fluid w-100" :src="getImages(details.image)" alt="blog-main" />
        <div class="blog-details">
          <ul class="blog-social">
            <li>{{ details.date }} {{ details.year }}</li>
            <li>
              <i class="icofont icofont-user"></i>
              {{ details.createdBy }}
            </li>
            <li>
              <i class="icofont icofont-thumbs-up"></i>
              {{ details.hits }} Hits
            </li>
            <li>
              <i class="icofont icofont-ui-chat"></i>
              {{ details.comment }} Comments
            </li>
          </ul>
          <h5>{{ details.text }}</h5>
          <div class="single-blog-content-top">
            <p v-for="(detail, index) in details.description" :key="index">
              {{ detail.title }}
            </p>
          </div>
        </div>
      </div>
      <DetailsPageComment :comments="comment" v-if="props.comment" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import type { Comments, Details } from '@/types/blog'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const DetailsPageComment = defineAsyncComponent(
  () => import('@/module/blog/DetailsPageComment.vue')
)

const props = defineProps<{
  details: Details
  comment: Comments[]
}>()
</script>
