<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Only One Side Padding'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use padding classes like: <code>p-l-* / p-r-* / p-t-* / p-b-*</code>.
      </p>
    </template>

    <div class="row g-3">
      <div class="col-xxl-3 col-sm-6" v-for="(group, index) in oneSidePadding" :key="index">
        <div class="border-wrapper h-100 alert-light-light dark-helper">
          <h6 class="mb-3">{{ group.title }}</h6>
          <div class="common-p-box">
            <span v-for="(padding, index) in marginPaddingValue" :key="index"
              >{{ group.class }}{{ padding }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { oneSidePadding, marginPaddingValue } from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
