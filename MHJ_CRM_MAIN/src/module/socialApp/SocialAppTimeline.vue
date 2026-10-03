<template>
  <div class="row">
    <div class="col-xl-3 xl-40 col-lg-6 col-md-5 box-col-4">
      <SocialAppLeftPanel />
    </div>
    <div class="col-xl-6 xl-60 col-lg-6 col-md-7 box-col-8e">
      <div class="row">
        <div class="col-sm-12">
          <Card v-for="(post, index) in userPost" :key="index">
            <div class="new-users-social">
              <div class="d-flex">
                <img
                  class="rounded-circle image-radius m-r-15"
                  :src="getImages(post.userProfile)"
                  :alt="post.userName"
                />
                <div class="flex-grow-1">
                  <h6>{{ post.userName }}</h6>
                  <p class="c-o-light">{{ post.postDate }}</p>
                </div>
                <span class="pull-right mt-0">
                  <vue-feather :type="'more-vertical'"></vue-feather>
                </span>
              </div>
            </div>
            <img class="img-fluid" alt="post" :src="getImages(post.postImage)" />
            <div class="timeline-content">
              <p>{{ post.description }}</p>
              <div class="like-content">
                <span>
                  <i class="fa-solid fa-heart font-danger"></i>
                </span>
                <span class="pull-right comment-number">
                  <span>{{ post.comment }}</span>
                  <span>
                    <i class="fa-solid fa-share-nodes"></i>
                  </span>
                </span>
                <span class="pull-right comment-number">
                  <span>{{ post.share }} </span>
                  <span>
                    <i class="fa-regular fa-comments"></i>
                  </span>
                </span>
              </div>
              <div class="social-chat">
                <template v-for="(comment, index) in post.comments" :key="index">
                  <div :class="comment.isReply ? 'other-msg' : 'your-msg'">
                    <div class="d-flex">
                      <img
                        class="img-50 img-fluid m-r-20 rounded-circle"
                        :alt="comment.userName"
                        :src="getImages(comment.userProfile)"
                      />
                      <div class="flex-grow-1">
                        <span class="f-w-500"
                          >{{ comment.userName }}
                          <span
                            >{{ comment.time }} ago
                            <i class="fa-solid fa-reply font-primary"></i>
                          </span>
                        </span>
                        <p>{{ comment.comment }}</p>
                      </div>
                    </div>
                  </div>
                </template>
                <div class="text-center">
                  <a href="#">More Comments</a>
                </div>
              </div>
              <div class="comments-box">
                <div class="d-flex">
                  <img
                    class="img-50 img-fluid m-r-20 rounded-circle"
                    alt="user"
                    :src="getImages('user/1.jpg')"
                  />
                  <div class="flex-grow-1">
                    <div class="input-group text-box">
                      <input
                        class="form-control input-txt-bx"
                        type="text"
                        name="message-to-send"
                        placeholder="Post your comments"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-transparent" type="button">
                          <i class="fa-regular fa-face-smile"> </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div class="col-xl-3 xl-100 box-col-12">
      <SocialAppRightPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'

import { userPost } from '@/core/data/socialApp'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SocialAppLeftPanel = defineAsyncComponent(
  () => import('@/module/socialApp/SocialAppLeftPanel.vue')
)
const SocialAppRightPanel = defineAsyncComponent(
  () => import('@/module/socialApp/SocialAppRightPanel.vue')
)
</script>
