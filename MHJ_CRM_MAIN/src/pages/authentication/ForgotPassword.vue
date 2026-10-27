<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="login-card login-dark">
          <div>
            <div>
              <router-link class="logo" :to="LOGIN_PATH">
                <img
                  class="img-fluid for-light"
                  :src="getImages('logo/logo_dark.png')"
                  alt="logo"
                />
                <img class="img-fluid for-dark" :src="getImages('logo/logo.png')" alt="logo" />
              </router-link>
            </div>
            <div class="login-main">
              <!-- Langkah 1: Email -->
              <form v-if="step === 1" class="theme-form" novalidate @submit.prevent="sendOtp()">
                <h4>{{ isProfileChange ? 'Ganti Password' : 'Lupa Password' }}</h4>
                <p>Langkah 1 dari 3 — masukkan email akun Anda untuk menerima kode OTP.</p>
                <div v-if="errorMessage" class="alert alert-light-danger mb-3" role="alert">
                  {{ errorMessage }}
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="fp-email">
                    Email <span class="txt-danger">*</span>
                  </label>
                  <input
                    id="fp-email"
                    v-model.trim="email"
                    class="form-control"
                    type="email"
                    autocomplete="email"
                    placeholder="email@domain.com"
                    :disabled="loading"
                  />
                </div>
                <button class="btn btn-primary btn-block w-100 mt-3" type="submit" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                  {{ loading ? 'Mengirim...' : 'Kirim Kode OTP' }}
                </button>
                <p class="mt-4 mb-0 text-center">
                  {{ isProfileChange ? 'Batal mengganti password?' : 'Sudah ingat password?' }}
                  <router-link class="ms-2" :to="isProfileChange ? routes.User.AkunSaya : LOGIN_PATH">
                    {{ isProfileChange ? 'Kembali ke profil' : 'Masuk' }}
                  </router-link>
                </p>
              </form>

              <!-- Langkah 2: OTP -->
              <form v-else-if="step === 2" class="theme-form" novalidate @submit.prevent="verifyOtp()">
                <h4>Verifikasi Kode OTP</h4>
                <p>
                  Langkah 2 dari 3 — masukkan 6 digit kode yang dikirim ke
                  <strong>{{ email }}</strong>. Kode berlaku 10 menit.
                </p>
                <div v-if="errorMessage" class="alert alert-light-danger mb-3" role="alert">
                  {{ errorMessage }}
                </div>
                <div class="form-group">
                  <label class="col-form-label pt-0" for="fp-otp-0">Kode OTP</label>
                  <div class="row g-2">
                    <div v-for="(_, index) in otpDigits" :key="index" class="col">
                      <input
                        :id="`fp-otp-${index}`"
                        :ref="(el) => setOtpInput(el, index)"
                        :value="otpDigits[index]"
                        type="text"
                        inputmode="numeric"
                        :autocomplete="index === 0 ? 'one-time-code' : 'off'"
                        maxlength="1"
                        class="form-control text-center opt-text"
                        :aria-label="`Digit OTP ke-${index + 1}`"
                        :disabled="loading"
                        @input="onOtpInput(index, $event)"
                        @keydown="onOtpKeydown(index, $event)"
                        @paste.prevent="onOtpPaste($event)"
                      />
                    </div>
                  </div>
                </div>
                <button
                  class="btn btn-primary btn-block w-100 mt-3"
                  type="submit"
                  :disabled="loading || !isOtpComplete"
                >
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                  {{ loading ? 'Memverifikasi...' : 'Verifikasi Kode' }}
                </button>
                <div class="mt-4 mb-0 text-center">
                  <span class="reset-password-link">
                    Tidak menerima kode?
                    <button
                      class="btn btn-link p-0 ms-1 align-baseline"
                      type="button"
                      :disabled="cooldown > 0 || resending"
                      @click="resendOtp()"
                    >
                      {{ resending ? 'Mengirim...' : 'Kirim Ulang' }}
                    </button>
                    <span v-if="cooldown > 0" class="text-muted"> ({{ cooldown }}s)</span>
                  </span>
                </div>
                <p class="mt-2 mb-0 text-center">
                  <a href="#" @click.prevent="backToEmail()">Ganti email</a>
                </p>
              </form>

              <!-- Langkah 3: Password baru -->
              <form v-else class="theme-form" novalidate @submit.prevent="savePassword()">
                <h4>Buat Password Baru</h4>
                <p>Langkah 3 dari 3 — password minimal 6 karakter.</p>
                <div v-if="errorMessage" class="alert alert-light-danger mb-3" role="alert">
                  {{ errorMessage }}
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="fp-password">
                    Password Baru <span class="txt-danger">*</span>
                  </label>
                  <div class="form-input position-relative">
                    <input
                      id="fp-password"
                      v-model="password"
                      class="form-control"
                      :type="showPassword.password ? 'text' : 'password'"
                      autocomplete="new-password"
                      maxlength="30"
                      placeholder="*********"
                      :disabled="loading"
                    />
                    <div class="show-hide" @click="showPassword.password = !showPassword.password">
                      <span :class="{ show: showPassword.password }"></span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="fp-password-confirm">
                    Konfirmasi Password <span class="txt-danger">*</span>
                  </label>
                  <div class="form-input position-relative">
                    <input
                      id="fp-password-confirm"
                      v-model="passwordConfirmation"
                      class="form-control"
                      :type="showPassword.confirm ? 'text' : 'password'"
                      autocomplete="new-password"
                      maxlength="30"
                      placeholder="*********"
                      :disabled="loading"
                    />
                    <div class="show-hide" @click="showPassword.confirm = !showPassword.confirm">
                      <span :class="{ show: showPassword.confirm }"></span>
                    </div>
                  </div>
                </div>
                <button class="btn btn-primary btn-block w-100 mt-3" type="submit" :disabled="loading">
                  {{ loading ? 'Menyimpan...' : 'Simpan Password' }}
                </button>
                <p v-if="errorMessage" class="mt-4 mb-0 text-center">
                  Kode kedaluwarsa?
                  <a href="#" class="ms-1" @click.prevent="backToEmail()">Minta kode baru</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onUnmounted, reactive, ref, type ComponentPublicInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { toast } from 'vue3-toastify'

