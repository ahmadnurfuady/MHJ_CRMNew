<template>
  <section class="comment-box pb-0" v-if="props.comments">
    <h5>Comment</h5>
    <hr />
    <ul>
      <template v-for="comment in comments" :key="comment.id">
        <li :class="comment.reply ? 'is-reply' : 'is-sent'">
          <div :class="`media d-flex ${comment.comments == 598 ? 'align-self-center' : ''}`">
            <img
              class="align-self-center"
              :src="getImages(comment.image)"
              alt="Generic placeholder image"
            />
            <div class="flex-grow-1">
              <div class="row">
                <div class="col-md-4 xl-100">
                  <h6 class="mt-0">
                    {{ comment.name }}
                    <span> ({{ comment.designation }}) </span>
                  </h6>
                </div>
                <div class="col-md-8 xl-100" v-if="!comment.reply">
                  <ul class="comment-social float-start float-md-end learning-comment">
                    <li>
                      <i class="icofont icofont-thumbs-up"></i>
                      {{ comment.hits }} Hits
                    </li>
                    <li>
                      <i class="icofont icofont-ui-chat"></i>
                      {{ comment.comments }} Comments
                    </li>
                  </ul>
                </div>
              </div>
              <p>{{ comment.description }}</p>
            </div>
          </div>
        </li>
      </template>
      <li class="cmt-box p-0">
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
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Comments } from '@/types/blog'
import { getImages } from '@/utils/index'

const props = defineProps<{
  comments: Comments[]
}>()
</script>
