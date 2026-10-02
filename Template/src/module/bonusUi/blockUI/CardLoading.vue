<template>
  <Card
    :headerTitle="'Card Loading'"
    :headerClass="'mb-0'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal card-block-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>&lt;loading-overlay&gt;</code> from <code>vue3-loading-overlay</code> to display a
        block-level loading spinner over a specific element (not fullscreen) by setting
        <code>:is-full-page="false"</code>. Customize with <code>:background-color</code>,
        <code>:color</code>, and other props. Or use slot for custom content.
      </p>
    </template>

    <div class="block-main-wrapper">
      <div class="card-block-wrapper">
        <img
          class="card-img-top2 img-fluid"
          :src="getImages('other-images/sea.jpg')"
          alt="nature"
        />
        <div class="p-10">
          <h5 class="card-title">Discover the Majesty!</h5>
          <p class="card-text c-light">
            "With our assortment of mountain stones, take a trip through untamed environments and
            historic structures. Each item infuses your area with the unadulterated beauty of nature
            while telling a tale of perseverance and time. Strength and tranquilly contained in
            these classic pieces."
          </p>
        </div>
      </div>
      <div class="common-flex">
        <button class="button btn btn-primary block-btn-4" @click="loading('custom')">
          Card Loader 1
        </button>
        <button class="button btn btn-primary block-btn-5" @click="loading('dots')">
          Card Loader 2
        </button>
        <button class="button btn btn-primary block-btn-6" @click="loading('bars')">
          Card Loader 3
        </button>
      </div>
    </div>

    <loading-overlay
      :active="loadingShow"
      :is-full-page="false"
      :opacity="0.5"
      :color="'#343a40'"
      :background-color="'#ffffffcc'"
      :width="30"
      :height="30"
      :loader="['dots', 'bars'].includes(type) ? type : ''"
    >
      <template v-if="!['dots', 'bars'].includes(type)" #default>
        <div class="custom-loader">
          <div class="text-center fw-semibold" :style="{ color: '#343a40' }">Please wait...</div>
        </div>
      </template>
    </loading-overlay>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onBeforeUnmount, ref } from 'vue'

import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const type = ref<string>('')
const loadingShow = ref<boolean>(false)

let loadingTimer: number | null = null

function loading(value: string) {
  type.value = value
  loadingShow.value = true
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
  loadingTimer = window.setTimeout(() => {
    loadingShow.value = false
    loadingTimer = null
  }, 3000)
}

onBeforeUnmount(() => {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
})
</script>
