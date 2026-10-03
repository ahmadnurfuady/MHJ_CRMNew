<template>
  <Card :headerTitle="'Common Links'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Link utilities are used to stylize your anchors to adjust their link opacity
        <code> (link-opacity-*), </code>hovered link Opacity
        <code>(link-opacity-*-hover), </code>underline opacity
        <code>(link-underline-opacity-*), </code>underline offset <code>(link-offset-*), </code>and
        more.
      </p>
    </template>

    <div class="row g-3">
      <div class="col-sm-6 col-xxl-3">
        <div class="card-wrapper border rounded-3 h-100">
          <h6 class="sub-title fw-bold">Link Opacity</h6>
          <div class="link-opacity-wrapper">
            <p v-for="opacity in commonOpacity" :key="opacity">
              <a :class="`link-opacity-${opacity}`" href="#"
                >Link opacity {{ opacity }}</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xxl-3">
        <div class="card-wrapper border rounded-3 h-100">
          <h6 class="sub-title fw-bold">Hovered Link Opacity</h6>
          <div class="link-opacity-wrapper">
            <p v-for="opacity in commonOpacity" :key="opacity">
              <a :class="`link-opacity-${opacity}-hover`" href="#"
                >Link hover opacity {{ opacity }}</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xxl-3">
        <div class="card-wrapper border rounded-3 h-100">
          <h6 class="sub-title fw-bold">Underline Opacity</h6>
          <div class="underline-opacity-wrapper">
            <p v-for="opacity in underlineOpacity" :key="opacity">
              <a
                :class="`link-offset-2 link-underline link-underline-opacity-${opacity}`"
                href="#"
                >Underline opacity {{ opacity }}</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xxl-3">
        <div class="card-wrapper border rounded-3 h-100">
          <h6 class="sub-title fw-bold">Underline Offset</h6>
          <div class="underline-opacity-wrapper">
            <p>
              <a href="#">Default link</a>
            </p>
            <p v-for="opacity in defaultLink" :key="opacity">
              <a :class="`link-offset-${opacity}`" href="#"
                >Offset {{ opacity }} link</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { commonOpacity, defaultLink, underlineOpacity } from '@/core/data/uiKits/navigateLinks'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
