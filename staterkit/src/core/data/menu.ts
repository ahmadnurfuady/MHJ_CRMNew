import { routes } from "@/router/routes";
import { MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  {
    headTitle: "General",
    type: "headtitle",
  },
  {
    path: routes.Dashboard.Crm,
    title: "Dashboard CRM",
    icon: "pie-chart",
    type: "link",
    active: false,
  },
  {
    title: "Sample Pages",
    icon: "home",
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
    title: "sample",
    icon: "file",
    type: "link",
    active: false,
  },
  {
    title: "Raise Support",
    path: "https://support.pixelstrap.com/portal/en/signin",
    icon: "support-tickets",
    type: "link",
    active: false,
  },
];
