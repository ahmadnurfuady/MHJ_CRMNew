export interface EmailSidebar {
  id: number
  title?: string
  value: string
  icon?: string
  count?: number
}

export interface Email {
  id: number
  userName: string
  userProfile?: string
  emailTitle: string
  description: string
  tag?: string
  time: string
  date?: string
  isFavorite: boolean
  isDraft: boolean
  isTrash: boolean
  isRead: boolean
  isSend: boolean
  emailType: string
  email: string
}

export interface MailState {
  activeTab: string
  emailType: string
  emailList: Email[]
  sidebar: EmailSidebar[]
  isOpenMail: boolean
  currentMailDetails?: Email
}
