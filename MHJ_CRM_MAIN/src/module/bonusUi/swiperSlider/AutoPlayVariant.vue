<template>
  <Card :headerTitle="'Auto Play Variant'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        This Swiper instance is set up with autoplay functionality, allowing slides to advance
        automatically after a specified delay. By enabling the
        <code>autoplay</code> prop and including the Autoplay module, the slider provides a smooth
        and dynamic viewing experience without user interaction. Pagination can also be used to
        indicate progress and navigate between slides.
      </p>
    </template>

    <Swiper
      class="autoplay-swiper swiper-h"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
      :modules="modules"
    >
      <SwiperSlide v-for="(slider, index) in autoPlayVariant" :key="index">
        <img class="img-fluid" :src="getImages(slider.image)" alt="image" />
      </SwiperSlide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { autoPlayVariant } from '@/core/data/bonusUI/owlCarousel'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const modules = [Autoplay, Navigation, Pagination]
</script>
