<template>
  <div class="no-access-page">
    <div class="no-access-card">

      <div class="no-access-icon">
        <vue-feather type="shield-off" size="38" />
      </div>

      <h3 class="no-access-title">Belum Ada Akses Menu</h3>

      <p class="no-access-body">
        Akun Anda sudah aktif, namun belum memiliki hak akses ke menu apapun.
        Silakan hubungi <strong>Administrator</strong> untuk meminta pengaturan akses menu.
      </p>

      <button class="btn btn-light-primary mt-3" @click="logout">
        <vue-feather type="log-out" size="14" class="me-1" />
        Keluar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

async function logout() {
  await authStore.logout()
  router.push('/auth/login')
}
</script>

<style scoped>
.no-access-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem 1rem;
}

.no-access-card {
  text-align: center;
  max-width: 440px;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  border: 1.5px solid rgba(3, 42, 78, 0.12);
  background: #fff;
  box-shadow: 0 4px 24px rgba(3, 42, 78, 0.07);
}

.no-access-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.08);
  color: #18A6E4;
  margin-bottom: 1.25rem;
}

.no-access-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #032A4E;
  margin-bottom: 0.6rem;
}

.no-access-body {
  color: #6c757d;
  font-size: 0.9rem;
  line-height: 1.65;
  margin-bottom: 1rem;
}
</style>
