export interface FaqQuestionAnswer {
  id: number
  headerTitle?: string
  details: Details[]
}

export interface Details {
  id: number
  title: string
  description: string
}

export interface Navigation {
  section: NavigationSection[]
}

export interface NavigationSection {
  icon: string
  title: string
  badge?: boolean
  badgeText?: number
}
