<template>
  <Card
    :headerTitle="'Block Loading'"
    :headerClass="'mb-0'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>&lt;loading-overlay&gt;</code> from <code>vue3-loading-overlay</code> to display a
        block-level loading spinner over a specific element (not fullscreen) by setting
        <code>:is-full-page="false"</code>. Customize with <code>:background-color</code>,
        <code>:color</code>, and other props. Or use slot for custom content.
      </p>
    </template>

    <div class="block-main-wrapper position-relative">
      <div class="block-wrapper">
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
          <!-- Custom slot shown when not using dots or bars -->
          <template v-if="!['dots', 'bars'].includes(type)" #default>
            <div class="custom-loader">
              <div class="text-center fw-semibold" :style="{ color: '#343a40' }">
                Please wait...
              </div>
            </div>
          </template>
        </loading-overlay>

        <img
          class="card-img-top1 img-fluid"
          :src="getImages('other-images/profile-style-img3.png')"
          alt="nature"
        />
        <div class="p-t-10">
          <h5 class="card-title">Sunrise Mountain</h5>
          <p class="card-text c-light">
            " Ascending sunrise mountain will take you on an incredible adventure with breath-taking
            views around every corner. Savour the beauty of the natural world and find tranquilly at
            the top of this magnificent peak."
          </p>
        </div>
      </div>

      <div class="common-flex">
        <button class="button btn btn-primary block-btn-1" @click="loading('custom')">
          Block Loader 1
        </button>
        <button class="button btn btn-primary block-btn-2" @click="loading('dots')">
          Block Loader 2
        </button>
        <button class="button btn btn-primary block-btn-3" @click="loading('bars')">
          Block Loader 3
        </button>
      </div>
    </div>
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
