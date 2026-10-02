<template>
  <Card
    :headerTitle="'Justify Contents'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dropdown-basic m-0'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>text-start / text-center / text-end</code> to change dropdown texts.
      </p>
    </template>

    <div class="common-flex">
      <div class="btn-group">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Text-left
        </button>
        <ul class="dropdown-menu dropdown-block text-start">
          <li><a class="dropdown-item" href="#">Hello..</a></li>
          <li><a class="dropdown-item" href="#">How are you?</a></li>
          <li>
            <a class="dropdown-item" href="#">What are you doing?</a>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-info dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Text-center
        </button>
        <ul class="dropdown-menu dropdown-block text-center">
          <li><a class="dropdown-item" href="#">Chocolate</a></li>
          <li><a class="dropdown-item" href="#">Ice-cream</a></li>
          <li><a class="dropdown-item" href="#">Trophy</a></li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Text-right
        </button>
        <ul class="dropdown-menu dropdown-block text-end">
          <li><a class="dropdown-item" href="#">I'm fine.</a></li>
          <li><a class="dropdown-item" href="#">ohh wow!!</a></li>
          <li>
            <a class="dropdown-item" href="#">That's the good news! </a>
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
