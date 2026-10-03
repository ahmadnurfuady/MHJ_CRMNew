<template>
  <Card :headerTitle="'Vertical Slider'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swiper</code> library to create a vertical slider. To enable vertical scrolling,
        set <code>direction: 'vertical'</code>. It also supports continuous looping with
        <code>loop: true</code>, and includes pagination and navigation controls via
        <code>pagination</code> and <code>navigation</code> options.
      </p>
    </template>

    <Swiper
      class="vertical-swiper swiper-h"
      :direction="'vertical'"
      :loop="true"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
      :modules="modules"
    >
      <template v-for="(slider, index) in verticalSlider" :key="index">
        <SwiperSlide>
          <div class="swiper-slide">
            <img class="img-fluid" :src="getImages(slider.image)" alt="image" />
          </div>
        </SwiperSlide>
      </template>
      <div class="swiper-pagination"></div>
    </Swiper>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { Navigation, Pagination } from 'swiper/modules'

import { verticalSlider } from '@/core/data/bonusUI/owlCarousel'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const modules = [Navigation, Pagination]
</script>
