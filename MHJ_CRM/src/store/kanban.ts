import { ref } from 'vue'

import { defineStore } from 'pinia'

import {
  apiBoardsCards,
  customBoardCards,
  defaultBoard,
  defaultDemoCards,
  element,
  generateRandomNumber,
  generateRandomUsers,
  taskPriority,
  users,
} from '@/core/data/kanban'
import type { DefaultDemo } from '@/types/kanban'

export const useKanban = defineStore('kanban', () => {
  const demoCards = ref<DefaultDemo[]>(defaultDemoCards)
  const customCards = ref<DefaultDemo[]>(customBoardCards)
  const apiBoard = ref<DefaultDemo[]>(apiBoardsCards)
  function getBadgeClass(priority: string) {
    if (priority === 'Low') return 'success'
    if (priority === 'Medium') return 'primary'
    if (priority === 'Urgent') return 'danger'
    return 'secondary'
  }

  function generateRandomUser() {
    const randomIndex = Math.floor(Math.random() * users.length)
    return users[randomIndex]
  }

  function randomTaskPriority() {
    const randomIndex = Math.floor(Math.random() * taskPriority.length)
    return taskPriority[randomIndex]
  }

  function newCard(boards: DefaultDemo) {
    boards.addCard = true
  }

  function addCard(boards: DefaultDemo) {
    const user = generateRandomUser()
    const newCard = {
      id: Math.floor(Math.random() * 10000),
      title: boards.newCardTitle || '',
      userName: user.name,
      userProfile: user.profile || '',
      date: new Date().toLocaleDateString(),
      taskPriority: randomTaskPriority(),
      comments: generateRandomNumber(),
      attachment: generateRandomNumber(),
      members: generateRandomUsers(),
    }
    boards.cards.push(newCard)
    boards.newCardTitle = ''
    cancel(boards)
  }

  function cancel(boards: DefaultDemo) {
    boards.addCard = false
    boards.newCardTitle = ''
  }

  function addDefaultBoard() {
    const newBoard = structuredClone(defaultBoard) // deep clone
    apiBoard.value.push(newBoard)
  }

  function addInReview(index?: number) {
    const board = apiBoard.value.find((card) => card.title == 'In Review')

    if (board) {
      const newElement = structuredClone(element) // deep clone

      if (index) {
        board.cards.splice(1, 0, newElement)
      } else {
        board.cards.push(newElement)
      }
    }
  }

  function removeProgressBoard() {
    const board = apiBoard.value.find((card) => card.title == 'In Progress')

    if (board) {
      apiBoard.value.splice(apiBoard.value.indexOf(board), 1)
    }
  }

  function removeReviewElement() {
    const board = apiBoard.value.find((card) => card.title == 'In Review')

    if (board && board.cards.length) {
      board.cards.pop()
    }
  }

  return {
    demoCards,
    customCards,
    apiBoard,

    getBadgeClass,
    newCard,
    addCard,
    cancel,
    addDefaultBoard,
    addInReview,
    removeProgressBoard,
    removeReviewElement,
  }
})
