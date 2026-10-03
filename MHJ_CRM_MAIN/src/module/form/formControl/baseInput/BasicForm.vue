<template>
  <Card :headerTitle="'Basic Form'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-label </code>and <code>form-control </code>through create basic form.
      </p>
    </template>
    <div class="card-wrapper border rounded-3">
      <form class="row g-3">
        <div class="col-md-12">
          <InputWrapper :title="'Email'">
            <InputField :inputId="'email'" :placeholder="'Enter your email'" :required="false" />
          </InputWrapper>
        </div>
        <div class="col-md-12">
          <InputWrapper :title="'Password'">
            <InputField
              :inputId="'password'"
              :placeholder="'Enter your password'"
              :inputType="'password'"
              :required="false"
            />
          </InputWrapper>
        </div>
        <div class="col-12">
          <div class="form-check checkbox-checked">
            <Checkbox
              :class="'form-check-input'"
              :label="'Check me out'"
              :inputId="'check'"
              :required="false"
            />
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Sign in</button>
        </div>
      </form>
    </div>
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
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))
</script>
