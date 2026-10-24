<template>
  <form class="theme-form login-form" @submit.prevent="submit()">
    <h4>Masuk ke akun</h4>
    <p>Masukkan email dan password untuk masuk</p>
    <div class="form-group">
      <InputWrapper :title="'Email'" :required="true">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Email wajib diisi.'"
          v-model:modelValue="form.email"
          :inputId="'email'"
          :placeholder="'nama@domain.com'"
          :inputType="'email'"
          :browserValidation="props.browserValidation"
        />
      </InputWrapper>
    </div>
    <div class="form-group">
      <InputWrapper :title="'Password'" :required="true">
        <div class="form-input position-relative">
          <InputField
            :formSubmitted="formSubmitted"
            :errorMessage="'Password wajib diisi.'"
            v-model:modelValue="form.password"
            :inputId="'password'"
            :placeholder="'*********'"
            :inputType="showPassword ? 'text' : 'password'"
            :browserValidation="props.browserValidation"
          >
          </InputField>
          <div class="show-hide" @click="togglePassword()">
            <span :class="{ show: showPassword }"></span>
          </div>
        </div>
      </InputWrapper>
    </div>
    <div class="form-group mb-0">
      <div class="form-check">
        <input
          v-model="rememberPassword"
          class="checkbox-primary form-check-input"
          id="remember-password"
          type="checkbox"
          @change="handleRememberChange"
        />
        <label class="text-muted form-check-label" for="remember-password">Ingat password</label>
      </div>
      <router-link class="link" :to="routes.Auth.ForgotPassword">Lupa password?</router-link>
      <div class="text-end">
        <button
          class="btn btn-primary btn-block w-100 mt-3"
          type="submit"
          :disabled="authStore.loading"
        >
          <span
            v-if="authStore.loading"
            class="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          {{ authStore.loading ? 'Sedang masuk...' : 'Masuk' }}
        </button>
      </div>
    </div>
    <p class="mt-4 mb-0 text-center">
      Belum punya akun?
      <router-link class="ms-2" :to="props.path">Buat akun</router-link>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { initInputField } from '@/core/data/common'
import { resetForm } from '@/utils/index'
import { toast } from 'vue3-toastify'
import { validateForm } from '@/utils/validators/formValidators'
import { routes } from '@/router/routes'
import { useAuthStore } from '@/store/auth'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const props = withDefaults(
  defineProps<{
    path: string
    browserValidation?: boolean
    sweetAlert?: boolean
    storeDetails?: boolean
  }>(),
  {
    browserValidation: false,
    sweetAlert: false,
    storeDetails: true,
  }
)

const router = useRouter()
const authStore = useAuthStore()

const REMEMBERED_LOGIN_KEY = 'mhj_remembered_login'

const formSubmitted = ref(false)
const showPassword = ref(false)
const rememberPassword = ref(false)

let form = reactive({
  email: initInputField(),
  password: initInputField(),
})

onMounted(() => {
  try {
    const savedLogin = localStorage.getItem(REMEMBERED_LOGIN_KEY)
    if (!savedLogin) return

    const credentials = JSON.parse(savedLogin) as { email?: unknown; password?: unknown }
    if (typeof credentials.email !== 'string' || typeof credentials.password !== 'string') {
      removeRememberedLogin()
      return
    }

    form.email.data = credentials.email
    form.password.data = credentials.password
    rememberPassword.value = true
  } catch {
    removeRememberedLogin()
  }
})

function removeRememberedLogin() {
  try {
    localStorage.removeItem(REMEMBERED_LOGIN_KEY)
  } catch {
    // Abaikan jika browser memblokir penyimpanan lokal.
  }
}

function handleRememberChange() {
  if (!rememberPassword.value) {
    removeRememberedLogin()
  }
}

function saveRememberedLogin(email: string, password: string) {
  try {
    if (!rememberPassword.value) {
      removeRememberedLogin()
      return
    }

    localStorage.setItem(REMEMBERED_LOGIN_KEY, JSON.stringify({ email, password }))
  } catch {
    // Login tetap dilanjutkan bila browser memblokir penyimpanan lokal.
  }
}

function togglePassword() {
  showPassword.value = !showPassword.value
}

async function submit() {
  formSubmitted.value = true
  const { isValid, formData } = validateForm(form)

  if (isValid) {
    if (props.sweetAlert) {
      // Mode SweetAlert (halaman demo khusus sweetAlert di template Riho)
      Swal.fire('Berhasil!', `Email: ${formData.email}\nPassword: ${formData.password}`, 'success')
    } else {
      // ── Mode utama: Login ke backend API Laravel MHJ CRM ──
      const result = await authStore.login({
        email: formData.email as string,
        password: formData.password as string,
      })

      if (result.success) {
        saveRememberedLogin(formData.email as string, formData.password as string)
        toast.success(result.message || 'Login Berhasil!')
        router.replace(routes.Dashboards.Default)
      } else {
        toast.error(result.message || 'Login gagal, periksa email/username dan password Anda.')
      }
    }

    form = resetForm(form)
    formSubmitted.value = false
  } else if (props.sweetAlert) {
    Swal.fire('Gagal!', 'Masih ada data yang belum diisi. Silakan coba lagi.', 'error')
  } else {
    toast.error('Harap isi email dan password dengan benar.')
  }
}
</script>

