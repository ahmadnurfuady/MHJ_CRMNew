<template>
  <div class="col-xxl-3 col-xl-4 col-md-5 box-col-5">
    <div class="left-sidebar-wrapper card">
      <div class="left-sidebar-chat">
        <div class="input-group">
          <span class="input-group-text">
            <vue-feather class="search-icon text-gray" type="search"></vue-feather>
          </span>
          <input
            class="form-control"
            type="text"
            placeholder="Search here.."
            v-model="search"
            v-on:keyup="setSearchUser"
          />
        </div>
      </div>
      <div class="advance-options">
        <ul class="nav border-tab" id="chat-options-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="chats-tab"
              data-bs-toggle="tab"
              href="#chats"
              role="tab"
              aria-controls="chats"
              aria-selected="true"
              >Chats</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="contacts-tab"
              data-bs-toggle="tab"
              href="#contacts"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
              >Contacts</a
            >
          </li>
        </ul>
        <div class="tab-content" id="chat-options-tabContent">
          <RecentChats :search="search" />
          <ChatContacts />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useChat } from '@/store/chat'
const ChatContacts = defineAsyncComponent(() => import('@/module/chat/common/ChatContacts.vue'))
const RecentChats = defineAsyncComponent(() => import('@/module/chat/common/RecentChats.vue'))
const store = useChat()
const { setSearchUsers } = store
const search = ref<string>('')

function setSearchUser() {
  if (search.value !== '') setSearchUsers(search.value)
}
</script>
