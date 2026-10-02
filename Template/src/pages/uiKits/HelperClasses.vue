<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Card :headerTitle="'Styled Borders'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use different styles of borders, like
              <code>border radius, border-color, and border-width</code> use of any components.
            </p>
          </template>
          <div class="row g-3">
            <div class="col-xxl-3 col-sm-6">
              <div class="border-wrapper h-100 alert-light-light dark-helper">
                <Border
                  :title="'Custom Border-radius Class'"
                  :details="borderRadiusClasses"
                  :class="'helper-box bg-light border'"
                ></Border>
              </div>
            </div>

            <div class="col-xxl-3 col-sm-6">
              <div class="border-wrapper h-100 alert-light-light dark-helper">
                <Border
                  :title="'Border Color'"
                  :details="colors"
                  :class="'helper-box border border-'"
                  :color="true"
                ></Border>
              </div>
            </div>

            <div class="col-xxl-3 col-sm-6">
              <div class="border-wrapper h-100 alert-light-light dark-helper">
                <Border
                  :title="'Border Width'"
                  :details="borderWidth"
                  :class="'helper-box border border-'"
                ></Border>
              </div>
            </div>

            <div class="col-xxl-3 col-sm-6">
              <div class="border-wrapper alert-light-light h-100 dark-helper">
                <Border
                  :title="'Text Colors'"
                  :details="colors"
                  :class="'helper-box helper-text border txt-'"
                  :text="true"
                ></Border>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div class="col-12">
        <Card :headerTitle="'Variation of Borders and Displays'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use border utilities to add or remove an element's borders.
            </p>
          </template>

          <div class="row g-3">
            <div class="col-xl-4 col-sm-6">
              <div class="border-wrapper h-100 border">
                <Border
                  :title="'Additive Border'"
                  :details="additiveBorder"
                  :class="'helper-box bg-light'"
                ></Border>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6">
              <div class="border-wrapper h-100 border subtract-border">
                <Border
                  :title="'Subtractive Border'"
                  :details="subtractiveBorder"
                  :class="'helper-box bg-light border'"
                ></Border>
              </div>
            </div>

            <div class="col-xl-4 col-sm-12">
              <div class="border-wrapper h-100 border">
                <Border
                  :title="'Additive Radius'"
                  :details="additiveRadius"
                  :class="'helper-radius radius-wrapper'"
                ></Border>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div class="col-12">
        <Card :headerTitle="'Background Colors'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use any component in a theme, use the colors <code>bg-* </code>and
              <code>alert-light-*.</code>
            </p>
          </template>

          <div class="row g-3">
            <div class="col-xl-4 col-sm-6">
              <div class="border-wrapper h-100 border">
                <Border
                  :title="'Dark Backgrounds'"
                  :details="colorsTwo"
                  :class="'helper-box bg-'"
                  :color="true"
                  :backgroundColor="true"
                  :helperText="'bg'"
                ></Border>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6">
              <div class="border-wrapper h-100 border">
                <Border
                  :title="'Light Backgrounds'"
                  :details="colorsTwo"
                  :class="'helper-box alert-light-'"
                  :color="true"
                  :backgroundColor="true"
                  :helperText="'alert-light'"
                ></Border>
              </div>
            </div>

            <div class="col-xl-4 col-sm-12">
              <div class="border-wrapper h-100 border">
                <ExtendedBackgroundColors />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div class="col-12">
        <BorderColors />
      </div>
      <div class="col-xxl-6">
        <ImagesSizes />
      </div>
      <div class="col-xxl-6">
        <FontStyle />
      </div>
      <div class="col-xl-6">
        <FontWeightClass />
      </div>
      <div class="col-xl-6">
        <TextColorsClass />
      </div>
      <div class="col-xl-12">
        <PaddingClass />
      </div>
      <div class="col-xl-3" v-for="(types, index) in borderTypes" :key="index">
        <BorderType :borderType="types.type"></BorderType>
      </div>
      <div class="col-xl-12">
        <OneSidePaddingClass />
      </div>
      <div class="col-xl-12">
        <MarginClass />
      </div>
      <div class="col-xl-12">
        <OneSideMarginClass />
      </div>
      <div class="col-xl-12">
        <FontSize />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { colors } from '@/core/data/common'
import {
  additiveBorder,
  additiveRadius,
  borderRadiusClasses,
  borderTypes,
  borderWidth,
  colorsTwo,
  subtractiveBorder,
} from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Border = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/Border.vue'))
const ExtendedBackgroundColors = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/ExtendedBackgroundColors.vue')
)
const BorderColors = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/BorderColors.vue')
)
const ImagesSizes = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/ImagesSizes.vue')
)
const FontStyle = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/FontStyle.vue'))
const FontWeightClass = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/FontWeightClass.vue')
)
const TextColorsClass = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/TextColorsClass.vue')
)
const PaddingClass = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/PaddingClass.vue')
)
const BorderType = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/BorderType.vue')
)
const OneSidePaddingClass = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/OneSidePaddingClass.vue')
)
const MarginClass = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/MarginClass.vue')
)
const OneSideMarginClass = defineAsyncComponent(
  () => import('@/module/uiKits/helperClasses/OneSideMarginClass.vue')
)
const FontSize = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/FontSize.vue'))
</script>
