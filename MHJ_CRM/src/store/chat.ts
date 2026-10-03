import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { chat, chatUser } from '@/core/data/chat'
import { ChatState, User } from '@/types/chat'

export const useChat = defineStore('chat', () => {
  const chatState = reactive<ChatState>({
    users: chatUser,
    chats: chat,
    activeUser: chatUser[0],
    searchUser: chatUser,
  })

  const messages = ref<string[]>([
    'Hi, how are you?',
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    'Sorry if my answers are not relevant. :))',
    'I feel sleepy! :(',
  ])

  const replyTimers: Record<number, number> = {}

  function setSearchUsers(query: string) {
    chatState.searchUser = chatState.users.filter(
      (search) => search.name.toLowerCase().includes(query.toLowerCase()) && search.id !== 0
    )
  }

  function setActiveUser(user: User) {
    chatState.activeUser = user
  }

  const currentChat = computed(() => {
    const chat = chatState.chats.find((c) => c.id === chatState.activeUser.id)
    const user = chatState.users.find((u) => u.id === chatState.activeUser.id)
    return { ...user, chat }
  })

  function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  function addChat(userMessage: string) {
    const today = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    })

    const activeChat = chatState.chats.find((chat) => chat.id === chatState.activeUser.id)
    if (!activeChat) return

    const r = random(0, messages.value.length - 1)
    const botText = messages.value[r]
    const botName = activeChat.messages[0]?.name
    activeChat.messages.push({
      sender: 1,
      name: 'Theresa Webb',
      time: today.toLowerCase(),
      text: String(userMessage),
    })

    const userId = chatState.activeUser.id
    if (replyTimers[userId]) {
      clearTimeout(replyTimers[userId])
    }

    replyTimers[userId] = window.setTimeout(() => {
      activeChat.messages.push({
        sender: 0,
        name: botName,
        time: today.toLowerCase(),
        text: botText,
      })

      delete replyTimers[userId]
    }, 1000)
  }

  return {
    chatState,
    setSearchUsers,
    currentChat,
    setActiveUser,
    addChat,
  }
})
