<template>
  <div class="details-bookmark text-center" :class="{ 'list-bookmark': bookmarkState.isListView }">
    <div class="row" id="bookmarkData">
      <template v-if="getFilteredBookmark.length">
        <div
          class="col-xxl-3 col-md-4 col-ed-4 col-sm-6"
          v-for="bookmark in getFilteredBookmark"
          :key="bookmark.id"
        >
          <div class="card card-with-border bookmark-card o-hidden">
            <div class="details-website">
              <img class="img-fluid" :src="getImages(bookmark.image)" :alt="bookmark.title" />
              <div
                class="favourite-icon favourite_0"
                :class="{ favourite: bookmark.isFavorite }"
                @click="favoriteBookmark(bookmark)"
              >
                <a href="#">
                  <i class="fa-solid fa-star"></i>
                </a>
              </div>
              <div class="desciption-data">
                <div class="title-bookmark">
                  <h6 class="title_0">{{ bookmark.title }}</h6>
                  <p class="weburl_0">{{ bookmark.url }}</p>
                  <div class="hover-block">
                    <ul>
                      <li>
                        <a href="#" @click.prevent="editBookmark(bookmark)">
                          <vue-feather :type="'edit-2'" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <vue-feather :type="'link'" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <vue-feather :type="'share-2'" />
                        </a>
                      </li>
                      <li>
                        <a href="#" @click.prevent="deleteBookmark(bookmark)">
                          <vue-feather :type="'trash-2'" />
                        </a>
                      </li>
                      <li class="pull-right text-end">
                        <a href="#">
                          <vue-feather :type="'tag'" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="content-general">
                    <p class="desc_0">{{ bookmark.description }}</p>
                    <span class="collection_0" v-if="bookmark.collection">{{
                      bookmark.collection
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="details-bookmark text-center">
          <span>No Bookmarks Found.</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { getImages } from '@/utils/index'
import { useBookmark } from '@/store/bookmark'
import type { Bookmark } from '@/types/bookmark'

const bookmarkStore = useBookmark()
const { bookmarkState, getFilteredBookmark } = storeToRefs(bookmarkStore)
const { favoriteBookmark, deleteBookmark, editBookmarkModal } = bookmarkStore

function editBookmark(bookmark: Bookmark) {
  bookmarkState.value.isBookmarkModalOpen = true
  editBookmarkModal(bookmark)
}
</script>
