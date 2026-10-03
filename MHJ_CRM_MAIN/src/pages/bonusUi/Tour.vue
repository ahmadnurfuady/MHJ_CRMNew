<template>
  <div class="container-fluid">
    <div class="user-profile">
      <div class="row">
        <div class="col-sm-12">
          <div class="card hovercard text-center">
            <div class="cardheader"></div>
            <div class="user-image">
              <div class="avatar">
                <img
                  class="img-thumbnail rounded-circle me-3"
                  :src="getImages('user/7.jpg')"
                  id="profiletour"
                  data-intro="This is Riho profile"
                />
              </div>
              <div class="icon-wrapper">
                <i
                  class="icofont icofont-pencil-alt-5"
                  id="update-profile-tour"
                  data-intro="Change Riho profile image here"
                ></i>
              </div>
            </div>
            <div class="info">
              <div class="row g-3" data-intro="This is your profile details">
                <div class="col-sm-6 col-xl-4 order-sm-1 order-xl-0">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="text-start tour-email">
                        <h6 class="tour-mb-space"><i class="fa fa-envelope"></i>   Email</h6>
                        <span>William@jourrapide.com</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="text-start ttl-sm-mb-0 tour-email">
                        <h6 class="tour-mb-space"><i class="fa fa-calendar"></i>   BOD</h6>
                        <span>02 January 1988</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-xl-4 order-sm-0 order-xl-1">
                  <div class="user-designation tour-email">
                    <div class="title">
                      <a target="_blank">William C. Jennings</a>
                    </div>
                    <div class="desc mt-2">Web Designer</div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4 order-sm-2 order-xl-2">
                  <div class="row g-3">
                    <div class="col-md-6 mt-0 mt-sm-3">
                      <div class="text-start ttl-xs-mt tour-email">
                        <h6 class="tour-mb-space"><i class="fa fa-phone"></i>   Contact Us</h6>
                        <span>US 310-273-0666</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="text-start ttl-sm-mb-0 tour-email">
                        <h6 class="tour-mb-space">
                          <i class="fa fa-location-arrow"></i>   Location
                        </h6>
                        <span>4377 Libby Street Beverly Hills</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div
                class="social-media"
                id="social-bar-tour"
                data-intro="This is your social details"
              >
                <ul class="list-inline">
                  <li v-for="(item, index) in socialLinks" :key="index" class="list-inline-item">
                    <a :href="item.url" target="_blank"><i :class="item.icon"></i> </a>
                  </li>
                </ul>
              </div>
              <div class="follow">
                <div class="row">
                  <div class="col-6">
                    <div class="follow-num counter">25.8K</div>
                    <span>Follower</span>
                  </div>
                  <div class="col-6">
                    <div class="follow-num counter">65.2M</div>
                    <span>Following</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProfilePost :tour="true" />
        <ProfilePost2 :tour="true" />
        <ProfilePost3 :tour="true" />
        <ProfilePost4 :tour="true" />
        <VOnboardingWrapper ref="wrapper" :steps="steps" class="tour-visit" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding'
import { getImages } from '@/utils/index'
import { socialLinks } from '@/core/data/user'

const ProfilePost = defineAsyncComponent(() => import('@/module/user/profile/UserProfile1.vue'))
const ProfilePost2 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile2.vue'))
const ProfilePost3 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile3.vue'))
const ProfilePost4 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile4.vue'))

const wrapper = ref()
const { start } = useVOnboarding(wrapper)

const steps = [
  {
    attachTo: { element: '#profiletour' },
    content: { title: 'This is Riho profile' },
  },
  {
    attachTo: { element: '#update-profile-tour' },
    content: { title: 'Change Riho profile image here' },
  },
  {
    attachTo: { element: '#info-bar-tour' },
    content: { title: 'This is your profile details' },
  },
  {
    attachTo: { element: '#social-bar-tour' },
    content: { title: 'This is your social details' },
  },
  {
    attachTo: { element: '#first-post-tour' },
    content: { title: 'This is the your first Post' },
  },
  {
    attachTo: { element: '#social-bar-tour2' },
    content: { title: 'This is your social details' },
  },
  {
    attachTo: { element: '#social-bar-tour3' },
    content: { title: 'This is your social details' },
  },
  {
    attachTo: { element: '#social-bar-tour4' },
    content: { title: 'This is your social details' },
  },
  {
    attachTo: { element: '#social-bar-tour5' },
    content: { title: 'This is your social details' },
  },
]

onMounted(() => {
  start()
})
</script>
