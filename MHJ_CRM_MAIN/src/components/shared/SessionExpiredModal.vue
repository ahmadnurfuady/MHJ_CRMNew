<template>
  <Teleport to="body">
    <transition name="se-fade">
      <div v-if="sessionExpired" class="se-backdrop" role="dialog" aria-modal="true" aria-labelledby="se-title">
        <div class="se-modal">

          <!-- Ikon -->
          <div class="se-icon">
            <vue-feather type="lock" size="32" />
          </div>

          <h5 id="se-title" class="se-title">Sesi Telah Berakhir</h5>
          <p class="se-body">
            Token akses Anda sudah tidak berlaku atau telah habis masa pakainya.
            Silakan login kembali untuk melanjutkan.
          </p>

          <button class="btn btn-primary w-100" @click="goLogin">
            <vue-feather type="log-in" size="15" class="me-1" />
            Login Kembali
          </button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { sessionExpired } from '@/store/sessionSignal'

function goLogin() {
  sessionExpired.value = false
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '')
  window.location.href = `${baseUrl}/auth/login`
}
</script>

<style scoped>
.se-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(3, 42, 78, 0.55);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.se-modal {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem 2rem 1.75rem;
  max-width: 360px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(3, 42, 78, 0.25);
  animation: se-pop 0.22s cubic-bezier(0.34, 1.4, 0.64, 1);
}

@keyframes se-pop {
  from { transform: scale(0.88); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

.se-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.1);
  color: #18A6E4;
  margin-bottom: 1.1rem;
}

.se-title {
  font-weight: 700;
  color: #032A4E;
  margin-bottom: 0.5rem;
}

.se-body {
  color: #6c757d;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.4rem;
}

/* Transisi overlay */
.se-fade-enter-active,
.se-fade-leave-active {
  transition: opacity 0.2s;
}
.se-fade-enter-from,
.se-fade-leave-to {
  opacity: 0;
}
</style>
