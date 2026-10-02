<template>
  <Card
    :headerTitle="'Button Addons'"
    :border="true"
    :padding="false"
    :cardBodyClass="'card-wrapper input-group-wrapper btn-addon'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Multiple add-ons are supported and can be mixed with buttons input versions.
      </p>
    </template>
    <div class="input-group">
      <button class="btn btn-outline-secondary" id="button-addon1" type="button">$ 25</button>
      <InputField :inputId="'text-field'" :isPlaceholder="false" :required="false" />
    </div>
    <div class="input-group">
      <InputField
        :inputId="'text-field'"
        :placeholder="'Recipient\'s username'"
        :required="false"
      />
      <button class="btn btn-outline-light" id="button-addon2" type="button">Submit</button>
    </div>
    <div class="input-group">
      <button class="btn btn-primary" type="button">
        <span>&#8364; </span>
      </button>
      <button class="btn btn-light" type="button">0.0114419</button>
      <InputField :inputId="'text-field'" :isPlaceholder="false" :required="false" />
    </div>
    <div class="input-group">
      <InputField
        :inputId="'text-field'"
        :placeholder="'Recipient\'s username'"
        :required="false"
      />
      <button class="btn btn-primary" type="button">
        <span>&#8377;</span>
      </button>
      <button class="btn btn-warning" type="button">500</button>
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
