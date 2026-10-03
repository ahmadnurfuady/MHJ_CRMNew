<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="profile-img-style">
        <!-- Profile -->
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

          <div class="col-sm-4 align-self-center">
            <div class="social-media" v-if="tour">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="https://facebook.com" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div class="row mt-4 pictures img-2">
          <figure
            class="col-sm-6"
            v-for="(img, index) in images"
            :key="index"
            @click="showImg(index)"
          >
            <img class="img-fluid rounded" :src="getImages(img)" />
          </figure>
        </div>
        <vue-easy-lightbox
          :visible="visible"
          :imgs="previewImages"
          :index="indexRef"
          @hide="handleHide"
        />
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

const images = ref([
  "other-images/profile-style-img.png",
  "other-images/profile-style-img.png",
]);

const previewImages = computed(() => images.value.map((img) => getImages(img)));

const props = defineProps<{
  tour?: boolean;
}>();

function showImg(index: number) {
  indexRef.value = index;
  visible.value = true;
}

function handleHide() {
  visible.value = false;
}
</script>
