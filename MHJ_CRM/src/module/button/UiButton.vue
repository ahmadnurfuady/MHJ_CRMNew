<template>
  <div class="col-12">
    <Card
      :headerTitle="'Radio-checkbox Groups and Animated Buttons'"
      :border="true"
      :padding="false"
    >
      <template #header5>
        <p class="f-m-light mt-1">
          Use radio for <code>radio </code> class & checkbox for <code>checkbox </code> class used.
        </p>
      </template>
      <div class="row g-3">
        <div class="col-xxl-4 col-md-6 box-col-6 xl-50">
          <div class="card-wrapper border rounded-3 bg-light">
            <h6 class="sub-title fw-bold">Radio Buttons</h6>
            <div class="btn-radio">
              <div class="btn-group" data-bs-toggle="buttons">
                <div class="btn button-light-primary" v-for="item in radioButton" :key="item.title">
                  <div class="radio radio-primary">
                    <input :id="item.for" type="radio" name="radio1" :checked="item.checked" />
                    <label class="mb-0" :for="item.for">{{ item.title }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6 box-col-6 xl-50">
          <div class="card-wrapper border rounded-3 bg-light">
            <h6 class="sub-title fw-bold">Checkbox Buttons</h6>
            <div class="btn-group btn-option" data-bs-toggle="buttons">
              <div class="btn button-light-dark" v-for="item in checkboxButton" :key="item.title">
                <div class="checkbox checkbox-dark">
                  <input :id="item.for" type="checkbox" />
                  <label class="mb-0" :for="item.for">{{ item.title }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6 box-col-12 xl-100">
          <div class="card-wrapper border rounded-3 bg-light">
            <h6 class="sub-title fw-bold">Animated Buttons</h6>
            <div class="common-flex mix-hover-btn">
              <button class="btn btn-border-pop btn-primary">FAQ</button>
              <button class="btn btn-bg-slide button-light-primary">Blog</button>
              <button class="btn btn-border-bottom button-light-primary txt-dark">Icons</button>
              <button
                class="button button--winona button--border-thin button--round-s"
                data-text="Open Project"
              >
                <span>Open Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { radioButton, checkboxButton } from '@/core/data/buttons'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
