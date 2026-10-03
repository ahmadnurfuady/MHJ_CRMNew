<template>
  <Card :headerTitle="'Mouse Wheel Variant'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        This Swiper instance is configured to respond to mouse wheel input, enabling users to scroll
        through slides vertically or horizontally using their mouse. By enabling the
        <code>mousewheel</code> prop and including the Mousewheel module, navigation becomes
        intuitive and seamless. Pagination is also enabled for better visual feedback.
      </p>
    </template>

    <Swiper
      class="mouseweel-swiper swiper-h"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="true"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
    >
      <SwiperSlide v-for="(slider, index) in mouseWheelVariant" :key="index">
        <img class="img-fluid" :src="getImages(slider.image)" alt="image" />
      </SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { Mousewheel, Pagination } from 'swiper/modules'

import { mouseWheelVariant } from '@/core/data/bonusUI/owlCarousel'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const modules = [Pagination, Mousewheel]
</script>
