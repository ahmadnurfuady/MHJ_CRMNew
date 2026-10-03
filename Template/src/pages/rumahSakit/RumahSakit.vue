<template>
  <div class="container-fluid">
    <div class="email-wrap bookmark-wrap">
      <div class="row main-bookmark">
        <div class="col-xxl-3 box-col-6">
          <ContactSidebar />
        </div>
        <div class="col-xxl-9 col-md-12 box-col-12">
          <div class="email-right-aside bookmark-tabcontent contacts-tabs">
            <div class="card email-body radius-left dark-contact">
              <div class="ps-0">
                <div class="tab-content">
                  <div class="tab-pane fade active show">
                    <ContactDetails />
                  </div>
                  <div id="right-history" :class="{ show: contactState.historyVisible }">
                    <ContactHistory />
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
import { defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useContact } from '@/store/contact'

const ContactSidebar = defineAsyncComponent(() => import('@/module/rumahSakit/ContactSidebar.vue'))
const ContactDetails = defineAsyncComponent(() => import('@/module/rumahSakit/ContactDetails.vue'))
const ContactHistory = defineAsyncComponent(() => import('@/module/rumahSakit/ContactHistory.vue'))
const PrintContactModal = defineAsyncComponent(
  () => import('@/module/rumahSakit/PrintContactModal.vue')
)

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)
</script>
