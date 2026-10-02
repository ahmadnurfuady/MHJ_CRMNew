<template>
  <Card
    :headerTitle="'Basic HTML Input Control'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="'custom-input theme-form'"
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
          <InputWrapper :title="'Placeholder'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'placeholder'"
                :placeholder="'Type your title in Placeholder'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Password'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'password'"
                :inputType="'password'"
                :placeholder="'Password input'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Number'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'number'"
                :inputType="'number'"
                :placeholder="'Number input'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Telephone'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'tel'"
                :inputType="'tel'"
                :placeholder="'91-(999)-999-999'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'URL'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'url'"
                :inputType="'url'"
                :placeholder="'https://getbootstrap.com'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Date and Time'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'date-time'"
                :inputType="'datetime-local'"
                :placeholder="'2018-01-19T18:45:00'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Date'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'date'"
                :inputType="'date'"
                :placeholder="'2018-01-01'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Month'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'month'"
                :inputType="'month'"
                :placeholder="'2018-01'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Week'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'week'"
                :inputType="'week'"
                :placeholder="'2018-W09'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Datalist Example'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'datalist'"
                :placeholder="'Look up your nation...'"
                :required="false"
                :datalist="states"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Time'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'time'"
                :inputType="'time'"
                :placeholder="'21:45:00'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Color Picker'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'color'"
                :inputType="'color'"
                :placeholder="'#006666'"
                v-model:modelValue="colorPicker"
                :required="false"
                :class="'form-control-color'"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="mb-3 row">
          <InputWrapper :title="'Maximum Length'" :class="'col-sm-3'">
            <div class="col-sm-9">
              <InputField
                :inputId="'max-length'"
                :placeholder="'Content must be in 6 characters'"
                :required="false"
                :maxlength="6"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <label class="col-sm-3">Static Text</label>
          <div class="col-sm-9">
            <div class="form-control-static">Hello !... This is my magical text</div>
          </div>
        </div>
      </div>
    </div>
    <template #details>
      <div class="card-footer text-end">
        <div class="col-sm-9 offset-sm-3">
          <button class="btn btn-primary me-3" type="submit">Submit</button>
          <input class="btn btn-light" type="reset" value="Cancel" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { states } from '@/core/data/country'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const colorPicker = ref({ data: '#006666', errorMessage: '' })
</script>
