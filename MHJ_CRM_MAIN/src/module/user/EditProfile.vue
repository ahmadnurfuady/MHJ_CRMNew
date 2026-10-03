<template>
  <Card :headerTitle="'Edit Profile'" :border="true" :padding="false">
    <form>
      <div class="row custom-input">
        <div class="col-xxl-5 box-col-12">
          <div class="mb-3">
            <InputWrapper :title="'Company'">
              <InputField :inputId="'company-name'" :placeholder="'Company'" :required="false" />
            </InputWrapper>
          </div>
        </div>
        <div class="col-sm-6 col-xxl-3 box-col-6">
          <div class="mb-3">
            <InputWrapper :title="'Username'">
              <InputField :inputId="'user-name'" :placeholder="'Username'" :required="false" />
            </InputWrapper>
          </div>
        </div>
        <div class="col-sm-6 col-xxl-4 box-col-6">
          <div class="mb-3">
            <InputWrapper :title="'Email Address'">
              <InputField
                :inputId="'email'"
                :placeholder="'Email'"
                :inputType="'email'"
                :required="false"
              />
            </InputWrapper>
          </div>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="mb-3">
            <InputWrapper :title="'First Name'">
              <InputField :inputId="'first-name'" :placeholder="'First name'" :required="false" />
            </InputWrapper>
          </div>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="mb-3">
            <InputWrapper :title="'Last Name'">
              <InputField :inputId="'last-name'" :placeholder="'Last name'" :required="false" />
            </InputWrapper>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <InputWrapper :title="'Address'">
              <InputField
                :inputId="'address'"
                :placeholder="'Home address'"
                :inputType="'textarea'"
                :rows="2.5"
                :required="false"
              />
            </InputWrapper>
          </div>
        </div>
        <div class="col-xxl-5 box-col-12">
          <div class="mb-3">
            <InputWrapper :title="'Country'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select country'"
                v-model="countryValue"
                :options="country"
                :required="false"
              />
            </InputWrapper>
          </div>
        </div>
        <div class="col-sm-6 col-xxl-4 box-col-6">
          <div class="mb-3">
            <InputWrapper :title="'City'">
              <InputField :inputId="'city'" :placeholder="'City'" :required="false" />
            </InputWrapper>
          </div>
        </div>
        <div class="col-sm-6 col-xxl-3 box-col-6">
          <div class="mb-3">
            <InputWrapper :title="'Postal Code'">
              <InputField
                :inputId="'postal-code'"
                :placeholder="'Postal Code'"
                :inputType="'number'"
                :required="false"
              />
            </InputWrapper>
          </div>
        </div>
        <div class="col-md-12">
          <div>
            <InputWrapper :title="'About Me'">
              <InputField
                :inputId="'about'"
                :placeholder="'Enter about your description'"
                :inputType="'textarea'"
                :rows="4"
                :required="false"
              />
            </InputWrapper>
          </div>
        </div>
      </div>
    </form>
    <div class="card-footer text-end" details>
      <button class="btn btn-primary" type="submit">Update Profile</button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { country } from '@/core/data/country'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const countryValue = ref(initSelectField())
</script>
