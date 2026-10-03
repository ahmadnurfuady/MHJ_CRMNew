<template>
  <div class="tab-pane fade show active">
    <div class="meta-body">
      <div class="row g-3">
        <template v-if="activeTab === 'fixed_price_discount'">
          <div class="col-12">
            <InputWrapper title="Discount Price">
              <InputField inputId="discount-price" placeholder="Discount" inputType="number" />
            </InputWrapper>
          </div>
        </template>
        <template v-if="activeTab === 'bogo_product'">
          <div class="col-12">
            <InputWrapper title="Product Name">
              <Select
                getValueKey="label"
                display-key="label"
                placeholder="Select product"
                :options="productOptions"
                v-model="localForm.productOptions"
              />
            </InputWrapper>
          </div>

          <div class="col-sm-6">
            <InputWrapper title="Minimum Quantity">
              <InputField
                inputId="minimum-quantity"
                placeholder="Minimum quantity"
                inputType="number"
              />
            </InputWrapper>
          </div>
          <div class="col-sm-6">
            <InputWrapper title="Maximum Quantity">
              <InputField
                inputId="maximum-quantity"
                placeholder="Maximum quantity"
                inputType="number"
              />
            </InputWrapper>
          </div>
        </template>
      </div>
    </div>

    <template v-if="activeTab === 'percentage_based_discount'">
      <InputWrapper title="Discount Price">
        <InputField inputId="discount-price" placeholder="Discount" inputType="number" />
      </InputWrapper>
    </template>

    <template v-if="activeTab === 'bulk_product'">
      <div class="row g-3">
        <div class="col-12">
          <InputWrapper title="Quantity">
            <InputField inputId="quantity" placeholder="Quantity" inputType="number" />
          </InputWrapper>
        </div>
        <div class="col-sm-6">
          <InputWrapper title="Discount Type">
            <Select
              getValueKey="label"
              display-key="label"
              placeholder="Select discount type"
              :options="priceDiscount"
              v-model="localForm.discountType"
            />
          </InputWrapper>
        </div>
        <div class="col-sm-6">
          <InputWrapper title="Value">
            <InputField inputId="value" placeholder="Value" inputType="number" />
          </InputWrapper>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { productOptions, priceDiscount } from '@/core/data/product'
import type { Select, SelectField } from '@/types/common'
import { initSelectField } from '@/core/data/common'

interface PricingForm {
  productOptions: SelectField
  discountType: SelectField
}

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const localForm = ref<PricingForm>({
  productOptions: initSelectField(),
  discountType: initSelectField(),
})

const props = defineProps<{
  activeTab: string
  form?: PricingForm
}>()

const emit = defineEmits(['update:form'])
</script>
