export interface TodoSidebarItem {
  id: number
  badgeClass: string
  icon: string
  title: string
  pillClass?: string
  badge?: string
}
export interface TodoItem {
  id: number
  title: string
  delete: boolean
  status?: string
  badgeClass?: string
  priority?: string
  date?: string
}
