<template>
  <Card
    :headerTitle="'Border Right'"
    :header="' border-r-secondary'"
    :cardClass="'common-hover'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="mt-1 f-m-light">Use class of <code>b-r-* </code>for the right border.</p>
    </template>
    <p>
      You can design your creative card by taking only the
      <strong>border-r-secondary</strong> class. If you want to use other colors like this:
      <strong>border-r-*</strong>
    </p>
    <form>
      <InputWrapper :title="'Email address'">
        <InputField
          :inputId="'emil'"
          :inputType="'email'"
          :placeholder="'youremail@gmail.com'"
          :required="false"
        />
      </InputWrapper>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
