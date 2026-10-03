<template>
  <div class="container-fluid">
    <div class="row">
      <KnowledgebaseHome />

      <div class="col-sm-12">
        <Article />
      </div>
      <div class="col-lg-12">
        <FeaturedTutorials :details="featuredTutorialDetails" :headerTitle="'Featured Tutorials'" />
      </div>
      <div class="col-lg-12">
        <LatestArticlesVideos
          :details="articlesAndVideosDetails"
          :headerTitle="'Latest Articles and Videos'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { articlesAndVideosDetails, featuredTutorialDetails } from '@/core/data/knowledgeBase'

const FeaturedTutorials = defineAsyncComponent(() => import('@/module/faq/FeaturedTutorials.vue'))
const LatestArticlesVideos = defineAsyncComponent(
  () => import('@/module/faq/LatestArticlesVideos.vue')
)
const KnowledgebaseHome = defineAsyncComponent(
  () => import('@/module/knowledgebase/KnowledgebaseHome.vue')
)
const Article = defineAsyncComponent(() => import('@/module/knowledgebase/Article.vue'))
</script>
