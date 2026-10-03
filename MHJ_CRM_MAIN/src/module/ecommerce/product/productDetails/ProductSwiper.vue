<template>
  <div class="col-xxl-4 col-md-6 box-col-6">
    <div class="card">
      <div class="card-body">
        <div class="product-slider owl-carousel owl-theme" id="sync1">
          <Swiper
            :slidesPerView="1"
            :loop="true"
            :autoplay="{ delay: 3500, disableOnInteraction: false }"
            :thumbs="{ swiper: thumbsSwiper }"
            :centeredSlides="true"
            :modules="modules"
            class="item"
          >
            <Swiper-slide v-for="(product, index) in products?.images" :key="index">
              <figure class="zoom" :style="{ backgroundImage: `url('${getImages(product)}')` }">
                <img :src="getImages(product)" alt="index" />
              </figure>
            </Swiper-slide>
          </Swiper>
        </div>
        <div class="owl-carousel owl-theme product-tab-slider" id="sync2">
          <Swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :slidesPerView="4"
            :spaceBetween="10"
            :watchSlidesProgress="true"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="Swiper"
          >
            <Swiper-slide v-for="(product, index) in products?.images" :key="index">
              <img
                :src="getImages(product)"
                class="img-fluid bg-img"
                alt="index"
                style="height: auto"
              />
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getImages } from '@/utils/index'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperClass } from 'swiper/types'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useRoute, useRouter } from 'vue-router'
import { useProduct } from '@/store/product'
import { storeToRefs } from 'pinia'

const thumbsSwiper = ref<SwiperClass | null>(null)
const modules = [Autoplay, Navigation, FreeMode, Thumbs]

const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper
}

const store = useProduct()
const { productState } = storeToRefs(store)

const route = useRoute()
const router = useRouter()
const products = ref<(typeof productState.value.product)[0] | null>(null)

watchEffect(() => {
  let paramId = route.params.id
  if (Array.isArray(paramId)) paramId = paramId[0]
  const routeId = parseInt(paramId as string)
  if (isNaN(routeId)) {
    products.value = productState.value.product[0]
    router.replace({
      name: 'ProductDetails',
      params: { id: productState.value.product[0]?.id },
    })
  } else {
    products.value =
      productState.value.product.find((p) => p.id === routeId) ?? productState.value.product[0]
  }
})
</script>
