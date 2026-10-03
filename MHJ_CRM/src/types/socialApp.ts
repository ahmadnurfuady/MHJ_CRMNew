import type { Profile, Tabs } from './common'

export interface AccordionTabs {
  id: number
  title: string
  value: string
  class: string
}

export interface Friend {
  id: number
  name: string
  profile: string
  email: string
  status: string
  isFollower: boolean
  isFollowing: boolean
  lastActivityTime?: string
  userProfile?: string
}

export interface UserPost {
  id: number
  userName: string
  userProfile: string
  postDate: string
  postImage: string
  description: string
  comment: number
  share: number
  comments: Comments[]
}

export interface Comments {
  id: number
  userName: string
  userProfile: string
  comment: string
  time: string
  isReply?: boolean
}

export interface Photos {
  id: number
  userName: string
  description: string
  srcUrl: string
  previewUrl: string
  likes: string
  comment: number
}

export interface MyProfile {
  name: string
  profile: string
  designation: string
  introduction: string
  message: number
  notification: number
  totalLikes: number
  thisWeekLikes: number
  postImage: string
  likedBy: Profile[]
  socialNetworks: SocialNetwork[]
  latestPhotos: LatestPhoto[]
  hobbiesInterest: Hobbies[]
  eductionEmployment: Eduction[]
  activityLog: ActivityLog[]
}

export interface SocialNetwork {
  icon: string
  platformClass: string
  platformName: string
}

export interface LatestPhoto {
  image: string
}

export interface Hobbies {
  id: number
  title: string
  description: string
}

export interface Eduction {
  id: number
  title: string
  year: string
  description: string
}

export interface ActivityLog {
  icon: string
  activity: string
  date: string
}
export interface AppState {
  tabs: Tabs[]
  profile: MyProfile
  userProfile: MyProfile
  activeTab: string
}
