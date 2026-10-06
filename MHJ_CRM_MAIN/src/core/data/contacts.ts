import type { Select } from "@/types/common";
import type { ContactSidebarList } from "@/types/contacts";

export const contactSidebarList: ContactSidebarList[] = [
  {
    id: 1,
    title: "Personal",
    value: "personal",
  },
  {
    id: 2,
    title: "Organization",
    value: "organization",
  },
  {
    id: 3,
    title: "Follow up",
  },
  {
    id: 4,
    title: "Favorites",
  },
  {
    id: 5,
    title: "Ideas",
  },
  {
    id: 6,
    title: "Important",
  },
  {
    id: 7,
    title: "Business",
  },
  {
    id: 8,
    title: "Holidays",
  },
];

export const contactTypes: Select[] = [
  {
    value: "mobile",
    label: "Mobile",
  },
  {
    value: "work",
    label: "Work",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const urlTypes: Select[] = [
  {
    value: "personal_web_address",
    label: "Personal Web Address",
  },
  {
    value: "company_web_address",
    label: "Company Web Address",
  },
  {
    value: "facebook_url",
    label: "Facebook URL",
  },
  {
    value: "twitter_url",
    label: "Twitter URL",
  },
];
