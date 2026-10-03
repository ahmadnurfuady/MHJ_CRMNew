<template>
  <form class="row g-3 needs-validation" novalidate v-if="props.form">
    <div class="col-md-6">
      <InputWrapper :title="'Account Name'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Account name is required.'"
          v-model:modelValue="props.form.accountName"
          :inputId="'account-name'"
          :placeholder="'Enter account name'"
        />
      </InputWrapper>
    </div>
    <div class="col-md-6">
      <InputWrapper :title="'Email'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Email is required.'"
          v-model:modelValue="props.form.email"
          :inputId="'email'"
          :inputType="'email'"
          :placeholder="'org@superrito.com'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <InputWrapper :title="'Select a project and write a description for it'">
        <InputField
          :formSubmitted="props.formSubmitted"
          :errorMessage="'Description is required.'"
          v-model:modelValue="props.form.projectDescription"
          :inputId="'description'"
          :inputType="'textarea'"
          :placeholder="'Enter project description'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <section class="main-upgrade">
        <div>
          <i class="fa-solid fa-rocket"></i>
          <h5 class="mb-2 mt-sm-3 mt-2">
            Select team size with <span class="txt-primary">projects</span>
          </h5>
          <p class="text-muted mb-2">
            Agile teams are cross-functional and made up of 5-11 on a regular basis team member.
          </p>
        </div>
        <div class="variation-box">
          <div class="selection-box" v-for="(project, index) in projects" :key="index">
            <input
              type="checkbox"
              :id="project.title"
              :value="project.title"
              v-model="props.form.project"
              @change="handleChange($event, project.title)"
            />
            <div class="custom--mega-checkbox">
              <ul class="d-flex flex-column">
                <li>{{ project.title }}</li>
                <li class="txt-primary">{{ project.member }} Members</li>
              </ul>
            </div>
          </div>
          <template v-if="!props.form.project.length && props.formSubmitted">
            <div class="invalid-feedback d-block">Please select at least one project.</div>
          </template>
        </div>
      </section>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { projects } from '@/core/data/forms/formLayout'
import type { BusinessWizardBusinessSetting } from '@/types/forms/formLayout'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const props = defineProps<{
  form: BusinessWizardBusinessSetting
  formSubmitted: boolean
}>()

const defaultChecked = projects.find((type) => type.checked)
if (defaultChecked && props.form) {
  props.form.project.push(defaultChecked.title)
}

function handleChange(event: Event, value: string) {
  const isChecked = (event.target as HTMLInputElement).checked

  if (props.form && Array.isArray(props.form.project)) {
    const index = props.form.project.indexOf(value)

    if (isChecked && index === -1) {
      props.form.project.push(value) // Add if not already present
    } else if (!isChecked && index !== -1) {
      props.form.project.splice(index, 1) // Remove if present
    }
  }
}
</script>
