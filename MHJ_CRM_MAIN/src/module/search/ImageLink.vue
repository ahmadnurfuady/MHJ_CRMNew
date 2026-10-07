<template>
  <div>
    <h6 class="mb-2">About 12,120 results (0.50 seconds)</h6>
    <div
      class="my-gallery row gallery-with-description"
      id="aniimated-thumbnials"
      itemscope
    >
      <figure
        class="col-xl-3 col-sm-6"
        v-for="(src, index) in search"
        :key="index"
        @click="() => showImg(index)"
        itemprop="associatedMedia"
        itemscope
      >
        <a>
          <img
            :src="getImages(src.image || '')"
            itemprop="thumbnail"
            alt="Image description"
          />
          <div class="caption">
            <h4>{{ src.title }}</h4>
            <p>{{ src.description }}</p>
          </div>
        </a>
      </figure>
    </div>
    <vue-easy-lightbox
      :index="indexRef"
      :visible="visible"
      :imgs="lightBoxImages"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { search } from "@/core/data/searchResult";
import { getImages } from "@/utils/index";

const lightBoxImages = ref<object[]>([]);
const visible = ref<boolean>(false);
const indexRef = ref<number>(0);

function showImg(index: number) {
  indexRef.value = index;
  visible.value = true;
}
function handleHide() {
  visible.value = false;
}

onMounted(() => {
  search.forEach((item) => {
    lightBoxImages.value.push({
      src: "/images/" + item.image,
      title: item.description,
    });
  });
});
</script>
