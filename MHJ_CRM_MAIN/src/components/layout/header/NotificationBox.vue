<template>
  <div class="notification-box" :aria-label="unreadCount ? `${unreadCount} notifikasi belum dibaca` : 'Notifikasi'">
    <MhjIcon
      :name="unreadCount > 0 ? 'letter_unread' : 'letter'"
      color="var(--app-primary, #18a6e4)"
      secondary-color="var(--app-primary, #18a6e4)"
    />
  </div>
  <div class="onhover-show-div notification-dropdown" @mouseenter="handleDropdownOpen">
    <div class="card mb-0">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h4 class="f-w-600 mb-0">Notifikasi</h4>
        <a
          v-if="unreadCount > 0"
          href="#"
          class="f-12 f-w-500 text-primary"
          :class="{ disabled: markingAllRead }"
          :aria-disabled="markingAllRead"
          @click.prevent="handleMarkAllRead"
          >{{ markingAllRead ? 'Memproses...' : 'Tandai semua dibaca' }}</a
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
            <div v-if="loading && items.length === 0" class="notif-feedback">
              <span class="spinner-border spinner-border-sm text-primary" aria-hidden="true"></span>
              <span>Memuat notifikasi...</span>
            </div>

            <div v-if="fetchError" class="notif-error" role="status">
              {{ fetchError }}
            </div>

            <div class="firstcart-empty" v-if="!loading && items.length === 0">
              <div class="cart-image">
                <img class="img-fluid" :src="getImages('ecommerce/cleaning.gif')" alt="empty" />
              </div>
              <h5 class="mb-0 text-center">Belum ada notifikasi</h5>
            </div>

            <ul v-if="items.length > 0" class="notif-list">
              <li
                v-for="item in items"
                :key="item.id"
                class="first-product"
                :class="{ 'is-unread': !item.read }"
                @click="handleItemClick(item)"
              >
                <div class="user-alerts">
                  <div class="notif-icon-wrap flex-shrink-0">
                    <vue-feather type="bell" size="16" />
                  </div>

                  <div class="user-name">
                    <div>
                      <h6>
                        <a class="f-w-500 f-14">{{ item.title }}</a>
                      </h6>
                      <span class="f-light f-w-500 f-12 d-block">{{ item.body }}</span>
                      <span class="f-light f-10 notif-time">{{ formatTime(item.receivedAt) }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <button class="view-all-notifications" type="button" @click="handleViewAll">
          Lihat seluruh notifikasi
          <vue-feather type="arrow-right" size="15" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { formatDistanceToNowStrict } from 'date-fns'
import { id as idLocale } from 'date-fns/locale'
import { useRouter } from 'vue-router'
import { routes } from '@/router/routes'
import { getImages } from '@/utils'
import { useNotificationStore, type NotificationEntry } from '@/store/notification'

const notificationStore = useNotificationStore()
const router = useRouter()
const markingAllRead = ref(false)
const { items, unreadCount, loading, pushStatus, backendRegistered, pushError, fetchError } =
  storeToRefs(notificationStore)

onMounted(() => {
  notificationStore.init()
})

function formatTime(timestamp: number) {
  if (!timestamp) return 'Waktu tidak tersedia'
  return formatDistanceToNowStrict(timestamp, { addSuffix: true, locale: idLocale })
}

function handleDropdownOpen() {
  void notificationStore.refreshNotifications()
}

async function handleMarkAllRead() {
  if (markingAllRead.value) return

  markingAllRead.value = true
  try {
    await notificationStore.markAllRead()
  } catch {
    // Pesan kegagalan ditampilkan melalui fetchError di dalam dropdown.
  } finally {
    markingAllRead.value = false
  }
}

async function handleItemClick(item: NotificationEntry) {
  try {
    await notificationStore.markRead(item.id)
  } catch {
    return
  }

  if (!item.url) return

  try {
    const target = new URL(item.url, window.location.origin)
    if (target.origin !== window.location.origin) return
    await router.push(`${target.pathname}${target.search}${target.hash}`)
  } catch {
    // URL tidak valid tidak boleh memicu navigasi eksternal.
  }
}

function handleViewAll() {
  void router.push({ path: routes.CrmAdmin.Logs, query: { tab: 'notifications' } })
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

.card-header a.disabled {
  pointer-events: none;
  opacity: 0.6;
}

.notif-feedback {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px 12px;
  color: #657784;
  font-size: 12px;
}

.notif-error {
  margin-bottom: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  background: rgba(220, 53, 69, 0.08);
  color: #b02a37;
  font-size: 11px;
  line-height: 1.4;
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

.view-all-notifications {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 12px;
  border: 0;
  border-radius: 9px;
  padding: 10px 14px;
  color: var(--app-primary-dark, #087fad);
  background: var(--app-primary-wash, #eaf8fd);
  font-size: 12px;
  font-weight: 700;
}

.view-all-notifications:hover {
  color: #fff;
  background: var(--app-primary, #18a6e4);
}
</style>
