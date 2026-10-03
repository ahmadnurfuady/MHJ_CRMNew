<template>
  <div class="open-emoji" @click="toggleEmojiPicker">
    <div class="second-btn uk-button"></div>
  </div>
  <div class="emoji_picker custom-scrollbar shadow" v-if="show">
    <div class="picker_container">
      <div class="category p-0" v-for="category in categories" :key="`category_${category}`">
        <span>{{ category }}</span>
        <div class="emojis_container">
          <button
            @click.prevent="handleEmojiClick(emojiItem)"
            v-for="(emojiItem, index) in emojiByCategory[category]"
            :key="`emoji_${index}`"
          >
            {{ emojiItem }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { emoji } from '@/core/data/emoji'

const show = ref<boolean>(false)
const emit = defineEmits(['selectEmoji'])

const categories = computed(() => {
  return Object.keys(emoji)
})

const emojiByCategory = computed(() => {
  const result: Record<string, string[]> = {}
  categories.value.forEach((category) => {
    result[category] = Object.values(emoji[category])
  })
  return result
})

function handleEmojiClick(emoji: string) {
  show.value = false
  emit('selectEmoji', emoji)
}

function toggleEmojiPicker() {
  show.value = !show.value
}
</script>
