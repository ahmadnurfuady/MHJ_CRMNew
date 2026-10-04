<template>
  <form class="theme-form" @submit.prevent="submit()">
    <h4>Sign in to account</h4>
    <p>Enter your email &amp; password to login</p>
    <div class="form-group">
      <InputWrapper :title="'Email / Username'" :required="true">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Email atau Username wajib diisi.'"
          v-model:modelValue="form.email"
          :inputId="'email'"
          :placeholder="'email@domain.com atau username'"
          :inputType="'text'"
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
        <input class="checkbox-primary form-check-input" id="checkbox1" type="checkbox" />
        <label class="text-muted form-check-label" for="checkbox1">Remember password</label>
      </div>
      <router-link class="link" :to="routes.Auth.ForgotPassword">Forgot password?</router-link>
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
          {{ authStore.loading ? 'Signing in...' : 'Sign in' }}
        </button>
      </div>
    </div>
    <h6 class="text-muted mt-4 or">Or Sign in with</h6>
    <div class="social mt-4">
      <div class="btn-showcase">
        <a
          class="btn btn-light social-disabled"
          href="javascript:void(0)"
          role="button"
          aria-disabled="true"
          @click.prevent
        >
          <vue-feather :type="'linkedin'" class="txt-linkedin"></vue-feather> LinkedIn
        </a>
        <a
          class="btn btn-light social-disabled"
          href="javascript:void(0)"
          role="button"
          aria-disabled="true"
          @click.prevent
        >
          <vue-feather :type="'twitter'" class="txt-twitter"></vue-feather>twitter
        </a>
        <a
          class="btn btn-light social-disabled"
          href="javascript:void(0)"
          role="button"
          aria-disabled="true"
          @click.prevent
        >
          <vue-feather :type="'facebook'" class="txt-fb"></vue-feather> facebook
        </a>
      </div>
    </div>
    <p class="mt-4 mb-0 text-center">
      Don't have account?
      <router-link class="ms-2" :to="props.path">Create Account</router-link>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
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

const formSubmitted = ref(false)
const showPassword = ref(false)

let form = reactive({
  email: initInputField(),
  password: initInputField(),
})

function togglePassword() {
  showPassword.value = !showPassword.value
}

async function submit() {
  formSubmitted.value = true
  const { isValid, formData } = validateForm(form)

  if (isValid) {
    if (props.sweetAlert) {
      // Mode SweetAlert (halaman demo khusus sweetAlert di template Riho)
      Swal.fire('Success!', `Email: ${formData.email}\nPassword: ${formData.password}`, 'success')
    } else {
      // ── Mode utama: Login ke backend API Laravel MHJ CRM ──
      const result = await authStore.login({
        email: formData.email as string,
        password: formData.password as string,
      })

      if (result.success) {
        toast.success(result.message || 'Login Berhasil!')
        router.replace(routes.Dashboards.Default)
      } else {
        toast.error(result.message || 'Login gagal, periksa email/username dan password Anda.')
      }
    }

    form = resetForm(form)
    formSubmitted.value = false
  } else if (props.sweetAlert) {
    Swal.fire('Error!', 'Sorry, looks like some data are not filled, please try again !', 'error')
  } else {
    toast.error('Harap isi email/username dan password dengan benar.')
  }
}
</script>

