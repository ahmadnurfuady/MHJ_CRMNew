<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-xl-5 b-center bg-size"
        :style="{ backgroundImage: `url(${getImages('login/3.jpg')})` }"
      >
        <img class="bg-img-cover bg-center d-none" :src="getImages('login/3.jpg')" alt="image" />
      </div>
      <div class="col-xl-7 p-0">
        <div class="login-card login-dark">
          <div>
            <div>
              <router-link class="logo text-start" :to="'/'">
                <img
                  class="img-fluid for-light"
                  :src="getImages('logo/logo_dark.png')"
                  alt="logo"
                />
                <img class="img-fluid for-dark" :src="getImages('logo/logo.png')" alt="logo" />
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
