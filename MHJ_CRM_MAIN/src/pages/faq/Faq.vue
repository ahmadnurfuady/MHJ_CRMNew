<template>
  <div class="container-fluid">
    <div class="faq-wrap">
      <FeatureCard :details="faqDetails" />

      <div class="col-lg-12">
        <div class="header-faq">
          <h5>Quick Questions are Answered</h5>
        </div>
        <div class="row default-according style-1 faq-accordion">
          <div class="col-xl-8 xl-60 col-lg-6 col-md-7">
            <QuestionAnswer />
          </div>
          <div class="col-xl-4 xl-40 col-lg-6 col-md-5">
            <div class="row">
              <div class="col-lg-12">
                <SearchArticle />
              </div>
              <div class="col-lg-12">
                <Navigation />
              </div>
              <div class="col-lg-12">
                <LatestUpdates />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <FeaturedTutorials :details="faqFeaturedTutorial" :headerTitle="'Featured Tutorials'" />
      </div>
      <div class="col-lg-12">
        <LatestArticlesVideos
          :details="faqArticlesAndVideos"
          :headerTitle="'Latest Articles and Videos'"
          :faqClass="'faq-wrapper'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { faqArticlesAndVideos, faqDetails, faqFeaturedTutorial } from '@/core/data/faq'

const FeatureCard = defineAsyncComponent(() => import('@/module/faq/FeatureCard.vue'))
const QuestionAnswer = defineAsyncComponent(() => import('@/module/faq/QuestionAnswer.vue'))
const SearchArticle = defineAsyncComponent(() => import('@/module/faq/SearchArticle.vue'))
const Navigation = defineAsyncComponent(() => import('@/module/faq/Navigation.vue'))
const LatestUpdates = defineAsyncComponent(() => import('@/module/faq/LatestUpdates.vue'))
const FeaturedTutorials = defineAsyncComponent(() => import('@/module/faq/FeaturedTutorials.vue'))
const LatestArticlesVideos = defineAsyncComponent(
  () => import('@/module/faq/LatestArticlesVideos.vue')
)
</script>
