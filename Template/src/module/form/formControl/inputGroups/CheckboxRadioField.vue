<template>
  <Card
    :headerTitle="'Checkboxes and Radios'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="'checkbox-checked card-wrapper input-group-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Place any checkbox or radio option within an input group's addon instead of text. We
        recommend adding <code>mt-0</code> to the <code>form-check-input</code> when there's no
        visible text next to the input.
      </p>
    </template>
    <div class="input-group">
      <div class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
        />
      </div>
      <InputField :inputId="'text-field'" :isPlaceholder="false" :required="false" />
    </div>
    <div class="input-group">
      <div class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="radio"
          value=""
          aria-label="Radio button for following text input"
          checked
        />
      </div>
      <InputField :inputId="'text-field2'" :isPlaceholder="false" :required="false" />
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
