<template>
  <div class="tab-content custom-input">
    <form class="price-wrapper common-form row g-3">
      <div class="col-sm-6">
        <InputWrapper title="Initial Price">
          <InputField inputId="initial-price" placeholder="Initial price" />
        </InputWrapper>
      </div>

      <div class="col-sm-6">
        <InputWrapper title="Selling Price">
          <InputField inputId="selling-price" placeholder="Selling price" />
        </InputWrapper>
      </div>

      <div class="col-12">
        <label class="form-label">
          Product Discount Options
          <i
            class="icon-help-alt ms-1"
            v-tooltip
            title="Choose the kind of discount that will be used on that particular item."
          ></i>
        </label>

        <ul class="nav nav-pills discount-options">
          <li class="nav-item" v-for="(tab, index) in productPriceTabs" :key="index">
            <a
              class="nav-link"
              :class="{ active: activeTab === tab.value }"
              @click.prevent="activeTab = tab.value"
              href="#"
            >
              <span>{{ tab.title }}</span>
            </a>
          </li>
        </ul>
        <PricingTabContent :activeTab="activeTab" v-model:form="form" />
      </div>

      <div class="product-buttons">
        <button class="btn" type="button" @click="handleTab(-1)">
          <SvgIcon name="back-arrow" /> Previous
        </button>
        <button class="btn" type="button" @click="handleTab(1)">
          Next <SvgIcon name="front-arrow" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { initSelectField } from '@/core/data/common'
import { productPriceTabs } from '@/core/data/product'
import { useProduct } from '@/store/product'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const PricingTabContent = defineAsyncComponent(() => import('./PricingTabContent.vue'))

const props = defineProps<{ activeTabId: number }>()
const emits = defineEmits(['changeTab'])

const { changeTab } = useProduct()

const activeTab = ref('fixed_price_discount')

const form = ref({
  productOptions: initSelectField(),
  discountType: initSelectField(),
})

function handleTab(value: number) {
  if (props.activeTabId) {
    const updatedId = changeTab(value, props.activeTabId)
    if (updatedId) emits('changeTab', updatedId)
  }
}
</script>
