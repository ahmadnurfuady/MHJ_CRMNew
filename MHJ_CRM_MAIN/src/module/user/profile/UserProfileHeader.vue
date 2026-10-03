<template>
  <div class="col-sm-12">
    <div class="card hovercard text-center">
      <div class="cardheader"></div>
      <div class="user-image">
        <div class="avatar">
          <img alt="images" :src="getImages('user/7.jpg')" />
        </div>
        <div class="icon-wrapper">
          <i class="icofont icofont-pencil-alt-5"></i>
        </div>
      </div>
      <div class="info">
        <div class="row">
          <!-- Personal Info Section -->
          <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
            <div class="row">
              <div v-for="(item, index) in userInfo" :key="index" class="col-md-6">
                <div class="ttl-info text-start">
                  <h6><i :class="'fa-brands' + item.icon"></i> {{ item.label }}</h6>
                  <span>{{ item.value }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
            <div class="user-designation">
              <div class="title">
                <a href="#">William C. Jennings </a>
              </div>
              <div class="desc">designer</div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
            <div class="row">
              <div v-for="(item, index) in contactInfo" :key="index" class="col-md-6">
                <div class="ttl-info text-start">
                  <h6><i :class="item.icon"></i> {{ item.label }}</h6>
                  <span>{{ item.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="social-media">
          <ul class="list-inline">
            <li
              v-for="(item, index) in socialLinks"
              :key="index"
              class="list-inline-item"
            >
              <a :href="item.url" target="_blank"><i :class="'' + item.icon"></i> </a>
            </li>
          </ul>
        </div>
        <div class="follow">
          <div class="row">
            <div class="col-6 text-md-end border-right">
              <div class="follow-num counter" id="count4">
                <number
                  class="counter follow-num"
                  ref="number"
                  :from="0"
                  :to="25869"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut"
                />
              </div>
              <span>Follower</span>
            </div>
            <div class="col-6 text-md-start">
              <div class="follow-num counter" id="count5">
                <number
                  class="counter follow-num"
                  ref="number"
                  :from="0"
                  :to="659887"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut"
                />
              </div>
              <span>Following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { userInfo, socialLinks, contactInfo } from "@/core/data/user";
import { getImages } from "@/utils/index";
</script>
