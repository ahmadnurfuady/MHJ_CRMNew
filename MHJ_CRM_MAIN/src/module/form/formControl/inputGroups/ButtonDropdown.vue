<template>
  <Card
    :headerTitle="'Buttons with Dropdowns'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-custom-form card-wrapper input-group-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>input-group </code>and <code>[aria-label='']</code> through buttons with
        dropdowns.
      </p>
    </template>
    <div class="input-group" role="group" aria-label="Button group with nested dropdown">
      <button
        class="btn btn-outline-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul class="dropdown-menu dropdown-block">
        <li><a class="dropdown-item" href="#">Ecommerce</a></li>
        <li><a class="dropdown-item" href="#">Email</a></li>
        <li><a class="dropdown-item" href="#">Users</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="#">Bookmarks</a></li>
      </ul>
      <InputField :inputId="'text-field1'" :isPlaceholder="false" :required="false" />
    </div>
    <div class="input-group" role="group" aria-label="Button group with nested dropdown">
      <InputField :inputId="'text-field2'" :isPlaceholder="false" :required="false" />
      <button
        class="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul class="dropdown-menu dropdown-menu-end dropdown-block">
        <li><a class="dropdown-item" href="#">Starter kit</a></li>
        <li><a class="dropdown-item" href="#">Gallery</a></li>
        <li><a class="dropdown-item" href="#">Blog</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="#">Maps</a></li>
      </ul>
    </div>
    <div class="input-group" role="group" aria-label="Button group with nested dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul class="dropdown-menu dropdown-block">
        <li><a class="dropdown-item" href="#">Widgets</a></li>
        <li><a class="dropdown-item" href="#">Project</a></li>
        <li><a class="dropdown-item" href="#">Contacts</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="#">Tasks</a></li>
      </ul>
      <InputField :inputId="'text-field3'" :isPlaceholder="false" :required="false" />
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul class="dropdown-menu dropdown-menu-end dropdown-block">
        <li><a class="dropdown-item" href="#">To-Do</a></li>
        <li><a class="dropdown-item" href="#">FAQ</a></li>
        <li><a class="dropdown-item" href="#">Knowledgebase</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="#">Support Ticket</a></li>
      </ul>
    </div>
    <div
      class="input-group"
      ngbDropdown
      role="group"
      aria-label="Button group with nested dropdown"
    ></div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
