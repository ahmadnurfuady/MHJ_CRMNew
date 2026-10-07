<template>
  <div class="card boost-up-card overflow-hidden">
    <div class="p-4">
      <div class="boostup-name row">
        <h6 class="text-white f-28 f-w-700 mb-2 z-1">{{ t('dashboard.boostSales') }}</h6>
        <p class="text-white f-14 f-w-500 col-9 line-clamp">
          {{ t('dashboard.boostSalesDescription') }}
        </p>
      </div>
      <div class="img-boostup">
        <img
          class="img-boostup-img-1"
          :src="getImages('dashboard-3/boostup1.png')"
          alt="boostup"
        /><img
          class="img-boostup-img-2"
          :src="getImages('dashboard-3/boostup2.png')"
          alt="boostup"
        />
      </div>
      <div class="btn-showcase text-start">
        <a>
          <button class="btn btn-pill btn-outline-light-2x b-r-8" type="button">
            {{ t('dashboard.upgradeNow') }}
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
