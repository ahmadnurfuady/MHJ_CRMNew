<template>
  <Card>
    <div class="row g-3 custom-input">
      <div class="col-xl col-md-6">
        <InputWrapper :title="'From: '">
          <Flatpickr class="form-control digits" placeholder="dd-mm-yyyy" :config="dateConfig" />
        </InputWrapper>
      </div>
      <div class="col-xl col-md-6">
        <InputWrapper :title="'To: '">
          <Flatpickr class="form-control digits" placeholder="dd-mm-yyyy" :config="dateConfig" />
        </InputWrapper>
      </div>
      <div class="col-xl col-md-6">
        <InputWrapper :title="'Payment Status'">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select payment status'"
            :required="false"
            v-model="form.payment_status"
            :options="paymentStatusList"
          />
        </InputWrapper>
      </div>
      <div class="col-xl col-md-6">
        <InputWrapper :title="'Payment Methods'">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select payment method'"
            :required="false"
            v-model="form.payment_method"
            :options="paymentMethodList"
          />
        </InputWrapper>
      </div>
      <div class="col d-flex justify-content-start align-items-center m-t-40">
        <a class="btn btn-primary f-w-500" href="#">Submit</a>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { paymentMethod, paymentStatus } from '@/core/data/order'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const dateConfig = ref({
  dateFormat: 'd-m-Y',
})

const form = ref({
  payment_status: initSelectField(),
  payment_method: initSelectField(),
})

const paymentStatusList = paymentStatus
const paymentMethodList = paymentMethod
</script>
