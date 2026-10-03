<template>
  <Card
    :headerTitle="'Segmented Buttons '"
    :border="true"
    :padding="false"
    :cardClass="' height-equal'"
    :cardBodyClass="'main-segment-btn card-wrapper input-group-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Multiple add-ons are supported and can be mixed with<code> dropdowns</code>
        versions.
      </p>
    </template>

    <div class="input-group">
      <div
        class="input-group"
        ngbDropdown
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" class="btn btn-outline-info">Info</button>
        <button
          class="btn btn-info dropdown-toggle dropdown-toggle-split"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu dropdown-block">
          <li><a class="dropdown-item" href="#">Learning</a></li>
          <li><a class="dropdown-item" href="#">Editors</a></li>
          <li><a class="dropdown-item" href="#">Users</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Social App</a></li>
        </ul>
        <InputField :inputId="'text-field'" :isPlaceholder="false" :required="false" />
      </div>
    </div>
    <div class="input-group">
      <div
        class="input-group"
        ngbDropdown
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <InputField :inputId="'text-field2'" :isPlaceholder="false" :required="false" />
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button
          class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end dropdown-block">
          <li><a class="dropdown-item" href="#">Search Result</a></li>
          <li><a class="dropdown-item" href="#">Tasks</a></li>
          <li><a class="dropdown-item" href="#">Projects</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Animation</a></li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
