<template>
  <Card
    :cardType="'classic'"
    :headerTitle="'Comments'"
    :sortDescription="'Total 120 Comments'"
    :cardBodyClass="'pt-0'"
    :buttonText="'View All'"
    :path="routes.Courses.CourseDetails"
  >
    <ul class="user-comment-wrapper">
      <li
        class="common-align gap-2 align-items-start"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <div class="flex-shrink-0">
          <img class="img-fluid" :src="getImages(comment.image)" alt="user" />
        </div>
        <div class="flex-grow-1">
          <div class="common-space pb-1">
            <h6>{{ comment.name }}</h6>

            <button class="btn c-o-light" v-if="!comment.isReply">
              <SvgIcon :icon="'stroke-arrow'" type="default" :svgClass="'me-2'" />
              Reply
            </button>
          </div>
          <span class="c-o-light">{{ comment.message }}</span>
        </div>
      </li>
    </ul>

    <div class="cmt-box">
      <label class="form-label" for="exampleFormControlTextarea1">Post A Comment</label>
      <div class="common-f-start gap-1">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
          placeholder="Comment Here.."
        ></textarea>
        <i class="fa-solid fa-paper-plane"></i>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const comments = ref(projectDetails.projectSummary.comments)
</script>
