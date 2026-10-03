export interface Photos {
  id?: number
  title?: string
  description?: string
  image?: string
}

export interface TabItem {
  href: string
  active?: string
  icon: string
  title: string
  id: string
}
export interface DataItem {
  id: number
  title: string
  description: string
  rating?: number
  link: string
}
export interface VideoItem {
  id: number
  title: string
  value: boolean
  children: {
    youtube: string
    link: string
    title: string
  }[]
}
