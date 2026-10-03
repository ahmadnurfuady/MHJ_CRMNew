export interface User {
  name: string
  userProfile: string
  userEmail: string
  addresses: Address[]
}

export interface Info {
  id: number
  icon: string
  label: string
  value: string
}

export interface Address {
  id: number
  address: string
  pinCode: string
  contact: string
  tag?: string
  radioId?: string
}

export interface Users {
  id: number
  userName: string
  name: string
  userProfile: string
  designation: string
  bio: string
  email: string
  DOB: string
  contactNumber: string
  location: string
  post: number
  followers: number
  following: number
  role: string
  status: string
  creationDate: string
}

export interface Notification {
  id: number
  userProfile: string
  title: string
  description: string
  time?: string
  date: string
}

export interface Role {
  id: number
  role: string
  creationDate: string
  lastUpdateDate: string
  status: string
}

export interface Module {
  id: number
  name: string
  isChecked: boolean
  modulePermission: Permission[]
}

export interface Permission {
  id: number
  isChecked: boolean
  permissionId: number
  name: string
}

export interface Links {
  id: number
  icon: string
  url: string
  title?: string
}
