<template>
  <section class="promo-carousel" aria-labelledby="promo-title">
    <div class="promo-carousel__head">
      <h2 id="promo-title" class="section-title">Promo</h2>
      <router-link :to="routes.Promo.List" class="promo-carousel__link">Lihat Semua</router-link>
    </div>

    <div v-if="loading" class="promo-carousel__placeholder">Memuat promo...</div>

    <div v-else-if="slides.length === 0" class="promo-carousel__empty">
      <SolarIcon
        name="ticket-sale"
        :size="28"
        color="currentColor"
        secondary-color="currentColor"
        :secondary-opacity="1"
      />
      <span>Belum ada promo aktif saat ini.</span>
    </div>

    <Swiper
      v-else
      class="promo-swiper"
      slides-per-view="auto"
      :centered-slides="true"
      :space-between="16"
      :loop="slides.length > 1"
      :initial-slide="loopStartIndex"
      :speed="650"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :modules="modules"
      @swiper="setSwiper"
      @slide-change="syncActivePromo"
    >
      <SwiperSlide v-for="slide in displaySlides" :key="slide.key">
        <router-link
          :to="{ name: 'PromoCatalogDetail', params: { id: slide.promo.id } }"
          class="promo-slide"
          :class="{ 'has-image': hasRenderableImage(slide.promo) }"
          :aria-label="`Lihat detail ${slide.promo.title || 'promo MHJ'}`"
        >
          <img
            v-if="hasRenderableImage(slide.promo)"
            :src="slide.promo.imageUrl!"
            :alt="slide.promo.title"
            loading="lazy"
            @error="markImageAsFailed(slide.promo.id)"
          />
          <div class="promo-slide__decoration" aria-hidden="true">
            <span class="promo-slide__orb promo-slide__orb--large"></span>
            <span class="promo-slide__orb promo-slide__orb--small"></span>
            <SolarIcon
              name="ticket-sale"
              :size="34"
              color="#fff"
              secondary-color="#fff"
              :secondary-opacity="1"
            />
          </div>
          <span class="promo-slide__overlay" aria-hidden="true"></span>
          <span class="promo-slide__preview-overlay" aria-hidden="true"></span>
          <div class="promo-slide__caption">
            <span class="promo-slide__badge">Promo Pilihan</span>
            <strong>{{ slide.promo.title || 'Promo Spesial MHJ' }}</strong>
            <p>{{ slide.promo.content || 'Temukan informasi promo terbaru dari MHJ.' }}</p>
          </div>
        </router-link>
      </SwiperSlide>
    </Swiper>

    <div
      v-if="!loading && slides.length > 1"
      class="promo-swiper-pagination"
      aria-label="Navigasi slide promo"
    >
      <button
        v-for="(_, index) in slides"
        :key="index"
        type="button"
        class="promo-swiper-pagination__bullet"
        :class="{ active: activePromoIndex === index }"
        :aria-label="`Tampilkan promo ${index + 1}`"
        :aria-current="activePromoIndex === index ? 'true' : undefined"
        @click="goToPromo(index)"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { computed, ref } from 'vue'

import { routes } from '@/router/routes'
import type { PromoSlide } from '@/types/dashboard/manager'

const props = defineProps<{
  slides: PromoSlide[]
  loading?: boolean
}>()

const modules = [Autoplay]
const failedImageIds = ref(new Set<PromoSlide['id']>())
const swiperInstance = ref<SwiperInstance | null>(null)
const activePromoIndex = ref(0)

const displaySlides = computed(() => {
  const repetitions = props.slides.length > 1 && props.slides.length < 4 ? 3 : 1
  return Array.from({ length: repetitions }, (_, repetition) =>
    props.slides.map((promo, promoIndex) => ({
      key: `${repetition}-${promo.id}`,
      promo,
      promoIndex,
    })),
  ).flat()
})

const loopStartIndex = computed(() => (displaySlides.value.length > props.slides.length ? props.slides.length : 0))

function setSwiper(swiper: SwiperInstance): void {
  swiperInstance.value = swiper
  syncActivePromo(swiper)
}

function syncActivePromo(swiper: SwiperInstance): void {
  activePromoIndex.value = displaySlides.value[swiper.realIndex]?.promoIndex ?? 0
}

