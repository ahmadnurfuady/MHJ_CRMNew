<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card>
          <h5>
            Wishlist
            <span class="c-o-light">
              ({{
                wishlistItemsList && wishlistItemsList.length
                  ? wishlistItemsList.length
                  : 0
              }})
            </span>
          </h5>
        </Card>
      </div>

      <div class="col-12">
        <div class="row g-3 m-b-20">
          <template v-if="wishlistItemsList && wishlistItemsList.length">
            <div
              class="col-xxl-4 col-sm-6 box-col-6 inbox-data"
              v-for="(item, index) in wishlistItemsList"
              :key="index"
            >
              <div class="card mb-0 h-100">
                <div class="wishlist-box card-body h-100">
                  <div>
                    <div class="wishlist-image">
                      <router-link :to="routes.Ecommerce.Products.ProductGrid">
                        <img
                          :src="getImages(item.productImage)"
                          :alt="item.productName"
                        />
                      </router-link>
                      <div class="wishlist-close-btn">
                        <button class="btn trash-3" @click="removeItem(item)">
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <div class="wishlist-footer">
                      <span class="brand-name">{{ item.brand }}</span>
                      <router-link :to="routes.Ecommerce.Products.ProductGrid">
                        <h6>{{ item.productName }}</h6>
                      </router-link>
                      <span
                        :class="`txt-${
                          item.status == 'Out of Stock' ? 'danger' : 'success'
                        } mt-1`"
                      >
                        {{ item.status }}
                      </span>
                      <h6 class="price" v-if="item.discountPrice">
                        ${{ formatDecimalOnly(item.discountPrice) }}
                        <del>${{ formatDecimalOnly(item.price) }}</del>
                      </h6>
                      <h6 class="price" v-else>${{ formatDecimalOnly(item.price) }}</h6>
                      <div class="common-flex">
                        <router-link
                          class="btn bg-primary btn-hover-effect"
                          :class="{ disabled: item.status == 'Out of Stock' }"
                          :to="routes.Ecommerce.Cart"
                        >
                          <i class="fa-solid fa-cart-shopping me-2"></i>Move to Cart
                        </router-link>
                        <a
                          class="btn bg-danger btn-hover-effect"
                          href="#"
                          v-if="item.status == 'Out of Stock'"
                        >
                          <i class="fa-solid fa-bell me-2"></i>Notify Me When Available
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="col-12 text-center">
              <img
                class="img-fluid empty-wishlist"
                :src="`${getImages('no-data.svg')}`"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import { wishlistItems } from "@/core/data/wishlist";
import { routes } from "@/router/routes";
import type { WishlistItem } from "@/types/wishlist";
import { formatDecimalOnly, getImages } from "@/utils/index";

const Card = defineAsyncComponent(() => import("@/components/shared/card/Card.vue"));

const wishlistItemsList = ref<WishlistItem[]>([]);

onMounted(() => {
  const items = localStorage.getItem("wishlist");
  if (items && items !== "null" && items !== "" && JSON.parse(items).length > 0) {
    wishlistItemsList.value = JSON.parse(items);
  } else {
    wishlistItemsList.value = wishlistItems;
    localStorage.setItem("wishlist", JSON.stringify(wishlistItemsList.value));
  }
});

function removeItem(item: WishlistItem) {
  wishlistItemsList.value = wishlistItemsList.value.filter(
    (items) => items.id !== item.id
  );
  localStorage.setItem("wishlist", JSON.stringify(wishlistItemsList.value));
}
</script>
