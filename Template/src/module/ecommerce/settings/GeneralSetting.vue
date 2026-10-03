<template>
  <div class="row">
    <InputWrapper :title="'Meta Title'" :class="'col-md-3'">
      <div class="col-md-9">
        <InputField :inputId="'meta-title'" :placeholder="'Enter meta title'" :required="false" />
      </div>
    </InputWrapper>
  </div>

  <div class="row">
    <InputWrapper :title="'Meta Description'" :class="'col-md-3'">
      <div class="col-md-9">
        <Editor />
      </div>
    </InputWrapper>
  </div>

  <div class="row">
    <InputWrapper :title="'Currency'" :class="'col-md-3'">
      <div class="col-md-9">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select currency'"
          v-model="generalSettingForm.currency"
          :options="currency"
          :required="false"
        />
      </div>
    </InputWrapper>
  </div>

  <div class="row">
    <InputWrapper :title="'Timezone'" :class="'col-md-3'">
      <div class="col-md-9">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select timezone'"
          v-model="generalSettingForm.timezone"
          :options="timezones"
          :required="false"
        />
      </div>
    </InputWrapper>
  </div>

  <div class="row">
    <InputWrapper :title="'Min Order Amount'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="input-group">
          <span class="input-group-text" id="minOrder">
            <i class="fa-solid fa-dollar-sign"></i>
          </span>
          <InputField
            :inputId="'min-order-amount'"
            :placeholder="'Enter min order amount'"
            v-model:modelValue="generalSettingForm.orderAmount"
            :required="false"
          />
        </div>
        <div class="helper-text">
          <p class="fst-italic c-o-light">
            *Please enter the minimum amount required for an order to be processed.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>

  <div class="row">
    <InputWrapper :title="'Min Order Free Shipping'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="input-group">
          <span class="input-group-text" id="minOrderShipping">
            <i class="fa-solid fa-dollar-sign"></i>
          </span>
          <InputField
            :inputId="'min-order-shipping'"
            :placeholder="'Enter min order free shipping'"
            :inputType="'number'"
            v-model:modelValue="generalSettingForm.minOrderShipping"
            :required="false"
          />
        </div>
        <div class="helper-text">
          <p class="fst-italic c-o-light">
            *Please enter the minimum order amount for free shipping.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { initInputField, initSelectField } from '@/core/data/common'
import { currency } from '@/core/data/currency'
import { timezones } from '@/core/data/timezone'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const Editor = defineAsyncComponent(() => import('@/components/shared/Editor.vue'))

const editor = ref()
const generalSettingForm = ref({
  currency: initSelectField(),
  timezone: initSelectField(),
  orderAmount: initInputField(),
  minOrderShipping: initInputField(),
})

onMounted(async () => {
  const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
  editor.value = ClassicEditor

  generalSettingForm.value.orderAmount.data = '0'
  generalSettingForm.value.minOrderShipping.data = '50'
})
</script>
