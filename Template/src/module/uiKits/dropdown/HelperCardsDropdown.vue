<template>
  <Card
    :headerTitle="'Helper Cards'"
    :border="true"
    :padding="false"
    :cardBodyClass="'rtl-dropdown helper-cards'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Each dropdown uses the <code>data-bs-toggle='dropdown' </code>attribute, which you can use
        to create a helper class.
      </p>
    </template>
    <div class="common-flex">
      <div class="btn-group">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Helper Card
        </button>
        <ul class="dropdown-menu dropdown-block p-3 dark-form">
          <li>
            <h6 class="fs-6 pb-2">Learn More!</h6>
            <p class="dropdown-item">There is a lot of information available here</p>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-warning dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Warning Card
        </button>
        <ul class="dropdown-menu dropdown-block p-3 dark-form">
          <li>
            <h6 class="fs-6 pb-2">Warning!</h6>
            <p class="dropdown-item helper-truncate">Please! Check your notifications.</p>
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
          Alert Card
        </button>
        <ul class="dropdown-menu dropdown-block p-3 dark-form">
          <li>
            <h6 class="fs-6 pb-2">Danger</h6>
            <p class="dropdown-item helper-truncate">It's a danger path.</p>
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
