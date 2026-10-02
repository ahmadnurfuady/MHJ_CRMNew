<template>
  <Card :headerTitle="'Effect Coverflow'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        This slider uses the <code>coverflow</code> effect from the <code>swiper</code> package to
        create a 3D rotating carousel appearance. It features centered slides, a grab cursor for
        intuitive drag interaction, and looping behavior. The <code>coverflowEffect</code> prop
        allows customization of rotation, depth, and shadow for each slide, enhancing the visual
        depth and interactivity of the slider.
      </p>
    </template>

    <Swiper
      class="coverflow-slider"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :loop="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="{ el: '.swiper-pagination' }"
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
import { EffectCoverflow, Pagination } from 'swiper/modules'

import { verticalSlider } from '@/core/data/bonusUI/owlCarousel'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const modules = [Pagination, EffectCoverflow]
</script>
