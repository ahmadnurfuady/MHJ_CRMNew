<template>
  <div class="container-fluid">
    <div class="row ng-tag-pills">
      <div class="col-sm-12 col-xl-6">
        <Card :headerTitle="'Badges Contextual Variations'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">Use<code> badge </code>class to make more badges.</p>
          </template>
          <VariationBadges :badgeDetails="badgeColors" />
        </Card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <Card :headerTitle="'Pill Contextual Variations'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use<code> rounded-pill</code>class to make badges with background (badge-*) more
              rounded with a larger <code>border-radius</code>.
            </p>
          </template>
          <VariationBadges :badgeDetails="badgeColors" :rounded="true" />
        </Card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <Card :headerTitle="'Number of Badges'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use<code> badge</code> class to make square badges with numbers.
            </p>
          </template>
          <VariationBadges :badgeDetails="badgeColors" :type="'number'" />
        </Card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <Card :headerTitle="'Number of Pill Badges'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use<code> rounded-circle</code> class to make rounded badges with numbers.
            </p>
          </template>
          <VariationBadges :badgeDetails="badgeColors" :type="'number'" :rounded="true" />
        </Card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <Card :headerTitle="'Badge Tag with Icons'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use<code> badge </code> class to make square badges with icons.
            </p>
          </template>
          <VariationBadges :badgeDetails="badgeColors" :type="'icon'" :badgeIcons="badgeIcons" />
        </Card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <Card :headerTitle="'Rounded Pills with Icons'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use<code> rounded-circle </code> class to make rounded badges with icons.
            </p>
          </template>
          <VariationBadges
            :badgeDetails="badgeColors"
            :type="'icon'"
            :rounded="true"
            :badgeIcons="badgeIcons"
          />
        </Card>
      </div>
      <div class="col-sm-12 col-xl-6">
        <BadgeHeadings />
      </div>
      <div class="col-sm-12 col-xl-6">
        <div class="row">
          <div class="col-12">
            <PositionedBadges />
          </div>
          <div class="col-12">
            <ButtonBadges />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { badgeIcons } from '@/core/data/uiKits/badge'
import { colorsTwo } from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const VariationBadges = defineAsyncComponent(
  () => import('@/module/uiKits/tagPills/VariationBadges.vue')
)
const BadgeHeadings = defineAsyncComponent(
  () => import('@/module/uiKits/tagPills/BadgeHeadings.vue')
)
const PositionedBadges = defineAsyncComponent(
  () => import('@/module/uiKits/tagPills/PositionedBadges.vue')
)
const ButtonBadges = defineAsyncComponent(() => import('@/module/uiKits/tagPills/ButtonBadges.vue'))

const badgeColors = colorsTwo
</script>
