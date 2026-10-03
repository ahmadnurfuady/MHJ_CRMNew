<template>
  <div class="header-faq">
    <h5>{{ headerTitle }}</h5>
  </div>
  <div :class="`row ${faqClass}`" v-if="props.details">
    <div
      class="col-xl-4"
      :class="
        props.details.length % 2 !== 0 && index === props.details.length - 1 ? '' : 'col-md-6'
      "
      v-for="(article, index) in props.details"
      :key="index"
    >
      <div class="row">
        <div
          class="col-xl-12"
          :class="[
            index === props.details.length - 1 &&
            article.details.length % 2 !== 0 &&
            i !== article.details.length - 1
              ? 'col-md-6'
              : '',
          ]"
          v-for="(item, i) in article.details"
          :key="i"
        >
          <div class="card">
            <div class="card-body">
              <div class="d-flex articles-icons">
                <vue-feather :type="item.icon" :class="'m-r-20'" />
                <div class="flex-grow-1">
                  <h6 class="pb-2">{{ item.title }}</h6>
                  <p class="c-light">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { articlesAndVideos } from '@/types/knowledgeBase'

const props = defineProps<{
  details: articlesAndVideos[]
  headerTitle: string
  faqClass?: string
}>()
</script>
