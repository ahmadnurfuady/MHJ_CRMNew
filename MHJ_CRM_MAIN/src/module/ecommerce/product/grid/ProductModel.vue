<template>
  <div class="modal fade" id="exampleModalCenter" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="product-box modal-content">
        <div class="modal-header border-bottom-0">
          <div class="product-box row">
            <div class="product-img col-lg-6">
              <img
                class="img-fluid"
                v-if="productDetails?.images"
                :src="getImages(productDetails?.images[0])"
              />
            </div>
            <div class="col-lg-6 text-start">
              <div class="product-details">
                <h4 @click.prevent="goToDetails" data-bs-dismiss="modal">
                  {{ productDetails?.name }}
                </h4>
                <div class="product-price">
                  ${{ productDetails?.price }}.00
                  <del>${{ productDetails?.salePrice }}.00 </del>
                </div>
                <div class="product-view">
                  <h5>Product Details</h5>
                  <p class="mb-0">{{ productDetails?.description }}</p>
                </div>
                <div class="product-size">
                  <ul>
                    <li>
                      <button class="btn btn-outline-light" type="button">M</button>
                    </li>
                    <li>
                      <button class="btn btn-outline-light mx-1" type="button">L</button>
                    </li>
                    <li>
                      <button class="btn btn-outline-light" type="button">Xl</button>
                    </li>
                  </ul>
                </div>
                <div class="product-qnty">
                  <h5 class="f-w-600">Quantity</h5>
                  <fieldset>
                    <div class="input-group bootstrap-touchspin">
                      <button
                        class="btn btn-primary btn-square bootstrap-touchspin-down"
                        @click="decrement()"
                        type="button"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                      <input
                        class="touchspin text-center form-control"
                        v-model="counter"
                        name="item.quantity"
                        type="text"
                      />
                      <button
                        class="btn btn-primary btn-square bootstrap-touchspin-up"
                        @click="increment()"
                        type="button"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </fieldset>
                  <div>
                    <router-link :to="routes.Ecommerce.Cart">
                      <button
                        class="btn btn-primary"
                        type="button"
                        data-original-title="btn btn-info-gradien"
                        @click="addToCart(productDetails!)"
                        data-bs-dismiss="modal"
                      >
                        Add To Cart
                      </button>
                    </router-link>
                    <router-link
                      to="/product/details"
                      class="btn btn-primary ms-2"
                      @click.prevent="goToDetails"
                      data-bs-dismiss="modal"
                    >
                      View Details
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useProduct } from '@/store/product'
import { getImages } from '@/utils/index'
import { useRouter } from 'vue-router'
import { routes } from '@/router/routes'
import { Product } from '@/types/product'

const router = useRouter()
const counter = ref<number>(1)
const store = useProduct()
const { addToCart } = store

const props = defineProps<{
  productDetails?: Product | null
}>()

function goToDetails() {
  if (props.productDetails?.id) {
    router.push(`/product/details/${props.productDetails.id}`)
  }
}

function increment() {
  if (props.productDetails && counter.value < props.productDetails.stock) {
    counter.value++
  }
}
function decrement() {
  if (counter.value > 1) counter.value--
}
</script>
