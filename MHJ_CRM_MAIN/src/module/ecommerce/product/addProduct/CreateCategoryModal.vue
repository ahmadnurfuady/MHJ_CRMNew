<template>
  <div class="sidebar-body common-form e-category">
    <div class="modal-content category-popup">
      <Modal
        :title="'Add Categories'"
        :modalOpen="props.modalOpen"
        :sizeClass="'modal-lg'"
        :modalCentered="true"
        @closeModal="close"
      >
        <div class="modal-body p-0 custom-input">
          <div class="text-start">
            <div class="p-20">
              <CategoryForm
                v-if="props.modalOpen"
                :categories="categories"
                :categoryStatus="categoryStatus"
                @closeModal="close"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { category, categoryStatus } from '@/core/data/category'
import type { Category } from '@/types/category'
import type { Select } from '@/types/common'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const CategoryForm = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/CategoryForm.vue')
)

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

const categories = ref<Category[]>(category)
const parentCategory = ref<Select[]>([])
const categoryType = ref<Select[]>([])
const editor = ref()

onMounted(async () => {
  const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
  editor.value = ClassicEditor
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

function close() {
  parentCategory.value = []
  categoryType.value = []
  emits('closeModal')
}
</script>
