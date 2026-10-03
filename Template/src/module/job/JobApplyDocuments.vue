<template>
  <form class="form theme-form">
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Upload Cover Letter'">
            <InputField :inputId="'cover-letter'" :inputType="'file'" :required="false" />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <InputWrapper :title="'Upload Your CV'">
            <InputField :inputId="'cv'" :inputType="'file'" :required="false" />
          </InputWrapper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>
          <InputWrapper :title="'Upload Recommendations'">
            <InputField :inputId="'cover-recommendations'" :inputType="'file'" :required="false" />
          </InputWrapper>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