import { useAuthStore } from '@/store/auth'
import { routes } from '@/router/routes'
import { getImages } from '@/utils/index'

const LOGIN_PATH = '/auth/login'
const OTP_LENGTH = 6
const RESEND_COOLDOWN_SECONDS = 60
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const isProfileChange = computed(() => route.query.source === 'profile' && authStore.isAuthenticated)

const step = ref<1 | 2 | 3>(1)
const email = ref(isProfileChange.value ? authStore.user?.email ?? '' : '')
const otpDigits = ref<string[]>(Array(OTP_LENGTH).fill(''))
const otpInputs: (HTMLInputElement | null)[] = []
const password = ref('')
const passwordConfirmation = ref('')
const showPassword = reactive({ password: false, confirm: false })

const loading = ref(false)
const resending = ref(false)
const errorMessage = ref('')
const cooldown = ref(0)
let cooldownTimer: ReturnType<typeof setInterval> | null = null

const otpCode = computed(() => otpDigits.value.join(''))
const isOtpComplete = computed(() => /^\d{6}$/.test(otpCode.value))

function setOtpInput(el: Element | ComponentPublicInstance | null, index: number) {
  otpInputs[index] = el as HTMLInputElement | null
}

function focusOtp(index: number) {
  otpInputs[Math.max(0, Math.min(index, OTP_LENGTH - 1))]?.focus()
}

function stopCooldown() {
  if (cooldownTimer) {
    clearInterval(cooldownTimer)
    cooldownTimer = null
  }
}

function startCooldown() {
  stopCooldown()
  cooldown.value = RESEND_COOLDOWN_SECONDS
  cooldownTimer = setInterval(() => {
    cooldown.value -= 1
    if (cooldown.value <= 0) stopCooldown()
  }, 1000)
}

function resetOtp() {
  otpDigits.value = Array(OTP_LENGTH).fill('')
}

async function sendOtp() {
  errorMessage.value = ''
  if (!EMAIL_PATTERN.test(email.value)) {
    errorMessage.value = 'Masukkan alamat email yang valid.'
    return
  }

  loading.value = true
  const result = await authStore.forgotPassword(email.value)
  loading.value = false

  if (!result.success) {
    errorMessage.value = result.message
    return
  }

  toast.success(result.message)
  resetOtp()
  step.value = 2
  startCooldown()
  await nextTick()
  focusOtp(0)
}

async function resendOtp() {
  if (cooldown.value > 0) return
  errorMessage.value = ''
  resending.value = true
  const result = await authStore.forgotPassword(email.value)
  resending.value = false

  if (!result.success) {
    errorMessage.value = result.message
    return
  }

  toast.success('Kode OTP baru telah dikirim. Kode sebelumnya tidak berlaku lagi.')
  resetOtp()
  startCooldown()
  focusOtp(0)
}

function onOtpInput(index: number, event: Event) {
  const target = event.target as HTMLInputElement
  const digit = target.value.replace(/\D/g, '').slice(-1)
  otpDigits.value[index] = digit
  target.value = digit
  if (digit && index < OTP_LENGTH - 1) focusOtp(index + 1)
}

function onOtpKeydown(index: number, event: KeyboardEvent) {
  if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
    focusOtp(index - 1)
  } else if (event.key === 'ArrowLeft') {
    focusOtp(index - 1)
  } else if (event.key === 'ArrowRight') {
    focusOtp(index + 1)
  }
}

function onOtpPaste(event: ClipboardEvent) {
  const digits = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '').slice(0, OTP_LENGTH)
  if (!digits) return
  otpDigits.value = Array.from({ length: OTP_LENGTH }, (_, i) => digits[i] ?? '')
  focusOtp(digits.length)
}

async function verifyOtp() {
  errorMessage.value = ''
  if (!isOtpComplete.value) {
    errorMessage.value = 'Lengkapi 6 digit kode OTP.'
    return
  }

  loading.value = true
  const result = await authStore.verifyOtp(email.value, otpCode.value)
  loading.value = false

  if (!result.success) {
    errorMessage.value = result.message
    return
  }

  stopCooldown()
  step.value = 3
}

async function savePassword() {
  errorMessage.value = ''
  if (password.value.length < 6) {
    errorMessage.value = 'Password baru minimal 6 karakter.'
    return
  }
  if (password.value !== passwordConfirmation.value) {
    errorMessage.value = 'Konfirmasi password tidak sama.'
    return
  }

  loading.value = true
  const result = await authStore.resetPassword({
    email: email.value,
    otp: otpCode.value,
    password: password.value,
    password_confirmation: passwordConfirmation.value,
  })
  loading.value = false

  if (!result.success) {
    errorMessage.value = result.message
    return
  }

  await Swal.fire({
    icon: 'success',
    title: 'Password Diperbarui',
    text: result.message,
    confirmButtonText: 'Ke Halaman Login',
    confirmButtonColor: 'var(--theme-default)',
  })
  if (isProfileChange.value) await authStore.logout()
  router.replace(LOGIN_PATH)
}

function backToEmail() {
  stopCooldown()
  cooldown.value = 0
  errorMessage.value = ''
  resetOtp()
  step.value = 1
}

onUnmounted(stopCooldown)
</script>
