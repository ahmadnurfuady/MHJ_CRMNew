<template>
  <Card
    :headerTitle="'Link Color in Dark Theme'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dark-alert-msg'"
  >
    <template #header5>
      <p class="f-m-light mt-1">To create an alert, use<code> alert-*</code> class.</p>
    </template>

    <div class="row">
      <template v-for="index in [0, 4]" :key="index">
        <div class="col-xl-6">
          <template v-for="color in colors.slice(index, index + 4)" :key="color.color">
            <p class="mb-0">{{ titleCase(color.color) }} Alert</p>
            <div :class="`alert alert-${color.color} dark`" role="alert">
              <p :class="color.color == 'light' ? 'text-dark' : 'text-light'">
                The
                <a
                  class="alert-link"
                  :class="color.color == 'light' ? 'text-dark' : 'text-white'"
                  href="#"
                >
                  "alert-{{ color.color }}"
                </a>
                class can be used to create an alert like this one.
              </p>
            </div>
          </template>
        </div>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { colorsTwo } from '@/core/data/uiKits/helperClasses'
import { titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const colors = colorsTwo
</script>
