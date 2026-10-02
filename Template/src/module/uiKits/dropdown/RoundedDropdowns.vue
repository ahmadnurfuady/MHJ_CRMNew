<template>
  <Card
    :headerTitle="'Rounded Dropdowns'"
    :border="true"
    :padding="false"
    :cardBodyClass="'rtl-dropdown'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>rounded-pill </code>class through to change rounded dropdowns.
      </p>
    </template>
    <div class="common-flex">
      <div class="btn-group" v-for="(dropdown, index) in roundedDropdown" :key="index">
        <button
          :class="`btn btn-${dropdown.color} rounded-pill dropdown-toggle`"
          type="button"
          data-bs-toggle="dropdown"
        >
          {{ titleCase(dropdown.color) }}
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li v-for="(item, index) in dropdown.dropdownItem" :key="index">
            <a class="dropdown-item" href="#">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { roundedDropdown } from '@/core/data/uiKits/dropdown'
import { titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
