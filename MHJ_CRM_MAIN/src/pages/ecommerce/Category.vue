<template>
  <div class="container-fluid e-category">
    <div class="row">
      <div class="col-12">
        <CategoryFilter />
      </div>
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header card-no-border text-end">
            <div class="card-header-right-icon">
              <a
                class="btn btn-primary f-w-500"
                href="#"
                @click.prevent="createCategoryModal()"
              >
                <i class="fa-solid fa-plus pe-2"></i>
                Add Category
              </a>
            </div>
          </div>
          <div class="card-body px-0 pt-0">
            <div class="list-product list-category">
              <div class="recent-table table-responsive custom-scrollbar">
                <Table
                  :tableConfig="tableConfig"
                  :hasCheckbox="true"
                  :pageSize="10"
                  :paginateDetails="true"
                  :showPaginate="true"
                  @action="handleAction($event)"
                ></Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CreateCategoryModal :modalOpen="openCategoryModal" @closeModal="openCategoryModal = false" />
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { category } from '@/core/data/category'
import type { Category } from '@/types/category'
import type { TableClickedAction, TableConfigs } from '@/types/common'

const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const CreateCategoryModal = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/CreateCategoryModal.vue')
)
const CategoryFilter = defineAsyncComponent(
  () => import('@/module/ecommerce/category/CategoryFilter.vue')
)

const openCategoryModal = ref<boolean>(false)
const categories = ref<Category[]>([])
const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Category', fieldValue: 'categoryName', sort: true },
    { title: 'Description', fieldValue: 'description', sort: true },
    { title: 'Category Type', fieldValue: 'categoryType', sort: true },
  ],
  rowAction: [
    { label: 'Edit', actionToPerform: 'edit', icon: 'edit-content' },
    {
      label: 'Delete',
      actionToPerform: 'delete',
      icon: 'trash1',
      modal: true,
      modelText: 'Do you really want to delete the category?',
    },
  ],
  data: [] as Category[],
})

onMounted(() => {
  tableConfig.value.data = formatCategory(category)
  categories.value = category
})

function handleAction(value: TableClickedAction) {
  if (value.actionToPerform === 'delete' && value.data) {
    categories.value = categories.value.filter(
      (category: Category) => category.id !== (value.data as Category).id
    )

    tableConfig.value = { ...tableConfig.value, data: formatCategory(categories.value) }
  }
}

function formatCategory(categories: Category[]) {
  return categories.map((category: Category) => {
    const formattedCategory = { ...category }
    formattedCategory.categoryName = `<div class="product-names">
                                <div class="light-product-box">
                                  <img class="img-fluid"  src="${getImages(
                                    category.image
                                  )}" alt="${category.categoryName}">
                                </div>
                                <p>${category.categoryName}</p>
                              </div>`

    formattedCategory.description = `<p class="f-light">${category.description}</p>`
    formattedCategory.categoryType = `<span class="badge badge-light-${category.color}">${category.categoryType}</span>`
    return formattedCategory
  })
}
function createCategoryModal() {
  openCategoryModal.value = true
}
</script>
