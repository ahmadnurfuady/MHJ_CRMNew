<template>
  <Card :headerTitle="'Images with Checkbox'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-check-input </code>and <code>form-check-label </code>for image checkbox.
      </p>
    </template>
    <div class="main-img-checkbox">
      <div class="row g-3">
        <div class="col-xxl-3 col-sm-6" v-for="(image, index) in imageCheckboxList" :key="index">
          <div class="card-wrapper border rounded-3 checkbox-checked">
            <h6 class="sub-title">{{ image.title }}</h6>
            <div class="img-checkbox">
              <input
                class="main-img-cover form-check-input"
                :id="`img-check-${image.id}`"
                type="checkbox"
                :checked="image.checked"
                :disabled="image.disabled"
              />
              <label class="form-check-label mb-0" :for="`img-check-${image.id}`">
                <img :src="getImages(image.image)" alt="coffee-beans" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { imageCheckbox } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const imageCheckboxList = ref(imageCheckbox)
</script>
