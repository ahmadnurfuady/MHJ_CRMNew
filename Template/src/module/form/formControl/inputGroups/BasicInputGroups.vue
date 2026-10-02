<template>
  <Card :headerTitle="'Basic Input Groups'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Place one add-on or button on either side of an input. You may also place one on both sides
        of an input. Remember to place <code>&lt;label&gt;</code>s outside the input group.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-md-12">
        <div class="card-wrapper border rounded-3 main-custom-form input-group-wrapper">
          <h6 class="sub-title">Basic</h6>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">&#64;</span>
            <InputField :inputId="'user-name'" :placeholder="'Username'" :required="false" />
          </div>
          <div class="input-group">
            <InputField
              :inputId="'recipient-name'"
              :placeholder="'Recipient\'s username'"
              :required="false"
            />
            <span class="input-group-text" id="basic-addon2">&#64;example.com</span>
          </div>
          <label class="form-label" for="basic-url">Your Vanity URL</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">https://example.com/</span>
            <InputField :inputId="'basic-url'" :isPlaceholder="false" :required="false" />
          </div>
          <div class="input-group">
            <span class="input-group-text">$</span>
            <InputField :inputId="'text-field'" :isPlaceholder="false" :required="false" />
            <span class="input-group-text">.00</span>
          </div>
          <div class="input-group">
            <InputField :inputId="'text-field1'" :placeholder="'Username'" :required="false" />
            <span class="input-group-text">&#64;</span>
            <InputField :inputId="'text-field2'" :placeholder="'Server'" :required="false" />
          </div>
          <div class="input-group">
            <span class="input-group-text">With Textarea</span>
            <InputField
              :inputId="'textarea'"
              :inputType="'textarea'"
              :rows="2"
              :isPlaceholder="false"
              :required="false"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card-wrapper border rounded-3 input-radius">
          <h6 class="sub-title">Wrapping</h6>
          <p class="f-m-light mb-1">
            Input groups wrap by default via flex-wrap: wrap in order to accommodate custom form
            field validation within an input group. You may disable this with
            <code>flex-nowrap</code>.
          </p>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">&#64;</span>
            <InputField :inputId="'user-name'" :placeholder="'Username'" :required="false" />
          </div>
        </div>
      </div>
    </div>
    <template #details>
      <div class="card-footer">
        <button class="btn btn-primary m-r-15" type="submit">Submit</button>
        <button class="btn btn-light" type="submit">Cancel</button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
