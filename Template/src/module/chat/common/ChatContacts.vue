<template>
  <div class="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
    <div class="common-space">
      <p>Contacts</p>
      <div class="header-top">
        <a class="btn badge-light-primary f-w-500" href="#"
          ><i class="fa fa-plus"></i
        ></a>
      </div>
    </div>
    <div class="search-contacts">
      <input
        class="form-control"
        type="text"
        placeholder="Name and phone number"
        v-model="search"
        v-on:keyup="setSearchUser"
      />
      <SvgIcon
        icon="search"
        class="dropdown-toggle"
        role="menu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <vue-feather class="mic-search" type="mic"></vue-feather>
    </div>
    <div class="contact-wrapper custom-scrollbar">
      <div v-for="(item, index) in contact" :key="index" class="alphabate-order mt-3">
        <p>{{ item.title }}</p>
        <ul class="border-0">
          <li class="common-space pb-2" v-for="(items, index) in item.children" :key="index">
            <div class="chat-time">
              <img
                class="img-fluid rounded-circle"
                v-if="items.image"
                :src="getImages(items.image)"
                alt="user"
              />
              <div class="custom-name" :class="items.bgClass" v-if="items.text">
                <p class="f-w-500" :class="items.textClass">{{ items.text }}</p>
              </div>
              <div>
                <span>{{ items.name }}</span>
                <p>{{ items.number }}</p>
              </div>
            </div>
            <div class="contact-edit">
              <SvgIcon
                icon="menubar"
                class="dropdown-toggle"
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
import { contact, contactEdit } from '@/core/data/chat'
import { getImages } from '@/utils/index'
import { useChat } from '@/store/chat'
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const store = useChat()
const search = ref<string>('')

const { setSearchUsers } = store

function setSearchUser() {
  if (search.value !== '') setSearchUsers(search.value)
}
</script>
