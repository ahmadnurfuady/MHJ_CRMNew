<template>
  <template v-if="props.details">
    <div
      v-if="isVisible"
      class="offcanvas-backdrop fade show"
      @click.self="handleBackdropClick"
    ></div>
    <div v-if="isVisible" :class="`offcanvas offcanvas-${props.details.direction} show`">
      <div class="offcanvas-header pb-0">
        <h5 class="offcanvas-title">{{ props.details.title }}</h5>
        <button class="btn-close" type="button" @click="closeOffcanvas" />
      </div>
      <div class="offcanvas-body custom-input custom-scrollbar">
        <form class="row g-3">
          <div class="col-md-4">
            <InputWrapper :title="'First Name'">
              <InputField
                :inputId="'first-name'"
                :placeholder="'Enter first name'"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-4">
            <InputWrapper :title="'Last Name'">
              <InputField
                :inputId="'last-name'"
                :placeholder="'Enter last name'"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-4">
            <InputWrapper :title="'Username'">
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <InputField
                  :inputId="'username'"
                  :placeholder="'Enter username'"
                  :required="false"
                />
              </div>
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="'City'">
              <InputField :inputId="'city'" :placeholder="'Enter city'" :required="false" />
            </InputWrapper>
          </div>
          <div class="col-md-3">
            <InputWrapper :title="'Country'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select country'"
                v-model="form.country"
                :options="country"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-3">
            <InputWrapper :title="'Zip'">
              <InputField :inputId="'zip'" :placeholder="'Enter zip'" :required="false" />
            </InputWrapper>
          </div>
          <div class="col-12">
            <div class="form-check checkbox-checked">
              <Checkbox
                :class="'form-check-input'"
                :label="'Agree to terms and conditions'"
                :inputId="'check'"
                :required="false"
              />
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { initSelectField } from '@/core/data/common'
import { country } from '@/core/data/country'
import type { OffcanvasDetails } from '@/types/uiKits'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  details: OffcanvasDetails
}>()

const emits = defineEmits(['closeOffcanvas'])

const form = ref({
  country: initSelectField(),
})

const isVisible = ref<boolean>(true)

function closeOffcanvas() {
  isVisible.value = false
  emits('closeOffcanvas')
}

function handleBackdropClick() {
  closeOffcanvas()
}
</script>
