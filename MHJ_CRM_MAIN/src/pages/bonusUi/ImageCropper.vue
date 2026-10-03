<template>
  <div class="container-fluid">
    <div class="img-cropper">
      <div class="row">
        <div class="col-sm-12">
          <Card :headerTitle="'Image Cropper'" :border="true" :padding="false">
            <template #header5>
              <p class="f-m-light mt-1">
                Use <code>vue-advanced-cropper</code> to create an interactive image cropping tool
                that allows users to upload, zoom, move, and preview cropped images in real-time.
              </p>
            </template>
            <div class="row align-items-center">
              <div class="col-xl-9 col-md-12">
                <div class="img-container">
                  <Cropper
                    ref="cropper"
                    :src="imageSrc"
                    :stencil-props="{
                      minAspectRatio: 10 / 20,
                    }"
                    :resize-image="true"
                    class="cropper"
                    @change="onChange"
                  />
                </div>
              </div>
              <div class="col-xl-3 col-md-12">
                <div class="docs-preview clearfix"></div>
                <div class="docs-data" v-if="result.coordinates">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text">X</span>
                    <input
                      class="form-control"
                      id="dataX"
                      type="text"
                      placeholder="x"
                      :value="result.coordinates.left"
                    />
                    <span class="input-group-text">px</span>
                  </div>
                  <div class="input-group input-group-sm">
                    <span class="input-group-text">Y</span>
                    <input
                      class="form-control"
                      id="dataY"
                      type="text"
                      placeholder="y"
                      :value="result.coordinates.top"
                    />
                    <span class="input-group-text">px</span>
                  </div>
                  <div class="input-group input-group-sm">
                    <span class="input-group-text">Width</span>
                    <input
                      class="form-control"
                      id="dataWidth"
                      type="text"
                      placeholder="width"
                      :value="result.coordinates.width"
                    />
                    <span class="input-group-text">px</span>
                  </div>
                  <div class="input-group input-group-sm">
                    <span class="input-group-text">Height </span>
                    <input
                      class="form-control"
                      id="dataHeight"
                      type="text"
                      placeholder="height"
                      :value="result.coordinates.height"
                    />
                    <span class="input-group-text">px</span>
                  </div>
                </div>
                <img :src="result.image" v-if="result && result.image" class="img-fluid mt-2" />
              </div>
            </div>
          </Card>
          <Card>
            <div class="row g-2">
              <div class="col-xl-12 col-md-12 docs-buttons">
                <div class="btn-group">
                  <button class="btn btn-primary" type="button" @click="zoom(2)">
                    <span class="docs-tooltip" v-tooltip :title="'Zoom In'"
                      ><span class="fa-solid fa-magnifying-glass-plus"></span
                    ></span>
                  </button>
                  <button
                    class="btn button-light-primary"
                    type="button"
                    data-method="zoom"
                    data-option="-0.1"
                    title="Zoom Out"
                    @click="zoom(0.5)"
                  >
                    <span class="docs-tooltip" v-tooltip :title="'Zoom Out'"
                      ><span class="fa-solid fa-magnifying-glass-minus txt-primary"></span
                    ></span>
                  </button>
                </div>
                <div class="btn-group">
                  <button class="btn btn-outline-secondary" type="button" @click="move('left')">
                    <span class="docs-tooltip" v-tooltip :title="'Move Left'"
                      ><span class="fa-solid fa-arrow-left"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-secondary" type="button" @click="move('right')">
                    <span class="docs-tooltip" v-tooltip :title="'Move Right'"
                      ><span class="fa-solid fa-arrow-right"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-secondary" type="button" @click="move('top')">
                    <span class="docs-tooltip" v-tooltip :title="'Move Up'"
                      ><span class="fa-solid fa-arrow-up"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-secondary" type="button" @click="move('bottom')">
                    <span class="docs-tooltip" v-tooltip :title="'Move Down'"
                      ><span class="fa-solid fa-arrow-down"></span
                    ></span>
                  </button>
                </div>
                <div class="btn-group">
                  <button class="btn btn-outline-success" type="button" @click="rotate(-45)">
                    <span class="docs-tooltip" v-tooltip :title="'Rotate Left'"
                      ><span class="fa-solid fa-rotate-left"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-success" type="button" @click="rotate(45)">
                    <span class="docs-tooltip" v-tooltip :title="'Rotate Right'"
                      ><span class="fa-solid fa-rotate-right"></span
                    ></span>
                  </button>
                </div>
                <div class="btn-group">
                  <button class="btn btn-outline-info" type="button" @click="flip(true, false)">
                    <span class="docs-tooltip" v-tooltip :title="'Flip Horizontal'"
                      ><span class="fa-solid fa-arrows-left-right"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-info" type="button" @click="flip(false, true)">
                    <span class="docs-tooltip" v-tooltip :title="'Flip Vertical'"
                      ><span class="fa-solid fa-arrows-up-down"></span
                    ></span>
                  </button>
                </div>
                <div class="btn-group">
                  <button class="btn btn-outline-warning" type="button" @click="resize(2, 2)">
                    <span class="docs-tooltip" v-tooltip title="Resize(x2)"
                      ><span class="fa-solid fa-maximize"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-warning" type="button" @click="resize(1, 2)">
                    <span class="docs-tooltip" v-tooltip title="Resize height(2x)">
                      <span class="fa-solid fa-arrows-up-down"></span>
                    </span>
                  </button>
                  <button class="btn btn-outline-warning" type="button" @click="resize(2, 1)">
                    <span class="docs-tooltip" v-tooltip title="Resize width(2x)"
                      ><span class="fa-solid fa-arrows-left-right"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-warning" type="button" @click="resize(0.5, 0.5)">
                    <span class="docs-tooltip" v-tooltip title="Resize(x1/2)"
                      ><span class="fa-solid fa-minimize"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-warning" type="button" @click="maximize()">
                    <span class="docs-tooltip" v-tooltip title="Maximize"
                      ><span class="fa-solid fa-expand"></span
                    ></span>
                  </button>
                  <button class="btn btn-outline-warning" type="button" @click="center()">
                    <span class="docs-tooltip" v-tooltip title="Center"
                      ><span class="fa-solid fa-arrows-to-circle"></span
                    ></span>
                  </button>
                </div>
                <div class="btn-group"></div>
                <div class="btn-group">
                  <label
                    class="btn btn-outline-dark btn-upload"
                    for="inputImage"
                    title="Upload image file"
                  >
                    <input
                      class="sr-only"
                      id="inputImage"
                      type="file"
                      name="file"
                      accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff"
                      @change="onFileChange"
                    /><span
                      class="docs-tooltip"
                      data-bs-toggle="tooltip"
                      data-animation="false"
                      title="Upload"
                      ><span class="fa-solid fa-upload"></span
                    ></span>
                  </label>
                  <button class="btn btn-outline-dark" type="button" @click="reset()">
                    <span class="docs-tooltip" v-tooltip title="Destroy"
                      ><span class="fa-solid fa-power-off"></span
                    ></span>
                  </button>
                </div>
                <br />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { Cropper } from 'vue-advanced-cropper'

import { imageCropper } from '@/utils/imageCropper'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const {
  imageSrc,
  cropper,
  result,
  onFileChange,
  onChange,
  zoom,
  move,
  rotate,
  flip,
  resize,
  center,
  maximize,
  reset,
} = imageCropper()
</script>

<style scoped lang="scss">
svg {
  height: 15px;
  width: 15px;
}

.btn {
  &:hover {
    svg {
      stroke: #fff;
      fill: #fff;
    }
  }
}
</style>
