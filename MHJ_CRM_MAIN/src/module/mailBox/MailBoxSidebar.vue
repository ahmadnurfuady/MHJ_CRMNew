<template>
  <div class="md-sidebar">
    <a class="btn btn-primary md-sidebar-toggle" href="#" @click.prevent="toggleSidebar()">
      email filter
    </a>
    <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="{ open: sidebarOpen }">
      <div class="email-left-aside">
        <Card class="custom-scrollbar">
          <div class="email-app-sidebar">
            <button class="btn btn-primary emailbox" type="button" @click="composeEmail()">
              <i class="fa-solid fa-plus"></i>Compose Email
            </button>
            <ul
              class="nav nav-pills main-menu email-category"
              id="email-pills-tab"
              role="tablist"
              v-if="mailState.sidebar"
            >
              <li class="nav-item" v-for="(item, index) in mailState.sidebar" :key="index">
                <a
                  class="nav-link"
                  :class="{ active: mailState.activeTab == item.value }"
                  @click="handleTabChange(item.value)"
                >
                  <SvgIcon :icon="item.icon" type="default" :class="'stroke-icon'"></SvgIcon>
                  <div>
                    {{ item.title }}
                    <span class="badge badge-light-primary" v-if="item.count">
                      {{ item.count }}
                    </span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <ul>
                  <li v-for="(tag, index) in emailTags" :key="index">
                    <a href="#" class="nav-link">
                      <SvgIcon
                        :icon="'pintag'"
                        type="default"
                        :svgClass="'stroke-icon stroke-' + tag.color"
                      ></SvgIcon>
                      {{ tag.title }}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link btn" href="#" @click.prevent="openLabelModal()">
                  <i class="fa-solid fa-plus"></i>
                  Add Label
                </a>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  </div>

  <ComposeEmailModal :modalOpen="isMailModalOpen" @closeModal="isMailModalOpen = false" />
  <MailLabelModal :modalOpen="isLabelModalOpen" @closeModal="isLabelModalOpen = false" />
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'

import { emailTags } from '@/core/data/mailBox'
import { useMailBox } from '@/store/mailBox'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const ComposeEmailModal = defineAsyncComponent(
  () => import('@/module/mailBox/ComposeEmailModal.vue')
)
const MailLabelModal = defineAsyncComponent(() => import('@/module/mailBox/MailLabelModal.vue'))

const emailStore = useMailBox()
const { mailState } = storeToRefs(emailStore)

const sidebarOpen = ref<boolean>(false)
const isMailModalOpen = ref<boolean>(false)
const isLabelModalOpen = ref<boolean>(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function handleTabChange(value: string) {
  mailState.value.activeTab = value
}

function composeEmail() {
  isMailModalOpen.value = true
}

function openLabelModal() {
  isLabelModalOpen.value = true
}
</script>
