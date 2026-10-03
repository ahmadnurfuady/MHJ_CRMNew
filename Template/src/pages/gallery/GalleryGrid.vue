<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card
          :headerTitle="'IMAGE GALLERY'"
          :cardBodyClass="'gallery my-gallery row'"
          :border="true"
          :padding="false"
        >
          <figure
            class="col-xl-3 col-md-4 col-6"
            v-for="(image, index) in images"
            :key="index"
            @click="showImg(index)"
          >
            <a href="#">
              <img class="img-thumbnail" :src="getImages(image.srcUrl)" />
            </a>
          </figure>
        </Card>
      </div>
    </div>
  </div>
  <vue-easy-lightbox
    :visible="state.visibleRef"
    :imgs="lightBoxImages"
    :index="state.indexRef"
    @hide="onHide"
  />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { galleryGridDetails } from '@/core/data/gallery'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const images = ref(galleryGridDetails)
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
