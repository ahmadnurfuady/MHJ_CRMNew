<template>
  <Card
    :cardClass="'split-dropdown'"
    :headerTitle="'Split Dropdowns'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dropdown-basic m-0'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>dropdown-toggle-split </code>for proper spacing around the dropdown caret.
      </p>
    </template>
    <div class="common-flex">
      <div class="btn-group" v-for="(dropdown, index) in splitDropdown" :key="index">
        <button :class="`btn btn-outline-${dropdown.color}`">{{ dropdown.title }}</button>
        <div class="dropdown separated-btn">
          <button
            :class="`btn btn-${dropdown.color} dropdown-toggle-split`"
            data-bs-toggle="dropdown"
          >
            <i class="icofont icofont-arrow-down"></i>
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
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { splitDropdown } from '@/core/data/uiKits/dropdown'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
