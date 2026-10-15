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
  kind?: TaskKind
  category?: string
  status?: string
  type?: string
  priority?: string
  progress?: number
  assignedId?: number | null
  owner?: string
  projectId?: number | null
  projectName?: string
  hospitalId?: number
  hospital?: string
  contactId?: number
  contact?: string
  scheduledAt?: string
  dueDate?: string
  divisions?: string[]
  products?: string[]
  unrelatedProduct?: boolean
  stageFrom?: string
  stageTo?: string
  photoName?: string
  photoUrl?: string
  latitude?: number
  longitude?: number
  locationAccuracy?: number
  locationAddress?: string
  contactPhone?: string
  serialNumber?: string
  createdAt?: string
}

export type TaskKind = 'sales' | 'app-specialist'

export interface TaskPayload {
  taskType: TaskKind
  title: string
  category: string
  owner: string
  assignedId?: number | null
  projectId: number | null
  projectName: string
  hospital: string
  contact: string
  contactPhone: string
  scheduledAt: string
  divisions: string[]
  products: string[]
  unrelatedProduct: boolean
  stageFrom: string
  stageTo: string
  notes: string
  photo: File | null
  photoName: string
  latitude: number
  longitude: number
  locationAccuracy: number
  locationAddress: string
  serialNumber: string
}

export interface TaskUpdatePayload extends TaskPayload {
  id: number
}

/** @deprecated Gunakan TaskPayload untuk task Sales maupun App Specialist. */
export type SalesTaskPayload = TaskPayload

export interface TaskData {
  task: Task[]
  activeTask: Task
  formSubmitted: boolean
  title: string
  description: string
  subtitle: string
  errors: string[] | number[]
}
