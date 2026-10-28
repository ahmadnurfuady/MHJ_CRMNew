<template>
  <button
    class="header-icon-action"
    type="button"
    aria-label="Buka pengaturan"
    title="Pengaturan"
  >
    <SolarIcon
      name="settings"
      :size="24"
      color="var(--app-primary-deep, #032A4E)"
      secondary-color="var(--app-primary, #18A6E4)"
      :secondary-opacity="0.75"
      aria-hidden="true"
    />
  </button>

  <ul
    class="profile-dropdown onhover-show-div settings-dropdown"
    aria-label="Pengaturan akun"
  >
    <li class="settings-heading">
      <vue-feather type="settings" aria-hidden="true" />
      <span>Pengaturan Akun &amp; Sinkronisasi</span>
    </li>

    <li class="settings-item profile-item">
      <router-link class="settings-row profile-row" :to="routes.User.AkunSaya">
        <span class="settings-item-icon profile-icon">
          <vue-feather type="user" aria-hidden="true" />
        </span>
        <span class="settings-copy">
          <strong>Profil Saya ({{ roleLabel }})</strong>
          <small>{{ profileDetail }}</small>
        </span>
        <vue-feather
          class="row-chevron"
          type="chevron-right"
          aria-hidden="true"
        />
      </router-link>
    </li>

    <li class="settings-item">
      <router-link class="settings-row" :to="routes.Pages.Faq">
        <span class="settings-item-icon">
          <vue-feather type="help-circle" aria-hidden="true" />
        </span>
        <span class="settings-copy">
          <strong>Pusat Bantuan</strong>
          <small>Panduan dan pertanyaan umum</small>
        </span>
        <vue-feather
          class="row-chevron"
          type="chevron-right"
          aria-hidden="true"
        />
      </router-link>
    </li>

    <li class="settings-item embedded-control">
      <Language variant="menu" />
    </li>

    <li class="settings-item embedded-control">
      <Mode variant="menu" />
    </li>

    <li class="settings-item sync-item">
      <button
        class="settings-row sync-button"
        type="button"
        :disabled="isSyncing"
        @click.stop="syncServerData"
      >
        <span class="settings-item-icon">
          <vue-feather
            :class="{ spinning: isSyncing }"
            type="refresh-cw"
            aria-hidden="true"
          />
        </span>
        <span class="settings-copy">
          <strong>{{
            isSyncing ? "Memperbarui Data…" : "Perbarui Data Server"
          }}</strong>
          <small>Muat ulang data terbaru langsung dari server</small>
        </span>
      </button>
    </li>

    <li class="logout-item">
      <button class="logout-button" type="button" @click="handleLogout">
        <span>Keluar</span>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import { useAuthStore } from "@/store/auth";
import Language from "@/components/layout/header/Language.vue";
import Mode from "@/components/layout/header/Mode.vue";

const router = useRouter();
const authStore = useAuthStore();
const isSyncing = ref(false);

const roleLabel = computed(() => {
  const role = authStore.user?.role?.trim();
  if (!role) return "Pengguna";

  return role
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
});

const profileDetail = computed(() => {
  const user = authStore.user;
  const detail =
    user?.division_name || user?.branch_name || user?.email || user?.name;
  return detail ? `${detail} • Lihat detail` : "Lihat detail profil";
});

async function handleLogout() {
  await authStore.logout();
  router.replace("/auth/login");
}

async function syncServerData() {
  if (isSyncing.value) return;
  isSyncing.value = true;

  try {
    await authStore.validateAndFetchMenu();
  } catch (error) {
    console.warn(
      "Gagal menyinkronkan data sebelum memuat ulang aplikasi:",
      error,
    );
  } finally {
    window.location.reload();
  }
}
</script>

<style scoped>
.header-icon-action {
  display: inline-grid;
  place-items: center;
  border: 0;
  padding: 0;
  color: inherit;
  background: transparent;
  line-height: 0;
  cursor: pointer;
}

.header-icon-action :deep(.solar-icon),
.header-icon-action :deep(.solar-icon path) {
  stroke: none !important;
}

