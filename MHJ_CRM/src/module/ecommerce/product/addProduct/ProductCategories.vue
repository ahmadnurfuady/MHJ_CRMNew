<template>
  <div class="tab-content custom-input">
    <div class="sidebar-body common-form e-category">
      <form class="row g-3 common-form">
        <div class="col-md">
          <InputWrapper :title="'Add Category'">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select category'"
              v-model="form.category"
              :options="productCategory"
            />
          </InputWrapper>
        </div>
        <div class="col-auto">
          <div class="category-btn">
            <a class="btn button-primary" href="#" @click.prevent="createCategoryModal()">
              <i class="me-2 fa-solid fa-plus"> </i>Create New Category
            </a>
          </div>
        </div>
        <div class="col-sm-12 common-tagify">
          <label class="form-label">Add Tag</label>
          <TagInput v-model:tags="items" />
        </div>
        <div class="product-buttons">
          <button class="btn" type="button" @click="handleTab(-1)">
            <SvgIcon :icon="'back-arrow'"></SvgIcon>Previous
          </button>
          <button class="btn" type="button" @click="handleTab(1)">
            Next
            <SvgIcon :icon="'front-arrow'"></SvgIcon>
          </button>
        </div>
      </form>
    </div>
  </div>

  <CreateCategoryModal :modalOpen="openCategoryModal" @closeModal="openCategoryModal = false" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

import { initSelectField } from '@/core/data/common'
import { productCategory } from '@/core/data/product'
import { useProduct } from '@/store/product'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const CreateCategoryModal = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/CreateCategoryModal.vue')
)

const props = defineProps<{
  activeTabId: number
}>()

const emits = defineEmits(['changeTab'])
const { changeTab } = useProduct()

const form = ref({
  category: initSelectField(),
})
const items = ref<string[]>(['watches', 'sports', 'clothes', 'bottles'])
const openCategoryModal = ref<boolean>(false)

function createCategoryModal() {
  openCategoryModal.value = true
}

function handleTab(value: number) {
  if (props.activeTabId) {
    const updatedId = changeTab(value, props.activeTabId)
    if (updatedId) {
      emits('changeTab', updatedId)
    }
  }
}
</script>
