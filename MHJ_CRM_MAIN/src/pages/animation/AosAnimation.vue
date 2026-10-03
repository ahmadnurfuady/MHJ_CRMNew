<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card :headerTitle="'AOS Animation'" :border="true" :padding="false">
          <div class="row gallery grid my-gallery" v-if="imageList?.length">
            <MasonryWall :items="imageList" :column-width="300" :gap="20" v-slot="{ item, index }">
              <figure :data-aos="item.animationType" @click="() => showImg(index)">
                <a href="#">
                  <img class="img-thumbnail" :src="getImages(item.srcImage)" />
                </a>
              </figure>
            </MasonryWall>
          </div>
        </Card>

        <VueEasyLightbox
          :visible="state.visibleRef"
          :imgs="lightBoxImages"
          :index="state.indexRef"
          @hide="onHide"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, defineAsyncComponent } from 'vue'

import AOS from 'aos'

import { aosAnimationImages } from '@/core/data/animation'
import { getImages } from '@/utils/index'
import MasonryWall from '@yeger/vue-masonry-wall'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const imageList = ref(aosAnimationImages)
const lightBoxImages = ref<string[]>([])

const state = reactive({
  visibleRef: false,
  indexRef: 0,
})

onMounted(() => {
  AOS.init({ duration: 1500 })
  lightBoxImages.value = imageList.value.map((item) => getImages(item.previewImage))
})

function showImg(index: number) {
  state.indexRef = index
  state.visibleRef = true
}

function onHide() {
  state.visibleRef = false
}
</script>
