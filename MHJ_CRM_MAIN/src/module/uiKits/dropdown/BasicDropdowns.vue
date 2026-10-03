<template>
  <Card
    :headerTitle="'Basic Dropdowns'"
    :border="true"
    :padding="false"
    :cardBodyClass="'rtl-dropdown'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        To create any dropdown, use <code>dat-bs-toggle="dropdown" </code>attribute.
      </p>
    </template>
    <div class="common-flex">
      <div class="btn-group" v-for="(dropdown, index) in basicDropdown" :key="index">
        <button
          :class="`btn btn-${dropdown.color} dropdown-toggle`"
          type="button"
          data-bs-toggle="dropdown"
        >
          {{ dropdown.title }}
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li>
            <a
              class="dropdown-item"
              href="#"
              v-for="(item, index) in dropdown.dropdownItem"
              :key="index"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { basicDropdown } from '@/core/data/uiKits/dropdown'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
