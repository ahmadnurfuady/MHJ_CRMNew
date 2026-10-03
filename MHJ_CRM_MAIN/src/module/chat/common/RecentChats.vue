<template>
  <div
    class="tab-pane fade show active"
    id="chats"
    role="tabpanel"
    aria-labelledby="chats-tab"
  >
    <div class="common-space">
      <p>Recent chats</p>
      <div class="header-top">
        <button class="btn badge-light-primary f-w-500">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>
    <ul class="chats-user custom-scrollbar" v-if="search == ''">
      <li
        class="common-space"
        :class="{ active: item.name == currentChat.name }"
        v-for="(item, index) in activeUsers"
        :key="index"
        @click="setActiveUser(item)"
      >
        <div class="chat-time">
          <div class="active-profile">
            <img
              class="img-fluid rounded-circle"
              :src="getImages(item.image)"
              alt="user"
            />
            <div class="status" :class="item.statusClass"></div>
          </div>
          <div>
            <span>{{ item.name }}</span>
            <p>{{ item.status }}</p>
          </div>
        </div>
        <div>
          <p>{{ item.time }}</p>
          <div class="badge badge-success" v-if="item.badge">
            {{ item.badge }}
          </div>
        </div>
      </li>
    </ul>
    <ul class="chats-user custom-scrollbar" v-if="search != ''">
      <li
        class="common-space custom-scrollbar"
        v-for="(item, index) in chatState.searchUser"
        :key="index"
      >
        <div class="chat-time">
          <div class="active-profile">
            <img
              class="img-fluid rounded-circle"
              :src="getImages(item.image)"
              alt="user"
            />
            <div class="status" :class="item.statusClass"></div>
          </div>
          <div>
            <span>{{ item.name }}</span>
            <p>{{ item.status }}</p>
          </div>
        </div>
        <div>
          <p>{{ item.time }}</p>
          <div class="badge badge-light-success" v-if="item.badge">
            {{ item.badge }}
          </div>
        </div>
      </li>
      <div v-if="!chatState.searchUser.length">
        <div class="search-not-found chat-search text-center">
          <h3>
            <img
              class="img-100 img-fluid m-r-20 rounded-circle update_img_0"
              :src="getImages('/mood-sad.png')"
              alt="emoji"
            />
          </h3>
          <p>Sorry, We didn't find any results matching this search</p>
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { getImages } from "@/utils/index";
import { useChat } from "@/store/chat";

const props = defineProps<{
  search: string;
}>();

const { currentChat } = storeToRefs(useChat());
const store = useChat();
const { chatState } = storeToRefs(store);
const { setActiveUser } = store;

const activeUsers = computed(() =>
  chatState.value.users.filter((user) => user.active === "active" && user.id !== 0)
);
</script>
