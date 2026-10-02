<template>
  <div class="default-according style-1 faq-accordion job-accordion" id="accordionRightPanel">
    <div class="row">
      <template v-for="(accordionItem, index) in socialAppRightPanelAccordion" :key="index">
        <div :class="accordionItem.class">
          <div class="card">
            <div class="card-header" :id="`right-panel-heading-${index + 1}`">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse-right-panel-${index + 1}`"
                  aria-expanded="true"
                  :aria-controls="`collapse-right-panel-${index + 1}`"
                >
                  {{ accordionItem.title }}
                </button>
              </h5>
            </div>
            <div
              class="collapse show"
              :id="`collapse-right-panel-${index + 1}`"
              :aria-labelledby="`right-panel-heading-${index + 1}`"
              data-bs-parent="#accordionRightPanel"
            >
              <template v-if="accordionItem.value == 'profile_intro'">
                <div class="card-body filter-cards-view">
                  <div v-html="myProfile.introduction"></div>
                  <div class="social-network theme-form">
                    <span class="f-w-600">Social Networks</span>
                    <div class="d-flex">
                      <template v-for="(platform, index) in myProfile.socialNetworks" :key="index">
                        <button
                          :class="`btn social-btn btn-${platform.platformClass} text-center`"
                          v-tooltip
                          :title="platform.platformName"
                        >
                          <i :class="platform.icon + ' ' + 'm-r-5'"></i>
                        </button>
                      </template>
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="accordionItem.value == 'followers'">
                <div class="card-body social-list filter-cards-view">
                  <template v-for="(friend, index) in friends" :key="index">
                    <div class="d-flex" v-if="!friend.isFollower">
                      <img
                        class="img-50 img-fluid m-r-20 rounded-circle"
                        :alt="friend.name"
                        :src="getImages(friend.profile)"
                      />
                      <div class="flex-grow-1">
                        <span class="d-block">{{ friend.name }}</span>
                        <a href="#">Add Friend</a>
                      </div>
                    </div>
                  </template>
                </div>
              </template>
              <template v-if="accordionItem.value == 'followings'">
                <div class="card-body social-list filter-cards-view">
                  <template v-for="(friend, index) in friends" :key="index">
                    <div class="d-flex" v-if="!friend.isFollowing">
                      <img
                        class="img-50 img-fluid m-r-20 rounded-circle"
                        :alt="friend.name"
                        :src="getImages(friend.profile)"
                      />
                      <div class="flex-grow-1">
                        <span class="d-block">{{ friend.name }}</span>
                        <a href="#">Add Friend</a>
                      </div>
                    </div>
                  </template>
                </div>
              </template>
              <template v-if="accordionItem.value == 'latest_photos'">
                <div class="card-body photos filter-cards-view">
                  <ul>
                    <li v-for="(photos, index) in myProfile.latestPhotos" :key="index">
                      <img class="img-fluid" alt="post" :src="getImages(photos.image)" />
                    </li>
                  </ul>
                </div>
              </template>
              <template v-if="accordionItem.value == 'friends'">
                <div class="card-body avatar-showcase filter-cards-view">
                  <div
                    class="d-inline-block friend-pic"
                    v-for="(friend, index) in friends"
                    :key="index"
                  >
                    <img
                      class="img-50 rounded-circle"
                      :src="getImages(friend.profile)"
                      :alt="friend.name"
                    />
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </template>
      <div class="col-xl-12 xl-50 box-col-6 order-xxl-ii col-lg-6">
        <div class="card">
          <img class="img-fluid" :src="`${getImages('social-app/timeline-4.png')}`" alt="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { friends, myProfile, socialAppRightPanelAccordion } from '@/core/data/socialApp'
import { getImages } from '@/utils/index'
</script>
