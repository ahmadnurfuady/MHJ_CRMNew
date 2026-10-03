<template>
  <div class="col-xl-9 xl-100 box-col-8">
    <Card :cardBodyClass="'shopping-cart-table'">
      <div class="row">
        <div class="recent-table table-responsive custom-scrollbar" v-if="productState.cart.length">
          <div class="dt-container dt-empty-footer">
            <div class="dt-layout-row dt-layout-table">
              <table class="table" id="cart-table">
                <thead>
                  <tr>
                    <th class="datatable-checkbox">
                      <input
                        class="cb-select-checkbox"
                        type="checkbox"
                        aria-label="Select all rows"
                      />
                    </th>
                    <th data-orderable="false">
                      <span class="c-o-light f-w-600"
                        >Shopping Cart
                        <span class="badge badge-dark rounded-circle">{{
                          productState.cart.length
                        }}</span></span
                      >
                    </th>
                    <th data-orderable="false" v-for="index in 3" :key="index">
                      <span class="c-o-light f-w-600"> </span>
                    </th>
                    <th data-orderable="false" @click="confirmClearAll">
                      <span class="c-o-light f-w-600"
                        >Clear All
                        <SvgIcon icon="trash1" />
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="inbox-data" v-for="(item, index) in productState.cart" :key="index">
                    <td class="datatable-checkbox">
                      <input
                        class="cb-select-checkbox"
                        type="checkbox"
                        aria-label="Select all rows"
                      />
                    </td>
                    <td>
                      <div class="product-names">
                        <div class="light-product-box">
                          <img class="img-fluid" :src="getImages(item.images[0])" alt="headphone" />
                        </div>
                        <ul>
                          <li>
                            <h5>{{ item.name }}</h5>
                          </li>
                          <li>
                            <p>{{ item.brand }}</p>
                            <span class="common-dot"></span>
                            <span
                              >Colour:<span>{{ item.colors[0] }}</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div class="cart-price">
                        <h5>&#36;{{ item.price }}.00</h5>
                        <del class="c-o-light">&#36;{{ item.salePrice }}.00</del>
                      </div>
                    </td>
                    <ProductAction
                      :item="item"
                      @delete="removeProduct"
                      @increment="increment"
                      @decrement="decrement"
                    />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <EmptyCart v-else />
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useProduct } from '@/store/product'
import { getImages } from '@/utils/index'
import { storeToRefs } from 'pinia'
import { Product } from '@/types/product'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const EmptyCart = defineAsyncComponent(() => import('@/module/ecommerce/cart/EmptyCart.vue'))
const ProductAction = defineAsyncComponent(
  () => import('@/module/ecommerce/cart/ProductAction.vue')
)
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const store = useProduct()
const { productState } = storeToRefs(store)
const { removeProduct, updateCartQuantity, confirmClearAll } = store

function increment(product: Product) {
  updateCartQuantity({ product, qty: 1 })
}

function decrement(product: Product) {
  updateCartQuantity({ product, qty: -1 })
}
</script>
