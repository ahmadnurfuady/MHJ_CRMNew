<template>
  <template v-if="mailState.currentMailDetails">
    <div class="mail-header-wrapper header-wrapper1">
      <div class="mail-header1">
        <div class="light-square" @click="goPrevious()">
          <SvgIcon :icon="'back-arrow'" type="default" :svgClass="'btn-email'"></SvgIcon>
        </div>
        <span>{{
          mailState.currentMailDetails && mailState.currentMailDetails.emailTitle
            ? mailState.currentMailDetails.emailTitle
            : 'No Subject'
        }}</span>
      </div>
      <div class="mail-body1">
        <div class="light-square" v-tooltip title="Achieve">
          <SvgIcon :icon="'sms'" type="default"></SvgIcon>
        </div>
        <div class="light-square" v-tooltip title="Bookmark">
          <SvgIcon :icon="'bookmark'" type="default" :svgClass="'bookmark-box'"></SvgIcon>
        </div>
        <div class="light-square" v-tooltip title="Spam">
          <SvgIcon :icon="'spam'" type="default"></SvgIcon>
        </div>
        <div class="light-square bg-light-danger" v-tooltip title="Trash">
          <SvgIcon :icon="'mail-trash'" type="default" :svgClass="'stroke-danger'"></SvgIcon>
        </div>
        <div class="light-square" v-tooltip title="Settings">
          <SvgIcon :icon="'setting'" type="default"></SvgIcon>
        </div>
      </div>
    </div>
    <div class="mail-body-wrapper" id="DivIdToPrint">
      <div class="user-mail-wrapper">
        <div class="user-title">
          <div>
            <div class="rounded-border">
              <template v-if="mailState.currentMailDetails.userProfile">
                <img
                  class="img-fluid"
                  :src="getImages(mailState.currentMailDetails.userProfile)"
                  :alt="mailState.currentMailDetails.userName"
                />
              </template>
              <template v-else>
                <div
                  :class="`circle-${getTextColor(
                    getUserText(mailState.currentMailDetails.userName)
                  )}`"
                >
                  <p
                    :class="`txt-${getTextColor(
                      getUserText(mailState.currentMailDetails.userName)
                    )}`"
                  >
                    {{ getUserText(mailState.currentMailDetails.userName) }}
                  </p>
                </div>
              </template>
            </div>
            <div class="dropdown-subtitle">
              <p>{{ mailState.currentMailDetails.userName }}</p>
              <div class="onhover-dropdown">
                <button class="btn p-0 dropdown-button">
                  To me
                  <vue-feather :type="'chevron-down'"></vue-feather>
                </button>
                <div class="inbox-security onhover-show-div">
                  <p>
                    From: <span>{{ mailState.currentMailDetails.email }}</span>
                  </p>
                  <p>to: <span>Me</span></p>
                  <p>
                    reply-to:<span>{{ mailState.currentMailDetails.email }}</span>
                  </p>
                  <p>
                    date: <span>{{ mailState.currentMailDetails.time }}</span>
                  </p>
                  <p>
                    subject: <span>{{ mailState.currentMailDetails.emailTitle }}</span>
                  </p>
                  <p>security: <span>standard encryption (TLS)</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="inbox-options">
            <span>
              <template v-if="mailState.currentMailDetails.date">
                {{ mailState.currentMailDetails.date }} ({{ mailState.currentMailDetails.time }})
              </template>
              <template v-else>
                {{ mailState.currentMailDetails.time }}
              </template>
            </span>
            <div class="light-square" @click="addToFavorite(mailState.currentMailDetails)">
              <SvgIcon
                :icon="'fill-star'"
                :class="
                  'important-mail ' + (mailState.currentMailDetails.isFavorite ? 'active' : '')
                "
              ></SvgIcon>
            </div>
            <button type="button" class="light-square" @click="print()">
              <SvgIcon :icon="'print'"></SvgIcon>
            </button>
            <div class="light-square btn-group">
              <div
                class="dropdown-toggle"
                role="main"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <SvgIcon :icon="'menubar'"></SvgIcon>
              </div>
              <div class="dropdown-menu dropdown-block">
                <a class="dropdown-item" href="#"
                  ><i class="fa fa-mail-reply"></i>Reply</a
                ><a class="dropdown-item" href="#">
                  <i class="fa fa-mail-forward"></i>Forward</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="user-body">
          <p>Dear Customer,</p>
          <p>{{ mailState.currentMailDetails.description }}</p>
          <div class="mail-subcontent">
            <p>Yours faithfully,</p>
            <p>Account Security Team</p>
          </div>
        </div>
        <div class="user-footer">
          <div>
            <SvgIcon :icon="'attchment'"></SvgIcon>
            <span class="f-light">Attachments</span>
          </div>
          <div class="d-inline-block">
            <div class="attachment-file common-flex">
              <div class="common-flex align-items-center">
                <img :src="`${getImages('email-template/pdfs.png')}`" alt="pdf" />
                <div class="d-block">
                  <p>Offer_Letter.pdf</p>
                  <p>200KB</p>
                </div>
              </div>
              <a href="#">
                <i class="fa fa-download f-light"></i>
              </a>
            </div>
          </div>
          <div class="toolbar-box">
            <ckeditor v-if="editor" :editor="editor"> </ckeditor>
          </div>
        </div>
        <div class="send-btn">
          <button class="btn btn-primary">
            Send
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useMailBox } from '@/store/mailBox'
import { getTextColor, getUserText, getImages } from '@/utils/index'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const emailStore = useMailBox()
const { mailState } = storeToRefs(emailStore)
const { addToFavorite } = emailStore

const editor = ref()

onMounted(async () => {
  const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
  editor.value = ClassicEditor
})

function goPrevious() {
  mailState.value.isOpenMail = false
}

function print() {
  window.print()
}
</script>
