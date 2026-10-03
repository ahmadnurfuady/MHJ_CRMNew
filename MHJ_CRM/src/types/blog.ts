export interface Comments {
  id?: number
  image: string
  name: string
  designation: string
  hits: number
  comments: number
  description: string
  reply?: boolean
}

export interface Blog {
  id: number
  image: string
  date: string
  year: string
  comment?: number
  hits: string
  title: string
  description?: string
  createdBy?: string
}

export interface AddBlogCategory {
  value: string
  label: string
}

export interface BlogType {
  id: string
  title: string
  checked?: boolean
}

export interface Details {
  image: string
  date: number
  year: string
  createdBy: string
  hits: string
  comment: number
  text: string
  description: Description[]
}

export interface Description {
  title: string
}
