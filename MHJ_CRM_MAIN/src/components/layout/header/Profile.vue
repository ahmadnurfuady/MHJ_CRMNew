<template>
  <div class="media profile-media" @click="openTab()">
    <img class="b-r-10" :src="getImages('dashboard/profile.png')" alt="profile" />
    <div class="media-body d-xxl-block d-none box-col-none">
      <div class="d-flex align-items-center gap-2">
        <span>{{ authStore.user?.name || 'Admin' }} </span><i class="middle fa fa-angle-down"> </i>
      </div>
      <p class="mb-0 font-roboto">{{ authStore.user?.email || 'Admin' }}</p>
    </div>
  </div>

  <ul class="profile-dropdown onhover-show-div" :class="show ? 'active' : ''">
    <li>
      <router-link :to="routes.User.AkunSaya" @click="show = false">
        <vue-feather type="user"></vue-feather><span>Akun</span>
      </router-link>
    </li>
    <li>
      <a href="#" @click.prevent="showComingSoon('Kotak Masuk')">
        <vue-feather type="mail"></vue-feather><span>Kotak Masuk</span>
      </a>
    </li>
    <li>
      <a href="#" @click.prevent="showComingSoon('Pengaturan')">
        <vue-feather type="settings"></vue-feather><span>Pengaturan</span>
      </a>
    </li>
    <li>
      <a class="btn btn-pill btn-outline-primary btn-sm" @click="handleLogout()">Keluar</a>
    </li>
  </ul>

  <!-- Overlay "Akan Datang" -->
  <Teleport to="body">
    <transition name="cs-fade">
      <div v-if="comingSoonLabel" class="cs-backdrop" @click="comingSoonLabel = ''">
        <div class="cs-card" @click.stop>
          <div class="cs-icon">
            <vue-feather type="clock" size="28" />
          </div>
          <div class="cs-label">{{ comingSoonLabel }}</div>
          <div class="cs-title">Akan Datang</div>
          <p class="cs-sub">Fitur ini masih dalam tahap pengembangan.</p>
          <button class="btn btn-sm btn-primary px-4" @click="comingSoonLabel = ''">Tutup</button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { getImages } from '@/utils/index'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { routes } from '@/router/routes'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const authStore = useAuthStore()
const show = ref<boolean>(false)
const comingSoonLabel = ref('')

async function handleLogout() {
  await authStore.logout()
  router.replace('/auth/login')
}

function openTab() {
  show.value = !show.value
}

function showComingSoon(label: string) {
  show.value = false
  comingSoonLabel.value = label
}
</script>

<style scoped>
/* ─── Overlay backdrop ─────────────────────────────────────────────────── */
.cs-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9990;
  background: rgba(3, 42, 78, 0.45);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

/* ─── Card ─────────────────────────────────────────────────────────────── */
.cs-card {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem 2rem 1.75rem;
  max-width: 320px;
  width: 100%;
  text-align: center;
  box-shadow: 0 16px 48px rgba(3, 42, 78, 0.2);
  animation: cs-pop 0.2s cubic-bezier(0.34, 1.4, 0.64, 1);
}

@keyframes cs-pop {
  from { transform: scale(0.88); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

.cs-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.1);
  color: #18A6E4;
  margin-bottom: 0.85rem;
}

.cs-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #adb5bd;
  margin-bottom: 0.2rem;
}

.cs-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #032A4E;
  margin-bottom: 0.4rem;
}

.cs-sub {
  color: #6c757d;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
}

/* ─── Transisi ─────────────────────────────────────────────────────────── */
.cs-fade-enter-active,
.cs-fade-leave-active {
  transition: opacity 0.18s;
}
.cs-fade-enter-from,
.cs-fade-leave-to {
  opacity: 0;
}
</style>
