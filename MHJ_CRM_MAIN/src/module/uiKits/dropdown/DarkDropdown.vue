<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Dark Dropdown'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dropdown-basic m-0 rtl-dropdown'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        To access the dark mode, use the <code>dropdown-menu-dark </code>class.
      </p>
    </template>

    <div class="common-flex dark-dropdown">
      <button
        class="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dark Night
      </button>
      <ul class="dropdown-menu dropdown-menu-dark dropdown-block">
        <li><a class="dropdown-item active" href="#">Dark moon</a></li>
        <li><a class="dropdown-item" href="#">Dark owl </a></li>
        <li><a class="dropdown-item" href="#">Nightfall</a></li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
