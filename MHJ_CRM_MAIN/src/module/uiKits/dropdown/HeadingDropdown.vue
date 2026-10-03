<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Heading Dropdown'"
    :border="true"
    :padding="false"
    :cardBodyClass="'rtl-dropdown heading-dropdown'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>heading-dropdown </code>class to create dropdown heading.
      </p>
    </template>

    <div class="common-flex">
      <div class="btn-group">
        <button
          class="btn btn-success rounded-pill dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Party
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li>
            <a class="dropdown-item fw-bold fs-6" href="#">Party List</a>
            <ul>
              <li><a class="dropdown-item" href="#">Balloons</a></li>
              <li><a class="dropdown-item" href="#">Cake </a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
