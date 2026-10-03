<template>
  <div class="mail-header-wrapper">
    <div class="mail-header">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input checkbox-primary"
          id="emailCheckboxA"
          type="checkbox"
          value="option1"
        />
        <ul class="mail-filters">
          <template v-for="(type, index) in emailTypes" :key="index">
            <li
              class="common-align mail-header-option"
              :class="{ active: mailState.emailType == type.value }"
              @click="handleType(type.value)"
            >
              <SvgIcon :icon="type.icon" :svgClass="'stroke-icon'"></SvgIcon>
              <span>{{ type.title }}</span>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mail-body">
      <div class="mail-search d-flex-align-items-center">
        <input class="form-control" type="search" placeholder="Search..." />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="light-square block-btn-1">
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>
      <div class="light-square bg-light-danger">
        <i class="fa-solid fa-trash-can txt-danger"></i>
      </div>
      <div
        class="light-square dropdown-toggle"
        role="main"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <ul class="dropdown-menu dropdown-block dropdown-menu-end">
        <li><a class="dropdown-item" href="#">All</a></li>
        <li><a class="dropdown-item" href="#">None</a></li>
        <li><a class="dropdown-item" href="#">Read</a></li>
        <li><a class="dropdown-item" href="#">Unread</a></li>
        <li><a class="dropdown-item" href="#">Starred</a></li>
        <li><a class="dropdown-item" href="#">Unstarred</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { storeToRefs } from 'pinia'

import { emailTypes } from '@/core/data/mailBox'
import { useMailBox } from '@/store/mailBox'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const emailStore = useMailBox()
const { mailState } = storeToRefs(emailStore)

function handleType(value: string) {
  mailState.value.emailType = value
}
</script>
