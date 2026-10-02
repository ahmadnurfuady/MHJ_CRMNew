<template>
  <div class="user-message">
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
          <button class="btn btn-primary">View Cart</button>
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { getImages } from "@/utils";
import type { NotificationItem } from "@/types/header";

const props = defineProps<{
  items: NotificationItem[];
}>();

const localItems = ref<NotificationItem[]>([]);
watch(
  () => props.items,
  (val) => {
    localItems.value = [...val];
  },
  { immediate: true },
);

const removeItem = (id: number) => {
  localItems.value = localItems.value.filter((item) => item.id !== id);
};

const messageItems = computed(() =>
  localItems.value.filter((i) => i.type === "message"),
);
</script>
