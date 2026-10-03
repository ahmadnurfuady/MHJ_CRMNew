<template>
  <div class="col-xxl-9 col-xl-8 col-md-7 box-col-7">
    <div class="card right-sidebar-chat">
      <div class="right-sidebar-title">
        <div class="common-space">
          <div class="chat-time-chat group-chat">
            <ul>
              <li v-for="item in groupUser" :key="item.id">
                <img
                  class="img-fluid rounded-circle"
                  :src="getImages(item.image)"
                  alt="user"
                />
              </li>
              <li>
                <div class="custom-name profile-count bg-light-primary">
                  <p class="f-w-500">9+</p>
                </div>
              </li>
            </ul>
            <div>
              <span>Meeting Department</span>
              <p>35 Members</p>
            </div>
          </div>
          <div class="d-flex gap-2">
            <div class="contact-edit chat-alert"><i class="icon-info-alt"></i></div>
            <div class="contact-edit chat-alert">
              <i
                class="fa-solid fa-bars dropdown-toggle"
                role="menu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>
              <div class="dropdown-menu dropdown-menu-end">
                <a
                  class="dropdown-item"
                  href="#"
                  v-for="(data, index) in contactEdit"
                  :key="index"
                  >{{ data.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-sidebar-Chats">
        <div class="msger">
          <div class="msger-chat custom-scrollbar" ref="chatContainer">
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
                  v-if="chat.sender == 0"
                  class="rounded-circle float-start chat-user-img img-30"
                  :src="getImages(currentChat.image || '')"
                  alt="image"
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
import { ref, defineAsyncComponent, watch, nextTick, onMounted } from "vue";
import { contactEdit, groupUser } from "@/core/data/chat";
import { storeToRefs } from "pinia";
import { getImages } from "@/utils/index";
import { useChat } from "@/store/chat";

const AddChat = defineAsyncComponent(() => import("@/module/chat/common/AddChat.vue"));
const { currentChat } = storeToRefs(useChat());

const chatContainer = ref<HTMLElement | null>(null);

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
    scrollToBottom();
  }
);
</script>
