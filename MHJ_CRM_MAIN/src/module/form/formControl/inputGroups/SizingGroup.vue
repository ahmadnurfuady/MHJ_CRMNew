<template>
  <Card
    :headerTitle="'Sizing'"
    :border="true"
    :padding="false"
    :cardBodyClass="'card-wrapper input-group-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Add the relative form sizing classes to the<code> input-group</code> itself and contents
        within will automatically resize—no need for repeating the form control size classes on each
        element.
      </p>
    </template>
    <div class="input-group input-group-sm">
      <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
      <InputField :inputId="'text-field-small'" :isPlaceholder="false" :required="false" />
    </div>
    <div class="input-group">
      <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
      <InputField :inputId="'text-field-default'" :isPlaceholder="false" :required="false" />
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
      <InputField :inputId="'text-field-large'" :isPlaceholder="false" :required="false" />
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
