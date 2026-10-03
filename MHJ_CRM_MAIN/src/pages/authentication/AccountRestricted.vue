<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="login-card login-dark">
          <div class="restricted-account">
            <div>
              <router-link class="logo" :to="'/'">
                <img class="img-fluid for-light" :src="getImages('logo/logo.png')" alt="logo" />
                <img class="img-fluid for-dark" :src="getImages('logo/logo_dark.png')" alt="logo" />
              </router-link>
            </div>
            <div class="login-main">
              <form class="theme-form">
                <h2>Your account login is restricted</h2>
                <p>
                  Access to your account may be restricted you may have violated our professional
                  community policies.
                </p>
                <router-link class="btn btn-primary" :to="'/'">Home Page</router-link>
                <img class="img-fluid" :src="getImages('login/4.png')" alt="restricted account" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
