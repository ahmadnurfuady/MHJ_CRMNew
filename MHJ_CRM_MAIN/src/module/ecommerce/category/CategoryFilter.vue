<template>
  <Card>
    <div class="row g-3">
      <div class="col-md">
        <InputWrapper :title="'Parent Category'">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select parent category'"
            v-model="categoryForm.parent_category"
            :options="parentCategory"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-md">
        <InputWrapper :title="'Category Type'">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select category type'"
            v-model="categoryForm.category_type"
            :options="categoryType"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-md">
        <InputWrapper :title="'Category Status'">
          <Select
            getValueKey="label"
            display-key="label"
            :placeholder="'Select category status'"
            v-model="categoryForm.category_status"
            :options="categoryStatus"
            :required="false"
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
import { ref, defineAsyncComponent, onMounted } from 'vue'

import { category, categoryStatus } from '@/core/data/category'
import { initSelectField } from '@/core/data/common'
import type { Category } from '@/types/category'
import type { Select } from '@/types/common'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)

const categories = ref<Category[]>(category)
const parentCategory = ref<Select[]>([])
const categoryType = ref<Select[]>([])

const categoryForm = ref({
  parent_category: initSelectField(),
  category_type: initSelectField(),
  category_status: initSelectField(),
})

onMounted(() => {
  categories.value.filter((category) => {
    parentCategory.value.push({
      value: category.categoryName,
      label: category.categoryName,
    })
    categoryType.value.push({
      value: category.categoryType,
      label: category.categoryType,
    })
  })
})
</script>
