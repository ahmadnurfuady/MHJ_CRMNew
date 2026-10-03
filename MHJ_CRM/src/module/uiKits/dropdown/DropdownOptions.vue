<template>
  <Card
    :headerTitle="'Dropdown Options'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dark-dropdown-box'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>data-bs-offset </code> or <code>data-bs-reference</code> to change the location of
        the dropdown.
      </p>
    </template>
    <div class="common-flex dropdown-option">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-offset="10,20"
        >
          Offset
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary" type="button">Reference</button>
        <button
          class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-reference="parent"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
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
