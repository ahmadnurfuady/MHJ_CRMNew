<template>
  <Card :headerTitle="'Nested Swiper'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        This example demonstrates a nested Swiper configuration. The outer Swiper scrolls
        horizontally and displays either a single image or a vertical Swiper when multiple images
        are present. For nesting, set the inner Swiper's <code>direction</code> to
        <code>'vertical'</code> and ensure both Swipers have separate
        <code>pagination</code> elements. The <code>spaceBetween</code> and
        <code>modules</code> props control spacing and functionality for both levels.
      </p>
    </template>

    <Swiper
      class="nested-horizontal-swiper swiper-h"
      :spaceBetween="50"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
    >
      <SwiperSlide v-for="(sliders, index) in nestedSwiper" :key="index">
        <template v-if="sliders.image">
          <img class="img-fluid" :src="getImages(sliders.image)" alt="image" />
        </template>
        <template v-else-if="sliders.images">
          <Swiper
            class="nested-vertical-swiper"
            :direction="'vertical'"
            :spaceBetween="50"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
          >
            <SwiperSlide v-for="(slider, i) in sliders.images" :key="i">
              <img class="img-fluid" :src="getImages(slider.image)" alt="image" />
            </SwiperSlide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </template>
      </SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { Pagination } from 'swiper/modules'

import { nestedSwiper } from '@/core/data/bonusUI/owlCarousel'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const modules = [Pagination]
</script>
