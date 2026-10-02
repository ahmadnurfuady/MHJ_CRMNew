<template>
  <div class="button-wrapper button-box">
    <div class="btn-group" role="group" aria-label="Default button group">
      <button class="btn btn-outline-primary" type="button">How</button>
      <button class="btn btn-outline-primary" type="button">Are</button>
      <button class="btn btn-outline-primary" type="button">You?</button>
    </div>
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button
        class="btn"
        :class="item.class"
        type="button"
        v-for="item in nestedGroup"
        :key="item.id"
      >
        {{ item.text }}
      </button>
      <div class="btn-group" role="group">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Pages
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Gallery</a></li>
          <li><a class="dropdown-item" href="#">Blog</a></li>
        </ul>
      </div>
    </div>
    <div
      class="btn-group select-checkbox"
      role="group"
      aria-label="Basic checkbox toggle button group"
    >
      <template v-for="index in 3" :key="index">
        <input class="btn-check" :id="'btncheck' + index" type="checkbox" />
        <label class="btn btn-outline-success mb-0" :for="'btncheck' + index"
          >Checkbox {{ index }}</label
        >
      </template>
    </div>
    <div class="col-xl-12 col-sm-6">
      <div class="card-wrapper border rounded-3 h-100">
        <h6 class="sub-title fw-bold">Button Toolbar</h6>
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div
            class="btn-group"
            role="group"
            v-for="(group, index) in toolbarGroups"
            :key="index"
            :aria-label="group.ariaLabel"
          >
            <button
              v-for="(button, buttonIndex) in group.buttons"
              :key="buttonIndex"
              :class="button.class"
              type="button"
            >
              {{ button.text }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toolbarGroups, nestedGroup } from '@/core/data/buttons'
</script>
