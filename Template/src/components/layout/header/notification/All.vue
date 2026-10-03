<template>
  <div class="user-message">
    <!-- CART ITEMS -->
    <div class="cart-dropdown notification-all" v-if="cartItems.length > 0">
      <ul class="cart-main-wrapper">
        <li
          v-for="item in cartItems"
          :key="item.id"
          class="pr-0 pl-0 pb-3 pt-3 first-product"
        >
          <div class="media">
            <img class="img-fluid b-r-5 me-3 img-60" :src="getImages(item.image)" />

            <div class="media-body">
              <a class="f-light f-w-500">{{ item.title }}</a>

              <div class="product-qty-box">
                <div class="qty-box">
                  <div class="input-group">
                    <button class="btn decrement-touchspin">-</button>
                    <input class="input-touchspin" type="number" :value="item.qty" />
                    <button class="btn increment-touchspin">+</button>
                  </div>
                </div>

                <h6 class="font-primary">{{ item.price }}</h6>
              </div>
            </div>

            <!-- CLOSE CART -->
            <div class="close-circle" @click.prevent="removeItem(item.id)">
              <a class="bg-danger"><vue-feather type="x" /></a>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="firstcart-empty"
      v-if="cartItems.length === 0 && messageItems.length === 0"
    >
      <div class="cart-image">
        <img class="img-fluid" :src="getImages('ecommerce/cleaning.gif')" />
      </div>
      <h5 class="mb-3 text-center">No notifications</h5>
    </div>

    <ul>
      <li v-for="item in messageItems" :key="item.id" class="first-product">
        <div class="user-alerts">
          <img
            class="user-image rounded-circle img-fluid me-2"
            :src="getImages(item.image)"
          />

          <div class="user-name">
            <div>
              <h6>
                <a class="f-w-500 f-14">{{ item.name }}</a>
              </h6>
              <span class="f-light f-w-500 f-12">
                {{ item.text }}
              </span>
            </div>

            <div class="close-circle" @click.prevent="removeItem(item.id)">
              <a class="bg-light"><vue-feather type="x" /></a>
            </div>
          </div>
        </div>
      </li>

      <div class="card-footer pb-0 pr-0 pl-0">
        <div class="text-center">
          <router-link :to="routes.Ecommerce.Cart" class="btn btn-primary"
            >View Cart</router-link
          >
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { getImages } from "@/utils";
import type { NotificationItem } from "@/types/header";
import { routes } from "@/router/routes";

const props = defineProps<{
  items: NotificationItem[];
}>();

const localItems = ref<NotificationItem[]>([]);
watch(
  () => props.items,
  (val) => {
    localItems.value = [...val];
  },
  { immediate: true }
);

const removeItem = (id: number) => {
  localItems.value = localItems.value.filter((item) => item.id !== id);
};

const cartItems = computed(() => localItems.value.filter((i) => i.type === "cart"));

const messageItems = computed(() => localItems.value.filter((i) => i.type === "message"));
</script>
