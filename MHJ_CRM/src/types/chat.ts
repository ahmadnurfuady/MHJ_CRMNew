export interface User {
  id: number
  name: string
  image: string
  status: string
  active: string
  icon: string
  time?: string
  badge?: number
  statusClass?: string
}

export interface Message {
  sender: number
  time: string
  text: string
  name?: string
}

export interface Chat {
  id: number
  users: number[]
  lastMessageTime: string
  messages: Message[]
}

export interface ContactItem {
  id: number
  title: string
  children: ContactChild[]
}

export interface ContactChild {
  id?: number
  image?: string
  name: string
  number: string
  textClass?: string
  bgClass?: string
  text?: string
}

export interface Edit {
  id: number
  title: string
}

export interface Group {
  id: number
  image: string
}

export interface ChatState {
  users: User[]
  chats: Chat[]
  activeUser: User
  searchUser: User[]
}
