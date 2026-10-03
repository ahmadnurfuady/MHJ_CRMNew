<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 box-col-12">
        <Card
          :headerTitle="'Masonry Gallery With Description'"
          :border="true"
          :padding="false"
          :cardBodyClass="'photoswipe-pb-responsive'"
        >
          <div class="my-gallery grid gallery-with-description">
            <div class="row" v-if="images">
              <MasonryWall :items="images" :column-width="300" :gap="20" v-slot="{ item, index }">
                <figure @click="() => showImg(index)">
                  <a href="#">
                    <img class="img-thumbnail" :src="getImages(item.srcUrl)" />
                    <div class="caption">
                      <h4>Portfolio Title</h4>
                      <p>
                        Expert photographers have a thorough grasp of their gear and know how to get
                        the best results by experimenting with different lenses, lighting setups,
                        and post-processing software.
                      </p>
                    </div>
                  </a>
                </figure>
              </MasonryWall>
            </div>
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
import { masonryImage } from '@/core/data/gallery'
import { getImages } from '@/utils/index'
import MasonryWall from '@yeger/vue-masonry-wall'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const images = ref(masonryImage)
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
