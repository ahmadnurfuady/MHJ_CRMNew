<template>
  <div class="container-fluid">
    <div class="email-wrap bookmark-wrap">
      <div class="row main-bookmark">
        <div class="col-xxl-3 box-col-6">
          <BookmarkSidebar />
        </div>
        <div class="col-xxl-9 col-md-12 box-col-12">
          <div class="email-right-aside bookmark-tabcontent">
            <div class="card email-body radius-left">
              <div class="ps-0">
                <div class="tab-content">
                  <div class="tab-pane fade active show">
                    <div class="card mb-0">
                      <div class="card-header d-flex">
                        <h4 class="mb-0 f-w-600">
                          {{ bookmarkState.activeTab ? bookmarkState.activeTab.title : '' }}
                        </h4>

                        <ul>
                          <li>
                            <a
                              class="grid-bookmark-view"
                              href="#"
                              @click.prevent="toggleListView(false)"
                            >
                              <vue-feather :type="'grid'" />
                            </a>
                          </li>
                          <li>
                            <a
                              class="list-layout-view"
                              href="#"
                              @click.prevent="toggleListView(true)"
                            >
                              <vue-feather :type="'list'" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="card-body pb-0">
                        <BookmarkDetails />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <BookmarkModal
    :modalOpen="bookmarkState.isBookmarkModalOpen"
    @closeModal="closeModal()"
    :modalTitle="'Edit Bookmark'"
    v-if="bookmarkState.isBookmarkModalOpen"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useBookmark } from '@/store/bookmark'

const BookmarkSidebar = defineAsyncComponent(() => import('@/module/bookmark/BookmarkSidebar.vue'))
const BookmarkModal = defineAsyncComponent(() => import('@/module/bookmark/BookmarkModal.vue'))
const BookmarkDetails = defineAsyncComponent(() => import('@/module/bookmark/BookmarkDetails.vue'))
const bookmarkStore = useBookmark()
const { bookmarkState } = storeToRefs(bookmarkStore)
const { toggleListView } = bookmarkStore

function closeModal() {
  bookmarkState.value.isBookmarkModalOpen = false
}
</script>
