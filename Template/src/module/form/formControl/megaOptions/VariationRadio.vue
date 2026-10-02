<template>
  <Card :headerTitle="'Variation Radio'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>radio </code>attribute to create variations of radio buttons.
      </p>
    </template>
    <div class="row g-3">
      <template v-for="(details, index) in variationRadio" :key="index">
        <div :class="details.class">
          <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
            <h6 class="sub-title">{{ details.subTitle }}</h6>
            <template v-for="(item, index) in details.details" :key="index">
              <div class="payment-wrapper">
                <div class="payment-first">
                  <div class="form-check radio radio-primary">
                    <input
                      class="form-check-input"
                      :id="item.id"
                      type="radio"
                      :name="item.name"
                      value="option1"
                      :checked="item.checked"
                    />
                    <label class="form-check-label mb-0" :for="item.id">{{ item.label }}</label>
                  </div>
                </div>
                <div class="payment-second" v-if="item.image">
                  <img class="img-fluid" :src="getImages(item.image)" alt="card" />
                </div>
                <div class="payment-second" v-if="item.icon">
                  <SvgIcon :icon="item.icon" :class="`mega-icons stroke-${item.class}`"></SvgIcon>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { variationRadio } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
