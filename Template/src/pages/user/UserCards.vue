<template>
  <div class="container-fluid social-user-cards">
    <div class="row">
      <div
        class="col-xl-4 col-sm-6 col-xxl-3 col-ed-4 box-col-4"
        v-for="(user, index) in users"
        :key="index"
      >
        <Card :cardClass="'social-profile'">
          <div class="social-img-wrap">
            <div class="social-img">
              <img :src="getImages(user.userProfile)" :alt="user.name" />
            </div>
            <div class="edit-icon">
              <SvgIcon :icon="'profile-check'"></SvgIcon>
            </div>
          </div>
          <div class="social-details">
            <h5 class="mb-1">
              <router-link :to="{ name: 'user-profile', params: { id: user.id } }">{{
                user.name
              }}</router-link>
            </h5>
            <span class="c-o-light">@{{ user.userName }}</span>
            <ul class="card-social">
              <li>
                <a href="https://www.facebook.com/" target="_blank"
                  ><i class="fa-brands fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="https://myaccount.google.com/" target="_blank"
                  ><i class="fa-brands fa-google-plus-g"></i
                ></a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank"
                  ><i class="fa-brands fa-x-twitter"></i
                ></a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="https://rss.app/" target="_blank"><i class="fa-solid fa-rss"></i></a>
              </li>
            </ul>
            <ul class="social-follow">
              <li>
                <h5 class="mb-0">{{ user.post }}</h5>
                <span class="c-o-light">Posts</span>
              </li>
              <li>
                <h5 class="mb-0">{{ user.followers }}</h5>
                <span class="c-o-light">Followers</span>
              </li>
              <li>
                <h5 class="mb-0">{{ user.following }}</h5>
                <span class="c-o-light">Following</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { users } from '@/core/data/user'
import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
