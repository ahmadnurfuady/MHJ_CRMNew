<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div
        class="col-xl-7 order-1 b-center bg-size"
        :style="{ backgroundImage: `url(${getImages('login/1.jpg')})` }"
      >
        <img class="bg-img-cover bg-center d-none" :src="getImages('login/1.jpg')" alt="image" />
      </div>
      <div class="col-xl-5 p-0">
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
            <div class="login-main create-account">
              <RegisterForm :path="routes.Auth.LoginBgImage" />
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

const RegisterForm = defineAsyncComponent(() => import('@/module/auth/RegisterForm.vue'))
</script>
