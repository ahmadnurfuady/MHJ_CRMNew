<template>
  <div class="d-flex gap-3 align-items-end flex-wrap">
    <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
      <button
        class="btn"
        :class="'btn-' + button"
        type="button"
        v-for="(button, index) in verticalVariationColor"
        :key="index"
      >
        {{ button }}
      </button>
    </div>
    <div class="btn-group-vertical buttons-box">
      <button class="btn button-light-primary" type="button">Light-primary</button>
      <button class="btn button-light-dark" type="button">Light-dark</button>
      <div
        class="btn-group"
        :class="button.mainClass"
        role="group"
        v-for="button in verticalVariations"
        :key="button.class"
      >
        <button
          class="btn dropdown-toggle"
          :class="'button-light-' + button.class"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Light-{{ button.class }}
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        </ul>
      </div>
    </div>
    <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
      <template v-for="index in 3" :key="index">
        <input
          class="btn-check"
          :id="'vbtn-radio' + index"
          type="radio"
          name="vbtn-radio"
          checked
        />
        <label class="btn btn-outline-primary" :for="'vbtn-radio' + index">Radio {{ index }}</label>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { verticalVariations } from '@/core/data/buttons'
const verticalVariationColor = ['primary', 'secondary', 'success', 'danger', 'warning']
</script>
