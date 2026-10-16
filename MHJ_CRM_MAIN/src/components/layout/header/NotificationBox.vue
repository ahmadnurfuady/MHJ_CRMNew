<template>
  <div class="notification-box">
    <SvgIcon icon="notification-header"></SvgIcon>
    <span v-if="unreadCount > 0" class="badge rounded-pill badge-secondary">
      {{ unreadCount > 9 ? '9+' : unreadCount }}
    </span>
  </div>
  <div class="onhover-show-div notification-dropdown">
    <div class="card mb-0">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h4 class="f-w-600 mb-0">Notifikasi</h4>
        <a
          v-if="unreadCount > 0"
          href="#"
          class="f-12 f-w-500 text-primary"
          @click.prevent="notificationStore.markAllRead()"
          >Tandai semua dibaca</a
        >
      </div>
      <div class="card-body">
        <div class="notitications-bar">
          <div class="user-message">
            <div class="firstcart-empty" v-if="items.length === 0">
              <div class="cart-image">
                <img class="img-fluid" :src="getImages('ecommerce/cleaning.gif')" alt="empty" />
              </div>
              <h5 class="mb-0 text-center">Belum ada notifikasi</h5>
            </div>

            <ul v-else class="notif-list">
              <li
                v-for="item in items"
                :key="item.id"
                class="first-product"
                :class="{ 'is-unread': !item.read }"
                @click="handleItemClick(item)"
              >
                <div class="user-alerts">
                  <div class="notif-icon-wrap flex-shrink-0">
                    <img v-if="item.icon" class="user-image rounded-circle img-fluid" :src="item.icon" alt="" />
                    <vue-feather v-else type="bell" size="16" />
                  </div>

                  <div class="user-name">
                    <div>
                      <h6>
                        <a class="f-w-500 f-14">{{ item.title }}</a>
                      </h6>
                      <span class="f-light f-w-500 f-12 d-block">{{ item.body }}</span>
                      <span class="f-light f-10 notif-time">{{ formatTime(item.receivedAt) }}</span>
                    </div>

                    <div class="close-circle" @click.stop="notificationStore.removeNotification(item.id)">
                      <a class="bg-light"><vue-feather type="x" /></a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { formatDistanceToNowStrict } from 'date-fns'
import { id as idLocale } from 'date-fns/locale'
import { getImages } from '@/utils'
import { useNotificationStore, type PushNotificationEntry } from '@/store/notification'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const notificationStore = useNotificationStore()
const { items, unreadCount } = storeToRefs(notificationStore)

onMounted(() => {
  notificationStore.init()
})

function formatTime(timestamp: number) {
  return formatDistanceToNowStrict(timestamp, { addSuffix: true, locale: idLocale })
}

function handleItemClick(item: PushNotificationEntry) {
  notificationStore.markRead(item.id)
  if (item.url) {
    window.open(item.url, '_self')
  }
}
</script>

<style scoped>
.notif-list {
  max-height: 340px;
  overflow-y: auto;
}

.notif-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.1);
  color: #18a6e4;
  margin-right: 10px;
}

.notif-icon-wrap img {
  width: 34px;
  height: 34px;
  object-fit: cover;
}

.notif-time {
  display: block;
  margin-top: 2px;
}

.first-product {
  cursor: pointer;
}

.first-product.is-unread {
  background-color: rgba(24, 166, 228, 0.06);
}
</style>