function goToPromo(index: number): void {
  swiperInstance.value?.slideToLoop(loopStartIndex.value + index)
}

function hasRenderableImage(slide: PromoSlide): boolean {
  return Boolean(slide.imageUrl) && !failedImageIds.value.has(slide.id)
}

function markImageAsFailed(id: PromoSlide['id']) {
  failedImageIds.value = new Set([...failedImageIds.value, id])
}
</script>

<style scoped>
.promo-carousel {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 14px;
  width: 100%;
  min-width: 0;
  height: 100%;
  overflow: hidden;
}

.promo-carousel__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.section-title {
  margin: 0;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.promo-carousel__link {
  flex: 0 0 auto;
  color: var(--app-primary, #18a6e4);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}

.promo-carousel__link:hover {
  text-decoration: underline;
}

.promo-carousel__placeholder,
.promo-carousel__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 160px;
  border: 1px dashed #dde4e9;
  border-radius: 16px;
  color: #93a0aa;
  background: #f9fbfc;
  font-size: 12.5px;
}

.promo-swiper {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: auto;
  overflow: hidden;
  border-radius: 16px;
}

.promo-swiper :deep(.swiper-wrapper) {
  align-items: center;
  height: 100%;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

.promo-swiper :deep(.swiper-slide) {
  width: min(72%, 432px);
  height: auto;
  aspect-ratio: 4 / 5;
  transform: scale(0.92);
  transition:
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.65s ease;
}

.promo-swiper :deep(.swiper-slide-active) {
  z-index: 2;
  transform: scale(1);
}

.promo-slide {
  position: relative;
  display: block;
  overflow: hidden;
  isolation: isolate;
  height: 100%;
  border-radius: 16px;
  color: inherit;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent 55%),
    linear-gradient(145deg, var(--app-primary, #18a6e4), var(--app-secondary, #84d7eb));
  text-decoration: none;
}

.promo-slide img {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-slide__decoration {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
  color: rgba(255, 255, 255, 0.92);
}

.promo-slide__decoration > :last-child {
  position: relative;
  z-index: 1;
  opacity: 0.9;
}

.promo-slide__orb {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
}

.promo-slide__orb--large {
  top: -76px;
  right: -58px;
  width: 190px;
  height: 190px;
}

.promo-slide__orb--small {
  top: 54px;
  right: 74px;
  width: 54px;
  height: 54px;
}

.promo-slide__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(180deg, transparent 18%, rgba(5, 34, 55, 0.84) 100%);
  pointer-events: none;
}

.promo-slide__preview-overlay {
  position: absolute;
  inset: 0;
  z-index: 4;
  background: linear-gradient(
    145deg,
    var(--app-primary, #18a6e4),
    var(--app-secondary, #84d7eb)
  );
  opacity: 0.78;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.promo-swiper :deep(.swiper-slide-active) .promo-slide__preview-overlay {
  opacity: 0;
}

.promo-slide:not(.has-image) .promo-slide__overlay {
  background: linear-gradient(180deg, transparent 24%, rgba(5, 65, 91, 0.72) 100%);
}

.promo-slide__caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding: 20px;
  color: #fff;
}

.promo-slide__badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 8px;
  border: 1px solid rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  padding: 4px 9px;
  color: #0b4f6c;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 2px 8px rgba(5, 34, 55, 0.2);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  backdrop-filter: blur(6px);
}

.promo-slide__caption strong {
  display: block;
  overflow: hidden;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.promo-slide__caption p {
  display: -webkit-box;
  overflow: hidden;
  margin: 5px 0 0;
  font-size: 11.5px;
  line-height: 1.45;
  opacity: 0.88;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.promo-swiper-pagination {
  position: static !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 10px;
  text-align: center;
}

.promo-swiper-pagination__bullet {
  width: 7px;
  height: 7px;
  border: 0;
  border-radius: 999px;
  padding: 0;
  background: var(--app-primary, #18a6e4);
  opacity: 0.25;
  transition: width 0.2s ease, opacity 0.2s ease;
}

.promo-swiper-pagination__bullet.active {
  width: 18px;
  background: var(--app-primary, #18a6e4);
  opacity: 1;
}

@media (max-width: 420px) {
  .promo-swiper :deep(.swiper-slide) {
    width: 78%;
  }

  .promo-slide__caption {
    padding: 16px;
  }
}
</style>
