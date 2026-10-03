<template>
  <div class="tab-content custom-input">
    <div class="sidebar-body common-form">
      <!-- Thumbnail DropZone -->
      <div class="product-upload">
        <p>
          Product Thumbnail Image
          <span class="c-o-light">&lpar;Main Image&rpar;</span>
        </p>
        <div class="dropzone-wrapper">
          <DropZone
            class="show-preview custom-scrollbar dropzone-secondary"
            :uploadOnDrop="true"
            :acceptedFiles="['image']"
            :maxFiles="1"
            :multipleUpload="false"
          >
            <template #message>
              <div class="dz-message needsclick">
                <i class="fa-solid fa-cloud-arrow-up fa-fade"></i>
                <h6>Drop files here or click to upload.</h6>
                <span class="note needsclick">SVG, PNG, JPG <strong>or</strong> GIF</span>
              </div>
            </template>
          </DropZone>
        </div>
      </div>

      <!-- Gallery DropZone -->
      <div class="product-upload">
        <p>Product Gallery</p>
        <div class="dropzone-wrapper">
          <DropZone
            class="show-preview custom-scrollbar dropzone-secondary"
            :uploadOnDrop="true"
            :acceptedFiles="['image']"
            :multipleUpload="true"
          >
            <template #message>
              <div class="dz-message needsclick">
                <i class="fa-solid fa-cloud-arrow-up fa-fade"></i>
                <h6>Drop files here or click to upload.</h6>
                <span class="note needsclick">SVG, PNG, JPG <strong>or</strong> GIF</span>
              </div>
            </template>
          </DropZone>
        </div>
      </div>
      <div class="product-buttons">
        <button class="btn" type="button" @click="handleTab(-1)">
          <SvgIcon :icon="'back-arrow'"></SvgIcon>Previous
        </button>
        <button class="btn" type="button" @click="handleTab(1)">
          Next
          <SvgIcon :icon="'front-arrow'"></SvgIcon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { useProduct } from '@/store/product'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const props = defineProps<{
  activeTabId: number
}>()

const emits = defineEmits(['changeTab'])
const { changeTab } = useProduct()

function handleTab(value: number) {
  if (props.activeTabId) {
    const updatedId = changeTab(value, props.activeTabId)
    if (updatedId) {
      emits('changeTab', updatedId)
    }
  }
}
</script>
