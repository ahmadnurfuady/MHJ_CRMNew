<template>
  <div class="col-md-6 text-sm-end">
    <span class="f-w-600 m-r-5">Showing Products 1 - {{ filteredProducts.length }} Results</span>
    <div class="select2-drpdwn-product select-options d-inline-block">
      <select class="form-control btn-square" name="select" @change="onChangeSort($event)">
        <option value="Featured">Featured</option>
        <option value="Lowest">Lowest Prices</option>
        <option value="Highest">Highest Prices</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '@/store/product'
import { storeToRefs } from 'pinia'

const store = useProduct()
const { sortProducts } = store
const { filteredProducts } = storeToRefs(store)

function onChangeSort(event: Event) {
  const target = event.target as HTMLSelectElement
  sortProducts(target.value)
}
</script>
