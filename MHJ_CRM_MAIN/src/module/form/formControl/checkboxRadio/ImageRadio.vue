<template>
  <Card :headerTitle="'Images with Radio'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-check-input </code>and <code>form-check-label </code>for image radio.
      </p>
    </template>
    <div class="main-img-checkbox">
      <div class="row g-3">
        <div class="col-xxl-3 col-sm-6" v-for="(item, index) in imageRadio" :key="index">
          <div class="card-wrapper border rounded-3 checkbox-checked">
            <h6 class="sub-title">{{ item.title }}</h6>
            <div class="img-checkbox">
              <input
                class="main-img-cover form-check-input"
                :id="`img-radio-${item.id}`"
                type="radio"
                name="radio6"
                :checked="item.checked"
                :disabled="item.disabled"
              />
              <label class="form-check-label mb-0" :for="`img-radio-${item.id}`">
                <img :src="getImages(item.image)" alt="coffee-beans" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { imageRadio } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
