<template>
  <div class="row social-friends">
    <div
      class="col-xl-4 col-md-6 col-xxl-3 col-ed-4 box-col-4"
      v-for="(friend, index) in userCard"
      :key="index"
    >
      <Card :cardClass="'social-profile'">
        <div class="common-social-box">
          <div>
            <div class="social-img-wrap">
              <div class="social-img">
                <img :src="getImages(friend.image)" :alt="friend.name" />
              </div>
              <div class="edit-icon">
                <SvgIcon :icon="'profile-check'" type="default"></SvgIcon>
              </div>
            </div>
          </div>
          <div>
            <h5>
              <router-link href="#" :to="routes.App.SocialApps">{{
                friend.name
              }}</router-link>
            </h5>
            <span class="c-o-light">{{ friend.name }}</span>
          </div>
        </div>
        <div class="social-details">
          <ul class="social-follow">
            <li>
              <h5 class="mb-0 counter">{{ friend.post }}</h5>
              <span class="c-o-light">Posts</span>
            </li>
            <li>
              <h5 class="mb-0">{{ friend.follower }}</h5>
              <span class="c-o-light">Followers</span>
            </li>
            <li>
              <h5 class="mb-0 counter">{{ friend.following }}</h5>
              <span class="c-o-light">Following</span>
            </li>
          </ul>
          <ul class="card-social">
            <li>
              <a href="https://www.facebook.com/" target="_blank"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="https://accounts.google.com/" target="_blank"
                ><i class="fa-brands fa-linkedin-in"></i
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
              <a href="https://youtube.com/" target="_blank"
                ><i class="fa-brands fa-youtube"></i
              ></a>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { userCard } from '@/core/data/user'
import { routes } from '@/router/routes'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
