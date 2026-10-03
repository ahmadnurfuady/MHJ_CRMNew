<template>
  <template v-if="props.details">
    <div
      v-if="isVisible && props.details.backdrop"
      class="offcanvas-backdrop fade show"
      @click.self="handleBackdropClick"
    ></div>

    <div v-if="isVisible" :class="`offcanvas offcanvas-${props.details.direction} show`">
      <div class="offcanvas-header pb-0">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          {{ props.details.title }}
        </h5>
        <button class="btn-close" type="button" @click="closeOffcanvas()"></button>
      </div>
      <div class="offcanvas-body custom-input custom-scrollbar">
        <form class="row g-3">
          <div class="col-12">
            <InputWrapper :title="'Email'">
              <InputField
                :inputId="'email'"
                :inputType="'email'"
                :placeholder="'name@example.com'"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-12">
            <InputWrapper :title="'Select Project'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select your projects'"
                v-model="form.project"
                :options="projects"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-12">
            <InputWrapper :title="'Project Counts'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'How many projects do you make?'"
                v-model="form.projectCount"
                :options="projectCount"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-12">
            <InputWrapper :title="'External Notes'">
              <InputField
                :inputId="'note'"
                :inputType="'textarea'"
                :placeholder="'External Notes'"
                :rows="4"
                :required="false"
              />
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
            <button class="btn btn-light me-2" type="submit" @click="closeOffcanvas()">
              Cancel
            </button>
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import type { Select } from '@/types/common'
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
  project: initSelectField(),
  projectCount: initSelectField(),
})

const projects = ref<Select[]>([
  { value: 'Project1', label: 'Project1' },
  { value: 'Project2', label: 'Project2' },
  { value: 'Project3', label: 'Project3' },
])

const projectCount = ref<Select[]>([
  { value: 'One', label: 'One' },
  { value: 'Two', label: 'Two' },
  { value: 'Three', label: 'Three' },
])

const isVisible = ref<boolean>(true)

function closeOffcanvas() {
  isVisible.value = false
  emits('closeOffcanvas')
}

function handleBackdropClick() {
  if (props.details)
    if (props.details && props.details.outsideClose) {
      closeOffcanvas()
    }
}
</script>
