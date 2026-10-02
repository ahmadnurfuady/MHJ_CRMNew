<template>
  <Card
    :headerTitle="'Multiple Inputs'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex main-custom-form card-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        While multiple <code>&lt;input&gt;</code>s are supported visually, validation styles are
        only available for input groups with a single <code>&lt;input&gt;</code>.
      </p>
    </template>
    <div class="input-group">
      <span class="input-group-text">First and Last Name</span>
      <InputField :inputId="'first-name'" :isPlaceholder="false" :required="false" />
      <InputField :inputId="'last-name'" :isPlaceholder="false" :required="false" />
    </div>
    <div class="input-group">
      <span class="input-group-text">$</span>
      <span class="input-group-text">0.00</span>
      <InputField :inputId="'prefix-text-field'" :isPlaceholder="false" :required="false" />
    </div>
    <div class="input-group">
      <InputField :inputId="'suffix-text-field'" :isPlaceholder="false" :required="false" />
      <span class="input-group-text">$</span>
      <span class="input-group-text">0.00</span>
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
