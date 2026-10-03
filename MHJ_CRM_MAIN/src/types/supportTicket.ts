export interface SupportDB {
  id: number
  image: string
  name: string
  position: string
  salary: string
  office: string
  skill: string
  progress: string
  extNumber: number | string
  email: string
}

export interface TicketListStatus {
  statusTitle: string
  order: string
  profit: number
  loss: number
  level: string
  levelColor: string
}
