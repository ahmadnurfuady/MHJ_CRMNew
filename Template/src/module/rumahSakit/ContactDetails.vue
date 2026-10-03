<template>
  <div class="card mb-0">
    <div class="card-header d-flex">
      <h5>
        {{ contactState.currentTab && contactState.currentTab.title }}
      </h5>
      <span class="f-14 pull-right mt-0 f-w-500"
        >{{ filteredContact.length }} Rumah Sakit</span
      >
    </div>
    <div class="card-body">
      <div class="row list-persons g-3">
        <template v-if="filteredContact.length">
          <div class="col-xl-4 xl-50 col-md-5">
            <div class="nav flex-column nav-pills">
              <template v-for="(contact, index) in filteredContact" :key="index">
                <a
                  class="contact-tab-0 nav-link"
                  :class="{
                    active: contact.id == contactState.activeContact?.id,
                  }"
                  @click="handleContact(contact)"
                >
                  <div class="d-flex">
                    <img
                      class="img-50 img-fluid m-r-20 rounded-circle update_img_0"
                      :src="getImages(contact.profile)"
                      :alt="contact.firstName"
                    />
                    <div class="flex-grow-1">
                      <h6>
                        <span class="first_name_0">{{ contact.firstName }}</span>
                        <span class="last_name_0">{{ contact.lastName }}</span>
                      </h6>
                      <p class="email_add_0">{{ contact.email }}</p>
                    </div>
                  </div>
                </a>
              </template>
            </div>
          </div>
          <div class="col-xl-8 xl-50 col-md-7">
            <div
              class="tab-content"
              :style="{
                display: contactState.isEditContact ? 'none' : 'block',
              }"
            >
              <div class="tab-pane contact-tab-0 tab-content-child fade show active">
                <template
                  v-if="
                    contactState.activeContact &&
                    filteredContact &&
                    filteredContact.length
                  "
                >
                  <div class="profile-mail">
                    <GeneralDetails />
                  </div>
                </template>
              </div>
            </div>
            <div
              class="contact-editform ps-0"
              :style="{
                display: contactState.isEditContact ? 'block' : 'none',
              }"
            >
              <EditContactForm />
            </div>
          </div>
        </template>
        <div class="col" v-else>Rumah Sakit tidak ditemukan.</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useContact } from "@/store/contact";
import { getImages } from "@/utils/index";
const EditContactForm = defineAsyncComponent(
  () => import("@/module/rumahSakit/EditContactForm.vue")
);
const GeneralDetails = defineAsyncComponent(
  () => import("@/module/rumahSakit/GeneralDetails.vue")
);
const contactStore = useContact();
const { contactState, filteredContact } = storeToRefs(contactStore);
const { handleContact } = contactStore;

onMounted(() => {
  contactStore.initStore();
});
</script>
