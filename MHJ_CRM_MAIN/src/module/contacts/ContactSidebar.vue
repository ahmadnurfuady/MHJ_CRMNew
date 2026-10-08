<template>
  <div class="md-sidebar">
    <a
      class="btn btn-primary md-sidebar-toggle"
      href="#"
      @click.prevent="toggleFilter()"
      >Filter kontak</a
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
            <ul
              class="nav main-menu contact-options custom-scrollbar"
              role="tablist"
            >
              <li class="nav-item">
                <button
                  class="btn btn-primary btn-block btn-mail add-contact-button w-100"
                  type="button"
                  aria-label="Tambah kontak baru"
                  @click="openContactModal()"
                >
                  <span class="add-contact-button__icon">
                    <vue-feather type="user-plus" size="19" />
                  </span>
                  <span>Tambah Kontak Baru</span>
                </button>
              </li>
              <li class="nav-item">
                <span class="main-title"> Tampilan</span>
              </li>
              <li
                v-for="item in contactState.tabList.slice(0, 1)"
                :key="item.value"
              >
                <a
                  :class="{ active: item.value == contactState.activeTab }"
                  href="#"
                  @click.prevent="handleActiveTab(item)"
                >
                  <span class="title">{{ item.title }}</span>
                </a>
              </li>
              <li class="nav-item">
                <button
                  class="btn btn-category"
                  type="button"
                  @click="categoryModal()"
                >
                  <span class="title"> + Tambah Kategori</span>
                </button>
                <ul>
                  <li
                    v-for="item in contactState.tabList.slice(1)"
                    :key="item.value"
                  >
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
import { ref, defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import { user } from "@/core/data/user";
import { useContact } from "@/store/contact";
import { getImages } from "@/utils/index";

const Card = defineAsyncComponent(
  () => import("@/components/shared/card/Card.vue"),
);
const AddContactModal = defineAsyncComponent(
  () => import("@/module/contacts/AddContactModal.vue"),
);
const ContactCategoryModal = defineAsyncComponent(
  () => import("@/module/contacts/ContactCategoryModal.vue"),
);

const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
const { handleActiveTab, openContactModal } = contactStore;

const sidebarOpen = ref<boolean>(false);
const userDetails = user;

function toggleFilter() {
  sidebarOpen.value = !sidebarOpen.value;
}

function categoryModal() {
  contactState.value.openCategoryModal = true;
}
</script>

<style scoped>
.add-contact-button {
  display: flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #18a6e4 !important;
  border-radius: 8px;
  margin: 20px 0;
  padding: 10px 16px;
  background-color: #18a6e4 !important;
  color: #ffffff !important;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 1.25 !important;
  text-align: center;
  box-shadow: 0 6px 14px rgba(24, 166, 228, 0.28);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.add-contact-button:hover {
  border-color: #1493cc !important;
  background-color: #1493cc !important;
  color: #ffffff !important;
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(24, 166, 228, 0.36);
}

.add-contact-button:focus-visible {
  outline: 3px solid rgba(24, 166, 228, 0.3);
  outline-offset: 2px;
}

.add-contact-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.add-contact-button span {
  color: #ffffff !important;
}

.add-contact-button svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}
</style>
