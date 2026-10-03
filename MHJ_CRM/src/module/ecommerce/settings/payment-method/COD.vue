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
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
</script>
