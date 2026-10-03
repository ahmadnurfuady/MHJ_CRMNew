export interface BasicTable {
  id: number
  firstName: string
  lastName: string
  userName: string
  designation: string
  company: string
  language: string
  country: string
  class: string
  borderClass: string
  imageUrl: string
}

export interface Student {
  id: string
  rollNumber: string
  studentName: string
  standard: string
  grade: string
  percentage: string
  class?: string
}

export interface InverseTable {
  id: number
  firstName: string
  lastName: string
  office: string
  position: string
  salary: string
  joinDate: string
  age: number
  [key: string]: string | number
}

export interface HoverAbleTable {
  id: number
  status: string
  class: string
  signalName: string
  security: string
  stage: string
  schedule: number
  teamLead: string
}

export interface InverseTableBackground {
  id: number
  firstName: string
  lastName: string
  company: string
  creditVolume: string
  userName: string
  role: string
  country: string
}

export interface Caption {
  id: number
  employeeName: string
  email: string
  experience: string
  sex: string
  contactNumber: string
  age: number
}

export interface TableHeadOption {
  id: number
  firstName: string
  lastName: string
  userName: string
}

export interface StripedRow {
  id: number
  dessert: string
  calories: number
  fat: number
  price: number
}

export interface StripedColumn {
  id: number
  name: string
  age: number
  city: string
  occupation: string
}

export interface ActiveTable {
  productId: ActiveTableValue
  productName: ActiveTableValue
  category: ActiveTableValue
  price: ActiveTableValue
}

export interface ActiveTableValue {
  value: string
  active: boolean
}

export interface TableBorder {
  isbn: string
  title: string
  author: string
  yearPublished: number
}

export interface TableWithoutBorder {
  date: string
  exerciseType: string
  duration: number
  caloriesBurned: number
}

export interface VerticalAlignment {
  heading1: string
  heading2: string
  heading3: string
  heading4: string
}

export interface AnatomyTable {
  version: string
  class: string
  releaseDate: string
  newFeatures: string
  bugFixes: string
}

export interface TableFoot {
  productId: string
  productName: string
  category: string
  price: string
}

export interface TableGroupDivider {
  id: number
  firstName: string
  lastName?: string
  handle: string
}

export interface BreakpointTable {
  id: number
  name: string
  orderId: string
  price: number
  quantity: number
  total: string
}

export interface ResponsiveTable {
  id: number
  task: string
  email: string
  phone: string
  assign: string
  date: string
  price: number
  status: string
  progress: string
  class: string
}

export interface SizingTable {
  id: number
  employeeName: string
  date: string
  status: string
  hours: number
  performance: string
  class: string
}

export interface CustomTable {
  id: number
  filmTitle: string
  released: number
  studio: string
  budget: string
  domesticGross: string
}

export interface DashedBorderTable {
  id: number
  className: string
  type: string
  hours: string
  trainer: string
  spots: number
}

export interface NestingTable {
  date: string
  studentName: string
  status: string
  class: string
  notes: string
  courses?: Courses[]
  expanded?: boolean
}

export interface Courses {
  courseName: string
  instructor: string
  day: string
  time: string
}
