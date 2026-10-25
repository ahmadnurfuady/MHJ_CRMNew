<template>
  <section class="promo-carousel" aria-labelledby="promo-title">
    <div class="promo-carousel__head">
      <h2 id="promo-title" class="section-title">Promo</h2>
      <router-link :to="routes.Promo.List" class="promo-carousel__link">Lihat Semua</router-link>
    </div>

    <div v-if="loading" class="promo-carousel__placeholder">Memuat promo...</div>

    <div v-else-if="slides.length === 0" class="promo-carousel__empty">
      <MhjIcon
        name="action_promo_ticket"
        :size="28"
        color="var(--app-primary-dark, #0e7490)"
        secondary-color="var(--app-secondary, #84d7eb)"
      />
      <span>Belum ada promo aktif saat ini.</span>
    </div>

    <Swiper
      v-else
      class="promo-swiper"
      :slides-per-view="1"
      :space-between="12"
      :loop="slides.length > 1"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{ el: '.promo-swiper-pagination', clickable: true }"
      :modules="modules"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.id">
        <div class="promo-slide" :class="{ 'has-image': hasRenderableImage(slide) }">
          <img
            v-if="hasRenderableImage(slide)"
            :src="slide.imageUrl!"
            :alt="slide.title"
            loading="lazy"
            @error="markImageAsFailed(slide.id)"
          />
          <div class="promo-slide__decoration" aria-hidden="true">
            <span class="promo-slide__orb promo-slide__orb--large"></span>
            <span class="promo-slide__orb promo-slide__orb--small"></span>
            <MhjIcon
              name="action_promo_ticket"
              :size="34"
              color="#fff"
              secondary-color="#fff"
            />
          </div>
          <span class="promo-slide__overlay" aria-hidden="true"></span>
          <div class="promo-slide__caption">
            <span class="promo-slide__badge">Promo Pilihan</span>
            <strong>{{ slide.title || 'Promo Spesial MHJ' }}</strong>
            <p>{{ slide.content || 'Temukan informasi promo terbaru dari MHJ.' }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div
      v-if="!loading && slides.length > 1"
      class="promo-swiper-pagination"
      aria-label="Navigasi slide promo"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules'
import { ref } from 'vue'

import { routes } from '@/router/routes'
import type { PromoSlide } from '@/types/dashboard/manager'

defineProps<{
  slides: PromoSlide[]
  loading?: boolean
}>()

const modules = [Autoplay, Pagination]
const failedImageIds = ref(new Set<PromoSlide['id']>())

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
  height: 100%;
  min-height: 210px;
  overflow: hidden;
  border-radius: 16px;
}

.promo-swiper :deep(.swiper-wrapper) {
  height: 100%;
}

.promo-swiper :deep(.swiper-slide) {
  height: auto;
}

.promo-slide {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  height: 100%;
  min-height: 210px;
  border-radius: 16px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent 55%),
    linear-gradient(145deg, var(--app-primary, #18a6e4), var(--app-secondary, #84d7eb));
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
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 999px;
  padding: 4px 9px;
  background: rgba(255, 255, 255, 0.16);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
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

.promo-swiper-pagination :deep(.swiper-pagination-bullet) {
  width: 7px;
  height: 7px;
  margin: 0 !important;
  background: var(--app-primary, #18a6e4);
  opacity: 0.25;
  transition: width 0.2s ease, opacity 0.2s ease;
}

.promo-swiper-pagination :deep(.swiper-pagination-bullet-active) {
  width: 18px;
  border-radius: 999px;
  background: var(--app-secondary, #84d7eb);
  opacity: 1;
}

@media (max-width: 420px) {
  .promo-swiper,
  .promo-slide {
    min-height: 176px;
  }

  .promo-slide__caption {
    padding: 16px;
  }
}
</style>
