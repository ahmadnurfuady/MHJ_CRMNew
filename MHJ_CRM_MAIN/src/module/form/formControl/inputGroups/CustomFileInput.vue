<template>
  <Card
    :headerTitle="'Custom File Input'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="'main-custom-form input-group-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Input groups include support for custom selects and custom
        <code>file uploads</code>. Browser default versions of these are not supported.
      </p>
    </template>
    <div class="input-group">
      <InputWrapper :title="'Upload'" :class="'input-group-text'">
        <InputField :inputId="'file-upload-1'" :inputType="'file'" :required="false" />
      </InputWrapper>
    </div>
    <div class="input-group">
      <InputWrapper :title="'Verify'" :class="'input-group-text'" :labelPositionBottom="true">
        <InputField :inputId="'file-upload-2'" :inputType="'file'" :required="false" />
      </InputWrapper>
    </div>
    <div class="input-group">
      <button class="btn btn-outline-secondary" id="inputGroupFileAddon03" type="button">
        <i class="icofont icofont-ui-copy"></i>
      </button>
      <InputField :inputId="'file-upload-3'" :inputType="'file'" :required="false" />
    </div>
    <div class="input-group">
      <InputField :inputId="'file-upload-4'" :inputType="'file'" :required="false" />
      <button class="btn btn-outline-secondary" id="inputGroupFileAddon04" type="button">
        Submit
      </button>
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
