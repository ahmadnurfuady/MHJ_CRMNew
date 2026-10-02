<template>
  <div class="md-sidebar">
    <a class="btn btn-primary md-sidebar-toggle" href="#" @click.prevent="toggleFilter()"
      >bookmark filter</a
    >
    <div class="md-sidebar-aside job-left-aside" :class="{ open: state.filterOpen }">
      <div class="email-left-aside">
        <Card :cardBodyClass="'custom-scrollbar'">
          <div class="email-app-sidebar left-bookmark">
            <div class="common-flex align-items-center">
              <div class="media-size-email">
                <img
                  class="rounded-circle"
                  :src="getImages(userDetails.userProfile)"
                  :alt="userDetails.name"
                />
              </div>
              <div class="flex-grow-1">
                <h6>{{ userDetails.name }}</h6>
                <p>{{ userDetails.userEmail }}</p>
              </div>
            </div>
            <ul class="nav main-menu custom-scrollbar" role="tablist">
              <li class="nav-item">
                <button
                  class="button-primary btn-block btn-mail w-100"
                  type="button"
                  @click="openModal()"
                >
                  <vue-feather :type="'bookmark'" :class="'me-2'" />
                  New Bookmark
                </button>
              </li>
              <li class="nav-item">
                <ul>
                  <li>
                    <span class="main-title"> Views </span>
                  </li>
                  <li v-for="item in bookmarkState.bookmarkTabsList" :key="item.id">
                    <a
                      href="#"
                      :class="{ active: item.value == bookmarkState.activeTab.value }"
                      @click.prevent="handleTab(item)"
                    >
                      <span class="title">{{ item.title }}</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <span class="main-title">
                  Tags
                  <span class="pull-right">
                    <a href="#" @click.prevent="openTagModal()">
                      <vue-feather :type="'plus-circle'" />
                    </a>
                  </span>
                </span>
              </li>
              <li v-for="tag in bookmarkState.bookmarkTagsList" :key="tag.value">
                <a href="#" @click.prevent="handleTab(tag)">
                  <span class="title">{{ tag.label }}</span></a
                >
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  </div>

  <BookmarkTagModal :modalOpen="state.isTagModalOpen" @closeModal="closeModal()" />
</template>

<script setup lang="ts">
import { reactive, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { getImages } from '@/utils/index'
import { user } from '@/core/data/user'
import { useBookmark } from '@/store/bookmark'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const BookmarkTagModal = defineAsyncComponent(
  () => import('@/module/bookmark/BookmarkTagModal.vue')
)

const bookmarkStore = useBookmark()
const { bookmarkState } = storeToRefs(bookmarkStore)
const { handleTab } = bookmarkStore

const userDetails = user
const state = reactive({
  filterOpen: false,
  isTagModalOpen: false,
})

function toggleFilter() {
  state.filterOpen = !state.filterOpen
}

function openModal() {
  bookmarkState.value.isBookmarkModalOpen = true
}

function openTagModal() {
  state.isTagModalOpen = !state.isTagModalOpen
}

function closeModal() {
  state.isTagModalOpen = false
}
</script>
