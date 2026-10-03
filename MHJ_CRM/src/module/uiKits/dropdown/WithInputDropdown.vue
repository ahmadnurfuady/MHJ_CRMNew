<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'With Input Type'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use checkbox using dropdown<code>(type='checkbox'/'radio')</code>.
      </p>
    </template>

    <button class="btn btn-warning" type="button" data-bs-toggle="dropdown">Inputs</button>
    <ul class="dropdown-menu dropdown-block dropdown-wrapper dark-input-type">
      <li>
        <div class="input-group rounded-0 border-0 shadow-none">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0 checkbox-primary"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <span class="f-14">Default checkbox</span>
        </div>
        <div class="input-group rounded-0 border-0 shadow-none">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0 checkbox-primary"
              type="radio"
              value=""
              aria-label="Radio button for following text input"
            />
          </div>
          <span class="f-14">Default radio</span>
        </div>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
