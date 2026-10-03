<template>
  <Card :headerTitle="'API'" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Add item, add board, delete board:</p>
    </template>

    <div id="demo3">
      <div class="row kanban-container d-flex gap-4">
        <template v-for="boards in apiBoard" :key="boards.title">
          <div class="col-3 kanban-board">
            <header class="kanban-board-header">
              <div class="kanban-title-board">{{ boards.title }}</div>
            </header>

            <draggable
              v-model="boards.cards"
              :group="'kanban-cards'"
              item-key="id"
              class="kanban-drag"
            >
              <template #item="{ element: card }">
                <div>
                  <div class="kanban-item">
                    <a class="kanban-box" href="#">
                      <span class="date">{{ card.date }}</span>
                      <span :class="`badge badge-${getBadgeClass(card.taskPriority)} f-right`">
                        {{ card.taskPriority }}
                      </span>
                      <img
                        class="mt-2 img-fluid"
                        :src="getImages(card.bannerImage)"
                        :alt="card.title"
                        v-if="card.bannerImage"
                      />
                      <h5>{{ card.title }}</h5>
                      <div class="common-align">
                        <template v-if="card.userProfile">
                          <img class="me-2 rounded-circle" :src="getImages(card.userProfile)" />
                        </template>
                        <template v-if="!card.userProfile">
                          <div
                            :class="`common-circle bg-lighter-${getTextColor(
                              getUserText(card.userName)
                            )}`"
                          >
                            {{ getUserText(card.userName, 'singleText') }}
                          </div>
                        </template>
                        <div class="flex-grow-1">
                          <p>{{ card.userName }}</p>
                        </div>
                      </div>
                      <div class="d-flex mt-3">
                        <ul class="list">
                          <li v-tooltip title="Comments" data-bs-placement="bottom">
                            <i class="fa-regular fa-comments"></i>{{ card.comments }}
                          </li>
                          <li v-tooltip title="Attachment" data-bs-placement="bottom">
                            <i class="fa-solid fa-paperclip"></i>{{ card.attachment }}
                          </li>
                          <li v-tooltip title="View" data-bs-placement="bottom">
                            <i class="fa-regular fa-eye"></i>
                          </li>
                        </ul>
                        <template v-if="card.members && card.members.length">
                          <GroupItem
                            :items="card.members"
                            :class="'common-f-start'"
                            :imgClass="'img-30'"
                            :showItems="3"
                          />
                        </template>
                      </div>
                    </a>
                  </div>
                </div>
              </template>
            </draggable>

            <form class="itemform not-draggable" v-if="boards.addCard">
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="2"
                  autofocus
                  v-model="boards.newCardTitle"
                ></textarea>
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-sm me-2"
                  @click.prevent="addCard(boards)"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="CancelBtn"
                  class="btn button-light-primary btn-sm"
                  @click.prevent="cancel(boards)"
                >
                  Cancel
                </button>
              </div>
            </form>

            <footer>
              <button class="btn" @click="newCard(boards)">Add New Card</button>
            </footer>
          </div>
        </template>
      </div>
    </div>

    <div class="common-f-start">
      <button class="btn btn-primary" id="addDefault" @click="addDefaultBoard()">
        Add "Default" board
      </button>
      <button class="btn btn-primary" id="addToDo" @click="addInReview()">
        Add element in "In Review" Board
      </button>
      <button class="btn btn-primary" id="addToDoAtPosition" @click="addInReview(2)">
        Add element in "In Review" Board at position 2
      </button>
      <button class="btn btn-danger" id="removeBoard" @click="removeProgressBoard()">
        Remove "In Progress" Board
      </button>
      <button class="btn btn-danger" id="removeElement" @click="removeReviewElement()">
        Remove element from "In Review" Board
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getUserText, getTextColor, getImages } from '@/utils/index'
import { storeToRefs } from 'pinia'
import { useKanban } from '@/store/kanban'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'))

const kanbanStore = useKanban()
const { apiBoard } = storeToRefs(kanbanStore)
const {
  getBadgeClass,
  addCard,
  cancel,
  newCard,
  addDefaultBoard,
  addInReview,
  removeProgressBoard,
  removeReviewElement,
} = kanbanStore
</script>

<style scoped lang="scss">
.kanban-board {
  .kanban-drag {
    padding: 20px;
  }
}
</style>
