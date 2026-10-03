import type { Profile } from './common'

export interface DefaultDemo {
  title: string
  class?: string
  cards: Card[]
  addCard?: boolean
  newCardTitle?: string
}

export interface Card {
  id: number
  title: string
  userName: string
  userProfile?: string
  date: string
  taskPriority: string
  bannerImage?: string
  comments: number
  attachment: number
  members: Profile[]
}
