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
  kind?: 'sales'
  category?: string
  owner?: string
  projectId?: number | null
  projectName?: string
  hospital?: string
  contact?: string
  scheduledAt?: string
  divisions?: string[]
  products?: string[]
  unrelatedProduct?: boolean
  stageFrom?: string
  stageTo?: string
  photoName?: string
  latitude?: number
  longitude?: number
  locationAccuracy?: number
  createdAt?: string
}

export interface SalesTaskPayload {
  title: string
  category: string
  owner: string
  projectId: number | null
  projectName: string
  hospital: string
  contact: string
  scheduledAt: string
  divisions: string[]
  products: string[]
  unrelatedProduct: boolean
  stageFrom: string
  stageTo: string
  notes: string
  photoName: string
  latitude: number
  longitude: number
  locationAccuracy: number
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
