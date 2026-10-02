<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xxl-6">
        <Headings />
      </div>
      <div class="col-xxl-6">
        <ColoredHeadings />
      </div>
      <div class="col-12">
        <FontWeight />
      </div>
      <div class="col-sm-12 listing">
        <ListingTypography />
      </div>
      <div class="col-12">
        <DisplayHeadings />
      </div>
      <div class="col-sm-12 col-xl-6">
        <InlineTextElements />
      </div>
      <div class="col-sm-12 col-xl-6">
        <TextColors />
      </div>
      <div class="col-sm-12">
        <Blockquote />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Headings = defineAsyncComponent(() => import('@/module/uiKits/typography/Headings.vue'))
const ColoredHeadings = defineAsyncComponent(
  () => import('@/module/uiKits/typography/ColoredHeadings.vue')
)
const FontWeight = defineAsyncComponent(() => import('@/module/uiKits/typography/FontWeight.vue'))
const ListingTypography = defineAsyncComponent(
  () => import('@/module/uiKits/typography/ListingTypography.vue')
)
const DisplayHeadings = defineAsyncComponent(
  () => import('@/module/uiKits/typography/DisplayHeadings.vue')
)
const InlineTextElements = defineAsyncComponent(
  () => import('@/module/uiKits/typography/InlineTextElements.vue')
)
const TextColors = defineAsyncComponent(() => import('@/module/uiKits/typography/TextColors.vue'))
const Blockquote = defineAsyncComponent(() => import('@/module/uiKits/typography/Blockquote.vue'))
</script>
