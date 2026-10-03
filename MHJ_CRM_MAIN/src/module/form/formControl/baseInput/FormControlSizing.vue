<template>
  <Card :headerTitle="'Form Control Sizing'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Set heights using classes like <code>form-control-lg</code> and
        <code>form-control-sm</code>.
      </p>
    </template>
    <InputField
      :inputId="'sizing'"
      :placeholder="'.form-control-sm'"
      :class="'form-control-sm'"
      :required="false"
    />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
