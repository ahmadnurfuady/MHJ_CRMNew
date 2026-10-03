<template>
  <div class="col-xxl-9 col-xl-8 col-md-7 box-col-7">
    <div class="card right-sidebar-chat">
      <div class="right-sidebar-title">
        <div class="common-space">
          <div class="chat-time-chat">
            <div class="active-profile">
              <img
                class="img-fluid rounded-circle"
                v-if="currentChat.image"
                :src="getImages(currentChat.image)"
                alt="user"
              />
              <div class="status" :class="currentChat.statusClass"></div>
            </div>
            <div>
              <span>{{ currentChat.name }}</span>
              <p>Online</p>
            </div>
          </div>
          <div class="d-flex gap-2">
            <div class="contact-edit chat-alert">
              <SvgIcon icon="spam" />
            </div>
            <div class="contact-edit chat-alert">
              <SvgIcon
                icon="menubar"
                role="menu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <div class="dropdown-menu dropdown-menu-end">
                <a
                  class="dropdown-item"
                  href="#"
                  v-for="(data, index) in contactEdit"
                  :key="index"
                >
                  {{ data.title }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-sidebar-Chats">
        <div class="msger">
          <div class="msger-chat" ref="chatContainer">
            <div
              class="msg"
              v-for="(chat, index) in currentChat.chat?.messages"
              :key="index"
              :class="[
                { clearfix: chat.sender == 0 },
                { 'right-msg': chat.sender != 0, 'left-msg': chat.sender == 0 },
              ]"
            >
              <div class="msg-img">
                <img
                  class="rounded-circle float-start chat-user-img img-30"
                  v-if="chat.sender == 0"
                  :src="getImages(currentChat.image || '')"
                  alt="images"
                />
              </div>
              <div class="msg-bubble">
                <div class="msg-info" :class="{ 'text-start': chat.sender == 0 }">
                  <div class="msg-info-name" v-if="chat.sender == 0">
                    {{ currentChat.name }}
                  </div>
                  <div class="msg-info-name" v-else>Theresa Webb</div>
                  <div class="msg-info-time">{{ chat.time }}</div>
                </div>
                <div class="msg-text">{{ chat.text }}</div>
              </div>
            </div>
          </div>
          <AddChat />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  defineAsyncComponent,
  ref,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { storeToRefs } from "pinia";
import { getImages } from "@/utils/index";
import { contactEdit } from "@/core/data/chat";
import { useChat } from "@/store/chat";

const AddChat = defineAsyncComponent(() => import("@/module/chat/common/AddChat.vue"));
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));

const { currentChat } = storeToRefs(useChat());

const chatContainer = ref<HTMLElement | null>(null);

let scrollTimer: number | null = null;

function scrollToBottom() {
  const el = chatContainer.value;
  if (el) {
    el.scrollTop = el.scrollHeight;
  }
}

onMounted(() => {
  scrollToBottom();
});

watch(
  () => currentChat.value?.chat?.messages?.length ?? 0,
  async () => {
    await nextTick();
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }

    scrollTimer = window.setTimeout(() => {
      scrollToBottom();
      scrollTimer = null;
    }, 50);
  }
);

onBeforeUnmount(() => {
  if (scrollTimer) {
    clearTimeout(scrollTimer);
  }
});
</script>
