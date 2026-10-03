<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <div class="login-card login-dark">
          <div>
            <div>
              <router-link class="logo" :to="'/'">
                <img
                  class="img-fluid for-light"
                  :src="getImages('logo/logo_dark.png')"
                  alt="logo"
                />
                <img class="img-fluid for-dark" :src="getImages('logo/logo.png')" alt="logo" />
              </router-link>
            </div>
            <div class="login-main">
              <form class="theme-form">
                <h4>Reset Your Password</h4>
                <div class="form-group">
                  <InputWrapper :title="'New Password'" :class="'col-form-label'">
                    <div class="form-input position-relative">
                      <InputField
                        :inputId="'password'"
                        :placeholder="'*********'"
                        :inputType="showPassword['password'] ? 'text' : 'password'"
                        :required="false"
                        v-model:modelValue="form.password"
                      >
                        <div class="show-hide" @click="togglePassword('password')">
                          <span :class="{ show: !showPassword['password'] }"></span>
                        </div>
                      </InputField>
                    </div>
                  </InputWrapper>
                </div>
                <div class="form-group">
                  <InputWrapper :title="'Retype Password'" :class="'col-form-label'">
                    <InputField
                      :inputId="'password'"
                      :placeholder="'*********'"
                      :inputType="showPassword['confirmPassword'] ? 'text' : 'password'"
                      :required="false"
                      v-model:modelValue="form.confirmPassword"
                    >
                      <div class="show-hide" @click="togglePassword('confirmPassword')">
                        <span :class="{ show: !showPassword['confirmPassword'] }"></span>
                      </div>
                    </InputField>
                  </InputWrapper>
                </div>
                <div class="form-group mb-0">
                  <div class="form-check">
                    <input
                      class="checkbox-primary form-check-input"
                      id="checkbox1"
                      type="checkbox"
                    />
                    <label class="text-muted form-check-label" for="checkbox1"
                      >Remember password</label
                    >
                  </div>
                  <button class="btn btn-primary btn-block w-100 mt-3" type="submit">Done</button>
                </div>
                <p class="mt-4 mb-0 text-center">
                  Already have an password?

                  <router-link class="ms-2" :to="routes.Auth.LoginSimple">Sign in</router-link>
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
import { ref, reactive, defineAsyncComponent } from 'vue'

import { initInputField } from '@/core/data/common'
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

interface Password {
  password: boolean
  confirmPassword: boolean
}

const showPassword = ref<Password>({
  password: false,
  confirmPassword: false,
})

const form = reactive({
  password: initInputField(),
  confirmPassword: initInputField(),
})

function togglePassword(key: keyof Password) {
  showPassword.value[key] = !showPassword.value[key]
}
</script>
