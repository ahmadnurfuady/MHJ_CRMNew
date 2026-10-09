<template>
  <div class="container-fluid">
    <ContactDetailPage v-if="detailId" :contact-id="detailId" />
    <div v-else class="email-wrap bookmark-wrap">
      <div class="row main-bookmark">
        <div class="col-12">
          <div class="email-right-aside bookmark-tabcontent contacts-tabs">
            <div class="card email-body radius-left dark-contact">
              <div class="ps-0">
                <div class="tab-content">
                  <div class="tab-pane fade active show">
                    <ContactDetails />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PrintContactModal />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useContact } from '@/store/contact'

const ContactDetails = defineAsyncComponent(() => import('@/module/contacts/ContactDetails.vue'))
const ContactDetailPage = defineAsyncComponent(
  () => import('@/pages/contacts/ContactDetailPage.vue')
)
const PrintContactModal = defineAsyncComponent(
  () => import('@/module/contacts/PrintContactModal.vue')
)

const contactStore = useContact()
contactStore.setScope('contact')
const route = useRoute()
const detailId = computed(() => {
  const id = Number(route.query.detail)
  return Number.isFinite(id) && id > 0 ? id : 0
})
</script>