.header-icon-action :deep(.solar-icon path:last-child) {
  color: #fff !important;
  fill: #fff !important;
}

.settings-dropdown {
  /* Keep the menu inside the viewport when the settings icon is at the far right. */
  right: 0 !important;
  left: auto !important;
  width: min(360px, calc(100vw - 24px)) !important;
  max-width: calc(100vw - 24px);
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  padding: 10px 18px 14px !important;
  box-sizing: border-box;
  transform-origin: top right;
}

.settings-dropdown :deep(svg) {
  color: var(--app-primary, #18a6e4) !important;
}

.settings-dropdown :deep(svg *) {
  color: inherit !important;
  stroke: currentColor !important;
}

.settings-dropdown > li {
  margin: 0 !important;
  padding: 0 !important;
  border-bottom: 0 !important;
}

.settings-dropdown > .settings-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px 12px !important;
  color: #27313d;
  font-size: 15px;
  font-weight: 700;
}

.settings-heading svg {
  width: 22px !important;
  height: 22px !important;
  color: var(--app-primary, #18a6e4) !important;
  fill: none !important;
  stroke: currentColor !important;
}

.settings-heading svg *,
.settings-row svg *,
.logout-button svg * {
  fill: none !important;
  stroke: currentColor !important;
}

.settings-item {
  border-top: 1px solid #e8edf1 !important;
}

.settings-row {
  display: flex !important;
  align-items: center;
  width: 100%;
  gap: 12px;
  border: 0;
  padding: 12px 4px !important;
  color: #313945 !important;
  background: transparent;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
}

.settings-row:hover {
  color: var(--theme-default) !important;
}

.settings-item-icon {
  display: flex;
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--app-primary, #18a6e4) !important;
  background: var(--app-primary-wash, #eaf7fd);
  line-height: 0;
}

.settings-item-icon svg {
  position: static !important;
  display: block;
  width: 22px !important;
  height: 22px !important;
  margin: 0 !important;
  padding: 0 !important;
  fill: none !important;
  stroke: currentColor !important;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.settings-copy {
  display: block;
  min-width: 0;
  flex: 1;
}

.settings-copy strong,
.settings-copy small {
  display: block;
}

.settings-copy strong {
  overflow: hidden;
  color: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.settings-copy small {
  overflow: hidden;
  margin-top: 2px;
  color: #737b86;
  font-size: 11px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.row-chevron {
  flex: 0 0 auto;
  width: 18px !important;
  height: 18px !important;
  color: var(--app-primary, #18a6e4) !important;
  fill: none !important;
  stroke: currentColor !important;
}

.embedded-control {
  padding: 0 !important;
}

.sync-button:disabled {
  cursor: wait;
  opacity: 0.7;
}

.settings-dropdown > .logout-item {
  display: flex;
  justify-content: flex-end;
  border: 0 !important;
  padding-top: 12px !important;
}

:global(
  .page-wrapper
    .page-header
    .header-wrapper
    .nav-right
    > ul
    > li.settings-nav
    .settings-dropdown
    > li
) {
  padding: 0 !important;
  border-bottom: 0 !important;
}

.logout-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 124px;
  border: 1px solid #dc3545;
  border-radius: 999px;
  padding: 8px 18px;
  color: #dc3545;
  background: transparent;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;
}

.logout-button:hover {
  color: #fff;
  border-color: #dc3545;
  background: #dc3545;
}

.spinning {
  animation: settings-spin 0.8s linear infinite;
}

@keyframes settings-spin {
  to {
    transform: rotate(360deg);
  }
}

:global(.dark-only) .settings-dropdown,
:global(.dark-sidebar) .settings-dropdown {
  background: #1d2330;
}

:global(.dark-only) .settings-heading,
:global(.dark-sidebar) .settings-heading,
:global(.dark-only) .settings-row,
:global(.dark-sidebar) .settings-row {
  color: #f2f4f7 !important;
}

:global(.dark-only) .settings-item,
:global(.dark-sidebar) .settings-item {
  border-color: #343b48 !important;
}

:global(.dark-only) .settings-copy small,
:global(.dark-sidebar) .settings-copy small {
  color: #aab2bd;
}
</style>
