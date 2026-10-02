<template>
  <template v-if="getFilteredEmails.length">
    <template v-for="(email, index) in getFilteredEmails" :key="index">
      <li class="inbox-data project">
        <div class="inbox-user">
          <div class="form-check form-check-inline m-0">
            <input
              class="form-check-input checkbox-primary"
              id="emailCheckbox1"
              type="checkbox"
              value="option1"
            />
            <label class="form-check-label" for="emailCheckbox1"></label>
          </div>
          <SvgIcon
            :icon="'fill-star'"
            :class="'important-mail ' + (email.isFavorite ? 'active' : '')"
            @click="addToFavorite(email)"
          ></SvgIcon>
          <template v-if="mailState.activeTab == 'sent'"> To: </template>
          <div class="rounded-border">
            <template v-if="email.userProfile">
              <img class="img-fluid" :src="getImages(email.userProfile)" :alt="email.userName" />
            </template>
            <template v-else>
              <div :class="`circle-${getTextColor(getUserText(email.userName))}`">
                <p :class="`txt-${getTextColor(getUserText(email.userName))}`">
                  {{ getUserText(email.userName) }}
                </p>
              </div>
            </template>
          </div>
          <p>{{ email.userName }}</p>
        </div>
        <div class="inbox-message">
          <div class="email-data" @click="openEmail(email)">
            <span
              >{{ email.emailTitle }}
              <span>{{ email.description }}</span>
            </span>
            <div class="badge badge-light-light" v-if="email.tag">
              {{ email.tag }}
            </div>
          </div>
          <div class="email-timing">
            <span>{{ email.time }}</span>
          </div>
          <div class="email-options">
            <i
              class="fa-regular"
              :class="email.isRead ? 'fa-envelope-open envelope-2' : 'fa-envelope envelope-1'"
              @click="email.isRead = !email.isRead"
            ></i>
            <i class="fa-regular fa-trash-can trash-3" @click="deleteMail(email)"></i>
          </div>
        </div>
      </li>
    </template>
  </template>
  <template v-else>
    <li class="empty-box">
      No {{ mailState.activeTab }} mails are there in {{ mailState.emailType }}.
    </li>
  </template>
</template>

<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useMailBox } from '@/store/mailBox'
import { getTextColor, getUserText, getImages } from '@/utils/index'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const emailStore = useMailBox()
const { mailState, getFilteredEmails } = storeToRefs(emailStore)
const { addToFavorite, openEmail, deleteMail, getTotalEmails } = emailStore

onMounted(() => {
  getTotalEmails()
})
</script>
