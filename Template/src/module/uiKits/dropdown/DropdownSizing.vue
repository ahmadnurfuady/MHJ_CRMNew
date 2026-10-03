<template>
  <Card
    :headerTitle="'Dropdown Sizing'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dark-dropdown-box'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>btn-*</code>[ sm / lg ] class through buttons of all sizes including default and
        split dropdown buttons.
      </p>
    </template>
    <div class="common-flex">
      <div class="btn-group">
        <button
          class="btn btn-dark light btn-lg dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Large button
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <div class="btn-group">
        <button class="btn btn-outline-secondary btn-lg" type="button">Large split button</button>
        <button
          class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu dropdown-block">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-dark light btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Small button
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <div class="btn-group">
        <button class="btn btn-outline-secondary btn-sm" type="button">Small split button</button>
        <button
          class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu dropdown-block">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
