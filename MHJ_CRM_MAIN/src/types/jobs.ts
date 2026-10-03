import { Ref } from 'vue'
import type { Select, SelectField } from './common'

export interface jobFilter {
  id: number
  title: string
  button: string
  class?: string
  search?: boolean
  location?: boolean
  details: filterDetails[]
}

export interface filterDetails {
  id: number
  title: string
  checkId: string
  badge: boolean
  badgeText?: number
  countryCode?: string
}

export interface JobCard {
  id: number
  rating: number
  image: string
  title?: string
  subTitle: string
  description?: string
  tag?: boolean
  tagTitle?: string
  ribbon?: boolean
  ribbonIcon?: string
  time?: string
  class?: string
}

export interface JobDetails {
  image: string
  mainTitle: string
  subtitle: string
  rating: number
  sections: Sections[]
}
export interface Sections {
  title: string
  content: Content[]
}
export interface Content {
  description: string
}

export interface Candidate {
  id: number
  img: string
  class: string
  name: string
  label: string
  projects: string
  designation: string
  salary: string
  experience: string
  education: EducationDetails[] | string
  skills: Skill[] | string
}

export interface EducationDetails {
  degree: string
}

export interface Skill {
  name: string
  class: string
}

export interface SelectCandidate {
  title: string
  modalValue: Ref<SelectField>
  items: Select[]
}
export interface jobFilterCompany {
  id: number
  title: string
  details: filterDetailsCompany[]
}

export interface filterDetailsCompany {
  id: number
  title: string
  checkId: string
  rating?: number
  badge: boolean
  badgeText?: string
}

export interface CompanyDetails {
  id: number
  icon: string
  name: string
  rating: number
  reviews: string
  category: string
  description: string
  jobsPosted: string
}
