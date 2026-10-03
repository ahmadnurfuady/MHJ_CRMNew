<template>
  <div class="product-wrapper-grid" :class="uiState.listViewEnable ? 'list-view' : ''">
    <div class="row">
      <template v-if="filteredProducts.length">
        <div
          :class="[
            uiState.col2
              ? 'col-md-6'
              : uiState.col3
              ? 'col-xl-4 col-sm-4'
              : uiState.col4
              ? 'col-xxl-3 col-md-4 col-sm-6 box-col-4'
              : uiState.col6
              ? 'col-xl-2 col-lg-4 col-md-6'
              : uiState.list
              ? 'col-xl-3 col-lg-4 col-sm-6 xl-25 col-xl-12'
              : 'col-xl-3 col-md-6',
          ]"
          v-for="(product, index) in filteredProducts"
          :key="index"
        >
          <div class="card">
            <div class="product-box">
              <div class="product-img">
                <div
                  class="ribbon ribbon-secondary ribbon-vertical-left"
                  v-if="product.gift"
                >
                  <i class="icon-gift"></i>
                </div>
                <div class="ribbon ribbon-danger" v-if="product.sale">Sale</div>
                <div class="ribbon ribbon-success ribbon-right" v-if="product.off">
                  50%
                </div>
                <div
                  class="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info"
                  v-if="product.ribbon"
                >
                  <i class="icofont icofont-love"></i>
                </div>
                <div class="ribbon ribbon-clip ribbon-warning" v-if="product.hot">
                  Hot
                </div>
                <img class="img-fluid" :src="getImages(product.images[0])" />
                <div class="product-hover">
                  <ul>
                    <li @click="addToCars(product)">
                      <router-link :to="routes.Ecommerce.Cart" class="btn">
                        <i class="icon-shopping-cart"></i>
                      </router-link>
                    </li>
                    <li @click="openModal(product)">
                      <a
                        class="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <i class="icon-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a class="btn" href="#"
                        ><i class="fa-solid fa-code-compare fa-rotate-90"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <ProductModel :productDetails="productDetails" />
              </div>
              <div class="product-details">
                <RatingStars :rating="product.star" />
                <router-link :to="'/product/details/' + product.id">
                  <h4>{{ product.name }}</h4>
                </router-link>
                <p>{{ product.shortDescription }}</p>
                <div class="product-price">
                  ${{ product.price }}.00
                  <del>${{ product.salePrice }}.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="no-product text-center" v-else>
        <span>
          <h3>
            <img
              class="img-100 img-fluid m-r-20 rounded-circle update_img_0"
              :src="getImages('/mood-sad.png')"
              alt="images"
            />
          </h3>
          Sorry , Not Found Any Product
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import { products } from "@/core/data/product";
import { useProduct } from "@/store/product";
import { storeToRefs } from "pinia";
import { getImages } from "@/utils/index";
import { Product } from "@/types/product";
import { routes } from "@/router/routes";

const ProductModel = defineAsyncComponent(
  () => import("@/module/ecommerce/product/grid/ProductModel.vue")
);
const RatingStars = defineAsyncComponent(
  () => import("@/components/shared/RatingStars.vue")
);

const modalShow = ref<boolean>(false);
const store = useProduct();
const { addToCart, productData } = store;
const { filteredProducts, uiState } = storeToRefs(store);

productData(products);

const productDetails = ref<Product | null>(null);

function openModal(product: Product) {
  modalShow.value = true;
  return (productDetails.value = product);
}

function addToCars(product: Product) {
  addToCart(product);
}
</script>
