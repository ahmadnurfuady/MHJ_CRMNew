<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Vertical Dashed Divider'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-divider'"
  >
    <template #header5>
      <p class="mb-0 mt-1">
        Use <code>dotted-divider</code> and<code> vertical-line</code> class for dotted divider.
      </p>
    </template>

    <div class="row g-sm-2 d-flex dotted-divider gy-4">
      <div class="col-sm-3 col-6" v-for="(divider, index) in verticalDottedDivider" :key="index">
        <div class="vertical-divider">
          <div :class="`vertical-line bg-${divider.color}`"></div>
          <template v-if="divider.icon">
            <SvgIcon
              type="default"
              :icon="divider.icon"
              :class="
                'my-2 ' + divider.iconType + '-icon ' + divider.iconType + '-' + divider.color
              "
            />
          </template>
          <template v-else>
            <p
              class="my-2"
              :class="[
                {
                  border: divider.border,
                  'rounded-pill': divider.border && divider.rounded,
                },
                divider.border ? 'border-' + divider.color : 'txt-' + divider.color,
              ]"
            >
              {{ titleCase(divider.color) }}
            </p>
          </template>
          <div :class="`vertical-line bg-${divider.color}`"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { verticalDottedDivider } from '@/core/data/uiKits/divider'
import { titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
