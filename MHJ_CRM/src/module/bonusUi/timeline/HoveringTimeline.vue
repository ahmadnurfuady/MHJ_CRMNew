<template>
  <Card
    :headerTitle="'Hovering Timeline '"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> square-timeline </code> main class to create new variations of the timeline.
      </p>
    </template>
    <ul class="square-timeline">
      <li class="timeline-event" v-for="details in hoveringTimeline" :key="details.id">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-wrapper">
          <p class="timeline-thumbnail">{{ details.event }}</p>
          <h5>{{ details.title }}</h5>
          <div class="f-light">
            {{ details.text }}
            <div class="list-group main-lists-content" v-if="details.list">
              <a
                class="list-group-item list-group-item-action border-0 p-0 mb-4"
                href="#"
              >
                <div class="d-flex w-100 justify-content-between align-items-center">
                  <div class="list-wrapper">
                    <img class="list-img me-0" :src="getImages('user/1.jpg')" alt="profile" />
                    <div class="list-content">
                      <h6>Molly Boake</h6>
                      <p>MollyBoake&#64;rhyta.com</p>
                    </div>
                  </div>
                  <div class="timeline-icon">
                    <i class="icon-facebook"></i>
                    <i class="icon-google"> </i>
                    <i class="icon-twitter-alt"></i>
                  </div>
                </div>
                <p class="mb-1">Next step is to choose a tone of voice for your content type.</p>
              </a>
            </div>
            <div class="designer-details" v-if="details.profile">
              <div class="designer-profile" v-for="profile in details.profile" :key="profile.id">
                <div class="designer-wrap">
                  <img class="designer-img" :src="getImages(profile.image)" alt="profile" />
                  <div class="designer-content">
                    <h6>{{ profile.name }}</h6>
                    <p>{{ profile.contactNumber }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="pt-3 mb-4" v-if="details.description">{{ details.description }}</p>
        </div>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { hoveringTimeline } from '@/core/data/bonusUI/timeline'
import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
