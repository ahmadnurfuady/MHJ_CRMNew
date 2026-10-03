<template>
  <div class="container-fluid p-0">
    <!-- Unlock page start-->
    <div class="authentication-main mt-0">
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
                  <h4>Unlock</h4>
                  <div class="form-group">
                    <InputWrapper :title="'Enter your Password'">
                      <div class="form-input position-relative">
                        <InputField
                          :inputId="'password'"
                          :placeholder="'*********'"
                          :inputType="showPassword ? 'text' : 'password'"
                          :required="false"
                          v-model:modelValue="form.password"
                        >
                          <div class="show-hide" @click="togglePassword()">
                            <span :class="{ show: !showPassword }"></span>
                          </div>
                        </InputField>
                      </div>
                    </InputWrapper>
                  </div>
                  <div class="form-group mb-0">
                    <div class="form-check">
                      <input
                        class="form-check-input checkbox-primary"
                        id="checkbox1"
                        type="checkbox"
                      />
                      <label class="text-muted form-check-label" for="checkbox1"
                        >Remember password</label
                      >
                    </div>
                    <button class="btn btn-primary btn-block w-100" type="submit">Unlock</button>
                  </div>
                  <p class="mt-4 mb-0">
                    Already Have an account?
                    <router-link class="ms-2" :to="routes.Auth.LoginSimple">Sign in</router-link>
                  </p>
                </form>
              </div>
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

const showPassword = ref<boolean>(false)
const form = reactive({
  password: initInputField(),
})

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>
