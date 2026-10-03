<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
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
              <RegisterForm :path="routes.Auth.LoginSimple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
import { getImages } from '@/utils/index'
import { defineAsyncComponent } from 'vue'
const RegisterForm = defineAsyncComponent(() => import('@/module/auth/RegisterForm.vue'))
</script>
