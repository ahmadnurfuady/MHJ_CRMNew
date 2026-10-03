<template>
  <Card :headerTitle="'Custom Radio Buttons'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-check-input </code>and <code>form-check-label </code>for custom radio
        buttons.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-xl-4 col-sm-6">
        <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
          <h6 class="sub-title">Bordered Radio</h6>
          <template v-for="(item, index) in borderedRadio" :key="index">
            <div :class="`form-check radio radio-${item.class}`">
              <input
                class="form-check-input"
                :id="item.id"
                type="radio"
                name="radio1"
                value="option1"
                :checked="item.checked"
              />
              <label class="form-check-label" :for="item.id">{{ item.label }} </label>
            </div>
          </template>
        </div>
      </div>
      <div class="col-xl-4 col-sm-12 order-xl-0 order-sm-1">
        <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
          <h6 class="sub-title">Icons Radio</h6>
          <div class="form-check radio radio-primary ps-0">
            <ul class="radio-wrapper">
              <li v-for="(item, index) in iconsRadio" :key="index">
                <input
                  class="form-check-input"
                  :id="item.id"
                  type="radio"
                  name="radio2"
                  value="option2"
                  :checked="item.checked"
                />
                <label class="form-check-label" :for="item.id">
                  <i :class="`fa fa-${item.icon}`"></i>
                  <span>{{ item.label }}</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card-wrapper border rounded-3 fill-radios h-100 checkbox-checked">
          <h6 class="sub-title">Filled Radio</h6>
          <template v-for="(item, index) in filledRadio" :key="index">
            <div :class="`form-check radio radio-${item.class}`">
              <input
                class="form-check-input"
                :id="item.id"
                type="radio"
                name="radio3"
                value="option1"
                :checked="item.checked"
              />
              <label class="form-check-label" :for="item.id">{{ item.label }}</label>
            </div>
          </template>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { borderedRadio, filledRadio, iconsRadio } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
