<template>
  <form class="row g-3 needs-validation" @submit.prevent="handleSubmit">
    <div class="col-md-6">
      <InputWrapper :title="'Category Name'">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Category name is required.'"
          v-model:modelValue="categoryForm.categoryName"
          :inputId="'category-title'"
          :placeholder="'Enter category name'"
        />
      </InputWrapper>
    </div>
    <div class="col-md-6">
      <InputWrapper :title="'Slug Name'">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Slug name is required.'"
          v-model:modelValue="categoryForm.slug"
          :inputId="'slug'"
          :placeholder="'Enter slug'"
        />
      </InputWrapper>
    </div>
    <div class="col-md-12">
      <InputWrapper :title="'Parent Category'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select parent category'"
          v-model="categoryForm.parentCategory"
          :options="parentCategory"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-md-6">
      <InputWrapper :title="'Category Type'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select category type'"
          v-model="categoryForm.categoryType"
          :options="categoryType"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-md-6">
      <InputWrapper :title="'Category Status'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select category status'"
          v-model="categoryForm.categoryStatus"
          :options="categoryStatus"
          :required="false"
        />
      </InputWrapper>
    </div>
    <div class="col-md-12">
      <InputWrapper :title="'Category Description'">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Category description is required.'"
          v-model:modelValue="categoryForm.description"
          :inputId="'end-date'"
          :placeholder="'Enter category description'"
          :inputType="'textarea'"
        />
      </InputWrapper>
    </div>
    <div class="col-12">
      <div class="main-divider">
        <div class="divider-body">
          <h6>SEO Tags</h6>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <InputWrapper :title="'Meta Title'">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Meta title is required.'"
          v-model:modelValue="categoryForm.metaTitle"
          :inputId="'meta-title'"
          :placeholder="'Enter meta title'"
        />
      </InputWrapper>
    </div>
    <div class="col-md-6">
      <InputWrapper :title="'Meta Keywords'">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Meta keywords is required.'"
          v-model:modelValue="categoryForm.metaKeyword"
          :inputId="'meta-keyword'"
          :placeholder="'Enter meta keyword'"
        />
      </InputWrapper>
    </div>
    <div class="col-md-12">
      <InputWrapper :title="'Meta Description'">
        <Editor />
      </InputWrapper>
    </div>
    <div class="col-md-12 d-flex justify-content-end">
      <button class="btn button-light-primary" type="button" @click="emitClose">Cancel</button>
      <button class="btn btn-primary ms-2" type="submit">Create +</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { initInputField, initSelectField } from '@/core/data/common'
import { validateForm } from '@/utils/validators/formValidators'
import { CategoryItem, SelectOption } from '@/types/common'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const Editor = defineAsyncComponent(() => import('@/components/shared/Editor.vue'))

const props = defineProps<{
  categories: CategoryItem[]
  categoryStatus: SelectOption[]
}>()
const emits = defineEmits(['closeModal'])

const formSubmitted = ref(false)
const categoryForm = ref({
  categoryName: initInputField(),
  slug: initInputField(),
  parentCategory: initSelectField(),
  categoryType: initSelectField(),
  categoryStatus: initSelectField(),
  description: initInputField(),
  metaTitle: initInputField(),
  metaKeyword: initInputField(),
})

type Select = { value: string; label: string }
const parentCategory = ref<Select[]>([])
const categoryType = ref<Select[]>([])

onMounted(async () => {
  parentCategory.value = []
  categoryType.value = []

  props.categories.forEach((category) => {
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

function handleSubmit() {
  formSubmitted.value = true
  const nonRequiredField = ['parentCategory', 'categoryType', 'categoryStatus']
  const { isValid } = validateForm(categoryForm.value, nonRequiredField)
  if (isValid) {
    emitClose()
  }
}

function emitClose() {
  emits('closeModal')
}
</script>
