import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const Body = () => import("@/layout/Body.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ─── Auth standalone pages (tanpa sidebar) ───────────────────────────
    {
      path: '/auth',
      component: () => import('@/components/layout/auth/Auth.vue'),
      children: [
        {
          path: 'login',
          name: 'LoginPage',
          component: () => import('@/components/layout/auth/LoginPage.vue'),
        },
      ],
    },
    {
      path: routes.Auth.LoginSimple,
      name: 'LoginSimple',
      component: () => import('@/pages/authentication/LoginSimple.vue'),
      meta: { title: 'Login | MHJ CRM' },
    },
    {
      path: routes.Auth.LoginBgImage,
      name: 'LoginBgImage',
      component: () => import('@/pages/authentication/LoginBgImage.vue'),
      meta: { title: 'Login | MHJ CRM' },
    },
    {
      path: routes.Auth.LoginBgImageTwo,
      name: 'LoginBgImageTwo',
      component: () => import('@/pages/authentication/LoginBgImageTwo.vue'),
      meta: { title: 'Login | MHJ CRM' },
    },
    {
      path: routes.Auth.LoginValidation,
      name: 'LoginValidation',
      component: () => import('@/pages/authentication/LoginValidation.vue'),
      meta: { title: 'Login Validation | MHJ CRM' },
    },
    {
      path: routes.Auth.LoginTooltip,
      name: 'LoginTooltip',
      component: () => import('@/pages/authentication/LoginTooltip.vue'),
      meta: { title: 'Login Tooltip | MHJ CRM' },
    },
    {
      path: routes.Auth.LoginSweetAlert,
      name: 'LoginSweetAlert',
      component: () => import('@/pages/authentication/LoginSweetAlert.vue'),
      meta: { title: 'Login | MHJ CRM' },
    },
    {
      path: routes.Auth.RegisterSimple,
      name: 'RegisterSimple',
      component: () => import('@/pages/authentication/RegisterSimple.vue'),
      meta: { title: 'Register | MHJ CRM' },
    },
    {
      path: routes.Auth.RegisterBgImage,
      name: 'RegisterBgImage',
      component: () => import('@/pages/authentication/RegisterBgImage.vue'),
      meta: { title: 'Register | MHJ CRM' },
    },
    {
      path: routes.Auth.RegisterBgImageTwo,
      name: 'RegisterBgImageTwo',
      component: () => import('@/pages/authentication/RegisterBgImageTwo.vue'),
      meta: { title: 'Register | MHJ CRM' },
    },
    {
      path: routes.Auth.RegisterWizard,
      name: 'RegisterWizard',
      component: () => import('@/pages/authentication/RegisterWizard.vue'),
      meta: { title: 'Register Wizard | MHJ CRM' },
    },
    {
      path: routes.Auth.AccountRestricted,
      name: 'AccountRestricted',
      component: () => import('@/pages/authentication/AccountRestricted.vue'),
      meta: { title: 'Account Restricted | MHJ CRM' },
    },
    {
      path: routes.Auth.UnlockUser,
      name: 'UnlockUser',
      component: () => import('@/pages/authentication/UnlockUser.vue'),
      meta: { title: 'Unlock User | MHJ CRM' },
    },
    {
      path: routes.Auth.ForgotPassword,
      name: 'ForgotPassword',
      component: () => import('@/pages/authentication/ForgotPassword.vue'),
      meta: { title: 'Forgot Password | MHJ CRM' },
    },
    {
      path: routes.Auth.ResetPassword,
      name: 'ResetPassword',
      component: () => import('@/pages/authentication/ResetPassword.vue'),
      meta: { title: 'Reset Password | MHJ CRM' },
    },
    {
      path: routes.Auth.Maintenance,
      name: 'Maintenance',
      component: () => import('@/pages/authentication/Maintenance.vue'),
      meta: { title: 'Maintenance | MHJ CRM' },
    },

    // ─── Default redirect ─────────────────────────────────────────────────
    {
      path: '',
      redirect: routes.Dashboards.Default,
    },

    // ─── Main layout (sidebar + header) ──────────────────────────────────
    {
      path: '/',
      component: Body,
      children: [

        // ── Sample Pages ─────────────────────────────────────────────────
        {
          path: routes.Pages.SamplePages1,
          name: "SamplePage1",
          component: () => import("@/pages/samplePage/SamplePage1.vue"),
          meta: {
            mainTitle: "SamplePage1",
            title: "SamplePage1 | MHJ CRM",
            breadcrumb: [{ text: "Pages", subText: "SamplePage1" }],
          },
        },
        {
          path: routes.Pages.SamplePages2,
          name: "SamplePage2",
          component: () => import("@/pages/samplePage/SamplePage2.vue"),
          meta: {
            mainTitle: "SamplePage2",
            title: "SamplePage2 | MHJ CRM",
            breadcrumb: [{ text: "Pages", subText: "SamplePage2" }],
          },
        },
        {
          path: routes.Pages.SamplePage,
          name: "SamplePage",
          component: () => import("@/pages/sample/Sample.vue"),
          meta: {
            mainTitle: "SamplePage",
            title: "Sample | MHJ CRM",
            breadcrumb: [{ text: "Pages", subText: "SamplePage" }],
          },
        },

        // ── Dashboard ────────────────────────────────────────────────────
        {
          path: routes.Dashboards.Default,
          name: 'DashboardDefault',
          component: () => import('@/pages/dashboard/Default.vue'),
          meta: {
            mainTitle: 'Dashboard',
            title: 'Dashboard | MHJ CRM',
            breadcrumb: [{ text: 'Dashboard', subText: 'Default' }],
          },
        },
        {
          path: routes.Dashboards.Ecommerce,
          name: 'DashboardEcommerce',
          component: () => import('@/pages/dashboard/Ecommerce.vue'),
          meta: {
            mainTitle: 'Ecommerce Dashboard',
            title: 'Ecommerce Dashboard | MHJ CRM',
            breadcrumb: [{ text: 'Dashboard', subText: 'Ecommerce' }],
          },
        },
        {
          path: routes.Dashboards.Project,
          name: 'DashboardProject',
          component: () => import('@/pages/dashboard/Project.vue'),
          meta: {
            mainTitle: 'Project Dashboard',
            title: 'Project Dashboard | MHJ CRM',
            breadcrumb: [{ text: 'Dashboard', subText: 'Project' }],
          },
        },

        // ── Project ──────────────────────────────────────────────────────
        {
          path: routes.Project.ProjectCreate,
          name: 'ProjectCreate',
          component: () => import('@/pages/project/ProjectCreate.vue'),
          meta: {
            mainTitle: 'Project Create',
            title: 'Project Create | MHJ CRM',
            breadcrumb: [{ text: 'Project', subText: 'Project Create' }],
          },
        },
        {
          path: routes.Project.ProjectDetails,
          name: 'ProjectDetails',
          component: () => import('@/pages/project/ProjectDetails.vue'),
          meta: {
            mainTitle: 'Project Details',
            title: 'Project Details | MHJ CRM',
            breadcrumb: [{ text: 'Project', subText: 'Project Details' }],
          },
        },
        {
          path: routes.Project.ProjectList,
          name: 'ProjectList',
          component: () => import('@/pages/project/ProjectList.vue'),
          meta: {
            mainTitle: 'Project List',
            title: 'Project List | MHJ CRM',
            breadcrumb: [{ text: 'Project', subText: 'Project List' }],
          },
        },

        // ── Kanban Board ─────────────────────────────────────────────────
        {
          path: routes.App.KanbanBoard,
          name: 'KanbanBoard',
          component: () => import('@/pages/kanbanBoard/KanbanBoard.vue'),
          meta: {
            mainTitle: 'Kanban Board',
            title: 'Kanban Board | MHJ CRM',
            breadcrumb: [{ text: 'Apps', subText: 'Kanban Board' }],
          },
        },

        // ── Contacts ─────────────────────────────────────────────────────
        {
          path: routes.App.Contacts,
          name: 'Contacts',
          component: () => import('@/pages/contacts/Contacts.vue'),
          meta: {
            mainTitle: 'Contacts',
            title: 'Contacts | MHJ CRM',
            breadcrumb: [{ text: 'Apps', subText: 'Contacts' }],
          },
        },

        // ── Hospital ─────────────────────────────────────────────────────
        {
          path: routes.App.Hospital,
          name: 'Hospital',
          component: () => import('@/pages/hospital/Hospital.vue'),
          meta: {
            mainTitle: 'Hospital',
            title: 'Hospital | MHJ CRM',
            breadcrumb: [{ text: 'Apps', subText: 'Hospital' }],
          },
        },

        // ── Task ─────────────────────────────────────────────────────────
        {
          path: routes.App.Task,
          name: 'Task',
          component: () => import('@/pages/task/Task.vue'),
          meta: {
            mainTitle: 'Task',
            title: 'Task | MHJ CRM',
            breadcrumb: [{ text: 'Apps', subText: 'Task' }],
          },
        },

        // ── User ─────────────────────────────────────────────────────────
        {
          path: routes.User.UserProfile,
          name: 'UserProfile',
          component: () => import('@/pages/user/UserProfile.vue'),
          meta: {
            mainTitle: 'User Profile',
            title: 'User Profile | MHJ CRM',
            breadcrumb: [{ text: 'Users', subText: 'User Profile' }],
          },
        },
        {
          path: routes.User.AddUser,
          name: 'AddUser',
          component: () => import('@/pages/user/AddUser.vue'),
          meta: {
            mainTitle: 'Add User',
            title: 'Add User | MHJ CRM',
            breadcrumb: [{ text: 'Users', subText: 'Add User' }],
          },
        },
        {
          path: routes.User.UserList,
          name: 'UserList',
          component: () => import('@/pages/user/UserList.vue'),
          meta: {
            mainTitle: 'User List',
            title: 'User List | MHJ CRM',
            breadcrumb: [{ text: 'Users', subText: 'User List' }],
          },
        },
        {
          path: routes.User.UserCards,
          name: 'UserCards',
          component: () => import('@/pages/user/UserCards.vue'),
          meta: {
            mainTitle: 'User Cards',
            title: 'User Cards | MHJ CRM',
            breadcrumb: [{ text: 'Users', subText: 'User Cards' }],
          },
        },
        {
          path: routes.User.Roles,
          name: 'RolesPermission',
          component: () => import('@/pages/user/RolesPermission.vue'),
          meta: {
            mainTitle: 'Roles & Permission',
            title: 'Roles & Permission | MHJ CRM',
            breadcrumb: [{ text: 'Users', subText: 'Roles & Permission' }],
          },
        },
      ],
    },

    // ─── Fallback ─────────────────────────────────────────────────────────
    {
      path: '/:pathMatch(.*)*',
      redirect: routes.Dashboards.Default,
    },
  ],
});

// ─── Navigation guard ─────────────────────────────────────────────────────────
router.beforeEach((to, _from, next) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title;
  }
  next(); // Sementara allow semua akses (aktifkan auth guard setelah sistem login siap)
});

export default router;
