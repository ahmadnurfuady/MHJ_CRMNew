<template>
  <div class="common-flex">
    <div class="btn-group">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        Dropdown form
      </button>
      <form class="dropdown-menu p-4 form-wrapper dark-form">
        <div class="mb-3">
          <InputWrapper :title="'Email Address'" :class="'f-w-500'">
            <InputField
              :inputId="'email'"
              :inputType="'email'"
              :placeholder="'email@example.com'"
              :required="false"
            />
          </InputWrapper>
        </div>
        <div class="mb-3">
          <InputWrapper :title="'Password'" :class="'f-w-500'">
            <InputField
              :inputId="'password'"
              :inputType="'password'"
              :placeholder="'Password'"
              :required="false"
            />
          </InputWrapper>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <Checkbox :label="'Remember me'" :inputId="'remember'" :required="false" />
          </div>
        </div>
        <button class="btn btn-primary" type="button">Sign in</button>
      </form>
    </div>
  </div>
  <div class="btn-group">
    <button
      class="btn btn-dark dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Text
    </button>
    <div class="dropdown-menu p-4 form-wrapper">
      <p>Some example text that&apos;s free-flowing within the dropdown menu.</p>
      <p class="mb-0">And this is more example text.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))
</script>
