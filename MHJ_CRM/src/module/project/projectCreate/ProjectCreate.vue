<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card create-project-form custom-input">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <form class="row g-3 needs-validation" @submit.prevent="handleSubmit">
                  <div class="col-md-6">
                    <InputWrapper :title="'Project Name'">
                      <InputField
                        :formSubmitted="formSubmitted"
                        :errorMessage="'Project Name is required.'"
                        v-model:modelValue="projectForm.projectName"
                        :inputId="'project-title'"
                        :placeholder="'Enter Project Name'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Client Name'">
                      <InputField
                        :formSubmitted="formSubmitted"
                        :errorMessage="'Client Name is required.'"
                        v-model:modelValue="projectForm.clientName"
                        :inputId="'client-name'"
                        :placeholder="'Enter Client Name'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <InputWrapper :title="'Cost'">
                      <InputField
                        :formSubmitted="formSubmitted"
                        :errorMessage="'Cost is required.'"
                        v-model:modelValue="projectForm.cost"
                        :inputId="'project-title'"
                        :placeholder="'Enter Cost'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <InputWrapper :title="'Project Type'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Select Project Type'"
                        v-model="projectForm.projectCost"
                        :options="projectType"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <InputWrapper :title="'Category'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Select Category'"
                        v-model="projectForm.projectCategory"
                        :options="projectCategory"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-md-6">
                    <InputWrapper :title="'Priority'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Select Priority'"
                        v-model="projectForm.projectPriority"
                        :options="projectPriority"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-md-6">
                    <InputWrapper :title="'Select Team Leader'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Select Select Team Leader'"
                        v-model="projectForm.teamLeader"
                        :options="teamMember"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-md-6">
                    <InputWrapper :title="'Select Members'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Select Select Members'"
                        v-model="projectForm.teamMember"
                        :options="teamMember"
                        :formSubmitted="formSubmitted"
                        :multiSelect="true"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-md-6">
                    <InputWrapper :title="'Size'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Select Size'"
                        v-model="projectForm.projectSize"
                        :options="projectSize"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-md-6">
                    <InputWrapper :title="'Start Date'">
                      <InputField
                        :formSubmitted="formSubmitted"
                        :errorMessage="'Start date is required.'"
                        v-model:modelValue="projectForm.startDate"
                        :inputId="'start-date'"
                        :placeholder="'Enter Start Date'"
                        :inputType="'date'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-md-6">
                    <InputWrapper :title="'End Date'">
                      <InputField
                        :formSubmitted="formSubmitted"
                        :errorMessage="'End date is required.'"
                        v-model:modelValue="projectForm.endDate"
                        :inputId="'end-date'"
                        :placeholder="'Enter End Date'"
                        :inputType="'date'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <InputWrapper :title="'Details'">
                      <InputField
                        :formSubmitted="formSubmitted"
                        :errorMessage="'Details is required.'"
                        v-model:modelValue="projectForm.details"
                        :inputId="'end-date'"
                        :placeholder="'Enter Details'"
                        :inputType="'textarea'"
                        :rows="4"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <InputWrapper :title="'Upload Documents'">
                      <InputField
                        :formSubmitted="formSubmitted"
                        :errorMessage="'Please select your file.'"
                        v-model:modelValue="projectForm.document"
                        :inputId="'document'"
                        :placeholder="'Upload Documents'"
                        :inputType="'file'"
                        :multiple="true"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <div class="common-flex justify-content-end">
                      <button class="btn btn-primary" type="submit">Add</button>
                      <button class="btn btn-secondary">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { initInputField, initSelectField } from '@/core/data/common'
import {
  projectCategory,
  projectPriority,
  projectSize,
  projectType,
  teamMember,
} from '@/core/data/project'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const projectForm = ref({
  projectName: initInputField(),
  clientName: initInputField(),
  cost: initInputField(),
  projectCost: initSelectField(),
  projectCategory: initSelectField(),
  projectPriority: initSelectField(),
  teamLeader: initSelectField(),
  teamMember: initSelectField(),
  projectSize: initSelectField(),
  startDate: initInputField(),
  endDate: initInputField(),
  details: initInputField(),
  document: initInputField(),
})

const formSubmitted = ref<boolean>(false)

function handleSubmit() {
  formSubmitted.value = true
}
</script>
