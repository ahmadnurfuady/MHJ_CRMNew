<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-xl-7 b-center bg-size"
        :style="{ backgroundImage: `url('${getImages('login/2.jpg')}')` }"
      >
        <img class="bg-img-cover bg-center d-none" :src="getImages('login/2.jpg')" alt="image" />
      </div>
      <div class="col-xl-5 p-0">
        <div class="login-card login-dark">
          <div>
            <div>
              <router-link class="logo text-start" :to="'/'">
                <img
                  class="img-fluid for-light login-logo"
                  :src="getImages('logo/logo_dark.png')"
                  alt="logo"
                />
                <img
                  class="img-fluid for-dark login-logo"
                  :src="getImages('logo/logo.png')"
                  alt="logo"
                />
              </router-link>
            </div>
            <div class="login-main">
              <LoginForm :path="routes.Auth.RegisterBgImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'
const LoginForm = defineAsyncComponent(() => import('@/module/auth/LoginForm.vue'))
</script>

<style scoped>
.login-logo {
  max-width: 150px;
  max-height: 70px;
  object-fit: contain;
}
</style>
