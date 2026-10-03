<template>
  <div class="container-fluid">
    <div class="email-wrap email-main-wrapper">
      <div class="row">
        <div class="col-xxl-3 col-xl-4 box-col-12">
          <MailBoxSidebar />
        </div>
        <div class="col-xxl-9 col-xl-8 box-col-12">
          <div class="email-right-aside">
            <div class="card email-body email-list" :class="{ hide: mailState.isOpenMail }">
              <MailBoxHeader />
              <div class="tab-content block-wrapper position-relative" id="email-pills-tabContent">
                <div class="tab-pane fade show active">
                  <div class="mail-body-wrapper">
                    <ul class="mail-header-tabs">
                      <HeaderTabs />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <template v-if="mailState.isOpenMail">
              <div class="card email-body email-read" :class="{ show: mailState.isOpenMail }">
                <MailDetails />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue'

import { storeToRefs } from 'pinia'

import { useMailBox } from '@/store/mailBox'

const MailBoxHeader = defineAsyncComponent(() => import('@/module/mailBox/MailBoxHeader.vue'))
const MailBoxSidebar = defineAsyncComponent(() => import('@/module/mailBox/MailBoxSidebar.vue'))
const MailDetails = defineAsyncComponent(() => import('@/module/mailBox/MailDetails.vue'))
const HeaderTabs = defineAsyncComponent(() => import('@/module/mailBox/HeaderTabs.vue'))

const emailStore = useMailBox()
const { mailState } = storeToRefs(emailStore)
const { getTotalEmails } = emailStore

onMounted(() => {
  getTotalEmails()
})
</script>
