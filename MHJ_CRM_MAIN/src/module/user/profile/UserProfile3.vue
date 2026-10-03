<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="profile-img-style">
        <div class="row">
          <div class="col-sm-8">
            <div class="d-flex">
              <img
                class="img-thumbnail rounded-circle me-3"
                :src="getImages('user/7.jpg')"
                alt="Generic placeholder image"
              />
              <div class="flex-grow-1 align-self-center">
                <h5 class="mt-0 user-name">William C. Jennings</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-4 align-self-center">
            <div
              class="social-media social-tour"
              data-intro="This is your social details"
              v-if="tour"
            >
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/" target="_blank"
                    ><i class="fa-brands fa-facebook-f"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://accounts.google.com/" target="_blank"
                    ><i class="fa-brands fa-google-plus-g"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://twitter.com/" target="_blank"
                    ><i class="fa-brands fa-twitter"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.instagram.com/" target="_blank"
                    ><i class="fa-brands fa-instagram"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://rss.app/" target="_blank"><i class="fa fa-rss"></i></a>
                </li>
              </ul>
              <div class="float-sm-end"><small>3 min ago</small></div>
            </div>
          </div>
        </div>
        <hr />
        <p>
          Comfort is very important to me. I think people live better in big houses and in big
          clothes. Design and style should work toward making you look good and feel good without a
          lot of effort so you can get on with the things that matter. My shows are about the
          complete woman who swallows it all. Its a question of survival. Those fashion designers
          are just crazy; but arent we all? You can only go forward by making mistakes.
        </p>
        <div class="like-comment mt-4">
          <ul class="list-inline">
            <li class="list-inline-item border-right pe-3">
              <label class="m-0"
                ><a><i class="fa fa-heart"></i></a>  Like</label
              >
              <span class="ms-2 counter" id="count8">
                <number
                  class="counter follow-num"
                  ref="number"
                  :from="0"
                  :to="2659"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut"
                />
              </span>
            </li>
            <li class="list-inline-item ms-2">
              <label class="m-0"
                ><a><i class="fa fa-comment"></i></a>  Comment</label
              >
              <span class="ms-2 counter" id="count9">
                <number
                  class="counter follow-num"
                  ref="number"
                  :from="0"
                  :to="569"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
const props = defineProps<{
  tour?: boolean
}>()
</script>
