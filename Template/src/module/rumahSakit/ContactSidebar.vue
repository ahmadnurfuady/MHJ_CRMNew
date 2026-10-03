<template>
  <div class="md-sidebar">
    <a class="btn btn-primary md-sidebar-toggle" href="#" @click.prevent="toggleFilter()"
      >filter rumah sakit</a
    >
    <div class="md-sidebar-aside job-left-aside" :class="{ open: sidebarOpen }">
      <div class="email-left-aside">
        <Card :cardBodyClass="'custom-scrollbar'">
          <div class="email-app-sidebar left-bookmark">
            <div class="common-flex align-items-center">
              <div class="d-flex-size-email">
                <img
                  class="rounded-circle"
                  :src="getImages(userDetails.userProfile)"
                  :alt="userDetails.name"
                />
              </div>
              <div class="flex-grow-1">
                <h6>{{ userDetails.name }}</h6>
                <p>{{ userDetails.userEmail }}</p>
              </div>
            </div>
            <ul class="nav main-menu contact-options custom-scrollbar" role="tablist">
              <li class="nav-item">
                <button
                  class="button-primary btn-block btn-mail w-100"
                  type="button"
                  @click="openContactModal()"
                >
                  <vue-feather :type="'users'" :class="'me-2'" />Rumah Sakit Baru
                </button>
              </li>
              <li class="nav-item"><span class="main-title"> Views</span></li>
              <li v-for="item in contactState.tabList.slice(0, 1)" :key="item.value">
                <a
                  :class="{ active: item.value == contactState.activeTab }"
                  href="#"
                  @click.prevent="handleActiveTab(item)"
                >
                  <span class="title">{{ item.title }}</span>
                </a>
              </li>
              <li class="nav-item">
                <button class="btn btn-category" type="button" @click="categoryModal()">
                  <span class="title"> + Add Category</span>
                </button>
                <ul>
                  <li v-for="item in contactState.tabList.slice(1)" :key="item.value">
                    <a
                      :class="{ active: item.value == contactState.activeTab }"
                      href="#"
                      @click.prevent="handleActiveTab(item)"
                    >
                      <span class="title">{{ item.title }}</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  </div>

  <AddContactModal v-if="contactState.openAddContactModal" />
  <ContactCategoryModal v-if="contactState.openCategoryModal" />
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { user } from '@/core/data/user'
import { useContact } from '@/store/contact'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const AddContactModal = defineAsyncComponent(() => import('@/module/rumahSakit/AddContactModal.vue'))
const ContactCategoryModal = defineAsyncComponent(
  () => import('@/module/rumahSakit/ContactCategoryModal.vue')
)

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)
const { handleActiveTab, openContactModal } = contactStore

const sidebarOpen = ref<boolean>(false)
const userDetails = user

function toggleFilter() {
  sidebarOpen.value = !sidebarOpen.value
}

function categoryModal() {
  contactState.value.openCategoryModal = true
}
</script>
