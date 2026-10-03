<template>
  <div class="row">
    <div class="col-sm-12">
      <Card :cardBodyClass="'my-gallery gallery-with-description'">
        <div class="row">
          <figure
            class="col-xxl-3 col-lg-4 col-sm-6 box-col-4"
            v-for="(photo, index) in state.photoList"
            :key="index"
            @click="showImg(index)"
          >
            <a>
              <img :src="getImages(photo.srcUrl)" itemprop="thumbnail" alt="Image description" />
              <div class="caption">
                <h4>{{ photo.userName }}</h4>
                <p class="mt-1">{{ photo.description }}</p>
              </div>
            </a>
          </figure>
        </div>
      </Card>
      <VueEasyLightbox
        :visible="state.visibleRef"
        :imgs="state.lightBoxImages"
        :index="state.indexRef"
        @hide="onHide"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, defineAsyncComponent } from 'vue'

import { photos } from '@/core/data/socialApp'
import type { Photos } from '@/types/socialApp'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = withDefaults(
  defineProps<{
    likesSection?: boolean
  }>(),
  {
    likesSection: true,
  }
)

const state = reactive({
  visibleRef: false,
  indexRef: 0,
  photoList: photos as Photos[],
  lightBoxImages: [''],
})

onMounted(() => {
  state.lightBoxImages = state.photoList.map((item) => getImages(item.previewUrl))
})

function showImg(index: number) {
  state.indexRef = index
  state.visibleRef = true
}

function onHide() {
  state.visibleRef = false
}
</script>
