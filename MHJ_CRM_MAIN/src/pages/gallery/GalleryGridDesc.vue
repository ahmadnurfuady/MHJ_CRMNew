<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card
          :headerTitle="'IMAGE GALLERY WITH DESCRIPTION'"
          :cardBodyClass="'my-gallery gallery-with-description'"
          :border="true"
          :padding="false"
        >
          <div class="row">
            <figure
              class="col-xl-3 col-sm-6"
              v-for="(image, index) in images"
              :key="index"
              @click="() => showImg(index)"
            >
              <div class="my-gallery pswp-gallery">
                <div class="pswp-gallery__item" itemprop="associatedMedia">
                  <a href="#">
                    <img class="img-thumbnail" :src="getImages(image.srcUrl)" />
                    <div class="caption">
                      <h4>{{ image.title }}</h4>
                      <p>{{ image.text }}</p>
                    </div>
                  </a>
                </div>
              </div>
            </figure>
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
  />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { galleryGridDesc } from '@/core/data/gallery'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const images = ref(galleryGridDesc)
const lightBoxImages = ref<string[]>([])

const state = reactive({
  visibleRef: false,
  indexRef: 0,
})

onMounted(() => {
  lightBoxImages.value = images.value.map((item) => getImages(item.previewUrl))
})

function showImg(index: number) {
  state.indexRef = index
  state.visibleRef = true
}

function onHide() {
  state.visibleRef = false
}
</script>
