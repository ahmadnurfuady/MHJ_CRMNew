import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const Body = () => import("@/layout/Body.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      redirect: routes.Pages.SamplePages1,
    },
    {
      path: "/",
      component: Body,
      children: [
        {
          path: routes.Dashboard.Crm,
          name: "CrmDashboard",
          component: () => import("@/pages/dashboard/CrmDashboard.vue"),
          meta: {
            mainTitle: "Dashboard CRM",
            title: "Dashboard CRM | MHJ Medika",
            hideBreadcrumb: true,
          },
        },
        {
          path: routes.Pages.SamplePages1,
          name: "SamplePage1",
          component: () => import("@/pages/samplePage/SamplePage1.vue"),
          meta: {
            mainTitle: "SamplePage1",
            title: "SamplePage1 | Riho - Premium Vue Admin Template",
            breadcrumb: [{ text: "Pages", subText: "SamplePage1" }],
          },
        },
        {
          path: routes.Pages.SamplePages2,
          name: "SamplePage2",
          component: () => import("@/pages/samplePage/SamplePage2.vue"),
          meta: {
            mainTitle: "SamplePage2",
            title: "SamplePage2 | Riho - Premium Vue Admin Template",
            breadcrumb: [{ text: "Pages", subText: "SamplePage2" }],
          },
        },
        {
          path: routes.Pages.SamplePage,
          name: "SamplePage",
          component: () => import("@/pages/sample/Sample.vue"),
          meta: {
            mainTitle: "SamplePage",
            title: "Pages | Riho - Premium Vue Admin Template",
            breadcrumb: [{ text: "Pages", subText: "SamplePage" }],
          },
        },
      ],
    },
  ],
});

export default router;
