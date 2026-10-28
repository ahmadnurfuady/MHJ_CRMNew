<template>
  <div class="notification-box" :aria-label="unreadCount ? `${unreadCount} notifikasi belum dibaca` : 'Notifikasi'">
    <MhjIcon
      :name="unreadCount > 0 ? 'letter_unread' : 'letter'"
      color="var(--app-primary, #18a6e4)"
      secondary-color="var(--app-primary, #18a6e4)"
    />
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
        <div v-if="pushStatus !== 'enabled'" class="push-status mb-3">
          <template v-if="pushStatus === 'unconfigured'">
            <strong>Firebase Web belum lengkap.</strong>
            <span>Isi konfigurasi Web App dan VAPID key pada file environment.</span>
          </template>
          <template v-else-if="pushStatus === 'unsupported'">
            <strong>Browser tidak mendukung push notification.</strong>
          </template>
          <template v-else-if="pushStatus === 'denied'">
            <strong>Notifikasi diblokir.</strong>
            <span>Izinkan notifikasi melalui Site settings, lalu muat ulang halaman.</span>
          </template>
          <template v-else-if="pushStatus === 'error'">
            <strong>Push notification belum aktif.</strong>
            <span>{{ pushError || 'Terjadi kesalahan saat menghubungkan Firebase.' }}</span>
            <small class="push-status__hint">
              Opera: Settings → Privacy &amp; security → Site settings → Notifications.
            </small>
            <button class="btn btn-sm btn-primary mt-2" type="button" @click="notificationStore.enablePush()">
              Coba lagi
            </button>
          </template>
          <template v-else>
            <strong>Aktifkan push notification</strong>
            <span>Dapatkan pemberitahuan meskipun tab CRM sedang tidak aktif.</span>
            <button
              class="btn btn-sm btn-primary mt-2"
              type="button"
              :disabled="pushStatus === 'checking' || pushStatus === 'enabling'"
              @click="notificationStore.enablePush()"
            >
              {{ pushStatus === 'enabling' ? 'Mengaktifkan...' : 'Aktifkan' }}
            </button>
          </template>
        </div>

        <div v-else class="push-status push-status-success mb-3">
          <div>
            <strong>Notifikasi aktif</strong>
            <span v-if="!backendRegistered">
              {{ pushError || 'Token belum tersimpan di backend.' }}
            </span>
          </div>
        </div>

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
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { formatDistanceToNowStrict } from 'date-fns'
import { id as idLocale } from 'date-fns/locale'
import { getImages } from '@/utils'
import { useNotificationStore, type PushNotificationEntry } from '@/store/notification'

const notificationStore = useNotificationStore()
const { items, unreadCount, pushStatus, backendRegistered, pushError } =
  storeToRefs(notificationStore)

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
.notification-box :deep(.mhj-icon svg),
.notification-box :deep(.mhj-icon svg path) {
  stroke: none !important;
}

.notification-box :deep([data-mhj-icon='letter_unread'] svg path:first-child) {
  fill: var(--app-primary, #18a6e4) !important;
  opacity: 0.72;
}

.push-status {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.08);
  font-size: 12px;
}

.push-status-success {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: rgba(46, 184, 92, 0.08);
}

.push-status span {
  display: block;
  margin-top: 2px;
}

.push-status__hint {
  display: block;
  margin-top: 7px;
  color: #657784;
  font-size: 10px;
  line-height: 1.45;
}

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
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary, #18a6e4);
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
  background-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.06);
}
</style>
