<template>
  <Card
    :headerTitle="'Alignment Options'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dark-dropdown-box'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> dropdown-menu-lg-start / dropstart / dropup / dropend</code> this classes through
        change dropdown directions.
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
          Dropdown
        </button>
        <ul class="dropdown-menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <a class="dropdown-item" href="#">{{ item.value }}</a>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Right-aligned menu
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li v-for="(item, index) in menuItems" :key="index">
            <a class="dropdown-item" href="#">{{ item.value }}</a>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-warning dropdown-toggle text-white show"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          Left-aligned, right-aligned lg
        </button>
        <ul class="dropdown-menu dropdown-menu-lg-end">
          <li v-for="(item, index) in menuItems" :key="index">
            <a class="dropdown-item" href="#">{{ item.value }}</a>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-success dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          Right-aligned, left-aligned lg
        </button>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
          <li v-for="(item, index) in menuItems" :key="index">
            <a class="dropdown-item" href="#">{{ item.value }}</a>
          </li>
        </ul>
      </div>
      <div class="btn-group dropstart">
        <button
          class="btn btn-info dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropstart
        </button>
        <ul class="dropdown-menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <a class="dropdown-item" href="#">{{ item.value }}</a>
          </li>
        </ul>
      </div>
      <div class="btn-group dropend">
        <button
          class="btn btn-danger dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropend
        </button>
        <ul class="dropdown-menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <a class="dropdown-item" href="#">{{ item.value }}</a>
          </li>
        </ul>
      </div>
      <div class="btn-group dropup">
        <button
          class="btn btn-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropup
        </button>
        <ul class="dropdown-menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <a class="dropdown-item" href="#">{{ item.value }}</a>
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const menuItems = [{ value: 'Menu item 1' }, { value: 'Menu item 2' }, { value: 'Menu item 3' }]
</script>
