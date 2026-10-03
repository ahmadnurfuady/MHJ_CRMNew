<template>
  <div class="row">
    <InputWrapper :title="'Status'" :class="'col-md-3 col-auto'">
      <div class="col-md-9 col-auto">
        <div class="form-check form-switch form-check-inline">
          <div class="form-check form-switch form-check-inline">
            <input
              class="form-check-input switch-primary check-size"
              type="checkbox"
              role="switch"
            />
          </div>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Key'" :class="'col-md-3'">
      <div class="col-md-9">
        <InputField :inputId="'key'" :placeholder="'Enter key'" :required="false" />
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Secret'" :class="'col-md-3'">
      <div class="col-md-9">
        <InputField :inputId="'secret'" :placeholder="'Enter secret'" :required="false" />
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
