<template>
  <div class="row">
    <InputWrapper :title="'Status'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="form-check form-switch form-check-inline">
          <input class="form-check-input switch-primary check-size" type="checkbox" role="switch" />
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Refundable Days'" :class="'col-md-3'">
      <div class="col-md-9">
        <InputField
          :inputId="'refundable-days'"
          :placeholder="'Enter refundable days'"
          :helperText="'Define the period within which users can initiate refund requests for delivered items If left blank, this functionality will be disabled'"
          :inputType="'number'"
          :required="false"
        />
      </div>
    </InputWrapper>
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
</script>
