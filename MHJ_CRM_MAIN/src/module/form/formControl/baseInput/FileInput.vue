<template>
  <Card :headerTitle="'File Input'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        For default file/multiple file/disabled file/small file/large file input for use
        <code>&lt;input&gt; </code>with <code>(type='file')</code>.
      </p>
    </template>
    <div class="mb-3">
      <InputWrapper :title="'Default File Input Example'">
        <InputField :inputId="'default-file'" :inputType="'file'" :required="false" />
      </InputWrapper>
    </div>
    <div class="mb-3">
      <InputWrapper :title="'Multiple Files Input Example'">
        <InputField
          :inputId="'multiple-file'"
          :inputType="'file'"
          :multiple="true"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="mb-3">
      <InputWrapper :title="'Disabled File Input Example'">
        <InputField
          :inputId="'disable-file'"
          :inputType="'file'"
          :disabled="true"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="mb-3">
      <InputWrapper :title="'Small File Input Example'">
        <InputField
          :inputId="'small-file-input'"
          :inputType="'file'"
          :class="'form-control-sm'"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="mb-3">
      <InputWrapper :title="'Large File Input Example'">
        <InputField
          :inputId="'large-file-input'"
          :inputType="'file'"
          :class="'form-control-lg'"
          :required="false"
        />
      </InputWrapper>
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
</script>
