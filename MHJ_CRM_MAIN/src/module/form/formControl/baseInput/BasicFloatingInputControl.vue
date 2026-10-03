<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Basic Floating Input Control'"
    :cardBodyClass="'custom-input theme-form'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Give textual form controls like <code>&lt;input&gt;</code>s and
        <code>&lt;textarea&gt;</code>s an upgrade with custom styles, sizing, focus states, and
        more.
      </p>
    </template>
    <div class="row">
      <div class="col">
        <div class="mb-3 row">
          <InputWrapper :title="'Valid Input'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="form-floating">
                <InputWrapper :title="'Input with value'" :labelPositionBottom="true">
                  <InputField
                    :inputId="'email'"
                    v-model:modelValue="form.validInput"
                    :inputType="'email'"
                    :required="false"
                    :isPlaceholder="false"
                  />
                </InputWrapper>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Invalid Input'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="form-floating">
                <InputWrapper :title="'Invalid input'" :labelPositionBottom="true">
                  <InputField
                    :inputId="'email'"
                    v-model:modelValue="form.invalidInput"
                    :formSubmitted="formSubmitted"
                    :inputType="'email'"
                    :isPlaceholder="false"
                  />
                </InputWrapper>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Comments'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="form-floating">
                <InputWrapper :title="'Comments'" :labelPositionBottom="true">
                  <InputField
                    :inputId="'comments'"
                    :inputType="'textarea'"
                    :required="false"
                    :isPlaceholder="false"
                  />
                </InputWrapper>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Email'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="form-floating mb-3">
                <InputWrapper :title="'Email address'" :labelPositionBottom="true">
                  <InputField
                    :inputId="'email'"
                    :inputType="'email'"
                    :required="false"
                    :isPlaceholder="false"
                  />
                </InputWrapper>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Password'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="form-floating mb-3">
                <InputWrapper :title="'Password'" :labelPositionBottom="true">
                  <InputField
                    :inputId="'password'"
                    :inputType="'password'"
                    :required="false"
                    :isPlaceholder="false"
                  />
                </InputWrapper>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Comments'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="form-floating mb-3">
                <InputWrapper :title="'Comments'" :labelPositionBottom="true">
                  <InputField
                    :inputId="'comments'"
                    :inputType="'textarea'"
                    :class="'h-100'"
                    :required="false"
                    :isPlaceholder="false"
                  />
                </InputWrapper>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Open This Select Menu'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="form-floating mb-3">
                <Select
                  getValueKey="label"
                  display-key="label"
                  v-model="form.selectMenu"
                  :options="selectNumber"
                  :required="false"
                  :isPlaceholder="true"
                  :placeholder="'Open this select menu'"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Input Group'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="input-group mb-3">
                <span class="input-group-text">&#64;</span>
                <div class="form-floating">
                  <InputWrapper :title="'Username'" :labelPositionBottom="true">
                    <InputField :inputId="'username'" :required="false" :isPlaceholder="false" />
                  </InputWrapper>
                </div>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Invalid Input Group'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="input-group mb-3">
                <span class="input-group-text">&#64;</span>
                <div class="form-floating">
                  <InputWrapper :title="'Username'" :labelPositionBottom="true">
                    <InputField
                      :inputId="'username'"
                      v-model:modelValue="form.invalidInputGroup"
                      :errorMessage="'Please choose a username.'"
                      :formSubmitted="formSubmitted"
                      :isPlaceholder="false"
                    />
                  </InputWrapper>
                </div>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="mb-0 row">
          <InputWrapper :title="'Layout'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <div class="row g-2">
                <div class="col-xxl-6">
                  <div class="form-floating">
                    <InputWrapper :title="'Email address'" :labelPositionBottom="true">
                      <InputField
                        :inputId="'email'"
                        v-model:modelValue="form.validEmail"
                        :inputType="'email'"
                        :required="false"
                        :isPlaceholder="false"
                      />
                    </InputWrapper>
                  </div>
                </div>
                <div class="col-xxl-6">
                  <Select
                    getValueKey="label"
                    display-key="label"
                    v-model="form.layout"
                    :options="selectMenu"
                    :required="false"
                    :isPlaceholder="true"
                    :placeholder="'Open this select menu'"
                  />
                </div>
              </div>
            </div>
          </InputWrapper>
        </div>
      </div>
    </div>
    <template #details>
      <div class="card-footer text-end">
        <div class="col-sm-9 offset-sm-3">
          <button class="btn btn-primary me-3" type="button">Submit</button>
          <input class="btn btn-light" type="reset" value="Cancel" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'

import { initInputField, initSelectField } from '@/core/data/common'
import { selectMenu, selectNumber } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const formSubmitted = ref<boolean>(true)

const form = reactive({
  validInput: { data: 'test@example.com', errorMessage: '' },
  invalidInput: initInputField(),
  selectMenu: initSelectField(),
  invalidInputGroup: initInputField(),
  validEmail: { data: 'test@example.com', errorMessage: '' },
  layout: initSelectField(),
})
</script>
