export interface CourseFilter {
  id: number
  title: string
  button?: string
  class: string
  search?: boolean
  details: filterDetails[]
}

export interface filterDetails {
  id: number
  title?: string
  subTitle?: string
  class: string
  createdBy?: string
  badge?: boolean
  date?: number
  month?: string
  rating?: boolean
  rate?: number
  type?: string
  item?: Item[]
}

export interface Item {
  id: number
  title: string
  checkId?: string
  class?: string
  badge: boolean
  badgeText?: number
}

export interface Comments {
  image: string
  name: string
  designation: string
  hits: number
  comments: number
  description: string
  reply?: boolean
}

export interface CourseList {
  id: number
  image: string
  date: string
  year: string
  title: string
  createdBy: string
  hits: string
  description?: string
}
