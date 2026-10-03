export interface Task {
  id?: number
  title?: string
  value?: string
  type?: string
  tag?: boolean
  data?: TaskDetails[]
}

export interface TaskDetails {
  id: number
  title: string
  subtitle: string
  description: string
}

export interface TaskData {
  task: Task[]
  activeTask: Task
  formSubmitted: boolean
  title: string
  description: string
  subtitle: string
  errors: string[] | number[]
}
