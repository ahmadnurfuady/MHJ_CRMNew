import { ApexOptions } from 'apexcharts'

export interface Widgets {
  title: string
  number: number
  class1: string
  class2: string
  icon: string
}

export interface TodayWork {
  task: string
  title: string
  assignedLabel: string
  assignedTo: string
  daysLeftLabel: string
  daysLeft: string | number
  badgeClass: string
  priority: string
}

export interface ProjectCard {
  id: number
  colClass?: string
  title: string
  client: string
  image: string
  daysLeft: number
  startDate: string
  endDate: string
  progress: number
  users: string[]
  extraUsers: number
  comments: number
  attachments: number
  lastMeeting: string
  nextMeeting: string
}

export interface Client {
  id: number
  name: string
  country: string
  email: string
  phone: string
  avatar: string
  statusColor?: string
}
