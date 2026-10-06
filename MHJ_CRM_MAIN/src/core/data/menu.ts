import { routes } from '@/router/routes'
import { MenuItem } from '@/types/menu'

// Sidebar sementara: hanya menu yang dipakai dari template (Dashboards, Project, Users, Contacts, Rumah Sakit, Tasks).
export const menu: MenuItem[] = [
  {
    headTitle: 'General',
    type: 'headtitle',
  },
  {
    title: 'Dashboards',
    icon: 'home',
    type: 'sub',
    active: false,
    isPinned: false,
    badgeType: 'primary',
    children: [
      {
        path: routes.Dashboards.Default,
        title: 'Default',
        type: 'link',
      },
      {
        path: routes.Dashboards.ECommerce,
        title: 'Ecommerce',
        type: 'link',
      },
      {
        path: routes.Dashboards.Project,
        title: 'Project ',
        type: 'link',
      },
    ],
  },
  {
    headTitle: 'Applications',
    type: 'headtitle',
  },
  {
    title: 'project',
    icon: 'project',
    type: 'sub',
    isPinned: false,
    menu: true,
    active: false,
    children: [
      {
        path: routes.Project.ProjectDetails,
        title: 'Project Details',
        badgeType: 'warning',
        badge: 'New',
        type: 'link',
      },
      {
        path: routes.Project.ProjectList,
        title: 'Project List',
        type: 'link',
      },
      {
        path: routes.Project.ProjectCreate,
        title: 'Create new',
        type: 'link',
      },
    ],
  },
  {
    title: 'Users',
    icon: 'user',
    type: 'sub',
    active: false,
    isPinned: false,
    children: [
      { path: routes.User.UserProfile, title: 'User Profile', type: 'link' },
      { path: routes.User.AddUser, title: 'Add User', type: 'link' },
      { path: routes.User.UserList, title: 'User List', type: 'link' },
      {
        path: routes.User.UserCards,
        title: 'User Cards',
        type: 'link',
      },
      {
        path: routes.User.Roles,
        title: 'Roles & Permission',
        type: 'link',
      },
    ],
  },
  {
    title: 'Master Data',
    icon: 'board',
    type: 'sub',
    active: false,
    isPinned: false,
    children: [
      { path: routes.Master.Jabatan, title: 'Jabatan', type: 'link' },
      { path: routes.Master.Cabang, title: 'Cabang', type: 'link' },
      { path: routes.Master.Devisi, title: 'Devisi', type: 'link' },
      { path: routes.Master.TipeMarketing, title: 'Tipe Marketing', type: 'link' },
    ],
  },
  {
    path: routes.App.Contacts,
    title: 'Contacts',
    icon: 'contact',
    type: 'link',
    isPinned: false,
    bookmark: true,
  },
  {
    path: routes.App.RumahSakit,
    title: 'Rumah Sakit',
    icon: 'contact',
    type: 'link',
    isPinned: false,
  },
  {
    path: routes.App.Task,
    title: 'Tasks',
    icon: 'task',
    isPinned: false,
    active: false,
    type: 'link',
  },
]
