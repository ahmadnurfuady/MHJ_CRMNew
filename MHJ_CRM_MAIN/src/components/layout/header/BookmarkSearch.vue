<template>
  <div ref="dropdownRef" class="bookmark-wrapper">
    <a href="#" @click.prevent="openTab">
      <SvgIcon icon="star" />
    </a>
    <div class="onhover-show-div bookmark-flip" :class="{ active: state.show }">
      <div class="flip-card">
        <div class="flip-card-inner" :class="{ flipped: state.bookmarkSearchBox }">
          <div class="front">
            <h6 class="f-18 mb-0 dropdown-title">Bookmark</h6>
            <ul class="bookmark-dropdown">
              <li class="pt-0 px-0 custom-scrollbar">
                <div class="row">
                  <div
                    class="col-4 text-center"
                    v-for="(menuItem, index) in state.bookmarkItems.slice(0, 8)"
                    :key="index"
                  >
                    <div class="bookmark-content">
                      <div class="bookmark-icon">
                        <SvgIcon :icon="menuItem.icon || menuItem.iconForDisplay" type="stroke" />
                      </div>
                      <span>{{ menuItem.title }}</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="text-center">
                <a
                  class="flip-btn f-w-700 btn btn-primary w-100 text-white"
                  href="#"
                  @click.prevent="openBookmark"
                >
                  Add New Bookmark
                </a>
              </li>
            </ul>
          </div>
          <div class="back">
            <ul>
              <li>
                <div class="flip-back-content">
                  <input
                    type="text"
                    placeholder="Search..."
                    v-model="state.terms"
                    @keyup="searchTerms"
                  />
                  <div
                    class="bookmark-search custom-scrollbar shadow-none px-2 py-0"
                    :class="{
                      'Typeahead-menu is-open custom-scrollar': !state.bookmarkSearchResultEmpty,
                      'Typeahead-menu': state.bookmarkSearchResultEmpty,
                    }"
                    v-if="searchMenuItems.length"
                  >
                    <div
                      class="ProfileCard u-cf"
                      v-for="(menuItem, index) in searchMenuItems.slice(0, 8)"
                      :key="index"
                    >
                      <div class="ProfileCard-avatar header-search">
                        <SvgIcon
                          :icon="menuItem.iconForDisplay"
                          type="stroke"
                          svgClass="svg-color stroke-primary"
                        />
                      </div>
                      <div class="ProfileCard-details">
                        <div class="ProfileCard-realName">
                          <router-link :to="{ path: menuItem.path }" class="realname">
                            {{ menuItem.title }}
                          </router-link>
                          <span class="pull-right">
                            <a href="#" @click.prevent="addToBookmark(menuItem)">
                              <i
                                class="fa-regular fa-star"
                                :class="{
                                  'text-warning': isBookmarked(menuItem),
                                }"
                              ></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    :class="{
                      'Typeahead-menu custom-scrollbar is-open': state.bookmarkSearchResultEmpty,
                      'Typeahead-menu custom-scrollbar filled-bookmark':
                        !state.bookmarkSearchResultEmpty,
                    }"
                  >
                    <div class="tt-dataset tt-dataset-0">
                      <div class="EmptyMessage">
                        Your search turned up 0 results. Oops! No results found.
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li @click="openBookmark">
                <a class="flip-back btn btn-primary w-100" href="#"> Back </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { defineAsyncComponent } from 'vue'
import { useBookmark } from '@/composable/useBookmark'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const dropdownRef = ref<HTMLElement | null>(null)

const { state, searchMenuItems, isBookmarked, openTab, openBookmark, searchTerms, addToBookmark } =
  useBookmark()

onClickOutside(dropdownRef, () => {
  state.show = false
  state.bookmarkSearchBox = false
})
</script>
