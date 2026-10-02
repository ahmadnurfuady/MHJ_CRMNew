<template>
  <div class="left-filter">
    <div class="card-body filter-cards-view animate-chk custom-scrollbar">
      <div class="product-filter">
        <h6 class="f-w-600">Category</h6>
        <div class="checkbox-animated mt-0">
          <label
            class="d-block"
            :for="'category-' + index"
            v-for="(product, index) in getCategory"
            :key="index"
          >
            <input
              type="checkbox"
              :id="'category-' + index"
              class="checkbox_animated"
              :value="product.category"
              v-model="categoryFilters"
              @change="updateFilters"
            />{{ product.category }}
          </label>
        </div>
      </div>
      <div class="product-filter">
        <h6 class="f-w-600">Brand</h6>
        <div class="checkbox-animated mt-0">
          <label
            class="d-block"
            :for="'brand-' + index"
            v-for="(brand, index) in getBrands"
            :key="index"
          >
            <input
              class="checkbox_animated"
              :id="'brand-' + index"
              :value="brand"
              v-model="brandFilters"
              @change="updateFilters"
              type="checkbox"
            />
            {{ brand }}
          </label>
        </div>
      </div>
      <div class="product-filter slider-product">
        <h6 class="f-w-600">Colors</h6>
        <div class="color-selector">
          <ul>
            <li
              :style="{ 'background-color': color.color }"
              v-for="(color, index) in getColors"
              :key="'color' + index"
            >
              <input
                class="colorCheckbox"
                @change="updateFilters"
                :value="color.color"
                :id="color.color"
                type="checkbox"
              />
              <div class="colorDiv"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-filter pb-5 product-range">
        <h6 class="f-w-600">Price</h6>
        <VueSlider
          :min="minPrice"
          :max="maxPrice"
          v-model="priceFilters"
          :marks="{
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
            60: '60',
            70: '70',
            80: '80',
            90: '90',
            100: '100',
          }"
          :tooltip="'always'"
          @change="updateFilters"
        />
      </div>
      <div class="product-filter">
        <h6 class="f-w-600">Discount</h6>
        <div class="checkbox-animated mt-0">
          <div class="form-check" v-for="data in discount" :key="data.id">
            <input class="checkbox_animated" id="chk-ani6" type="checkbox" />
            <label class="form-check-label" for="chk-ani6">
              <span class="name">{{ data.title }}</span>
              <span class="number">({{ data.badge }})</span>
            </label>
          </div>
        </div>
      </div>
      <div class="product-filter">
        <h6 class="f-w-600">Rating</h6>
        <div class="checkbox-animated mt-0 product-rate">
          <div class="form-check" v-for="(rate, index) in reversedRatings" :key="index">
            <input
              class="checkbox_animated"
              :id="'rating-' + rate"
              type="checkbox"
              data-original-title=""
              title=""
            />
            <label class="form-check-label" :for="'rating-' + rate">
              <span class="common-flex"
                ><i v-for="i in rate" :key="i" class="fa-solid fa-star fill"></i
              ></span>
              <span class="number">({{ rate }} Star)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useProduct } from '@/store/product'
import { products } from '@/core/data/product'
import { discount } from '@/core/data/ecommerce'
import VueSlider from 'vue-3-slider-component'
import { storeToRefs } from 'pinia'
import { Product } from '@/types/product'
const allRatings = ref<number[]>(Array.from({ length: 5 }, (_, i) => i + 1)) // [1,2,3,4,5]

const reversedRatings = computed(() => [...allRatings.value].reverse())

const store = useProduct()
const { activeFilters, getCategory, getBrands, getColors } = storeToRefs(store)
const { setFilter } = store
const categoryFilters = ref<string[]>(activeFilters.value.category)
const brandFilters = ref<string[]>(activeFilters.value.brand)
const priceFilters = ref<number[]>(activeFilters.value.price)

const filteredProducts = ref<Product[]>([])
const minPrice = ref(0)
const maxPrice = ref(100)

defineEmits<{
  (e: 'allFilters', val: Product[]): void
}>()

watch(priceFilters, (newRange) => {
  if (newRange.length !== 2 || newRange[0] > newRange[1]) {
    priceFilters.value = [minPrice.value, maxPrice.value]
  }
})

function updateFilteredProducts(priceRange: number[]) {
  const [minPrice, maxPrice] = priceRange
  if (minPrice === undefined || maxPrice === undefined || minPrice > maxPrice) {
    filteredProducts.value = []
    return
  }
  filteredProducts.value = products.filter((product) => {
    const salePrice = product.price
    if (typeof salePrice !== 'number') {
      return false
    }
    return salePrice >= minPrice && salePrice <= maxPrice
  })
}

function updateFilters() {
  setFilter('price', priceFilters.value)
  setFilter('category', categoryFilters.value)
  setFilter('brand', brandFilters.value)
  updateFilteredProducts(priceFilters.value)
}
</script>
