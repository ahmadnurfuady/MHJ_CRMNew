<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="profile-img-style">
        <div class="row">
          <div class="col-sm-8">
            <div class="d-flex">
              <img
                class="img-thumbnail rounded-circle me-3"
                :src="getImages('user/7.jpg')"
              />
              <div class="flex-grow-1 align-self-center">
                <h5 class="mt-0 user-name">William C. Jennings</h5>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-lg-12 col-xl-4">
            <div v-if="tour">
              <img
                class="img-fluid rounded"
                :src="getImages('other-images/sidebar-bg.jpg')"
              />
            </div>

            <div class="my-gallery" v-else>
              <figure v-for="(src, index) in images" :key="index" @click="showImg(index)">
                <img class="img-fluid rounded" :src="getImages(src.image)" />
              </figure>

              <vue-easy-lightbox
                :index="indexRef"
                :visible="visible"
                :imgs="previewImages"
                @hide="handleHide"
              />
            </div>
          </div>

          <div class="col-xl-6">
            <p>
              Success isn't about the end result, it's about what you learn along the way.
              Confidence. If you have it, you can make anything look good. Grunge is a
              hippied romantic version of punk. I'm an accomplice to helping women get
              what they want. Clothes can transform your mood and confidence. I think it's
              an old fashioned notion that fashion needs to be exclusive to be
              fashionable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { getImages } from "@/utils/index";

const visible = ref(false);
const indexRef = ref(0);

const props = defineProps<{
  tour?: boolean;
}>();
const images = ref([{ image: "blog/img.png" }]);

const previewImages = computed(() => images.value.map((img) => getImages(img.image)));

function showImg(index: number) {
  indexRef.value = index;
  visible.value = true;
}

function handleHide() {
  visible.value = false;
}
</script>
