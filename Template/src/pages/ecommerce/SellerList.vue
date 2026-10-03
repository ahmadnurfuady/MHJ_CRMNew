<template>
  <div class="container-fluid">
    <div class="row seller-wrapper">
      <div class="col-12">
        <div class="card">
          <div class="card-header common-space">
            <div class="common-f-start">
              <span
                class="seller-filter"
                :class="{ active: !sellerState.activeCategory }"
                @click="filterStore()"
                >All</span
              >
              <template v-for="(category, index) in sellerState.storesCategory" :key="index">
                <span
                  class="seller-filter"
                  @click="filterStore(category.id)"
                  :class="{ active: sellerState.activeCategory === category.id }"
                  >{{ category.name }}</span
                >
              </template>
            </div>
            <div class="right-vendor">
              <div class="input-group common-searchbox">
                <span class="input-group-text">
                  <vue-feather :type="'search'" class="text-gray"></vue-feather>
                </span>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search..."
                  v-model="sellerState.searchQuery"
                  @input="searchStores()"
                />
              </div>
              <a class="btn btn-primary" @click="openSellerModal()"
                ><i class="me-2 fa-solid fa-plus"></i>Add Seller</a
              >
            </div>
            <AddSellerModal
              :modalOpen="sellerState.isModalOpen"
              @closeModal="sellerState.isModalOpen = false"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <ul class="seller-cards">
          <li class="seller-box" v-for="(store, index) in sellerState.filteredStores" :key="index">
            <div>
              <SvgIcon :icon="store.storeLogo" />
              <div>
                <h5>{{ store.storeName }}</h5>
                <span class="f-light">{{ store.vendorName }}</span>
              </div>
            </div>
            <ul class="seller-profits">
              <li>
                <div class="common-space">
                  <span>Total Orders</span><span>{{ store.totalOrder }}</span>
                </div>
              </li>
              <li>
                <div class="common-space">
                  <span>Total Products </span><span>{{ store.totalProduct }}</span>
                </div>
              </li>
              <li>
                <div class="common-space">
                  <span> Total Earnings</span><span>${{ store.totalEarning }}</span>
                </div>
              </li>
            </ul>
            <router-link
              class="btn btn-primary btn-hover-effect"
              :to="{ name: 'SellerDetails', params: { id: store.id } }"
              >View</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, reactive } from 'vue'

import { storeCategories, stores } from '@/core/data/seller'
import type { Store } from '@/types/seller'

const AddSellerModal = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/AddSellerModal.vue')
)

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const sellerState = reactive({
  storesCategory: storeCategories,
  activeCategory: undefined as number | undefined,
  searchQuery: '',
  storeList: stores as Store[],
  filteredStores: stores as Store[],
  search: '',
  storeCategoryId: undefined as number | undefined,
  isModalOpen: false as boolean,
})

function filterStore(id?: number) {
  sellerState.storeCategoryId = id
  sellerState.activeCategory = id
  filterDetails()
}

function searchStores() {
  sellerState.search = sellerState.searchQuery.toLowerCase()
  filterDetails()
}

function filterDetails() {
  sellerState.filteredStores = sellerState.storeList.filter((store) => {
    const matchesCategory = sellerState.storeCategoryId
      ? store.storeCategoryId === sellerState.storeCategoryId
      : true
    const matchesSearch = sellerState.search
      ? store.storeName.toLowerCase().includes(sellerState.search)
      : true

    return matchesCategory && matchesSearch
  })
}

function openSellerModal() {
  sellerState.isModalOpen = true
}
</script>
