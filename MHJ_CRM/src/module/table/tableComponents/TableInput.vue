<template>
  <Card :headerTitle="'Input'" :padding="false" :cardBodyClass="'p-0'">
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-bordered checkbox-td-width">
            <tbody>
              <tr>
                <td>Default Input Text</td>
                <td class="w-50">
                  <InputField
                    :inputId="'text'"
                    :placeholder="'Input text'"
                    :inputType="'email'"
                    :class="'input-primary'"
                    :required="false"
                  />
                </td>
                <td>
                  <span>Use for basic select control.</span>
                </td>
              </tr>
              <tr>
                <td>Input Hover Color</td>
                <td class="w-50">
                  <InputField
                    :inputId="'text2'"
                    :placeholder="'Input text'"
                    :inputType="'email'"
                    :required="false"
                  />
                </td>
                <td>
                  <span
                    >Use for basic input color add class <code>input-air-*</code
                    ><code>primary, secondary, success, info </code>on input</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
