<template>
  <div class="header-faq">
    <h5 class="mb-0">Browse Articles By Category</h5>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <Card :headerTitle="'Browse Articles'" :border="true" :padding="false">
        <div class="row browse g-sm-4 g-3">
          <div :class="articles.colClass" v-for="(articles, index) of browseArticles" :key="index">
            <div class="browse-articles">
              <h6>
                <span> <vue-feather :type="articles.titleIcon" /> </span>{{ articles.title }}
              </h6>
              <ul>
                <li v-for="(item, i) of articles.details" :key="i">
                  <a href="#">
                    <span>
                      <vue-feather :type="item.textIcon" />
                    </span>
                    <span>{{ item.listText }}</span>
                    <span class="badge badge-primary pull-right" v-if="item.tag">{{
                      item.tagTitle
                    }}</span>
                  </a>
                </li>
                <li v-if="articles.seeMore">
                  <a href="#">
                    <span>
                      <vue-feather :type="'arrow-right'" />
                    </span>
                    <span>See More ({{ articles.seeMore }})</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { browseArticles } from '@/core/data/knowledgeBase'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
