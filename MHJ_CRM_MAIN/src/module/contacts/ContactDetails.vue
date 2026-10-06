<template>
  <div class="card mb-0">
    <div class="card-header d-flex">
      <h5>
        {{ contactState.currentTab && contactState.currentTab.title }}
      </h5>
      <span class="f-14 pull-right mt-0 f-w-500"
        >{{ contactApi.pagination.total || filteredContact.length }} Kontak</span
      >
    </div>
    <div class="card-body">
      <div class="row list-persons g-3">
        <template v-if="filteredContact.length">
          <div class="col-xl-4 xl-50 col-md-5">
            <div class="nav flex-column nav-pills">
              <template v-for="contact in filteredContact" :key="contact.id">
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
                        <span class="first_name_0">{{
                          contact.firstName
                        }}</span>
                        <span class="last_name_0">{{ contact.lastName }}</span>
                      </h6>
                      <p class="email_add_0 mb-0">
                        {{ contact.jobTitle || contact.email }}
                      </p>
                      <small v-if="contact.company" class="text-muted">{{
                        contact.company
                      }}</small>
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
              <div
                class="tab-pane contact-tab-0 tab-content-child fade show active"
              >
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
        <div class="col" v-else>Kontak tidak ditemukan.</div>
      </div>
    </div>
    <div
      v-if="filteredContact.length || contactApi.pagination.page > 1"
      class="card-footer d-flex flex-wrap align-items-center justify-content-between gap-2"
    >
      <span class="text-muted f-14">
        Halaman {{ contactApi.pagination.page }} dari {{ contactApi.pagination.lastPage }}
      </span>
      <div class="pagination-actions" role="group" aria-label="Pagination Kontak">
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="contactApi.loading || contactApi.pagination.page <= 1"
          @click="changeContactPage(contactApi.pagination.page - 1)"
        >
          <vue-feather type="chevron-left" size="15" class="me-1" />Sebelumnya
        </button>
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="
            contactApi.loading || contactApi.pagination.page >= contactApi.pagination.lastPage
          "
          @click="changeContactPage(contactApi.pagination.page + 1)"
        >
          Berikutnya<vue-feather type="chevron-right" size="15" class="ms-1" />
        </button>
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
  () => import("@/module/contacts/EditContactForm.vue"),
);
const GeneralDetails = defineAsyncComponent(
  () => import("@/module/contacts/GeneralDetails.vue"),
);
const contactStore = useContact();
const { contactState, contactApi, filteredContact } = storeToRefs(contactStore);
const { handleContact, changeContactPage } = contactStore;

onMounted(() => {
  contactStore.initStore();
});
</script>

<style scoped>
.pagination-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pagination-button {
  display: inline-flex;
  width: auto;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem !important;
  padding-inline: 0.875rem;
}
</style>
