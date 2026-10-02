<template>
  <div class="notification-box">
    <SvgIcon icon="notification-header"></SvgIcon>
    <span class="badge rounded-pill badge-secondary">3</span>
  </div>
  <div class="onhover-show-div notification-dropdown">
    <div class="card mb-0">
      <div class="card-header">
        <h4 class="text-center f-w-600">Notitications</h4>
      </div>
      <div class="card-body">
        <div class="notitications-bar">
          <ul
            class="nav nav-pills nav-primary p-0"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item p-0" v-for="tab in tabs" :key="tab.id">
              <a
                class="nav-link"
                :class="{ active: activeTab === tab.id }"
                id="pills-aboutus-tab"
                @click="activeTab = tab.id"
                data-bs-toggle="pill"
                href="javascript:void(0)"
                role="tab"
              >
                {{ tab.title }}
                <template v-if="tab.title === 'All'">
                  ({{ tab.items.length }})</template
                >
              </a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <All
              v-if="activeTab === 'all'"
              :items="notificationTabs.find((t) => t.id === 'all')?.items || []"
            />
            <MessagesList
              v-if="activeTab === 'messages'"
              :items="
                notificationTabs.find((t) => t.id === 'messages')?.items || []
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { notificationTabs } from "@/core/data/header";
import { defineAsyncComponent } from "vue";

const activeTab = ref("all");
const tabs = ref(notificationTabs);
const SvgIcon = defineAsyncComponent(
  () => import("@/components/shared/SvgIcon.vue"),
);
const All = defineAsyncComponent(
  () => import("@/components/layout/header/notification/All.vue"),
);
const MessagesList = defineAsyncComponent(
  () => import("@/components/layout/header/notification/Message.vue"),
);
</script>
