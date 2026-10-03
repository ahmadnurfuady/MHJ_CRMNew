<template>
  <div class="container-fluid">
    <div class="row" v-for="(details, index) in imgDetails" :key="index">
      <div class="col-sm-12">
        <Card :headerTitle="'Hover Effect ' + details.hoverDigits" :border="true" :padding="false">
          <div class="row my-gallery gallery">
            <template v-for="(image, i) in details.images" :key="i">
              <template v-if="details.text">
                <figure
                  class="col-xxl-3 col-xl-4 col-md-6 box-col-4 img-hover"
                  @click="() => showImg(i, details.images)"
                >
                  <a :class="details.hoverClass">
                    <div>
                      <img class="img-thumbnail" :src="getImages(image.srcUrl)" />
                    </div>
                    <div class="overlay-hover">
                      <div class="overlay-content">
                        <h5>{{ image.title }}</h5>
                        <p>{{ image.description }}</p>
                        <div class="common-align gap-2">
                          <template v-for="button in image.buttons" :key="button.color">
                            <div :class="`btn btn-${button.color}`">
                              {{ button.title }}
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                  </a>
                </figure>
              </template>
              <template v-else>
                <figure
                  :class="`col-md-3 col-6 img-hover ${details.hoverClass}`"
                  @click="() => showImg(index, details.images)"
                >
                  <a href="#">
                    <div style="overflow: hidden">
                      <img class="img-thumbnail" :src="getImages(image.srcUrl)" />
                    </div>
                  </a>
                </figure>
              </template>
            </template>
          </div>
        </Card>
      </div>
    </div>
  </div>
  <VueEasyLightbox
    :visible="state.visibleRef"
    :imgs="lightBoxImages"
    :index="state.indexRef"
    @hide="onHide"
    v-if="lightBoxImages"
  />
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { imgDetails } from '@/core/data/gallery'
import type { Images } from '@/types/gallery'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const lightBoxImages = ref<string[]>([])

const state = reactive({
  visibleRef: false,
  indexRef: 0,
})

function showImg(index: number, images: Images[]) {
  lightBoxImages.value = images.map((item) => getImages(item.previewUrl))
  state.indexRef = index
  state.visibleRef = true
}

function onHide() {
  state.visibleRef = false
}
</script>
