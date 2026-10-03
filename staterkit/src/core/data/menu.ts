import { routes } from "@/router/routes";
import { MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  // ─── GENERAL ─────────────────────────────────────────────────────────────
  {
    headTitle: "General",
    type: "headtitle",
  },
  {
    title: "Dashboard",
    icon: "home",
    type: "sub",
    active: false,
    menu: true,
    children: [
      {
        path: routes.Dashboards.Default,
        title: "Default",
        type: "link",
      },
      {
        path: routes.Dashboards.Ecommerce,
        title: "Ecommerce",
        type: "link",
      },
      {
        path: routes.Dashboards.Project,
        title: "Project",
        type: "link",
      },
    ],
  },

  // ─── APPLICATION ─────────────────────────────────────────────────────────
  {
    headTitle: "Application",
    type: "headtitle",
  },
  {
    title: "Project",
    icon: "layers",
    type: "sub",
    active: false,
    menu: true,
    children: [
      {
        path: routes.Project.ProjectList,
        title: "Project List",
        type: "link",
      },
      {
        path: routes.Project.ProjectDetails,
        title: "Project Details",
        type: "link",
      },
      {
        path: routes.Project.ProjectCreate,
        title: "Create Project",
        type: "link",
      },
    ],
  },
  {
    path: routes.App.KanbanBoard,
    title: "Kanban Board",
    icon: "trello",
    type: "link",
    active: false,
  },
  {
    path: routes.App.Hospital,
    title: "Hospital",
    icon: "activity",
    type: "link",
    active: false,
  },
  {
    path: routes.App.Task,
    title: "Task",
    icon: "check-square",
    type: "link",
    active: false,
  },

  // ─── USERS ───────────────────────────────────────────────────────────────
  {
    headTitle: "Users",
    type: "headtitle",
  },
  {
    title: "Users",
    icon: "user",
    type: "sub",
    active: false,
    menu: true,
    children: [
      {
        path: routes.User.UserProfile,
        title: "User Profile",
        type: "link",
      },
      {
        path: routes.User.AddUser,
        title: "Add User",
        type: "link",
      },
      {
        path: routes.User.UserList,
        title: "User List",
        type: "link",
      },
      {
        path: routes.User.UserCards,
        title: "User Cards",
        type: "link",
      },
      {
        path: routes.User.Roles,
        title: "Roles & Permission",
        type: "link",
      },
    ],
  },

  // ─── PAGES ───────────────────────────────────────────────────────────────
  {
    headTitle: "Pages",
    type: "headtitle",
  },
  {
    title: "Sample Pages",
    icon: "file",
    type: "sub",
    active: false,
    menu: true,
    children: [
      {
        path: routes.Pages.SamplePages1,
        title: "SamplePages1",
        type: "link",
      },
      {
        path: routes.Pages.SamplePages2,
        title: "SamplePages2",
        type: "link",
      },
    ],
  },
  {
    path: routes.Pages.SamplePage,
    title: "Sample",
    icon: "file-text",
    type: "link",
    active: false,
  },
];
