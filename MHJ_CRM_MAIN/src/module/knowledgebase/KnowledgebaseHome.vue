<template>
  <div class="col-12 position-relative">
    <div class="knowledgebase-bg">
      <img class="bg-img-cover bg-center" :src="getImages('knowledgebase/bg_1.jpg')" alt="image" />
    </div>
    <div class="knowledgebase-search">
      <div>
        <h3>How Can I help you?</h3>
        <form class="form-inline">
          <div class="form-group w-100">
            <vue-feather :type="'search'" />
            <input
              class="form-control-plaintext w-100"
              type="text"
              placeholder="Type question here"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  <FeatureCard :details="knowledgeBase" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { knowledgeBase } from '@/core/data/knowledgeBase'
import { getImages } from '@/utils/index'

const FeatureCard = defineAsyncComponent(() => import('@/module/faq/FeatureCard.vue'))
</script>
