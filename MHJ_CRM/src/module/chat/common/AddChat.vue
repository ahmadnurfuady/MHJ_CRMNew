<template>
  <form class="msger-inputarea clearfix" @submit.prevent="addChats">
    <div class="dropdown-form dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="icon-plus"></i>
      <div class="chat-icon dropdown-menu dropdown-menu-start">
        <div class="dropdown-item mb-2">
          <vue-feather class="feather" type="camera" />
        </div>
        <div class="dropdown-item">
          <vue-feather class="feather" type="paperclip" />
        </div>
      </div>
    </div>

    <input
      class="msger-input two uk-textarea"
      placeholder="Type Message here.."
      v-model.trim="text"
      @keyup.enter="addChats"
    />

    <EmojiChat @selectEmoji="appendEmoji" />

    <button type="submit" class="msger-send-btn">
      <i class="fa fa-location-arrow"></i>
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useChat } from '@/store/chat'

const EmojiChat = defineAsyncComponent(() => import('@/module/chat/common/EmojiChat.vue'))

const store = useChat()
const { addChat } = store
const text = ref('')

function appendEmoji(emoji: string) {
  text.value += emoji
}

function addChats() {
  if (!text.value) return
  addChat(text.value)
  text.value = ''
}
</script>
