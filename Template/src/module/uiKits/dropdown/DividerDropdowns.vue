<template>
  <Card
    :headerTitle="'Divider Dropdowns'"
    :border="true"
    :padding="false"
    :cardBodyClass="'rtl-dropdown'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>dropdown-divider </code>class through separate groups of related menu items with a
        divider.
      </p>
    </template>
    <div class="common-flex">
      <div class="btn-group">
        <button
          class="btn btn-success rounded-pill dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Wishlist
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li><a class="dropdown-item" href="#">Shoes </a></li>
          <li><a class="dropdown-item" href="#">Bag</a></li>
          <li><a class="dropdown-item" href="#">Clothes</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-primary rounded-pill dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sports
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li><a class="dropdown-item" href="#">Badminton</a></li>
          <li><a class="dropdown-item" href="#">Cricket</a></li>
          <li><a class="dropdown-item" href="#">Kho-Kho</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-secondary rounded-pill dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Colors
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li><a class="dropdown-item" href="#">Orange</a></li>
          <li><a class="dropdown-item" href="#">Yellow </a></li>
          <li><a class="dropdown-item" href="#">Red </a></li>
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
