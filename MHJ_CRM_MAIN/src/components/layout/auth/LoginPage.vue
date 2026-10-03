<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="login-card login-dark">
          <div>
            <div>
              <router-link class="logo" :to="routes.Dashboards.Default"
                ><img
                  class="img-fluid for-dark"
                  :src="`${getImages('logo/logo.png')}`"
                  alt="looginpage" /><img
                  class="img-fluid for-light"
                  :src="`${getImages('logo/logo_dark.png')}`"
                  alt="looginpage"
              /></router-link>
            </div>
            <div class="login-main">
              <LoginForm :path="routes.Auth.RegisterSimple" :storeDetails="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

import { routes } from '@/router/routes'
import { getImages } from '@/utils'

const LoginForm = defineAsyncComponent(() => import('@/module/auth/LoginForm.vue'))
</script>
